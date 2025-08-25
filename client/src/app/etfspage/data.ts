export type EtfAsset = {
  symbol: string;
  name: string;
  bid: number;
  ask: number;
  change: number; // percent change
};

export const popularEtfs: EtfAsset[] = [
  { symbol: "GLD", name: "SPDR Gold Shares", bid: 309.64, ask: 311.52, change: 1.06 },
  { symbol: "QQQ", name: "Invesco QQQ Trust", bid: 490.06, ask: 490.62, change: 4.65 },
  { symbol: "SPY", name: "SPDR S&P 500 ETF Trust", bid: 454.93, ask: 457.70, change: 1.91 },
  { symbol: "IXN", name: "iShares Global Tech ETF", bid: 95.50, ask: 96.39, change: 1.61 },
  { symbol: "IWM", name: "iShares Russell 2000 ETF", bid: 198.44, ask: 199.10, change: 2.15 },
  { symbol: "XLV", name: "Health Care Select Sector SPDR", bid: 137.62, ask: 138.45, change: 0.78 },
];
