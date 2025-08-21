"use client";
import React from "react";

const stats = [
  { value: "$3TN+", label: "Trading volume" },
  { value: "38", label: "Awards in 2024" },
  { value: "170+", label: "Countries" },
  { value: "17", label: "Years in the market" },
  { value: "24/5", label: "Multilingual support" },
  { value: "1:1000", label: "Max leverage" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="container py-5">
      {/* Heading */}
      <div className="row mb-5">
        <div className="col-lg-8">
          <h2 className="fw-bold display-5 mb-3">
            What makes{" "}
            <span style={{ color: "rgba(148,0,211,1)" }}>IVRFX</span> special?
          </h2>
          <p className="text-muted fs-4">
            Trusted by <strong>4,700,000+ traders</strong> worldwide — here’s why they choose us.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="row g-4 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2">
            <div className="stat-card-wrap">
              <div className="stat-card h-100 d-flex flex-column justify-content-center align-items-center">
                <h3 className="stat-value fw-bold mb-2 display-6">{stat.value}</h3>
                <p className="mb-0 fw-semibold text-secondary fs-5">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .stat-card-wrap {
          position: relative;
          height: 100%;
          padding: 1px; /* gradient border */
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(148, 0, 211, 0.7), rgba(0, 212, 255, 0.7));
          transition: transform 0.35s ease, filter 0.35s ease;
          perspective: 800px;
        }

        .stat-card {
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 24px;
          min-height: 128px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          transform-style: preserve-3d;
        }

        /* Hover: lift + slight tilt + glow */
        .stat-card-wrap:hover .stat-card {
          transform: translateY(-8px) scale(1.035) rotateX(3deg) rotateY(-3deg);
          box-shadow: 0 14px 36px rgba(148, 0, 211, 0.18), 0 6px 18px rgba(0, 0, 0, 0.12);
        }

        .stat-value {
          margin: 0 0 0.25rem 0;
          background: linear-gradient(135deg, rgba(148, 0, 211, 1), rgba(0, 155, 255, 1));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: 0.2px;
        }

        /* Reduce motion preference */
        @media (prefers-reduced-motion: reduce) {
          .stat-card-wrap,
          .stat-card {
            transition: none;
          }
          .stat-card-wrap:hover .stat-card {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;
