"use client";
import React from "react";
import Reveal from "components/Reveal";

export default function WhyTradeCFDs() {
  return (
    <section className="py-6" aria-label="Why trade share CFDs with ivrfx">
      <div className="container">
        {/* Block 1: Title + bullets (text left, image right) */}
        <div className="row align-items-center g-4 g-lg-5 mb-5">
          <div className="col-12 col-lg-6">
            <Reveal>
              <h2 className="display-6 mb-3 text-dark fw-bold">Why trade share CFDs with ivrfx</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="list-unstyled m-0 d-grid gap-2">
                <li className="d-flex gap-2">
                  <span className="text-success">•</span>
                  <span>Access a variety of stocks CFD online via our proprietary platform</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="text-success">•</span>
                  <span>Bullish or Bearish? Go Long and Short with leverage, depending on your outlook</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="text-success">•</span>
                  <span>Tight spreads and competitive overnight swaps</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="text-success">•</span>
                  <span>Leverage up to 1:10</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="text-success">•</span>
                  <span>Fundamental</span>
                </li>
                <li className="d-flex gap-2">
                  <span className="text-success">•</span>
                  <span>Customisable trading alerts – don’t miss the price changes that matter</span>
                </li>
              </ul>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={0.15}>
              <img src="/images/trading-illustration.png" alt="Why trade share CFDs" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </Reveal>
          </div>
        </div>

        {/* Block 2: Alerts (image left, text right) */}
        <div className="row align-items-center g-4 g-lg-5 mb-5 flex-lg-row-reverse">
          <div className="col-12 col-lg-6">
            <Reveal>
              <h3 className="h2 mb-3 text-dark fw-bold">Don’t miss out on the perfect time to trade</h3>
              <p className="text-muted mb-3">
                Get the information you need, precisely when you need it most. Has your trade hit that crucial ‘sell’ price?
                Has your currency pair just hit the price you were waiting to buy at? Our in-app trading alerts deliver the
                news to you, even if you don’t have your trading app open:
              </p>
              <ul className="list-unstyled d-grid gap-2 m-0">
                <li className="d-flex gap-2"><span className="text-success">•</span><span>Get alerts on the move through our mobile app push notifications</span></li>
                <li className="d-flex gap-2"><span className="text-success">•</span><span>7 different types of alert: don’t miss out on the data you care about</span></li>
                <li className="d-flex gap-2"><span className="text-success">•</span><span>Buy or sell alerts to make sure you get in and out at the perfect time</span></li>
              </ul>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={0.15}>
              <img src="/images/gan-t-hero.png" alt="Trading alerts on mobile" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </Reveal>
          </div>
        </div>

        {/* Block 3: Financial commentary (text left, image right) */}
        <div className="row align-items-center g-4 g-lg-5 mb-5">
          <div className="col-12 col-lg-6">
            <Reveal>
              <h3 className="h2 mb-3 text-dark fw-bold">In-platform financial commentary</h3>
              <p className="text-muted mb-2">
                Central bank statements, earnings announcements, national budgets, new regulations… if it could potentially
                impact your trades, you’ll hear about it through the platform’s newsfeed.
              </p>
              <p className="text-muted mb-0">
                And you can tailor your feed so that you get only the analysis and news that you care about. The rest? You can just block it out.
                No market noise. Just the data you need, when you need it.
              </p>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6">
            <Reveal delay={0.15}>
              <img src="/images/trading-illustration1.png" alt="Financial commentary feed" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </Reveal>
          </div>
        </div>

        {/* Block 4: Expert analysis (image left, text right) */}
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6 order-lg-2">
            <Reveal>
              <h3 className="h2 mb-3 text-dark fw-bold">Use our expert analysis to help guide your decisions</h3>
              <p className="text-muted mb-2">
                Our analysts have been featured in a range of national news outlets including the BBC, Bloomberg and CNBC.
              </p>
              <p className="text-muted mb-0">
                From day one, you’ll get their expert market commentary and insights delivered straight to your account, so you can use
                their years of market experience to help you become a more knowledgeable trader.
              </p>
            </Reveal>
          </div>
          <div className="col-12 col-lg-6 order-lg-1">
            <Reveal delay={0.15}>
              <img src="/images/bg-pattern.jpg" alt="Expert market insights" className="img-fluid rounded-4 shadow-lg hover-lift" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
