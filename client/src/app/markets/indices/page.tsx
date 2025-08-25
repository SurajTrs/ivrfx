import React from "react";
import IndicesHero from "app/indicespage/IndicesHero";
import WhyTradeCFDs from "app/indicespage/WhyTradeCFDs";
import IndicesBenefits from "app/indicespage/IndicesBenefits";
import PopularIndices from "app/indicespage/PopularIndices";
import MarketSnapshot from "app/indicespage/MarketSnapshot";
import IndicesSteps from "app/indicespage/IndicesSteps";
import IndicesFAQs from "app/indicespage/IndicesFAQs";
import IndicesCTA from "app/indicespage/IndicesCTA";

export const metadata = {
  title: "Trade Indices CFDs | IVRFX",
  description:
    "Trade the world’s top indices with tight spreads, leverage, and real-time market insights on a secure platform.",
};

export default function IndicesPage() {
  return (
    <main className="bg-white text-black" aria-label="Indices trading page">
      <div className="text-white">
        <IndicesHero />
      </div>
      <WhyTradeCFDs />
      <IndicesBenefits />
      <PopularIndices />
      <MarketSnapshot />
      <IndicesSteps />
      <IndicesFAQs />
      <IndicesCTA />
    </main>
  );
}
