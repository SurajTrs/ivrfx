"use client";
import React from "react";
import Image from "next/image";

type Item = { title: string; desc: string; img: { src: string; alt: string } };

export default function TrustHighlights() {
  const items: Item[] = [
    {
      title: "Over 4,700,000 users",
      desc:
        "Millions of traders continue to choose us as their trusted broker, a testimony to our reputation for professionalism and excellence.",
      img: { src: "/images/trading-illustration.png", alt: "Users and platform screens" },
    },
    {
      title: "Authorised & regulated",
      desc:
        "We operate under strict regulatory oversight in multiple jurisdictions, helping keep your funds and trading secure.",
      img: { src: "/images/trading-illustration1.png", alt: "Secure vault" },
    },
    {
      title: "Transparent pricing",
      desc:
        "Highly competitive market conditions such as low trading fees and tight spreads starting from 0.0, with leverage options up to 1:500.",
      img: { src: "/images/gan-t-hero.png", alt: "Pricing dashboard" },
    },
    {
      title: "170+ countries across the world",
      desc:
        "Our products and services have a global outreach, covering several regions and continents around the globe.",
      img: { src: "/images/trading-illustration.png", alt: "Global reach" },
    },
    {
      title: "Multilingual customer support 24/5",
      desc:
        "Get assistance when you need it. Our team supports multiple languages to help you trade with confidence.",
      img: { src: "/images/trading-illustration1.png", alt: "Support channels" },
    },
    {
      title: "Secured assets & funds",
      desc:
        "Your funds are kept safe with robust security practices, segregation of client money, and trusted providers.",
      img: { src: "/images/gan-t-hero.png", alt: "Secured funds on mobile" },
    },
  ];

  return (
    <section className="trust-wrap">
      <div className="trust-inner">
        <div className="trust-grid">
          {items.map((it, i) => (
            <article key={it.title} className="trust-mini">
              <div className="trust-mini-copy">
                <span className="trust-badge"><span className="trust-dot" />Featured</span>
                <h3 className="trust-mini-title">{it.title}</h3>
                <p className="trust-mini-desc">{it.desc}</p>
              </div>
              <div className="trust-mini-media">
                <Image
                  src={it.img.src}
                  alt={it.img.alt}
                  width={320}
                  height={200}
                  className="trust-mini-img"
                  priority={i < 2}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

