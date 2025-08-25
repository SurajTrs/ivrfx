"use client";
import React from "react";
import Reveal from "components/Reveal";

const bullets = [
  { icon: "bi-currency-bitcoin", title: "Volatility opportunities", desc: "Trade dynamic crypto markets with CFDs." },
  { icon: "bi-lightning-charge", title: "Fast execution", desc: "Built for speed and reliability." },
  { icon: "bi-clock-history", title: "24/7 market", desc: "Crypto markets never sleep." },
  { icon: "bi-arrows-move", title: "Go long or short", desc: "Trade rising and falling prices." },
  { icon: "bi-shield-lock", title: "No wallet needed", desc: "No custody hassle — trade price action." },
  { icon: "bi-sliders2", title: "Flexible sizing", desc: "Choose sizes to match your strategy." },
];

const WhyTradeCrypto: React.FC = () => (
  <section className="py-5">
    <div className="container">
      <div className="text-center mb-4">
        <Reveal as="h3" className="h2 fw-bold mb-2 gradient-text" delay={0.05}>
          Why trade Crypto CFDs with us
        </Reveal>
        <Reveal as="p" className="text-on-dark-muted mb-0 fs-6" delay={0.1}>
          Built for performance, pricing, and peace of mind
        </Reveal>
      </div>
      <div className="row g-4 mt-1">
        {bullets.map((b, i) => (
          <div className="col-12 col-sm-6 col-lg-4" key={i}>
            <Reveal as="div" className="p-4 rounded-4 card-gradient-border h-100 hover-lift" delay={0.12 + i * 0.08}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="icon-badge d-inline-flex align-items-center justify-content-center" aria-hidden="true">
                  <i className={`bi ${b.icon}`}></i>
                </div>
                <h4 className="h5 m-0">{b.title}</h4>
              </div>
              <p className="text-muted m-0 fs-6">{b.desc}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyTradeCrypto;
