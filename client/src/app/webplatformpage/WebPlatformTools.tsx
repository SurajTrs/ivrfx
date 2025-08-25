"use client";
import React from "react";
import Reveal from "components/Reveal";

const tools = [
  { title: "TradingView charts", points: ["50+ drawing tools", "100+ indicators", "Multiple layouts & templates"], icon: "bi-graph-up" },
  { title: "News & Analysis", points: ["Live streaming updates", "Expert commentary", "Macro calendar & events"], icon: "bi-broadcast" },
  { title: "Tool suite", points: ["Fundamental screeners", "Sentiment widgets", "Risk management and alerts"], icon: "bi-box" },
];

const WebPlatformTools: React.FC = () => {
  return (
    <section id="tools" className="py-6 mt-5 position-relative overflow-hidden" style={{ background: "radial-gradient(1200px 400px at 85% -20%, rgba(155,81,224,0.10), transparent 60%)" }}>
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
              World‑class tools built in
            </div>
            <h2 className="display-6 fw-bold m-0">Everything you need to trade</h2>
          </Reveal>
        </div>
        <div className="row g-4">
          {tools.map((t, i) => (
            <div key={i} className="col-12 col-lg-4">
              <Reveal delay={i * 0.08}>
                <div className="p-4 rounded-4 h-100" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(155,81,224,0.35)", boxShadow: "0 10px 30px rgba(155,81,224,0.15)", backdropFilter: "blur(8px)" }}>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-3" style={{ width: 44, height: 44, background: "rgba(155,81,224,0.15)", color: "#b185ff" }}>
                      <i className={`bi ${t.icon} fs-5`} />
                    </div>
                    <div className="h5 m-0 fw-semibold">{t.title}</div>
                  </div>
                  <ul className="m-0 ps-3 text-muted small">
                    {t.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebPlatformTools;
