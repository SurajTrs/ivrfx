"use client";
import React from "react";
import Reveal from "components/Reveal";

const links = [
  { href: "/tools/cfd-calculator", label: "CFD Trading Calculator" },
  { href: "/tools/forex-margin", label: "Forex Margin Calculator" },
  { href: "/tools/commodities-profit", label: "Commodities Profit Calculator" },
  { href: "/tools/forex-profit", label: "Forex Profit Calculator" },
  { href: "/tools/economic-calendar", label: "Economic Calendar" },
];

const CalculatorsCTA: React.FC = () => (
  <section className="py-5 bg-black">
    <div className="container">
      <div className="d-lg-flex align-items-center justify-content-between">
        <div className="mb-3 mb-lg-0">
          <Reveal as="h3" className="h2 fw-bold m-0 gradient-text" delay={0.05}>
            Trading tools
          </Reveal>
          <Reveal as="div" className="text-on-dark-strong" delay={0.1}>
            Calculators and resources for better decisions
          </Reveal>
        </div>
        <div className="d-flex flex-wrap gap-2">
          {links.map((l, i) => (
            <Reveal as="a" key={i} href={l.href} className="btn btn-outline-purple btn-sm hover-lift" delay={0.12 + i * 0.06}>
              {l.label}
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CalculatorsCTA;
