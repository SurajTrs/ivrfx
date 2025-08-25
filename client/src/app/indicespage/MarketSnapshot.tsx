"use client";
import React from "react";
import Reveal from "components/Reveal";
import { popularIndices } from "app/indicespage/data";

export default function MarketSnapshot() {
  return (
    <section id="snapshot" className="py-6 mt-5" aria-label="Indices market snapshot">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-4">
          <Reveal>
            <div>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-success bg-opacity-10 text-success small mb-2">
                <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
                Market snapshot
              </div>
              <h2 className="h1 m-0">Live index prices</h2>
            </div>
          </Reveal>
        </div>
        <div className="table-responsive rounded-4 border bg-white shadow-sm">
          <table className="table mb-0 align-middle">
            <thead className="table-light" style={{ position: "sticky", top: 0, zIndex: 1 }}>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Sell</th>
                <th scope="col">Buy</th>
                <th scope="col">Change</th>
              </tr>
            </thead>
            <tbody>
              {popularIndices.map((i) => (
                <tr key={i.ticker}>
                  <td>
                    <div className="fw-semibold">{i.name}</div>
                    <div className="text-muted small">{i.ticker}</div>
                  </td>
                  <td>{i.sell}</td>
                  <td>{i.buy}</td>
                  <td>
                    <span className={`badge ${i.change >= 0 ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"}`}>
                      {i.change >= 0 ? "+" : ""}{i.change}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
