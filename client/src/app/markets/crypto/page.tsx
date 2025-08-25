"use client";
import CryptoHero from 'app/cryptopage/CryptoHero';
import WhyTradeCrypto from 'app/cryptopage/WhyTradeCrypto';
import CryptoWhyUs from 'app/cryptopage/CryptoWhyUs';
import PopularCrypto from 'app/cryptopage/PopularCrypto';
import CryptoMarketSnapshot from 'app/cryptopage/CryptoMarketSnapshot';
import JoinSteps from 'app/forexpage/JoinSteps';
import CryptoFAQs from 'app/cryptopage/CryptoFAQs';
import CryptoCTA from 'app/cryptopage/CryptoCTA';

export default function Page() {
  return (
    <main className="bg-white text-black" aria-label="Crypto trading page">
      <div className="text-white">
        <CryptoHero />
      </div>
      <WhyTradeCrypto />
      <CryptoWhyUs />
      <PopularCrypto />
      <CryptoMarketSnapshot />
      <JoinSteps />
      <CryptoFAQs />
      <CryptoCTA />
    </main>
  );
}
