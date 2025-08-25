"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function SharesHero() {
  return (
    <section
      className="py-6 py-lg-7 position-relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/bg-pattern1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Trade Global Shares"
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-black"
        style={{ opacity: 0.6 }}
        aria-hidden="true"
      />
      {/* Gradient glow */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 480,
          height: 480,
          filter: "blur(120px)",
          background: "radial-gradient(50% 50% at 50% 50%, rgba(66, 245, 164, 0.35) 0%, rgba(0,0,0,0) 70%)",
          top: -120,
          right: -120,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            {/* Glass card */}
            <div
              className="p-4 p-lg-5 rounded-4 border border-opacity-25"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <Reveal delay={0.05}>
                <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-success bg-opacity-25 text-success small mb-3">
                  <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
                  Live markets • Shares
                </div>
                <h1 className="display-5 fw-bold mb-3" style={{
                  background: "linear-gradient(90deg, #fff 0%, #7CF3C0 50%, #B0FFE2 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}>
                  Trade Global Shares with Tight Spreads
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="lead text-white-50 mb-4 pe-lg-4">
                  Access the world’s most popular companies across the US, Europe and APAC.
                  Enjoy fast execution, powerful tools, and a platform designed for active traders.
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
              {/* Stats */}
              <div className="d-flex flex-wrap gap-3 mt-4">
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">0.2%</span> typical spread
                </div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">2,000+</span> instruments
                </div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">24/5</span> support
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <Reveal delay={0.2}>
              <img
                src="/images/trading-illustration1.png"
                alt="Trading on shares illustration"
                className="img-fluid rounded-4 shadow-lg hover-lift"
              />
            </Reveal>
          </div>
        </div>
        {/* Trust badges / logos */}
        <div className="mt-5 pt-2 d-flex flex-wrap align-items-center gap-4 text-white-50 small">
         
        </div>
      </div>
    </section>
  );
}

