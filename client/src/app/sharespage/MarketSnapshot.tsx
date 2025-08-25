"use client";
import React from "react";
import Reveal from "components/Reveal";
import { popular } from "./data";

export default function MarketSnapshot() {
  return (
    <section id="snapshot" className="py-6" aria-label="Market snapshot">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <Reveal>
            <h2 className="h1 m-0">Market snapshot</h2>
          </Reveal>
          <Reveal as="a" href="#" className="btn btn-outline-dark btn-sm hover-lift">
            Full list
          </Reveal>
        </div>

        <div className="row g-4">
          <div className="col-12">
            <div className="p-3 p-lg-4 rounded-4 border bg-white shadow-sm">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="position-sticky top-0 bg-white">
                    <tr className="text-muted">
                      <th scope="col" className="border-0">Ticker</th>
                      <th scope="col" className="border-0">Company</th>
                      <th scope="col" className="border-0">Sell</th>
                      <th scope="col" className="border-0">Buy</th>
                      <th scope="col" className="border-0">Change (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {popular.map((r) => (
                      <tr key={r.ticker}>
                        <td className="fw-semibold">{r.ticker}</td>
                        <td className="text-muted">{r.name}</td>
                        <td>{r.sell}</td>
                        <td>{r.buy}</td>
                        <td className={r.change.startsWith("-") ? "text-danger" : "text-success"} aria-label={`Change ${r.change}`}>
                          {r.change}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

