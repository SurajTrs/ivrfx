"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function CurrencyPairsZigzag() {
  return (
    <section className="cp-zigzag py-6" aria-label="What are currency pairs">
      <div className="container">
        {/* Block 1: Image left, text right */}
        <div className="row align-items-center g-4 g-lg-5 mb-5">
          <div className="col-12 col-lg-5">
            <Reveal>
              <img
                src="/images/trading-illustration.png"
                alt="Currency pairs concept illustration"
                className="cp-img img-fluid rounded-4"
              />
            </Reveal>
          </div>
          <div className="col-12 col-lg-7">
            <Reveal>
              <div className="cp-badge d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2">
                <span className="cp-badge-dot rounded-circle" style={{ width: 6, height: 6 }} />
                Learn Forex basics
              </div>
              <h2 className="cp-title display-6 mb-3 fw-bold">What are Currency Pairs?</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="cp-copy m-0">
                Currency pairs are financial instruments where one currency is quoted against another currency. The quote
                indicates the amount you would pay in one currency for the other.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="cp-example p-3 p-lg-4 rounded-4 mt-3">
                <div className="fw-semibold mb-1">Example</div>
                <p className="m-0">
                  The currency pair <strong>GBP/USD</strong> is at <strong>1.15</strong>. You can exchange 1 GBP for 1.15 USD.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Block 2: Text left, image right */}
        <div className="row align-items-center g-4 g-lg-5 flex-lg-row-reverse">
          <div className="col-12 col-lg-5">
            <Reveal>
              <img
                src="/images/trading-illustration1.png"
                alt="GBP/USD movement example"
                className="cp-img img-fluid rounded-4"
              />
            </Reveal>
          </div>
          <div className="col-12 col-lg-7">
            <Reveal>
              <h3 className="cp-subtitle h3 mb-3 fw-semibold">How price movements work</h3>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="cp-list m-0 d-grid gap-2">
                <li>
                  If GBP/USD started the day at <strong>1.15</strong>, and by the end of the day rose to <strong>1.16</strong>,
                  it's because the <strong>Sterling has strengthened</strong> against the Dollar.
                </li>
                <li>
                  If GBP/USD started the day at <strong>1.15</strong>, then drops to <strong>1.13</strong>, it's because the
                  <strong> Sterling has weakened</strong> against the Dollar.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
