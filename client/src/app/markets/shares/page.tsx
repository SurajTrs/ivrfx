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
  title: "Trade Shares CFDs | Markets.com",
  description:
    "Trade global shares with tight spreads, market insights, and powerful tools. Explore popular shares, live snapshots, expert analysis, and get started today.",
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