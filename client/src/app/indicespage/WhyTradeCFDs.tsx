"use client";
import React, { useRef, useState, useCallback } from "react";
import Reveal from "components/Reveal";

export default function WhyTradeCFDs() {
  // Simple reusable tilt wrapper for subtle 3D hover
  const Tilt: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [transform, setTransform] = useState<string>("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)");

    const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -6; // tilt up/down
      const ry = ((x / rect.width) - 0.5) * 6; // tilt left/right
      setTransform(`perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`);
    }, []);

    const handleLeave = useCallback(() => {
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)");
    }, []);

    return (
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ transform, transition: "transform 180ms ease-out", willChange: "transform" }}
      >
        {children}
      </div>
    );
  };
  return (
    <section
      className="pt-8 pt-lg-8 pb-7 position-relative overflow-hidden"
      aria-label="Why trade index CFDs"
      style={{
        background:
          "linear-gradient(180deg, #F8FBFA 0%, #FFFFFF 60%)",
      }}
    >
      {/* subtle decorative glow (purple) */}
      <div
        className="position-absolute rounded-circle"
        style={{
          width: 420,
          height: 420,
          filter: "blur(120px)",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(147, 51, 234, 0.25) 0%, rgba(0,0,0,0) 70%)",
          top: -160,
          left: -120,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div className="container position-relative">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6">
            <Reveal>
              <div
                className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill small mb-3 mt-2 mt-lg-3"
                style={{ background: "rgba(147, 51, 234, 0.12)", color: "#9333EA" }}
              >
                <span
                  className="rounded-circle ping-dot"
                  style={{ width: 6, height: 6, backgroundColor: "#9333EA", position: "relative", display: "inline-block" }}
                />
                Why trade indices
              </div>
              <h2
                className="display-6 fw-bold mb-3 sheen-anim"
                style={{
                  background:
                    "linear-gradient(90deg, #0D1117 0%, #7E22CE 40%, #C084FC 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Why trade Indices CFDs
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted mb-4 pe-lg-4">
                Indices let you take a view on entire stock markets like the Dow Jones, Nasdaq, DAX and FTSE in a single trade.
                Go long or short with tight spreads and fast execution.
              </p>
            </Reveal>
            <div className="row g-3 g-lg-4">
              {[
                { t: "Diversification", d: "Express a view on a whole market, not a single stock.", i: "bi-grid-1x2" },
                { t: "Efficiency", d: "Low spreads from 1pt on major indices.", i: "bi-speedometer2" },
                { t: "Flexibility", d: "Trade 24/5 with long and short opportunities.", i: "bi-arrow-left-right" },
                { t: "Liquidity", d: "Deep, continuous markets across sessions.", i: "bi-water" },
              ].map((b, i) => (
                <div className="col-12 col-md-6" key={b.t}>
                  <Reveal delay={0.12 + i * 0.06}>
                    <Tilt>
                      <div
                        className="p-4 rounded-4 border bg-white h-100 shadow-sm hover-lift transition"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 100%)",
                          backdropFilter: "blur(6px)",
                          WebkitBackdropFilter: "blur(6px)",
                        }}
                      >
                        <div className="d-flex align-items-start gap-3">
                          <div
                            className="rounded-3 d-inline-flex align-items-center justify-content-center"
                            style={{
                              width: 36,
                              height: 36,
                              background: "rgba(147, 51, 234, 0.12)",
                              color: "#9333EA",
                            }}
                          >
                            <i className={`bi ${b.i}`} />
                          </div>
                          <div>
                            <div className="fw-semibold mb-1">{b.t}</div>
                            <div className="text-muted small">{b.d}</div>
                          </div>
                        </div>
                      </div>
                    </Tilt>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={0.2}>
              <div
                className="p-4 p-lg-5 rounded-4 border border-opacity-25 h-100 float-anim"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.35) 100%)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="rounded-circle d-inline-flex align-items-center justify-content-center"
                    style={{ width: 44, height: 44, background: "rgba(147, 51, 234, 0.12)", color: "#9333EA" }}
                  >
                    <i className="bi bi-graph-up-arrow" />
                  </div>
                  <div>
                    <div className="fw-semibold">Take a macro view</div>
                    <div className="text-muted small">Position for market-wide moves</div>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  With index CFDs you can position for market-wide moves, hedge your equity portfolio, and trade news events easily.
                </p>
                <div className="d-flex flex-column gap-2">
                  {[
                    "Hedge single-stock exposure with index shorts",
                    "React to macro news in seconds",
                    "Trade global sessions 24/5",
                  ].map((point) => (
                    <div key={point} className="d-flex align-items-start gap-2">
                      <i className="bi bi-check-circle-fill" style={{ color: "#9333EA" }} />
                      <span className="small text-muted">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      {/* Steps: violet themed */}
      <div className="container mt-5 pt-2">
        <div className="row g-4">
          {[
            { n: 1, t: "Create your account", d: "Sign up and verify your profile in minutes." },
            { n: 2, t: "Fund your account", d: "Secure deposits via cards, bank transfer, and more." },
            { n: 3, t: "Start trading indices", d: "Trade major indices with tight spreads 24/5." },
          ].map((s, i) => (
            <div className="col-12 col-md-4" key={s.n}>
              <Reveal delay={0.05 + i * 0.05}>
                <div
                  className="p-4 rounded-4 border bg-white h-100 shadow-sm hover-lift"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.8) 100%)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  <div className="d-flex align-items-start gap-3">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center flex-shrink-0"
                      style={{ width: 40, height: 40, background: "rgba(147, 51, 234, 0.12)", color: "#9333EA", fontWeight: 700 }}
                      aria-hidden="true"
                    >
                      {s.n}
                    </div>
                    <div>
                      <div className="fw-semibold mb-1">{s.t}</div>
                      <div className="text-muted small">{s.d}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
      {/* scoped animations */}
      <style jsx>{`
        /* heading sheen */
        @keyframes sheen {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .sheen-anim {
          background-size: 200% 100%;
          animation: sheen 6s linear infinite;
        }
        /* floating card */
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .float-anim { animation: floatY 6s ease-in-out infinite; will-change: transform; }
        /* badge dot ping */
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .ping-dot::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: #8B5CF6;
          animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        /* reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .sheen-anim { animation: none; }
          .float-anim { animation: none; }
          .ping-dot::after { animation: none; }
        }
      `}</style>
    </section>
  );
}
