"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function TypesOfBond() {
  const rows = [
    { title: "Government bonds", desc: "Trade benchmark yields such as US 10Y and 30Y, GER 10Y, and UK Gilts.", image: "/images/trading-illustration1.png", reverse: false },
    { title: "Corporate bonds (via ETFs)", desc: "Access investment-grade or high-yield baskets with ETF exposure.", image: "/images/trading-illustration1.png", reverse: true },
    { title: "Index futures proxies", desc: "Position on broader rate moves using popular bond index trackers.", image: "/images/trading-illustration1.png", reverse: false },
    { title: "Inverse & leveraged ETFs", desc: "Express views with inverse/leveraged exposure depending on strategy.", image: "/images/trading-illustration1.png", reverse: true },
  ];

  return (
    <section className="py-6 mt-5 position-relative overflow-hidden" aria-label="Types of Bond" style={{
      background: "radial-gradient(1200px 400px at 100% -20%, rgba(155,81,224,0.10), transparent 60%)",
    }}>
      <div className="container">
        <div className="text-center mb-4 mb-lg-5">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
              Types of Bond
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-6 fw-bold m-0" style={{ letterSpacing: -0.5 }}>Explore categories and strategies</h2>
          </Reveal>
        </div>

        <div className="d-flex flex-column gap-4 gap-lg-5">
          {rows.map((row, i) => (
            <div key={i} className={`row g-4 align-items-center ${row.reverse ? "flex-row-reverse" : ""}`}>
              <div className="col-12 col-lg-6">
                <Reveal delay={0.02 * i}>
                  <div className="p-4 p-lg-5 rounded-4 h-100" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(155,81,224,0.35)", boxShadow: "0 10px 30px rgba(155,81,224,0.15)", backdropFilter: "blur(8px)" }}>
                    <div className="d-flex align-items-start gap-3">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-3 flex-shrink-0" style={{ width: 44, height: 44, background: "rgba(155,81,224,0.15)", color: "#b185ff" }}>
                        <i className="bi bi-layers fs-5" />
                      </div>
                      <div>
                        <div className="h4 m-0 mb-2 fw-semibold">{row.title}</div>
                        <p className="text-muted m-0">{row.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className="col-12 col-lg-6">
                <Reveal delay={0.04 * i}>
                  <div className="rounded-4 overflow-hidden border" style={{ borderColor: "rgba(155,81,224,0.35)" }}>
                    <img src={row.image} alt={row.title} className="w-100 d-block" />
                  </div>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
