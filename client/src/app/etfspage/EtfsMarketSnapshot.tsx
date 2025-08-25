"use client";
import React from "react";
import Reveal from "components/Reveal";
import { popularEtfs } from "app/etfspage/data";

export default function EtfsMarketSnapshot() {
  return (
    <section id="snapshot" className="py-6 mt-5 position-relative overflow-hidden" aria-label="ETFs market snapshot" style={{
      background: "radial-gradient(1200px 400px at 85% -20%, rgba(155,81,224,0.10), transparent 60%)",
    }}>
      <div className="container position-relative">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <Reveal>
            <div>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
                <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
                Live snapshot
              </div>
              <h2 className="h1 m-0">Popular ETF assets</h2>
            </div>
          </Reveal>
        </div>
        <div className="table-responsive rounded-4" style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(155,81,224,0.35)",
          boxShadow: "0 10px 30px rgba(155,81,224,0.15)",
          backdropFilter: "blur(8px)",
        }}>
          <table className="table table-hover align-middle m-0">
            <thead className="table-light" style={{ position: "sticky", top: 0, zIndex: 1 }}>
              <tr>
                <th scope="col">Asset</th>
                <th scope="col">Sell</th>
                <th scope="col">Buy</th>
                <th scope="col">Change</th>
                <th scope="col" className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {popularEtfs.map((p) => (
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
                      <button className="btn btn-sm" style={{ background: "#9b51e0", color: "#fff", borderColor: "#9b51e0" }}>Trade</button>
                      <button className="btn btn-sm" style={{ background: "transparent", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.5)" }}>Details</button>
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
