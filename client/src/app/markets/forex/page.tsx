"use client";
import ForexHero from 'app/forexpage/ForexHero';
import WhyTradeForex from 'app/forexpage/WhyTradeForex';
import CurrencyPairsZigzag from 'app/forexpage/CurrencyPairsZigzag';
import PopularForex from 'app/forexpage/PopularForex';
import ForexMarketSnapshot from 'app/forexpage/ForexMarketSnapshot';
import JoinSteps from 'app/forexpage/JoinSteps';
import ForexFAQs from 'app/forexpage/ForexFAQs';
import ForexCTA from 'app/forexpage/ForexCTA';
import ForexWhyUs from 'app/forexpage/ForexWhyUs';

export default function Page() {
  return (
    <main className="bg-white text-black" aria-label="Forex trading page">
      <div className="text-white">
        <ForexHero />
      </div>
      <WhyTradeForex />
      <ForexWhyUs />
      <CurrencyPairsZigzag />
      <PopularForex />
      <ForexMarketSnapshot />
      <JoinSteps />
      <ForexFAQs />
      <ForexCTA />
    </main>
  );
}
