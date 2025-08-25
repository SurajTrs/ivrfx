"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function EtfsIntro() {
  return (
    <section
      className="py-6 position-relative overflow-hidden"
      aria-label="What is an ETF"
      style={{
        background:
          "radial-gradient(1000px 400px at 10% -10%, rgba(255, 255, 255, 0.1), transparent 60%)",
      }}
    >
      <div className="container">
        {/* What is an ETF */}
        <div className="row g-4 align-items-start mb-4 mb-lg-5">
          <div className="col-12 col-lg-6">
            <Reveal>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2"
                   style={{ background: "rgba(255, 255, 255, 0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
                <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
                What is an ETF?
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h1 m-0">ETF is short for: Exchange Traded Fund.</h2>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={0.1}>
              <div className="p-4 rounded-4 h-100"
                   style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(155,81,224,0.25)", backdropFilter: "blur(8px)" }}>
                <p className="m-0 text-muted">
                  ETFs combine the features of funds and equities into one instrument. Like other investment funds,
                  they group together various assets, such as stocks or commodities. This helps the ETF track the
                  value of its underlying market as closely as possible.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* For instance */}
        <div className="row g-4 align-items-start mb-4 mb-lg-5">
          <div className="col-12 col-lg-5">
            <Reveal>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2"
                   style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
                <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
                For instance
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="m-0 text-muted">
                There are ETFs that track the FTSE 100, containing constituents of that index proportional to the
                FTSE’s price. Other exchange traded funds may group together companies working in certain sectors,
                like Lithium producers, or follow an asset like Gold.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
