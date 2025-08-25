"use client";
import React from "react";
import Reveal from "components/Reveal";

const benefits = [
  { title: "Tight spreads", desc: "Trade majors from competitive spreads.", stat: "0.6", foot: "pips from" },
  { title: "Top pairs", desc: "Access majors, minors and exotics.", stat: "70+", foot: "pairs" },
  { title: "Tools & alerts", desc: "Advanced charts, signals and risk tools.", stat: "24/5", foot: "markets" },
  { title: "Fast onboarding", desc: "Start trading in minutes.", stat: "< 5 m", foot: "avg signup" },
];

export default function ForexBenefits() {
  return (
    <section className="py-6 position-relative" aria-label="Forex benefits">
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 520,
          height: 520,
          filter: "blur(120px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(12,178,116,.10) 0%, rgba(0,0,0,0) 70%)",
          top: -160,
          right: -160,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container position-relative">
        <div className="d-flex align-items-end justify-content-between mb-4">
          <Reveal>
            <div>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-success bg-opacity-10 text-success small mb-2">
                <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
                Benefits
              </div>
              <h2 className="h1 m-0">Why trade Forex with us</h2>
            </div>
          </Reveal>
        </div>
        <div className="row g-4">
          {benefits.map((b, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={b.title}>
              <Reveal delay={i * 0.07}>
                <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
                  <div className="mb-3">
                    <div className="h3 m-0">{b.stat}</div>
                    <div className="text-muted small">{b.foot}</div>
                  </div>
                  <div className="fw-semibold mb-1">{b.title}</div>
                  <div className="text-muted">{b.desc}</div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
