"use client";

import React from "react";
import Reveal from "components/Reveal";

export default function AvailableOffers() {
  return (
    <section className="offers-wrap">
      <div className="offers-inner">
        <Reveal as="h2" className="title gradient-text" delay={0.05}>Available Offers</Reveal>

        <div className="hero-card">
          <div className="hero-left">
            <Reveal as="div" className="brand" delay={0.08}>
              ivrfx<span className="brand-dot">.</span>com
            </Reveal>
            <Reveal as="h3" className="headline" delay={0.12}>
              For Traders, <span className="gradient-text">by Traders</span>
            </Reveal>
            <Reveal as="p" className="subhead text-on-dark-strong" delay={0.16}>
              Over 4,700,000 traders across 170+ countries trust us.
            </Reveal>
            <Reveal as="a" href="/offers" className="cta btn btn-success btn-lg shadow-sm hover-lift" aria-label="Start trading with IVRFX" delay={0.2}>
              Start Trading
            </Reveal>
          </div>
          <Reveal as="div" className="hero-right" aria-hidden delay={0.22}>
            <div className="phone" aria-hidden>
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
          </Reveal>
        </div>

    
      </div>
    </section>
  );
}