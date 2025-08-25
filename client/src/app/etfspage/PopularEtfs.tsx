"use client";
import React from "react";
import Reveal from "components/Reveal";
import { popularEtfs } from "app/etfspage/data";

export default function PopularEtfs() {
  return (
    <section id="popular" className="py-6 position-relative mt-5" aria-label="Popular ETFs">
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 520,
          height: 520,
          filter: "blur(120px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,.14) 0%, rgba(0,0,0,0) 70%)",
          top: -140,
          left: -160,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container position-relative">
        <div className="d-flex align-items-end justify-content-between mb-4">
          <Reveal>
            <div>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
                <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
                Popular ETFs
              </div>
              <h2 className="h1 m-0">Trade the most active ETFs</h2>
            </div>
          </Reveal>
        </div>

        <div className="row g-4">
          {popularEtfs.map((p, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.symbol}>
              <Reveal delay={i * 0.07}>
                <div
                  className="p-4 rounded-4 h-100"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(155,81,224,0.35)",
                    boxShadow: "0 10px 30px rgba(155,81,224,0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <div className="fw-semibold">{p.symbol}</div>
                      <div className="text-muted small">{p.name}</div>
                    </div>
                    <span
                      className={`badge ${p.change >= 0 ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"}`}
                    >
                      {p.change >= 0 ? "+" : ""}{p.change}%
                    </span>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <div>
                      <div className="text-muted small">Sell</div>
                      <div className="h5 m-0">{p.bid}</div>
                    </div>
                    <div className="text-muted">/</div>
                    <div className="text-end">
                      <div className="text-muted small">Buy</div>
                      <div className="h5 m-0">{p.ask}</div>
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn w-100" style={{ background: "#9b51e0", color: "#fff", borderColor: "#9b51e0" }}>Trade</button>
                    <button className="btn w-100" style={{ background: "transparent", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.5)" }}>Details</button>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
