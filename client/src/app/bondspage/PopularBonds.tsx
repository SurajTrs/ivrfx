"use client";
import React from "react";
import Reveal from "components/Reveal";
import { popularBonds } from "app/bondspage/data";

export default function PopularBonds() {
  return (
    <section className="py-6 mt-5 position-relative" aria-label="Popular Bonds">
      <div className="container position-relative">
        <div className="d-flex align-items-end justify-content-between mb-4">
          <Reveal>
            <div>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
                <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
                Popular Bonds
              </div>
              <h2 className="h1 m-0">Trade benchmark bond markets</h2>
            </div>
          </Reveal>
        </div>

        <div className="row g-4">
          {popularBonds.map((p, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={p.symbol}>
              <Reveal delay={i * 0.07}>
                <div className="p-4 rounded-4 h-100" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(155,81,224,0.35)", boxShadow: "0 10px 30px rgba(155,81,224,0.15)", backdropFilter: "blur(8px)" }}>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <div className="fw-semibold">{p.symbol}</div>
                      <div className="text-muted small">{p.name}</div>
                    </div>
                    <span className={`badge ${p.change >= 0 ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"}`}>
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
