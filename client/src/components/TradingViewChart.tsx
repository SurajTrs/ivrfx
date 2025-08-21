"use client";
import React, { useEffect, useRef, useState } from "react";

// Lightweight wrapper for TradingView Advanced Chart widget
// Props:
//  - symbol: e.g., "FX:EURUSD", "BINANCE:BTCUSDT", "NASDAQ:AAPL"
//  - height: optional pixel height (defaults to 480)
//  - interval: optional timeframe (e.g., "1", "5", "15", "60", "240", "D")

type Props = {
  symbol: string;
  height?: number;
  interval?: string;
};

declare global {
  interface Window {
    TradingView?: any;
  }
}

const TV_SRC = "https://s3.tradingview.com/tv.js";

const TradingViewChart: React.FC<Props> = ({ symbol, height = 480, interval = "60" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    // Inject script once
    if (window.TradingView) {
      setReady(true);
      return;
    }

    const existing = document.querySelector(`script[src="${TV_SRC}"]`) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => setReady(true), { once: true });
      return;
    }

    const s = document.createElement("script");
    s.src = TV_SRC;
    s.async = true;
    s.onload = () => setReady(true);
    s.onerror = () => console.error("Failed to load TradingView script");
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    if (!ready || !window.TradingView || !containerRef.current) return;

    // Clear any previous widget
    containerRef.current.innerHTML = "";

    // Create widget
    // Docs: https://www.tradingview.com/widget/advanced-chart/
    new window.TradingView.widget({
      container_id: containerRef.current,
      symbol,
      interval,
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      withdateranges: true,
      hide_side_toolbar: false,
      allow_symbol_change: true,
      autosize: true,
      studies: [],
      details: true,
      calendar: true,
    });

    // Cleanup is best-effort: TradingView doesn't expose a destroy API for this widget.
    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [ready, symbol, interval]);

  return (
    <div style={{ height }}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};

export default TradingViewChart;
