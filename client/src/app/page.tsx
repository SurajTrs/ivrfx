"use client";
import Features from 'components/Features';
import Home from 'components/Home';

import Platforms from 'components/Platforms';
import StatsSection from 'components/StatsSection';

import AvailableOffers from 'components/AvailableOffers';
import * as React from 'react';
import Navbar from 'components/Navbar';
import MarketInsights from 'components/MarketInsights';
import ReviewsSection from 'components/ReviewsSection';
import TradingInstruments from 'components/TradingInstruments';
import MostTraded from 'components/MostTraded';
import TrustHighlights from 'components/TrustHighlights';
import Footer from 'components/Footer';
import FooterDisclaimer from 'components/FooterDisclaimer';

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="page-main">
        <Home />
        <Features />
        <StatsSection />
        <MostTraded />
        <Platforms />
        <AvailableOffers />
        <MarketInsights/>
        <ReviewsSection/>
        <TradingInstruments/>
        <TrustHighlights/>
        <Footer/>
        <FooterDisclaimer/>
      </main>
    </>
  );
}
