"use client";
import React from "react";
import Reveal from "components/Reveal";

const CryptoHero: React.FC = () => {
  return (
    <section
      className="py-6 py-lg-7 position-relative overflow-hidden mb-5"
      style={{
        backgroundImage: "url(/images/bg-pattern1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Trade Crypto"
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
          background: "radial-gradient(50% 50% at 50% 50%, rgba(124, 58, 237, 0.35) 0%, rgba(0,0,0,0) 70%)",
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
                  Live markets • Crypto
                </div>
                <h1
                  className="display-5 fw-bold mb-3"
                  style={{
                    background: "linear-gradient(90deg, #fff 0%, #a78bfa 50%, #60a5fa 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Trade Crypto CFDs with Tight Spreads
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="lead text-white-50 mb-4 pe-lg-4">
                  Go long or short on leading cryptocurrencies without a wallet. Access institutional-grade liquidity,
                  fast execution, and powerful tools designed for active traders.
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
                  <span className="text-white fw-semibold me-1">70+</span> assets
                </div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">24/7</span> markets
                </div>
                <div className="px-3 py-2 rounded-3 bg-dark border border-opacity-25 small text-white-50">
                  <span className="text-white fw-semibold me-1">Tight</span> spreads
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <Reveal delay={0.2}>
              <img
                src="/images/trading-illustration1.png"
                alt="Trading crypto illustration"
                className="img-fluid rounded-4 shadow-lg hover-lift"
              />
            </Reveal>
          </div>
        </div>
        {/* Trust badges / logos (optional placeholder) */}
        <div className="mt-5 pt-2 d-flex flex-wrap align-items-center gap-4 text-white-50 small"></div>
      </div>
    </section>
  );
};

export default CryptoHero;
