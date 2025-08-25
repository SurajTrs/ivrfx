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
  title: "Trade Indices CFDs | Markets.com",
  description:
    "Trade the world’s biggest stock markets with tight spreads, fast execution and powerful tools.",
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
