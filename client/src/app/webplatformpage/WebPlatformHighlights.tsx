"use client";
import React from "react";
import Reveal from "components/Reveal";

const items = [
  { icon: "bi-speedometer2", title: "Fast & reliable", desc: "Low‑latency execution and robust infrastructure for peak market hours." },
  { icon: "bi-bar-chart", title: "Advanced charting", desc: "Deep integration with TradingView for professional‑grade analysis." },
  { icon: "bi-bell", title: "Custom alerts", desc: "Price, indicator and news alerts to stay on top of the market." },
  { icon: "bi-tools", title: "Rich toolset", desc: "Fundamental, sentiment and technical tools in one place." },
];

const WebPlatformHighlights: React.FC = () => {
  return (
    <section id="highlights" className="py-6 position-relative overflow-hidden" style={{ background: "radial-gradient(1200px 400px at 10% -20%, rgba(255, 255, 255, 0.12), transparent 60%)" }}>
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
              Simple, powerful, professional
            </div>
            <h2 className="display-6 fw-bold m-0">Engineered for serious trading</h2>
          </Reveal>
        </div>
        <div className="row g-3 g-lg-4">
          {items.map((it, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <Reveal delay={i * 0.07}>
                <div className="p-4 rounded-4 h-100" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(155,81,224,0.35)", boxShadow: "0 10px 30px rgba(155,81,224,0.15)", backdropFilter: "blur(8px)" }}>
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-3" style={{ width: 40, height: 40, background: "rgba(155,81,224,0.15)", color: "#b185ff" }}>
                      <i className={`bi ${it.icon} fs-5`} />
                    </div>
                    <div className="fw-semibold">{it.title}</div>
                  </div>
                  <p className="text-muted m-0">{it.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebPlatformHighlights;
