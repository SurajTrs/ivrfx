"use client";

import React, { useEffect, useMemo, useState } from "react";

type QuoteRow = {
  symbol: string;
  shortName: string;
  bid: number | null;
  ask: number | null;
  changePercent: number | null;
  price: number | null;
  currency: string | null;
};

const CATEGORIES: { key: string; label: string; symbols: string[] }[] = [
  {
    key: "most",
    label: "Most Traded",
    symbols: ["AAPL", "US100", "XAU/USD", "EUR/USD"], // US Tech 100 -> US100, Gold -> XAU/USD
  },
  {
    key: "commodities",
    label: "Commodities",
    symbols: ["XAU/USD", "XAG/USD", "WTI", "BRENT"],
  },
  {
    key: "indices",
    label: "Indices",
    symbols: ["US100", "US500", "DJI"],
  },
  {
    key: "crypto",
    label: "Crypto",
    symbols: ["BTC/USD", "ETH/USD", "LTC/USD"],
  },
  {
    key: "shares",
    label: "Shares",
    symbols: ["AAPL", "AMZN", "TSLA", "NVDA"],
  },
  {
    key: "forex",
    label: "Forex",
    symbols: ["EUR/USD", "GBP/USD", "USD/JPY", "USD/CAD"],
  },
];

function formatNumber(n: number | null) {
  if (n == null || !Number.isFinite(n)) return "-";
  const abs = Math.abs(n);
  const opts: Intl.NumberFormatOptions =
    abs >= 1000 ? { maximumFractionDigits: 2 } : { minimumFractionDigits: 4, maximumFractionDigits: 4 };
  return new Intl.NumberFormat(undefined, opts).format(n);
}

function Spark({ changePercent }: { changePercent: number | null }) {
  // Simple sparkline approximation based on change direction
  const points = useMemo(() => {
    const base = [2, 6, 4, 8, 5, 9, 7, 11, 8, 12];
    const dir = (changePercent ?? 0) >= 0 ? 1 : -1;
    return base.map((v, i) => `${i * 6},${14 - v * 0.9 * (dir > 0 ? 1 : 0.9)}`).join(" ");
  }, [changePercent]);
  const up = (changePercent ?? 0) >= 0;
  return (
    <svg width={64} height={16} viewBox="0 0 60 16" className={`mt-spark ${up ? "up" : "down"}`} aria-hidden>
      <polyline fill="none" strokeWidth="2" stroke={up ? "#22c55e" : "#ef4444"} points={points} />
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={up ? "#22c55e" : "#ef4444"} stopOpacity="0.25" />
          <stop offset="100%" stopColor={up ? "#22c55e" : "#ef4444"} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function MostTraded() {
  const [active, setActive] = useState(CATEGORIES[0].key);
  const [rows, setRows] = useState<QuoteRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const activeSymbols = useMemo(() => CATEGORIES.find((c) => c.key === active)?.symbols || [], [active]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        // Encode each symbol but keep comma separators so the server can split correctly
        const symbolsParam = activeSymbols.map((s) => encodeURIComponent(s)).join(",");
        const r = await fetch(`/api/quotes?symbols=${symbolsParam}`, { cache: "no-store" });
        const js = await r.json();
        if (!r.ok) throw new Error(js?.error || "Failed to load");
        const list: QuoteRow[] = (js?.quotes || []).map((q: any) => ({
          symbol: q.symbol,
          shortName: q.shortName,
          bid: q.bid,
          ask: q.ask,
          changePercent: q.changePercent,
          price: q.price,
          currency: q.currency,
        }));
        if (!cancelled) setRows(list);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to load");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    const id = setInterval(load, 10_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [activeSymbols.join(",")]);

  return (
    <section className="mt-wrap">
      <div className="mt-card">
        <aside className="mt-nav" aria-label="Most traded categories">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              className={`mt-nav-item ${active === c.key ? "active" : ""}`}
              onClick={() => setActive(c.key)}
              type="button"
            >
              <span className="mt-dot" aria-hidden />
              {c.label}
            </button>
          ))}
        </aside>
        <div className="mt-table">
          <h3 className="mt-title">Most Traded</h3>
          <div className="mt-head">
            <span>Asset</span>
            <span>Sell</span>
            <span>Buy</span>
            <span>Change (%)</span>
            <span />
          </div>
          <div className="mt-body">
            {loading && rows.length === 0 && (
              <div className="mt-empty">Loading quotes…</div>
            )}
            {error && rows.length === 0 && (
              <div className="mt-empty error">{error}</div>
            )}
            {rows.map((r) => {
              const change = r.changePercent ?? 0;
              const neg = change < 0;
              const sell = r.bid ?? r.price;
              const buy = r.ask ?? r.price;
              return (
                <div key={r.symbol} className="mt-row">
                  <div className="mt-asset">
                    <span className="mt-avatar" aria-hidden>{r.shortName?.[0] ?? "?"}</span>
                    <div className="mt-name">
                      <strong>{r.shortName || r.symbol}</strong>
                      <span className="mt-sym">{r.symbol}</span>
                    </div>
                  </div>
                  <div className="mt-sell"><span className="pill light">{formatNumber(sell)}</span></div>
                  <div className="mt-buy"><span className="pill light">{formatNumber(buy)}</span></div>
                  <div className={`mt-change ${neg ? "neg" : "pos"}`}>{(change).toFixed(2)}%</div>
                  <div className="mt-chart">
                    <Spark changePercent={r.changePercent} />
                  </div>
                  <div className="mt-cta">
                    <a className="mt-trade" href="#">Trade Now</a>
                  </div>
                </div>
              );
            })}
            {!loading && rows.length === 0 && !error && (
              <div className="mt-empty">No data</div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-cta-bottom">
        <a href="#" className="start-btn">Start Trading Now</a>
      </div>
    </section>
  );
}
