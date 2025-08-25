"use client";
import React from "react";
import Reveal from "components/Reveal";
import { popularForex } from "app/forexpage/data";

export default function PopularForex() {
  return (
    <section className="py-6 position-relative mt-5" aria-label="Popular forex pairs">
      {/* Ambient glow */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 520,
          height: 520,
          filter: "blur(120px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(12,178,116,.10) 0%, rgba(0,0,0,0) 70%)",
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
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-success bg-opacity-10 text-success small mb-2">
                <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
                Popular pairs
              </div>
              <h2 className="h1 m-0">Trade the most active FX markets</h2>
            </div>
          </Reveal>
        </div>

        <div className="row g-4">
          {popularForex.map((p, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.symbol}>
              <Reveal delay={i * 0.07}>
                <div className="p-4 rounded-4 border bg-white shadow-sm h-100">
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
                      <div className="text-muted small">Bid</div>
                      <div className="h5 m-0">{p.bid}</div>
                    </div>
                    <div className="text-muted">/</div>
                    <div className="text-end">
                      <div className="text-muted small">Ask</div>
                      <div className="h5 m-0">{p.ask}</div>
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn btn-success w-100">Trade</button>
                    <button className="btn btn-outline-secondary w-100">Details</button>
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
