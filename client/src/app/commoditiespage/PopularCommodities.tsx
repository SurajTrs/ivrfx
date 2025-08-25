"use client";
import React from "react";
import Reveal from "components/Reveal";
import { popular } from "./data";

export default function PopularCommodities() {
  return (
    <section id="popular" className="py-6 position-relative" aria-label="Popular commodities">
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 520,
          height: 520,
          filter: "blur(120px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(12, 178, 116, 0.12) 0%, rgba(0,0,0,0) 70%)",
          top: -160,
          left: -140,
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
                Discover
              </div>
              <h2 className="h1 m-0">Popular commodities</h2>
            </div>
          </Reveal>
          <Reveal as="a" href="#" className="btn btn-outline-dark btn-sm hover-lift">
            View all
          </Reveal>
        </div>

        <div className="row g-4">
          {popular.map((r, i) => {
            const negative = r.change.startsWith("-");
            return (
              <div className="col-12 col-sm-6 col-lg-3" key={r.ticker}>
                <Reveal delay={i * 0.07} className="h-100">
                  <div
                    className="p-4 rounded-4 border h-100 d-flex flex-column bg-white shadow-sm hover-lift"
                    role="group"
                    aria-label={`Card ${r.ticker} ${r.name}`}
                    style={{ transition: "transform .25s ease, box-shadow .25s ease" }}
                  >
                    <div
                      className="w-100 rounded-3 mb-3"
                      style={{
                        height: 4,
                        background: negative
                          ? "linear-gradient(90deg, #FF6B6B 0%, #FF8E8E 100%)"
                          : "linear-gradient(90deg, #2ECC71 0%, #7CF3C0 100%)",
                      }}
                    />
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div>
                        <div className="h5 m-0">{r.ticker}</div>
                        <div className="text-muted small">{r.name}</div>
                      </div>
                      <span
                        className={`badge ${negative ? "bg-danger" : "bg-success"} rounded-pill px-3 py-2`}
                        aria-label={`Change ${r.change}`}
                      >
                        {r.change}
                      </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-auto">
                      <div>
                        <div className="text-muted small">Sell</div>
                        <div className="fs-5 fw-semibold">{r.sell}</div>
                      </div>
                      <div className="text-muted">/</div>
                      <div className="text-end">
                        <div className="text-muted small">Buy</div>
                        <div className="fs-5 fw-semibold">{r.buy}</div>
                      </div>
                    </div>
                    <div className="mt-3 d-flex gap-2">
                      <a href="#" className="btn btn-sm btn-success flex-grow-1 hover-lift">Trade</a>
                      <a href="#" className="btn btn-sm btn-outline-dark hover-lift">Details</a>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
