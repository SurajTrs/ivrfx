"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function EtfsWhyUs() {
  const items = [
    {
      icon: "bi-cash-coin",
      title: "Tight pricing",
      desc: "Competitive spreads across popular ETFs and sectors.",
    },
    {
      icon: "bi-speedometer2",
      title: "Powerful platform",
      desc: "Trade with advanced charting, fast execution, and intuitive UI.",
    },
    {
      icon: "bi-headset",
      title: "24/5 support",
      desc: "Get help whenever markets are open; tutorials and FAQs included.",
    },
  ];

  return (
    <section
      className="py-6 mt-5 position-relative overflow-hidden"
      aria-label="Why choose us for ETFs"
      style={{
        background:
          "radial-gradient(1200px 400px at 0% -20%, rgba(155, 81, 224, 0.12), transparent 60%), radial-gradient(1200px 400px at 100% -10%, rgba(111, 66, 193, 0.1), transparent 60%)",
      }}
    >
      <div className="container position-relative">
        <div className="text-center mb-4 mb-lg-5">
          <Reveal>
            <div
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2"
              style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}
            >
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
              Why us
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-6 fw-bold m-0" style={{ letterSpacing: -0.5 }}>
              Tools and support built for traders
            </h2>
          </Reveal>
        </div>

        <div className="row g-3 g-lg-4">
          {items.map((it, i) => (
            <div key={i} className="col-12 col-md-4">
              <Reveal delay={i * 0.06}>
                <div
                  className="p-4 rounded-4 h-100"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(155,81,224,0.35)",
                    boxShadow: "0 10px 30px rgba(155,81,224,0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-3"
                      style={{ width: 40, height: 40, background: "rgba(155,81,224,0.15)", color: "#b185ff" }}
                    >
                      <i className={`bi ${it.icon} fs-5`} />
                    </div>
                    <div className="fw-semibold">{it.title}</div>
                  </div>
                  <p className="text-muted m-0">{it.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
