"use client";
import React from "react";
import Reveal from "components/Reveal";

const faqs = [
  {
    q: "What are share CFDs?",
    a: "Contracts for difference (CFDs) let you speculate on price movements of shares without owning the underlying asset, going long or short with leverage.",
  },
  {
    q: "Do you charge commissions?",
    a: "Most share CFDs are commission‑free — costs are primarily in the spread. Overnight swaps and other fees may apply. See Trading Conditions for full details.",
  },
  {
    q: "Can I use a demo first?",
    a: "Yes. Use a free demo with live prices and virtual funds to explore the platform and practice strategies before going live.",
  },
  {
    q: "What platforms are supported?",
    a: "Trade on our web platform and iOS/Android apps. Connections to TradingView and MT4/MT5 are available in selected regions.",
  },
];

export default function SharesFAQs() {
  return (
    <section className="py-6" aria-label="FAQs">
      <div className="container">
        <div className="text-center mb-4">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-success bg-opacity-10 text-success small mb-2">
              <span className="rounded-circle bg-success" style={{ width: 6, height: 6 }} />
              Need more information?
            </div>
            <h2 className="h1 m-0">Frequently asked questions</h2>
          </Reveal>
        </div>

        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <div className="accordion" id="sharesFaqs">
            {faqs.map((f, i) => {
              const id = `faq-${i}`;
              return (
                <div className="accordion-item border rounded-3 mb-2 overflow-hidden" key={id}>
                  <h2 className="accordion-header" id={`${id}-heading`}>
                    <button
                      className={`accordion-button ${i === 0 ? "" : "collapsed"}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${id}-collapse`}
                      aria-expanded={i === 0 ? "true" : "false"}
                      aria-controls={`${id}-collapse`}
                    >
                      {f.q}
                    </button>
                  </h2>
                  <div
                    id={`${id}-collapse`}
                    className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                    aria-labelledby={`${id}-heading`}
                    data-bs-parent="#sharesFaqs"
                  >
                    <div className="accordion-body text-muted">{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
