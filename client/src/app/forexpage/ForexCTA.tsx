"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function ForexCTA() {
  return (
    <section className="py-6 position-relative" aria-label="Get started CTA">
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 520,
          height: 520,
          filter: "blur(120px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(12,178,116,.10) 0%, rgba(0,0,0,0) 70%)",
          bottom: -160,
          right: -160,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container position-relative">
        <Reveal>
          <div className="p-5 rounded-4 border bg-white shadow-sm mb-5">
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between gap-3">
              <div>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-success bg-opacity-10 text-success small mb-2">
                  <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
                  Start today
                </div>
                <h2 className="h1 m-0">Open an account and trade Forex</h2>
                <p className="text-muted m-0 mt-2">Tight spreads on majors, powerful tools, and 24/5 markets.</p>
              </div>
              <div className="d-flex gap-2 flex-shrink-0">
                <a className="btn btn-success px-4" href="#">Create account</a>
                <a className="btn btn-outline-secondary px-4" href="#">Try demo</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
