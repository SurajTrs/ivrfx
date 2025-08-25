"use client";
import React from "react";
import Reveal from "components/Reveal";
import { popularForex } from "app/forexpage/data";

export default function ForexMarketSnapshot() {
  return (
    <section className="py-6 mt-5" aria-label="Forex market snapshot">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <Reveal>
            <div>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-success bg-opacity-10 text-success small mb-2">
                <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
                Live snapshot
              </div>
              <h2 className="h1 m-0">Popular FX pairs</h2>
            </div>
          </Reveal>
        </div>
        <div className="table-responsive rounded-4 border bg-white shadow-sm">
          <table className="table table-hover align-middle m-0">
            <thead className="table-light" style={{ position: "sticky", top: 0, zIndex: 1 }}>
              <tr>
                <th scope="col">Pair</th>
                <th scope="col">Bid</th>
                <th scope="col">Ask</th>
                <th scope="col">Change</th>
                <th scope="col" className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {popularForex.map((p) => (
                <tr key={p.symbol}>
                  <td>
                    <div className="fw-semibold">{p.symbol}</div>
                    <div className="text-muted small">{p.name}</div>
                  </td>
                  <td>{p.bid}</td>
                  <td>{p.ask}</td>
                  <td>
                    <span className={`badge ${p.change >= 0 ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"}`}>
                      {p.change >= 0 ? "+" : ""}{p.change}%
                    </span>
                  </td>
                  <td className="text-end">
                    <div className="btn-group">
                      <button className="btn btn-success btn-sm">Trade</button>
                      <button className="btn btn-outline-secondary btn-sm">Details</button>
                    </div>
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
