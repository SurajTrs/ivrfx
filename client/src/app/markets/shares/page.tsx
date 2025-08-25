import MarketSnapshot from "app/sharespage/MarketSnapshot";
import PopularShares from "app/sharespage/PopularShares";
import SharesCTA from "app/sharespage/SharesCTA";
import SharesHero from "app/sharespage/SharesHero";
import WhyTradeCFDs from "app/sharespage/WhyTradeCFDs";
import SharesBenefits from "app/sharespage/SharesBenefits";
import SharesSteps from "app/sharespage/SharesSteps";
import SharesFAQs from "app/sharespage/SharesFAQs";
import React from "react";

export const metadata = {
  title: "Trade Shares CFDs | IVRFX",
  description:
    "Access a wide range of global shares. Trade CFDs with competitive spreads and robust tools designed for every trader.",
};

export default function Sharespage() {
  return (
    <main className="bg-white text-black" aria-label="Shares trading page">
      <div className="text-white">
        <SharesHero />
      </div>
      <WhyTradeCFDs />
      <SharesBenefits />
      <PopularShares />
      <MarketSnapshot />
      <SharesSteps />
      <SharesFAQs />
      <SharesCTA />
    </main>
  );
}