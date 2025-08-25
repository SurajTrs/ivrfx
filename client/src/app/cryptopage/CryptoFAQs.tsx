"use client";
import React from "react";
import Reveal from "components/Reveal";

const faqs = [
  {
    q: "What are crypto CFDs?",
    a: "Crypto CFDs let you speculate on cryptocurrency price movements without owning the underlying asset or needing a wallet.",
  },
  {
    q: "Do I need a crypto wallet?",
    a: "No. With CFDs you trade price action directly on our platform — no wallet or on-chain transfers required.",
  },
  {
    q: "Are there commissions on crypto?",
    a: "Many crypto CFDs are commission‑free — your primary cost is the spread. Overnight financing may apply on leveraged positions.",
  },
  {
    q: "When can I trade?",
    a: "Most major crypto markets operate 24/7, subject to platform maintenance windows.",
  },
];

export default function CryptoFAQs() {
  return (
    <section className="py-6" aria-label="Crypto FAQs">
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
          <div className="accordion" id="cryptoFaqs">
            {faqs.map((f, i) => {
              const id = `crypto-faq-${i}`;
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
                    data-bs-parent="#cryptoFaqs"
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
