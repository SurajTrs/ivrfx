import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// Simple in-memory cache to smooth provider hiccups (per server instance)
const CACHE_TTL_MS = 3000; // serve fresh within 3s
const STALE_TTL_MS = 30000; // allow stale fallback up to 30s
const cache = new Map<string, { data: any; ts: number }>();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const symbols = searchParams.get("symbols");
    if (!symbols) {
      return new Response(JSON.stringify({ error: "symbols query is required" }), { status: 400 });
    }
    const list = symbols.split(",").map((s) => s.trim()).filter(Boolean);

    // Map UI-friendly aliases to Twelve Data compatible symbols.
    // We preserve the original alias for display while fetching using provider symbols.
    const aliasMap: Record<string, { provider: string; name?: string }> = {
      // Indices
      "US100": { provider: "NDX", name: "US Tech 100" },
      "US500": { provider: "SPX", name: "US 500" },
      "DJI": { provider: "DJI", name: "Dow Jones 30" },
      // Commodities
      "XAU/USD": { provider: "XAU/USD", name: "Gold" },
      "XAG/USD": { provider: "XAG/USD", name: "Silver" },
      "WTI": { provider: "WTI/USD", name: "WTI Crude" },
      "BRENT": { provider: "BRENT/USD", name: "Brent Crude" },
      // Crypto (Twelve Data uses pair notation)
      "BTC/USD": { provider: "BTC/USD", name: "Bitcoin" },
      "ETH/USD": { provider: "ETH/USD", name: "Ethereum" },
      "LTC/USD": { provider: "LTC/USD", name: "Litecoin" },
    };
    const mapped = list.map((alias) => ({
      alias,
      provider: aliasMap[alias]?.provider || alias,
      name: aliasMap[alias]?.name,
    }));

    // Twelve Data Forex integration
    const apiKey = process.env.TWELVEDATA_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Server misconfig: TWELVEDATA_API_KEY not set" }),
        { status: 500 }
      );
    }

    // Fetch per-symbol with retry/backoff to avoid batch failures/rate limit spikes
    const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

    const getFreshFromCache = (sym: string) => {
      const hit = cache.get(sym);
      if (hit && Date.now() - hit.ts <= CACHE_TTL_MS) return hit.data;
      return null;
    };
    const getStaleFromCache = (sym: string) => {
      const hit = cache.get(sym);
      if (hit && Date.now() - hit.ts <= STALE_TTL_MS) return hit.data;
      return null;
    };
    const setCache = (sym: string, data: any) => {
      cache.set(sym, { data, ts: Date.now() });
    };

    const fetchOne = async (sym: string) => {
      const cached = getFreshFromCache(sym);
      if (cached) return cached;
      const url = `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(sym)}&apikey=${encodeURIComponent(apiKey)}`;
      let lastErr: any = null;
      for (let i = 0; i < 3; i++) {
        try {
          const r = await fetch(url, { cache: "no-store", headers: { Accept: "application/json" } });
          if (!r.ok) {
            // Backoff on provider errors (e.g., 429/5xx)
            lastErr = new Error(`status ${r.status}`);
          } else {
            const js = await r.json();
            if (js?.status === "error") {
              lastErr = new Error(js?.message || "provider error");
            } else {
              setCache(sym, js);
              return js; // single-quote object
            }
          }
        } catch (e) {
          lastErr = e;
        }
        // Adaptive backoff: longer wait if likely rate limited
        const isRate = /429|rate/i.test(String(lastErr?.message || ""));
        await sleep((isRate ? 600 : 200) + i * (isRate ? 500 : 300));
      }
      // As a last resort, serve stale cache if available
      const stale = getStaleFromCache(sym);
      if (stale) return stale;
      throw lastErr || new Error("unknown provider error");
    };

    // Fetch sequentially to reduce provider rate spikes
    const results: PromiseSettledResult<any>[] = [];
    for (const m of mapped) {
      // small spacing between requests
      // eslint-disable-next-line no-await-in-loop
      const res = await Promise.resolve(fetchOne(m.provider)).then(
        (v) => ({ status: "fulfilled", value: v } as PromiseFulfilledResult<any>),
        (e) => ({ status: "rejected", reason: e } as PromiseRejectedResult)
      );
      results.push(res);
      // eslint-disable-next-line no-await-in-loop
      await sleep(120);
    }
    const rows: any[] = [];
    const errors: { symbol: string; error: string }[] = [];
    results.forEach((res, idx) => {
      const sym = mapped[idx].alias;
      if (res.status === "fulfilled") rows.push(res.value);
      else errors.push({ symbol: sym, error: (res.reason as Error)?.message || String(res.reason) });
    });

    const out = rows.map((q: any, idx: number) => {
      const display = mapped[idx];
      const sym: string = display.alias;
      const price = Number(q.price ?? q.close ?? NaN);
      const changePercent = q.percent_change != null ? Number(q.percent_change) : null;
      const bid = q.bid != null ? Number(q.bid) : null;
      const ask = q.ask != null ? Number(q.ask) : null;
      const currency = q.currency ?? (display.provider.includes("/") ? display.provider.split("/")[1] : (sym.includes("/") ? sym.split("/")[1] : null));
      const shortName = display.name ?? q.name ?? sym;
      return {
        symbol: sym,
        price: Number.isFinite(price) ? price : null,
        changePercent,
        bid,
        ask,
        currency,
        shortName,
      };
    });

    // If at least one succeeded, return partial data with 200 and include errors for transparency
    if (out.length > 0) {
      return new Response(JSON.stringify({ quotes: out, errors }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    // Try to serve stale cached data for the requested symbols
    const staleRows: any[] = [];
    for (const sym of list) {
      const stale = cache.get(sym);
      if (stale && Date.now() - stale.ts <= STALE_TTL_MS) staleRows.push(stale.data);
    }
    const staleOut = staleRows.map((q: any, idx: number) => {
      const display = mapped[idx];
      const sym: string = display.alias;
      const price = Number(q.price ?? q.close ?? NaN);
      const changePercent = q.percent_change != null ? Number(q.percent_change) : null;
      const bid = q.bid != null ? Number(q.bid) : null;
      const ask = q.ask != null ? Number(q.ask) : null;
      const currency = q.currency ?? (display.provider.includes("/") ? display.provider.split("/")[1] : (sym.includes("/") ? sym.split("/")[1] : null));
      const shortName = display.name ?? q.name ?? sym;
      return {
        symbol: sym,
        price: Number.isFinite(price) ? price : null,
        changePercent,
        bid,
        ask,
        currency,
        shortName,
      };
    });
    if (staleOut.length > 0) {
      return new Response(JSON.stringify({ quotes: staleOut, errors, stale: true }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    // Absolute failure with no data available
    return new Response(
      JSON.stringify({ quotes: [], errors, error: errors.map((e) => `${e.symbol}: ${e.error}`).join("; ") || "provider failure" }),
      { status: 200 }
    );
  } catch (e: any) {
    return new Response(JSON.stringify({ error: e?.message || "unknown error" }), { status: 500 });
  }
}
