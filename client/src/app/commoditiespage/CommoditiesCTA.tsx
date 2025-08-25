"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function CommoditiesCTA() {
  return (
    <section className="py-6 position-relative" aria-label="Call to action">
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 560,
          height: 560,
          filter: "blur(140px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(12,178,116,.14) 0%, rgba(0,0,0,0) 70%)",
          bottom: -180,
          right: -160,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container position-relative">
        <div className="p-4 p-lg-5 rounded-4 bg-white border shadow-sm">
          <div
            className="w-100 rounded-3 mb-4"
            style={{ height: 4, background: "linear-gradient(90deg, #2ECC71 0%, #7CF3C0 100%)" }}
          />
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-8">
              <Reveal>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-success bg-opacity-10 text-success small mb-2">
                  <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
                  Ready to trade?
                </div>
                <h3 className="display-6 m-0 text-dark fw-bold">Open an account and start trading commodities today</h3>
                <p className="mt-2 mb-0 text-muted">Fast onboarding, competitive pricing, and powerful tools tailored for active traders.</p>
              </Reveal>
            </div>
            <div className="col-12 col-lg-4 d-flex gap-3 justify-content-lg-end">
              <Reveal as="a" href="#" className="btn btn-success px-4 hover-lift" delay={0.05}>
                Create account
              </Reveal>
              <Reveal as="a" href="#" className="btn btn-outline-dark px-4 hover-lift" delay={0.15}>
                Try demo
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
