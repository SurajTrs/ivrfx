"use client";
import React from "react";
import Reveal from "components/Reveal";

const faqs = [
  { q: "Is the web platform secure?", a: "Yes. We use industry‑standard encryption and secure session management across the stack." },
  { q: "Do I need to install anything?", a: "No. The platform runs in your browser. For best performance, use the latest Chrome, Edge, Safari or Firefox." },
  { q: "Can I customize layouts?", a: "Yes. Save chart templates, layouts and watchlists. Set custom alerts and themes." },
  { q: "Is TradingView included?", a: "A deep integration is included in the web platform with multi‑layout charts and indicators." },
];

const WebPlatformFAQs: React.FC = () => {
  return (
    <section className="py-6" aria-label="Web Platform FAQs">
      <div className="container">
        <div className="text-center mb-4">
          <Reveal>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mt-3 mb-2" style={{ background: "rgba(155,81,224,0.12)", color: "#9b51e0", border: "1px solid rgba(155,81,224,0.35)" }}>
              <span className="rounded-circle" style={{ width: 6, height: 6, background: "#9b51e0" }} />
              Need more information?
            </div>
            <h2 className="h1 m-0">Frequently asked questions</h2>
          </Reveal>
        </div>
        <div className="mx-auto" style={{ maxWidth: 880 }}>
          <div className="accordion" id="webPlatFaqs">
            {faqs.map((f, i) => {
              const id = `webplat-faq-${i}`;
              return (
                <div className="accordion-item border rounded-3 mb-2 overflow-hidden" key={id}>
                  <h2 className="accordion-header" id={`${id}-heading`}>
                    <button className={`accordion-button ${i === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}-collapse`} aria-expanded={i === 0 ? "true" : "false"} aria-controls={`${id}-collapse`}>
                      {f.q}
                    </button>
                  </h2>
                  <div id={`${id}-collapse`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`} aria-labelledby={`${id}-heading`} data-bs-parent="#webPlatFaqs">
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
};

export default WebPlatformFAQs;
