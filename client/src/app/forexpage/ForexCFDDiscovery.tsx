"use client";
import React from "react";

const items = [
  { title: "Majors", desc: "Tight spreads on EURUSD, GBPUSD, USDJPY and more.", icon: "bi-currency-exchange" },
  { title: "Minors", desc: "Diversify beyond majors with popular cross pairs.", icon: "bi-shuffle" },
  { title: "Exotics", desc: "Access niche opportunities with wider market coverage.", icon: "bi-globe2" },
];

const ForexCFDDiscovery: React.FC = () => {
  return (
    <section className="py-5 border-top">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <h3 className="h2 fw-bold m-0">Discover Forex CFDs</h3>
          <a href="/instruments" className="btn btn-outline-purple btn-sm">View all instruments</a>
        </div>
        <div className="row g-4">
          {items.map((it, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-4">
              <div className="h-100 p-4 rounded-4 shadow-sm hover-lift card-gradient-border position-relative">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="icon-badge rounded-3 bg-dark text-white d-inline-flex align-items-center justify-content-center">
                    <i className={`bi ${it.icon}`}></i>
                  </div>
                  <h4 className="h5 m-0">{it.title}</h4>
                </div>
                <p className="text-muted mb-0">{it.desc}</p>
                <a href="/instruments" className="stretched-link" aria-label={`View ${it.title} instruments`}></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForexCFDDiscovery;
