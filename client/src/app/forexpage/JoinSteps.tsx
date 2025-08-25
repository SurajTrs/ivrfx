"use client";
import React from "react";
import Reveal from "components/Reveal";

const steps = [
  { n: 1, title: "Create your account", desc: "Sign up in minutes." },
  { n: 2, title: "Fund your account", desc: "Secure deposits and withdrawals." },
  { n: 3, title: "Start trading", desc: "Access markets straight away." },
];

const JoinSteps: React.FC = () => (
  <section className="py-5">
    <div className="container">
      <div className="text-center mb-4">
        <Reveal as="h3" className="h2 fw-bold mb-2 reveal-fade gradient-text" delay={0.05}>Join in 3 simple steps</Reveal>
        <Reveal as="div" className="text-on-dark-muted" delay={0.1}>It only takes a few minutes to get started</Reveal>
      </div>

      <div className="steps-row position-relative">
        <Reveal as="div" className="steps-rail d-none d-md-block" aria-hidden={true} delay={0.05}>{null}</Reveal>
        <div className="row g-4 justify-content-center">
          {steps.map((s, i) => (
            <div className="col-12 col-md-4 d-flex flex-column align-items-center" key={s.n}>
              <Reveal as="div" className="step-badge mb-3" delay={0.1 + i * 0.08} aria-label={`Step ${s.n}`}>{s.n}</Reveal>
              <Reveal as="div" className="p-4 step-card step-card--light h-100 w-100 rounded-4" delay={0.16 + i * 0.08}>
                <h4 className="h5 m-0">{s.title}</h4>
                <p className="mb-0 mt-2">{s.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Reveal as="a" className="btn btn-success btn-lg mt-4 hover-lift" href="/signup" delay={0.35}>Create an account</Reveal>
      </div>
    </div>
  </section>
);

export default JoinSteps;
