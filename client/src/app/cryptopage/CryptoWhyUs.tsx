"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function CryptoWhyUs() {
  const items = [
    { stat: "24/7", label: "markets", title: "Round-the-clock", desc: "Trade crypto CFDs day and night." },
    { stat: "70+", label: "coins", title: "Top cryptos", desc: "Access majors, alts and trending assets." },
    { stat: "x", label: "tools", title: "Tools & alerts", desc: "Advanced charts, signals and risk tools." },
    { stat: "< 5 m", label: "avg signup", title: "Fast onboarding", desc: "Start trading in minutes." },
  ];

  return (
    <section className="whyus-wrap py-6 mt-5" aria-label="Why trade Crypto with us">
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <Reveal>
            <div className="whyus-badge d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2">
              <span className="whyus-dot" />
              Why trade Crypto with us
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="whyus-title display-6 fw-extrabold m-0">Built for speed, choice and power</h2>
          </Reveal>
        </div>

        <div className="row g-3 g-lg-4">
          {items.map((it, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <Reveal delay={i * 0.06}>
                <div className="whyus-card h-100 p-4">
                  <div className="d-flex align-items-end gap-2 mb-2">
                    <div className="whyus-stat gradient-text">{it.stat}</div>
                    <div className="whyus-label">{it.label}</div>
                  </div>
                  <h3 className="whyus-card-title h5 m-0 mb-1">{it.title}</h3>
                  <p className="whyus-desc m-0">{it.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
