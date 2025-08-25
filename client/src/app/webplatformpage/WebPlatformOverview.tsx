"use client";
import React from "react";
import Reveal from "components/Reveal";

const rows = [
  {
    title: "Simple platform",
    body:
      "Take your trading to the next level with a powerful, feature‑rich platform that keeps the essentials front and center.",
    align: "left", // image left, text right
  },
  {
    title: "Regulated and authorised",
    body:
      "Trade with confidence on an authorised platform that follows strict regulatory standards and robust controls.",
    align: "right",
  },
  {
    title: "All the tools you need",
    body:
      "High‑grade charting, unique analytic tools and customisable alerts. From sentiment and fundamentals to technicals—it's all inside.",
    align: "right",
  },
  {
    title: "Straightforward trading",
    body:
      "Our most complete platform yet—everything you need to trade across multiple asset classes with speed and control.",
    align: "left",
  },
];

const WebPlatformOverview: React.FC = () => {
  return (
    <section id="overview" className="py-6 position-relative overflow-hidden">
      <div className="container">
        <div className="mb-4 mb-lg-5 text-center">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(34,197,94,0.12)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#22c55e" }} />
              Trading Platform
            </div>
            <h2 className="display-6 fw-bold">Take your trading to the next level</h2>
            <p className="lead text-muted m-0" style={{ maxWidth: 900, marginInline: "auto" }}>
              The markets.com multi‑asset trading platform places you in control of every trade.
              Packed with features like News & Analysis as well as a suite of Sentiment, Fundamental and Technical tools for informed decisions.
            </p>
          </Reveal>
        </div>

        <div className="d-flex flex-column gap-5 gap-lg-6">
          {rows.map((row, i) => {
            const isImageLeft = row.align === "left";
            return (
              <div key={i} className="row align-items-center g-4 g-lg-5">
                <div className={`col-12 col-lg-6 ${isImageLeft ? "order-0" : "order-1 order-lg-0"}`}>
                  <Reveal delay={0.05}>
                    <div className="ratio ratio-16x9 rounded-4 overflow-hidden border" style={{ borderColor: "rgba(34,197,94,0.25)", boxShadow: "0 10px 30px rgba(34,197,94,0.15)" }}>
                      <img src="/images/trading-illustration1.png" alt={row.title} className="w-100 h-100 object-fit-cover" />
                    </div>
                  </Reveal>
                </div>
                <div className={`col-12 col-lg-6 ${isImageLeft ? "" : "order-0 order-lg-1"}`}>
                  <Reveal delay={0.12}>
                    <div className="p-4 p-lg-5 rounded-4 h-100" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(34,197,94,0.25)", backdropFilter: "blur(8px)" }}>
                      <h3 className="h2 fw-bold mb-2" style={{
                        background: "linear-gradient(90deg, #111 0%, #22c55e 100%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}>
                        {row.title}
                      </h3>
                      <p className="text-muted mb-3 mb-lg-4">{row.body}</p>
                      <ul className="text-muted small m-0 ps-3">
                        {i === 0 && (
                          <>
                            <li>Clean layouts and intuitive navigation</li>
                            <li>Custom templates and watchlists</li>
                          </>
                        )}
                        {i === 1 && (
                          <>
                            <li>Strong safeguards and data protection</li>
                            <li>Industry‑standard encryption</li>
                          </>
                        )}
                        {i === 2 && (
                          <>
                            <li>TradingView charts with 100+ indicators</li>
                            <li>Sentiment, Fundamental and Technical suites</li>
                          </>
                        )}
                        {i === 3 && (
                          <>
                            <li>Fast execution with customisable alerts</li>
                            <li>News & Analysis including live video sessions</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WebPlatformOverview;
