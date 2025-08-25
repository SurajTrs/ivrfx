"use client";
import React from "react";
import Reveal from "components/Reveal";

const faqs = [
  {
    q: "What is forex (FX) trading?",
    a: "Forex trading involves exchanging one currency for another to speculate on exchange rate movements, typically traded in pairs like EUR/USD.",
  },
  {
    q: "Are there commissions on FX?",
    a: "Most FX pairs are commission‑free — costs are primarily in the spread. Overnight financing (swaps) may apply.",
  },
  {
    q: "Can I practice on a demo?",
    a: "Yes. Open a free demo account with virtual funds to try the platform and test strategies before trading live.",
  },
  {
    q: "What platforms can I use?",
    a: "Trade on our web and mobile apps. Integrations with TradingView and MT4/MT5 are available in selected regions.",
  },
];

export default function ForexFAQs() {
  return (
    <section className="py-6" aria-label="Forex FAQs">
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
          <div className="accordion" id="forexFaqs">
            {faqs.map((f, i) => {
              const id = `fx-faq-${i}`;
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
                    data-bs-parent="#forexFaqs"
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
