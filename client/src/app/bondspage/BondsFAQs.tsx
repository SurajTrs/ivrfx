"use client";
import React from "react";
import Reveal from "components/Reveal";

const faqs = [
  {
    q: "What are bond CFDs?",
    a: "Bond CFDs let you speculate on government bond prices (and implied yields) without owning the underlying. You can go long or short.",
  },
  {
    q: "Which bonds can I trade?",
    a: "Popular benchmarks include US TNote 10Y, US TBond 30Y, GER 10Y Bund and UK 10Y Gilt.",
  },
  {
    q: "What are the trading costs?",
    a: "Costs are primarily in the spread. Overnight financing may apply on leveraged positions. Conversion fees apply if the instrument currency differs from your account currency.",
  },
  {
    q: "When can I trade bonds?",
    a: "Trading hours generally follow futures sessions for the respective benchmarks. Check the instrument's details for exact hours.",
  },
];

export default function BondsFAQs() {
  return (
    <section className="py-6" aria-label="Bonds FAQs">
      <div className="container">
        <div className="text-center mb-4">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
              Need more information?
            </div>
            <h2 className="h1 m-0">Frequently asked questions</h2>
          </Reveal>
        </div>

        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <div className="accordion" id="bondsFaqs">
            {faqs.map((f, i) => {
              const id = `bonds-faq-${i}`;
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
                    data-bs-parent="#bondsFaqs"
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
