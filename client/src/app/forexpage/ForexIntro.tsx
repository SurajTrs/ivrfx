"use client";
import React from "react";
import Reveal from "components/Reveal";

const ForexIntro: React.FC = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <Reveal as="div" className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-body-tertiary mb-3" delay={0.05}>
          <i className="bi bi-currency-exchange"></i>
          <span className="small">FX CFDs</span>
        </Reveal>
        <Reveal as="h2" className="display-6 fw-bold mb-2 gradient-text" delay={0.1}>Forex</Reveal>
        <Reveal as="p" className="lead text-muted mx-auto" style={{ maxWidth: 760 }} delay={0.15}>
          Explore opportunities in the world’s most traded market — majors, minors
          and exotics with competitive spreads and fast execution.
        </Reveal>
        <div className="mt-4 d-flex justify-content-center gap-3">
          <Reveal as="a" className="btn btn-success btn-lg px-4 shadow-sm hover-lift" href="/instruments" delay={0.2}>Trade Forex</Reveal>
          <Reveal as="a" className="btn btn-outline-purple btn-lg px-4 hover-lift" href="/insights" delay={0.26}>Learn More</Reveal>
        </div>
      </div>
    </section>
  );
};

export default ForexIntro;
