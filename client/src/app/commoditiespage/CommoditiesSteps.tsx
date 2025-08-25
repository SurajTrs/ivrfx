"use client";
import React from "react";
import Reveal from "components/Reveal";

const steps = [
  {
    icon: "bi-person-plus",
    title: "Create your account",
    desc: "Sign up and verify your profile in minutes.",
  },
  {
    icon: "bi-wallet2",
    title: "Fund your account",
    desc: "Secure deposits via cards, bank transfer, and more.",
  },
  {
    icon: "bi-bar-chart",
    title: "Start trading commodities",
    desc: "Trade energies, metals and softs with tight spreads.",
  },
];

export default function CommoditiesSteps() {
  return (
    <section className="py-6 position-relative" aria-label="How it works">
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 520,
          height: 520,
          filter: "blur(120px)",
          background: "radial-gradient(50% 50% at 50% 50%, rgba(12,178,116,.10) 0%, rgba(0,0,0,0) 70%)",
          bottom: -160,
          left: -160,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container position-relative">
        <div className="text-center mb-4">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-success bg-opacity-10 text-success small mb-2">
              <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
              Get started in 3 steps
            </div>
            <h2 className="h1 m-0">Join ivrfx in minutes</h2>
          </Reveal>
        </div>
        <div className="row g-4">
          {steps.map((s, i) => (
            <div className="col-12 col-md-4" key={s.title}>
              <Reveal delay={i * 0.07}>
                <div className="p-4 rounded-4 border bg-white shadow-sm h-100 text-center">
                  <div className="d-inline-flex align-items-center justify-content-center rounded-3 bg-success bg-opacity-10 text-success mb-3" style={{ width: 56, height: 56 }}>
                    <i className={`bi ${s.icon} fs-4`} />
                  </div>
                  <div className="fw-semibold mb-1">{s.title}</div>
                  <div className="text-muted">{s.desc}</div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
