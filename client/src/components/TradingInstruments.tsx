"use client";

import React from "react";
import { FaGoogle, FaAmazon, FaApple, FaChartLine, FaDollarSign, FaEuroSign, FaPoundSign, FaGlobe, FaFlag, FaWindows } from "react-icons/fa";
import { SiTesla, SiNvidia, SiBitcoin, SiEthereum, SiLitecoin, SiNetflix } from "react-icons/si";
import { GiOilDrum, GiWheat, GiGoldBar, GiReceiveMoney, GiMoneyStack } from "react-icons/gi";

type ChipProps = { title?: string; children: React.ReactNode };
const Chip = ({ title, children }: ChipProps) => (
  <span className="ti-chip" title={title}>
    {children}
  </span>
);

const TradingInstruments: React.FC = () => {
  const categories = [
    {
      id: "c1",
      title: "Forex",
      desc: "Trade major, minor and exotic FX pairs with tight spreads and rapid execution. The FX market runs 24/5 and is driven by interest rates, inflation and macro releases—use risk management as leverage amplifies both gains and losses.",
      icons: [
        <FaDollarSign key="usd" className="ti-c-usd" />, 
        <FaEuroSign key="eur" className="ti-c-eur" />, 
        <FaPoundSign key="gbp" className="ti-c-gbp" />
      ],
    },
    {
      id: "c2",
      title: "Shares",
      desc: "Go long or short on leading global equities via CFDs. Capture opportunities around earnings, product launches and news flow without owning the underlying shares, and trade both US and European markets with flexible position sizing.",
      icons: [
        <FaGoogle key="google" className="ti-c-google" />, 
        <FaAmazon key="amazon" className="ti-c-amazon" />, 
        <SiNetflix key="netflix" className="ti-c-netflix" />, 
        <SiTesla key="tesla" className="ti-c-tesla" />, 
        <FaApple key="apple" className="ti-c-apple" />, 
        <FaWindows key="msft" className="ti-c-microsoft" />, 
        <SiNvidia key="nvda" className="ti-c-nvidia" />
      ],
    },
    {
      id: "c3",
      title: "Commodities",
      desc: "Access energy, metals and agricultural commodities in one place. Trade oil, gold and wheat as CFDs to diversify portfolios and hedge inflation—prices react to supply/demand, geopolitics and seasonality.",
      icons: [
        <GiOilDrum key="oil" className="ti-c-oil" />, 
        <GiGoldBar key="gold" className="ti-c-gold" />, 
        <GiWheat key="wheat" className="ti-c-wheat" />
      ],
    },
    {
      id: "c4",
      title: "Indices",
      desc: "Indices track baskets of top companies (e.g., US500, US100, DE40). Trade broad market direction with a single position, benefit from session volatility and manage risk around key macro events like CPI and central bank decisions.",
      icons: [
        <FaChartLine key="idx" className="ti-c-index" />, 
        <FaGlobe key="globe" className="ti-c-globe" />, 
        <FaFlag key="flag" className="ti-c-flag" />
      ],
    },
    {
      id: "c5",
      title: "Bonds",
      desc: "Bond CFDs reflect moves in government and corporate debt. Yields shift with inflation and policy expectations—use bonds to balance equity exposure or express views on interest rate paths and duration.",
      icons: [
        <GiReceiveMoney key="b1" className="ti-c-bond" />, 
        <GiMoneyStack key="b2" className="ti-c-bond2" />, 
        <GiReceiveMoney key="b3" className="ti-c-bond" />
      ],
    },
    {
      id: "c6",
      title: "ETFs",
      desc: "ETF CFDs provide diversified exposure to sectors, factors and themes without buying each asset. Trade index trackers, bond funds and thematic ETFs with leverage and tight spreads.",
      icons: [
        <GiMoneyStack key="e1" className="ti-c-etf" />, 
        <FaChartLine key="e2" className="ti-c-etf2" />, 
        <FaGlobe key="e3" className="ti-c-etf3" />
      ],
    },
    {
      id: "c7",
      title: "Crypto",
      desc: "Trade leading digital assets like BTC, ETH and LTC with CFD flexibility. Crypto markets operate 24/7 and can be highly volatile—apply strict risk controls and stay alert to regulatory and on-chain developments.",
      icons: [
        <SiBitcoin key="btc" className="ti-c-btc" />, 
        <SiEthereum key="eth" className="ti-c-eth" />, 
        <SiLitecoin key="ltc" className="ti-c-ltc" />
      ],
    },
  ];

  return (
    <section className="ti-wrap py-5">
      <div className="container">
        <div className="ti-hero-img my-4">
          <img src="/images/gan-t-hero.png" alt="Google, Amazon, Netflix, Tesla coins" />
        </div>

        <h2 className="ti-heading text-center mb-4">IVRFX trading instruments</h2>

        <div className="ti-grid">
          {categories.map((c) => (
            <article key={c.id} className="ti-card">
              <div className="ti-chip-row" aria-hidden>
                {(c as any).icons?.map((IconEl: React.ReactNode, i: number) => (
                  <Chip key={i}>{IconEl}</Chip>
                ))}
              </div>
              <h5 className="ti-card-title">{c.title}</h5>
              <p className="ti-card-desc">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
          {/* Bottom action */}
          <div className="offers-actions">
          <a href="/register" className="register-btn" aria-label="Register for an account">
            Register
          </a>
        </div>
    </section>
  );
};

export default TradingInstruments;
