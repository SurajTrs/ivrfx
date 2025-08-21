"use client";

import React from "react";

const PlayIcon: React.FC = () => (
  <span
    aria-hidden
    className="insights-play d-inline-flex align-items-center justify-content-center"
  >
    ▶
  </span>
);

const MarketInsights: React.FC = () => {
  return (
    <section className="insights-wrap py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left column */}
          <div className="col-12 col-lg-5">
            <div className="insights-badge mb-2">
              <span className="insights-dot" />
              Market insights
            </div>
            <h2 className="insights-heading mb-3">Market insights</h2>
            <p className="insights-copy text-muted mb-4">
              Knowledge is key and we’re here for you. Every step of the way!
            </p>

            <p className="mb-3 insights-link">
              <a href="#" className="insights-anchor">Visit Education Centre</a>
              <span className="ms-1" aria-hidden>›</span>
            </p>

            <button className="insights-cta btn btn-success fw-semibold px-4 py-2">
              Join our trading community
            </button>
          </div>

          {/* Right column card */}
          <div className="col-12 col-lg-7">
            <article className="insights-card rounded-4 bg-white shadow-sm">
              <div className="insights-blob" aria-hidden />
              <div className="insights-media position-relative rounded-3 overflow-hidden">
                <img
                  src="/images/trading-illustration.png"
                  alt="Traders clinic"
                  className="w-100 h-100 object-fit-cover"
                />
                <div className="insights-media-overlay" />
                <PlayIcon />
              </div>

              <div className="insights-body p-4">
                <h5 className="mb-2 insights-title">Traders clinic</h5>
                <p className="text-muted mb-3 insights-desc">
                  Take advantage of 40+ years of expertise with Charlie Burton and Ali Crooks
                </p>
                <a href="#" className="insights-watch">Watch all ↗</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
