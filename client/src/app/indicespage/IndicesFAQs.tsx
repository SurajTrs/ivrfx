"use client";
import React from "react";
import Reveal from "components/Reveal";

const faqs = [
  { q: "What are index CFDs?", a: "CFDs let you speculate on price movements of stock market indices without owning the underlying." },
  { q: "What are the costs?", a: "Most indices are commission‑free. Your costs are primarily the spread and any overnight financing (swaps)." },
  { q: "Can I go short?", a: "Yes. You can take long or short positions depending on your market view." },
  { q: "Is there a demo?", a: "Yes. Practice with virtual funds on live prices before going live." },
];

export default function IndicesFAQs() {
  return (
    <section className="py-6" aria-label="Indices FAQs">
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
          <div className="accordion" id="indicesFaqs">
            {faqs.map((f, i) => {
              const id = `indices-faq-${i}`;
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
                    data-bs-parent="#indicesFaqs"
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
