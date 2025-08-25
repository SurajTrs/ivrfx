"use client";
import React, { useEffect, useState } from "react";
import Reveal from "components/Reveal";

const pairs = [
  { sym: "AUD/USD", spread: "0.6" },
  { sym: "USD/JPY", spread: "0.7" },
  { sym: "EUR/USD", spread: "0.6" },
  { sym: "GBP/USD", spread: "0.9" },
];

// Simple count-up on mount
const CountUp: React.FC<{ value: number; duration?: number; decimals?: number; className?: string }>
  = ({ value, duration = 1200, decimals = 1, className = "" }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Number((eased * value).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [value, duration, decimals]);
  return <span className={className}>{display.toFixed(decimals)}</span>;
};

const SpreadsList: React.FC = () => (
  <section className="py-5 border-top">
    <div className="container">
      <div className="text-center mb-3">
        <Reveal as="h3" className="h2 fw-bold mb-1 gradient-text" delay={0.05}>
          Our most traded Forex pairs with low spreads
        </Reveal>
        <Reveal as="p" className="text-on-dark mb-0 fs-6" delay={0.1}>
          Tight pricing on popular FX majors
        </Reveal>
      </div>
      <div className="row g-3 mt-1  justify-content-center" role="list">
        {pairs.map((p, i) => (
          <div className="col-6 col-md-3" key={i} role="listitem">
            <Reveal as="div" className="p-4 rounded-4 text-center  spread-tile h-100" delay={0.12 + i * 0.08} aria-label={`${p.sym} spread`}>
              <div className="from-badge text-black mb-2">From</div>
              <div className="pair small text-dark">{p.sym}</div>
              <div className="mt-2">
                <span className="value-pill">
                  <CountUp value={Number(p.spread)} decimals={1} />
                </span>
              </div>
              <div className="small text-on-dark mt-1">pips</div>
            </Reveal>
          </div>
        ))}
      </div>
      <Reveal as="p" className="text-center text-on-dark mt-3 small" delay={0.25}>
        Spreads are variable and may be as low as displayed above
      </Reveal>
    </div>
  </section>
);

export default SpreadsList;
