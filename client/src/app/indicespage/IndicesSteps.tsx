"use client";
import React from "react";
import Reveal from "components/Reveal";

const steps = [
  { icon: "bi-person-plus", title: "Create your account", desc: "Sign up and verify your profile in minutes." },
  { icon: "bi-wallet2", title: "Fund your account", desc: "Secure deposits via cards, bank transfer, and more." },
  { icon: "bi-graph-up", title: "Start trading indices", desc: "Trade major indices with tight spreads 24/5." },
];

export default function IndicesSteps() {
  return (
    <section className="py-7 position-relative" aria-label="How it works">
      <div className="container position-relative">
        <div className="text-center mb-4">
          <Reveal>
            <div
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2"
              style={{ background: "rgba(147, 51, 234, 0.12)", color: "#9333EA" }}
            >
              <span className="rounded-circle" style={{ width: 6, height: 6, backgroundColor: "#9333EA" }} />
              Get started in 3 steps
            </div>
            <h2
              className="display-5 fw-bold m-0"
              style={{
                background: "linear-gradient(90deg, #0D1117 0%, #7E22CE 40%, #C084FC 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Join ivrfx in minutes
            </h2>
          </Reveal>
        </div>
        <div className="row g-4">
          {steps.map((s, i) => (
            <div className="col-12 col-md-4" key={s.title}>
              <Reveal delay={i * 0.07}>
                <div className="p-4 rounded-4 border bg-white shadow-sm h-100 text-center">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: 64, height: 64, background: "rgba(147, 51, 234, 0.12)", color: "#9333EA" }}
                  >
                    <i className={`bi ${s.icon} fs-3`} />
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

