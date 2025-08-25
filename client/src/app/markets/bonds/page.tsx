"use client";
import BondsHero from 'app/bondspage/BondsHero';
import BondsIntro from 'app/bondspage/BondsIntro';
import WhyTradeBonds from 'app/bondspage/WhyTradeBonds';
import TypesOfBond from 'app/bondspage/TypesOfBond';
import BondsWhyUs from 'app/bondspage/BondsWhyUs';
import PopularBonds from 'app/bondspage/PopularBonds';
import BondsMarketSnapshot from 'app/bondspage/BondsMarketSnapshot';
import JoinSteps from 'app/forexpage/JoinSteps';
import BondsFAQs from 'app/bondspage/BondsFAQs';
import BondsCTA from 'app/bondspage/BondsCTA';

export default function Page() {
  return (
    <main className="bg-white text-black" aria-label="Bonds trading page">
      <div className="text-white">
        <BondsHero />
      </div>
      <BondsIntro />
      <WhyTradeBonds />
      <TypesOfBond />
      <BondsWhyUs />
      <PopularBonds />
      <BondsMarketSnapshot />
      <JoinSteps />
      <BondsFAQs />
      <BondsCTA />
    </main>
  );
}
