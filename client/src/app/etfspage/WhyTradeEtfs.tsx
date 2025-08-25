"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function WhyTradeEtfs() {
  const items = [
    {
      icon: "bi-grid-3x3-gap",
      title: "Broader coverage",
      desc:
        "Trade baskets of assets across sectors, themes, and regions without selecting individual securities.",
    },
    {
      icon: "bi-bounding-box",
      title: "Broad market exposure",
      desc: "Broad market exposure from a single position",
    },
    {
      icon: "bi-arrow-left-right",
      title: "Go long or short",
      desc:
        "Express bullish or bearish views with CFDs and benefit from fast execution and flexible position sizing.",
    },
  ];

  return (
    <section
      className="py-6 mt-5 position-relative overflow-hidden"
      aria-label="Why trade ETFs"
      style={{
        background:
          "radial-gradient(1200px 400px at 10% -10%, rgba(155, 81, 224, 0.15), transparent 60%), radial-gradient(1200px 400px at 90% -20%, rgba(111, 66, 193, 0.12), transparent 60%)",
      }}
    >
      {/* Subtle gradient line */}
      <div
        aria-hidden
        className="position-absolute top-0 start-50 translate-middle-x"
        style={{ width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(155,81,224,.6), transparent)" }}
      />
      <div className="container position-relative">
        <div className="text-center mb-4 mb-lg-5">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2"
                 style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
              Why trade ETFs CFDs
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-6 fw-bold m-0" style={{ letterSpacing: -0.5 }}>
              Diversified exposure in a single trade
            </h2>
          </Reveal>
        </div>

        <div className="row g-3 g-lg-4">
          {items.map((it, i) => (
            <div key={i} className="col-12 col-md-6">
              <Reveal delay={i * 0.06}>
                <div
                  className="h-100 p-4 rounded-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(155,81,224,0.35)",
                    boxShadow: "0 10px 30px rgba(155,81,224,0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-3"
                      style={{ width: 40, height: 40, background: "rgba(155,81,224,0.15)", color: "#b185ff" }}
                    >
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
