import CommoditiesCTA from "app/commoditiespage/CommoditiesCTA";
import CommoditiesHero from "app/commoditiespage/CommoditiesHero";
import PopularCommodities from "app/commoditiespage/PopularCommodities";
import MarketSnapshot from "app/commoditiespage/MarketSnapshot";
import WhyTradeCFDs from "app/commoditiespage/WhyTradeCFDs";
import CommoditiesBenefits from "app/commoditiespage/CommoditiesBenefits";
import CommoditiesSteps from "app/commoditiespage/CommoditiesSteps";
import CommoditiesFAQs from "app/commoditiespage/CommoditiesFAQs";
import React from "react";

export const metadata = {
  title: "Trade Commodities CFDs | IVRFX",
  description:
    "Speculate on commodities driving the global economy. Trade CFDs on energies, metals, and softs with tight spreads, insights, and powerful tools.",
};

export default function CommoditiesPage() {
  return (
    <main className="bg-white text-black" aria-label="Commodities trading page">
      <div className="text-white">
        <CommoditiesHero />
      </div>
      <WhyTradeCFDs />
      <CommoditiesBenefits />
      <PopularCommodities />
      <MarketSnapshot />
      <CommoditiesSteps />
      <CommoditiesFAQs />
      <CommoditiesCTA />
    </main>
  );
}
