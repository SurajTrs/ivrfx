"use client";
import React from "react";
import Reveal from "components/Reveal";

const benefits = [
  { title: "Access majors", desc: "Trade US30, US100, DE40, UK100 and more.", stat: "20+", foot: "indices" },
  { title: "Low spreads", desc: "Competitive pricing from 1 pt on top indices.", stat: "1 pt", foot: "from" },
  { title: "Go long or short", desc: "Express your view in any market condition.", stat: "2", foot: "directions" },
  { title: "Fast onboarding", desc: "Open and verify in minutes, start trading.", stat: "< 5 m", foot: "avg signup" },
];

export default function IndicesBenefits() {
  return (
    <section className="py-6 position-relative" aria-label="Benefits">
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 520,
          height: 520,
          filter: "blur(120px)",
          background: "radial-gradient(50% 50% at 50% 50%, rgba(12,178,116,.10) 0%, rgba(0,0,0,0) 70%)",
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
              <h2 className="h1 m-0">Why trade Indices with us</h2>
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
