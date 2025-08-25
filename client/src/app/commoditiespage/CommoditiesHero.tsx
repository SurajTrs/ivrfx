"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function CommoditiesHero() {
  return (
    <section
      className="py-6 py-lg-7 position-relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/bg-pattern1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Trade Commodities"
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-black"
        style={{ opacity: 0.6 }}
        aria-hidden="true"
      />
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 480,
          height: 480,
          filter: "blur(120px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(66, 245, 164, 0.35) 0%, rgba(0,0,0,0) 70%)",
          top: -120,
          right: -120,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            <div
              className="p-4 p-lg-5 rounded-4 border border-opacity-25"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                maxWidth: 760,
              }}
            >
              <Reveal delay={0.05}>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-success bg-opacity-25 text-success small mb-3">
                  <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
                  Live markets • Commodities
                </div>
                <h1
                  className="display-5 fw-bold mb-3"
                  style={{
                    background:
                      "linear-gradient(90deg, #fff 0%, #7CF3C0 50%, #B0FFE2 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Trade Commodities 24/5
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="lead text-white-50 mb-4 pe-lg-4" style={{ maxWidth: 680 }}>
                  Speculate on the raw materials driving the global economy. Trade CFDs on energy markets like Oil and Gas, metals like
                  gold and silver, and soft commodities like corn and cocoa.
                </p>
              </Reveal>
              <div className="d-flex flex-wrap gap-3">
                <Reveal as="a" href="#popular" className="btn btn-success px-4 hover-lift" delay={0.25}>
                  Start Trading
                </Reveal>
                <Reveal as="a" href="#snapshot" className="btn btn-outline-light px-4 hover-lift" delay={0.35}>
                  View Market Snapshot
                </Reveal>
              </div>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">0.35</span> spreads from (Gold)
                </div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">30+</span> commodities
                </div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">24/5</span> markets
                </div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">Spot & Futures</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 mt-4 mt-lg-0">
            <Reveal delay={0.2}>
              <img
                src="/images/trading-illustration1.png"
                alt="Commodities trading illustration"
                className="img-fluid rounded-4 shadow-lg hover-lift"
              />
            </Reveal>
          </div>
        </div>
        <div className="mt-5 pt-3 pb-1 d-flex flex-wrap align-items-center gap-3 text-white-50 small">
          <span className="px-3 py-2 rounded-3 bg-dark border border-opacity-25">Trusted platform</span>
          <span className="px-3 py-2 rounded-3 bg-dark border border-opacity-25">Secure payments</span>
          <span className="px-3 py-2 rounded-3 bg-dark border border-opacity-25">Fast execution</span>
        </div>
      </div>
    </section>
  );
}
