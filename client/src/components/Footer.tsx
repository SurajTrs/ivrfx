"use client";
import React from "react";
import Image from "next/image";

export default function TrustFooter() {
  const cols: Array<{ title: string; items: string[] }> = [
    { title: "Markets", items: ["Forex", "Shares", "Commodities", "Indices", "Crypto", "ETFs", "Bonds"] },
    { title: "Trading", items: ["Trading Tools", "Web Platform", "App", "TradingView", "MT4", "MT5"] },
    { title: "Learn", items: ["News", "Trading Basics", "Glossary", "Webinars", "Traders' Clinic", "Education Centre"] },
    { title: "About", items: ["Why us", "Global Offering", "Our Group", "Careers", "Legal Pack", "Safety Online", "Complaints", "Contact Support", "Help Centre", "Sitemap", "Cookie Disclosure", "Awards & Media"] },
    { title: "Promo", items: ["marketsClub", "Welcome Bonus", "Loyal Bonus", "Referral Bonus"] },
    { title: "Partnership", items: ["Affiliation", "IB"] },
  ];

  return (
    <footer className="footer-wrap">
      <div className="footer-inner">
        {/* Top area */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">ivrfx<span className="brand-dot">●</span>com</div>
            <div className="footer-stores">
              <a className="store-btn gp" href="#" aria-label="Get it on Google Play">Google Play</a>
              <a className="store-btn as" href="#" aria-label="Download on the App Store">App Store</a>
              <a className="store-btn wt" href="#" aria-label="Trade on Web Trader">Web Trader</a>
              <a className="store-btn tv" href="#" aria-label="Trade on TradingView">TradingView</a>
            </div>
            <div className="footer-contact">
              <div className="fc-h">Contact us</div>
              <a href="mailto:support@ivrfx.com" className="fc-link">support@ivrfx.com</a>
              <a href="tel:+12845680155" className="fc-link">+1 284 568 0155</a>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="soc"/> 
              <a href="#" aria-label="Twitter" className="soc"/> 
              <a href="#" aria-label="Instagram" className="soc"/> 
              <a href="#" aria-label="YouTube" className="soc"/> 
              <a href="#" aria-label="LinkedIn" className="soc"/> 
              <a href="#" aria-label="TikTok" className="soc"/> 
            </div>
          </div>

          <div className="footer-cols">
            {cols.map((c) => (
              <div key={c.title} className="footer-col">
                <h4 className="footer-col-title">{c.title}</h4>
                <ul className="footer-col-list">
                  {c.items.map((i) => (
                    <li key={i}><a href="#" className="footer-link">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Legal Pack</a>
            <a href="#">Cookie Disclosure</a>
            <a href="#">Safety Online</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="footer-payments">
            <span className="pm visa">VISA</span>
            <span className="pm net">NETELLER</span>
            <span className="pm skrill">Skrill</span>
            <span className="pm wire">WIRE</span>
            <span className="pm zota">ZOTAPAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
