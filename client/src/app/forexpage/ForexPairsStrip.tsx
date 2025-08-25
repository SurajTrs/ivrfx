"use client";
import React from "react";

const pairs = [
  { sym: "EURUSD", tag: "FOREX" },
  { sym: "GBPUSD", tag: "FOREX" },
  { sym: "USDJPY", tag: "FOREX" },
  { sym: "AUDUSD", tag: "FOREX" },
  { sym: "USDCAD", tag: "FOREX" },
  { sym: "USDCHF", tag: "FOREX" },
];

const ForexPairsStrip: React.FC = () => {
  return (
    <section className="py-4 border-top border-bottom bg-black">
      <div className="container">
        <div className="d-flex gap-3 overflow-auto py-1" style={{scrollSnapType:'x mandatory'}}>
          {pairs.map((p, i) => (
            <div key={i} className="d-flex align-items-center gap-2 px-3 py-2 rounded-3 card-gradient-border" style={{minWidth:180, scrollSnapAlign:'start'}}>
              <div className="small fw-semibold text-white">{p.sym}</div>
              <span className="badge bg-dark text-white border border-secondary-subtle">{p.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForexPairsStrip;
