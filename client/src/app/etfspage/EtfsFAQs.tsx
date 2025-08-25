"use client";
import React from "react";
import Reveal from "components/Reveal";

const faqs = [
  {
    q: "What are ETFs?",
    a: "Exchange Traded Funds track baskets of assets like indices, sectors, or commodities and trade on exchanges like stocks.",
  },
  {
    q: "What are ETF CFDs?",
    a: "ETF CFDs let you speculate on price movements of ETFs without owning the fund, with the ability to go long or short.",
  },
  {
    q: "Are there commissions on ETFs?",
    a: "Many ETF CFDs are commission-free; costs are primarily in the spread. Overnight financing may apply on leveraged positions.",
  },
  {
    q: "When can I trade ETFs?",
    a: "ETF trading hours follow their underlying exchange sessions; out-of-hours pricing may vary.",
  },
];

export default function EtfsFAQs() {
  return (
    <section className="py-6" aria-label="ETFs FAQs">
      <div className="container">
        <div className="text-center mb-4">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill bg-primary bg-opacity-10 text-primary small mb-2">
              <span className="rounded-circle bg-primary" style={{ width: 6, height: 6 }} />
              Need more information?
            </div>
            <h2 className="h1 m-0">Frequently asked questions</h2>
          </Reveal>
        </div>

        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <div className="accordion" id="etfsFaqs">
            {faqs.map((f, i) => {
              const id = `etfs-faq-${i}`;
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
                    data-bs-parent="#etfsFaqs"
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
