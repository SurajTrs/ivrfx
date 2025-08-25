"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function IndicesCTA() {
  return (
    <section className="py-6 position-relative" aria-label="Ready to trade">
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 520,
          height: 520,
          filter: "blur(120px)",
          background: "radial-gradient(50% 50% at 50% 50%, rgba(12,178,116,.10) 0%, rgba(0,0,0,0) 70%)",
          bottom: -160,
          right: -160,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container position-relative">
        <div className="p-4 p-lg-5 rounded-4 border bg-white shadow-sm text-center">
          <Reveal>
            <h2 className="h1 mb-3">Ready to trade indices?</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: 720 }}>
              Start trading the world’s largest stock markets with tight spreads, fast execution, and powerful tools.
            </p>
          </Reveal>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Reveal as="a" href="#" className="btn btn-success px-4" delay={0.1}>Open Live Account</Reveal>
            <Reveal as="a" href="#" className="btn btn-outline-secondary px-4" delay={0.2}>Try Demo</Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
