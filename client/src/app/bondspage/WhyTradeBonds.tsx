"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function WhyTradeBonds() {
  const items = [
    { icon: "bi-bounding-box", title: "Broad market exposure", desc: "Broad exposure to rates from a single position." },
    { icon: "bi-arrow-left-right", title: "Go long or short", desc: "Trade rising or falling rates with flexible sizing." },
    { icon: "bi-lightning", title: "Leverage", desc: "Enhanced exposure with a leveraged CFD account." },
  ];

  return (
    <section className="py-6 mt-5 position-relative overflow-hidden" aria-label="Why trade Bonds CFDs" style={{
      background: "radial-gradient(1200px 400px at 10% -10%, rgba(155,81,224,0.12), transparent 60%)",
    }}>
      <div className="container position-relative">
        <div className="text-center mb-4 mb-lg-5">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
              Why trade Bonds CFDs
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-6 fw-bold m-0">Gain exposure to interest-rate moves</h2>
          </Reveal>
        </div>

        <div className="row g-3 g-lg-4">
          {items.map((it, i) => (
            <div key={i} className="col-12 col-md-4">
              <Reveal delay={i * 0.06}>
                <div className="h-100 p-4 rounded-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(155,81,224,0.35)", boxShadow: "0 10px 30px rgba(155,81,224,0.15)", backdropFilter: "blur(8px)" }}>
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
}
