"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function WhyTradeCFDs() {
  return (
    <section className="py-6" aria-label="Why trade commodity CFDs with ivrfx">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5 mb-5">
          <div className="col-12 col-lg-6">
            <Reveal>
              <h2 className="display-6 mb-3 text-dark fw-bold">Why trade commodity CFDs with ivrfx</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="list-unstyled m-0 d-grid gap-2">
                <li className="d-flex gap-2">
                  <span className="text-success">•</span>
                  <span>Access numerous CFDs on spot and futures commodity markets, plus stocks and ETFs</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="text-success">•</span>
                  <span>Spreads as low as 0.35 on Gold</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="text-success">•</span>
                  <span>Continuous futures contracts — no expiry, automatic rolls</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="text-success">•</span>
                  <span>Leverage and the ability to go long or short</span>
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={0.15}>
              <img src="/images/trading-illustration.png" alt="Why trade commodity CFDs" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </Reveal>
          </div>
        </div>

        <div className="row align-items-center g-4 g-lg-5 mb-5 flex-lg-row-reverse">
          <div className="col-12 col-lg-6">
            <Reveal>
              <h3 className="h2 mb-3 text-dark fw-bold">Ways to trade Commodity CFDs</h3>
              <p className="text-muted mb-3">
                Trade a range of spot and futures commodity markets, as well as commodity stocks and ETFs — all from a single CFD account.
              </p>
              <ul className="list-unstyled d-grid gap-2 m-0">
                <li className="d-flex gap-2"><span className="text-success">•</span><span>Commodity CFDs on spot and futures</span></li>
                <li className="d-flex gap-2"><span className="text-success">•</span><span>Commodity stocks & ETFs (e.g., GLD)</span></li>
                <li className="d-flex gap-2"><span className="text-success">•</span><span>In‑platform alerts and analysis</span></li>
              </ul>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={0.15}>
              <img src="/images/gan-t-hero.png" alt="Ways to trade commodities" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </Reveal>
          </div>
        </div>

        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6 order-lg-2">
            <Reveal>
              <h3 className="h2 mb-3 text-dark fw-bold">CFD Trading Calculator</h3>
              <p className="text-muted mb-2">
                Choose your points of movement and calculate hypothetical P/L (aggregated cost and charges) as if you had opened a trade today.
              </p>
              <p className="text-muted mb-0">Past performance is not a reliable indicator of future results.</p>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <Reveal delay={0.15}>
              <img src="/images/trading-illustration1.png" alt="Trading calculator" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </Reveal>
          </div>
        </div>

        {/* Fourth block: text left, image right */}
        <div className="row align-items-center g-4 g-lg-5 mt-5">
          <div className="col-12 col-lg-6">
            <Reveal>
              <h3 className="h2 mb-3 text-dark fw-bold">Advanced risk management</h3>
              <p className="text-muted mb-3">
                Protect your positions with stops, limits and alerts. Manage exposure across metals, energies and soft commodities from a single platform.
              </p>
              <ul className="list-unstyled d-grid gap-2 m-0">
                <li className="d-flex gap-2"><span className="text-success">•</span><span>Stop loss and take profit orders</span></li>
                <li className="d-flex gap-2"><span className="text-success">•</span><span>Price alerts and sentiment tools</span></li>
                <li className="d-flex gap-2"><span className="text-success">•</span><span>Portfolio view across asset classes</span></li>
              </ul>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={0.15}>
              <img src="/images/trading-illustration.png" alt="Risk management tools" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
