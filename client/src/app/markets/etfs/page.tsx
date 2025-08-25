"use client";
import EtfsHero from 'app/etfspage/EtfsHero';
import EtfsIntro from 'app/etfspage/EtfsIntro';
import WhyTradeEtfs from 'app/etfspage/WhyTradeEtfs';
import EtfsWhyUs from 'app/etfspage/EtfsWhyUs';
import PopularEtfs from 'app/etfspage/PopularEtfs';
import EtfsMarketSnapshot from 'app/etfspage/EtfsMarketSnapshot';
import JoinSteps from 'app/forexpage/JoinSteps';
import EtfsFAQs from 'app/etfspage/EtfsFAQs';
import EtfsCTA from 'app/etfspage/EtfsCTA';
import TypesOfEtf from 'app/etfspage/TypesOfEtf';

export default function Page() {
  return (
    <main className="bg-white text-black" aria-label="ETFs trading page">
      <div className="text-white">
        <EtfsHero />
      </div>
      <EtfsIntro />
      <WhyTradeEtfs />
      <TypesOfEtf />
      <EtfsWhyUs />
      <PopularEtfs />
      <EtfsMarketSnapshot />
      <JoinSteps />
      <EtfsFAQs />
      <EtfsCTA />
    </main>
  );
}
