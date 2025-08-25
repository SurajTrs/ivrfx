"use client";
import React from "react";

type Card = {
  title: string;
  subtitle: string;
  href: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "Mobile App",
    subtitle: "The only app you need to trade seamlessly!",
    href: "#",
    image: "/images/trading-illustration.png",
  },
  {
    title: "TradingView",
    subtitle: "Unleash the power of TradingView with IVRFX",
    href: "#",
    image: "/images/bg-pattern.jpg",
  },
  {
    title: "Social Trading App",
    subtitle: "Follow top traders and learn from the best!",
    href: "#",
    image: "/images/bg-pattern1.jpg",
  },
  {
    title: "Desktop",
    subtitle: "Rich in features and benefits with unique analytic tools",
    href: "#",
    image: "/images/trading-illustration1.png",
  },
  {
    title: "MetaTrader 5",
    subtitle: "MT4's more powerful and advanced upgrade",
    href: "#",
    image: "/images/bg-pattern1.jpg",
  },
  {
    title: "MetaTrader 4",
    subtitle: "Still the most popular and easy to use!",
    href: "#",
    image: "/images/bg-pattern.jpg",
  },
];

const Arrow = () => <span aria-hidden className="ms-1">↗</span>;

const Platforms: React.FC = () => {
  return (
    <section className="platforms-section min-vh-auto d-flex flex-column justify-content-center py-5">
      <div className="container text-center mb-4">
        <h2 className="fw-bold mb-2">Trade on platforms that fit your style</h2>
        <p className="text-muted mb-4">
          Powerful tools across mobile, desktop, web and social trading.
        </p>
      </div>

      <div className="container">
        <div className="platforms-grid">
          {cards.map((card, i) => (
            <PlatformCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PlatformCard: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="platform-card-wrap">
      <a
        href={card.href}
        aria-label={card.title}
        className="platform-card d-block position-relative overflow-hidden rounded-4 shadow-lg"
      >
        <img
          src={card.image}
          alt={card.title}
          className="platform-card-img w-100 h-100 object-fit-cover"
        />
        <div className="platforms-overlay position-absolute top-0 start-0 w-100 h-100" />
        <div className="platform-card-content position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3">
          <h6 className="platform-card-title fw-semibold mb-1">
            {card.title} <Arrow />
          </h6>
          <p className="platform-card-subtitle mb-0 small">{card.subtitle}</p>
        </div>
      </a>
    </div>
  );
};

export default Platforms;
