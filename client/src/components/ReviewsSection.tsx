"use client";

import React, { useEffect, useRef, useState } from "react";

type Review = {
  id: string;
  title: string;
  name: string;
  date: string;
  body: string;
};

const data: Review[] = [
  {
    id: "r1",
    title: "Marketing you know the ...",
    name: "Muhammedshakir Sa...",
    date: "April 22",
    body:
      "Marketing you know the best job because i will do everything same like for ...",
  },
  {
    id: "r2",
    title: "Jibin jibin",
    name: "customer",
    date: "April 21",
    body: "Jibin jibin",
  },
  {
    id: "r3",
    title: "Support team is amazing...",
    name: "john knehl",
    date: "April 20",
    body:
      "Amazing support. Ash and Raman helped me as well as ...",
  },
  {
    id: "r4",
    title: "Very professional agent",
    name: "nefzi oumayma",
    date: "March 21",
    body: "Very professional agent Noor. Thank you for all",
  },
  {
    id: "r5",
    title: "I would like to thank sup...",
    name: "Ahmed Al-Ahmed",
    date: "February 4",
    body:
      "I would like to thank support agent Azfar for his great support and patience in resol...",
  },
];

const StarRow = () => (
  <div className="tp-stars" aria-label="5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className="tp-star" />
    ))}
  </div>
);

const ReviewsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth - 2; // tolerance
    setCanLeft(el.scrollLeft > 2);
    setCanRight(el.scrollLeft < max);
  };

  useEffect(() => {
    updateArrows();
    const el = ref.current;
    if (!el) return;
    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const amt = Math.round(el.clientWidth * 0.85);
    el.scrollBy({ left: dir === "left" ? -amt : amt, behavior: "smooth" });
  };

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const el = ref.current;
    if (!el) return;
    // Convert vertical wheel to horizontal scroll when shift is not pressed
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      el.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  };

  return (
    <section className="reviews-wrap py-5" role="region" aria-label="Customer reviews">
      <div className="container">
        <h2 className="reviews-heading text-center mb-2">The reviews speak for us</h2>
        <p className="reviews-sub text-center mb-4">Here is what our customers have to say</p>

        <div className="reviews-slider position-relative">
          <button
            type="button"
            className={`reviews-arrow left${canLeft ? "" : " disabled"}`}
            aria-label="Previous"
            onClick={() => scroll("left")}
            disabled={!canLeft}
          >
            ‹
          </button>

          <div
            className="reviews-track"
            ref={ref}
            onWheel={onWheel}
            aria-live="polite"
          >
            {data.map((r) => (
              <article key={r.id} className="review-card">
                <StarRow />
                <h6 className="review-title">{r.title}</h6>
                <p className="review-body">{r.body}</p>
                <div className="review-meta">
                  <span className="review-name">{r.name}</span>
                  <span className="review-dot">•</span>
                  <span className="review-date">{r.date}</span>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className={`reviews-arrow right${canRight ? "" : " disabled"}`}
            aria-label="Next"
            onClick={() => scroll("right")}
            disabled={!canRight}
          >
            ›
          </button>
        </div>

        <div className="reviews-summary text-center mt-3">
          Rated <strong>4.0</strong> / 5 based on <strong>1,221</strong> reviews. Showing our 5 star reviews.
          <div className="tp-badge mx-auto mt-2" aria-label="Trustpilot">
            <span className="tp-star s" /><span className="tp-star s" /><span className="tp-star s" /><span className="tp-star s" /><span className="tp-star s" />
            <span className="tp-text">Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
