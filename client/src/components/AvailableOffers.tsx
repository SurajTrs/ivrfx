"use client";

import React from "react";

export default function AvailableOffers() {
  return (
    <section className="offers-wrap">
      <div className="offers-inner">
        <h2 className="title" >Available Offers</h2>

        <div className="hero-card">
          <div className="hero-left">
            <div className="brand">ivrfx<span className="brand-dot">.</span>com</div>
            <h3 className="headline">
              For Traders, by Traders
            </h3>
            <p className="subhead">
              Over 4,700,000 traders across 170+ countries trust us.
            </p>
            <button className="cta">Start Trading</button>
          </div>
          <div className="hero-right" aria-hidden>
            <div className="phone">
              <div className="notch" />
              <div className="screen">
                <div className="chart-ring" />
                <div className="rows">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            <div className="floating f1" />
            <div className="floating f2" />
            <div className="floating f3" />
          </div>
        </div>

    
      </div>
    </section>
  );
}