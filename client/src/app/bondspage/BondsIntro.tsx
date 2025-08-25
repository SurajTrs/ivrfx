"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function BondsIntro() {
  return (
    <section className="py-6 position-relative overflow-hidden" aria-label="About Bonds" style={{
      background: "radial-gradient(1000px 400px at 10% -10%, rgba(255,255,255,0.10), transparent 60%)",
    }}>
      <div className="container">
        <div className="row g-4 align-items-start mb-4 mb-lg-5">
          <div className="col-12 col-lg-6">
            <Reveal>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2"
                   style={{ background: "rgba(255,255,255,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
                <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
                Bonds CFDs
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h1 m-0">Trade bond markets via CFDs</h2>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={0.1}>
              <div className="p-4 rounded-4 h-100" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(155,81,224,0.25)", backdropFilter: "blur(8px)" }}>
                <p className="m-0 text-muted">Bonds CFDs give you access to key government yields and duration themes, letting you position for central bank decisions and interest-rate expectations.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
