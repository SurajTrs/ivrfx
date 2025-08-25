export type IndexItem = {
  ticker: string;
  name: string;
  sell: number;
  buy: number;
  change: number; // percent
};

export const popularIndices: IndexItem[] = [
  { ticker: "US30", name: "Dow Jones 30", sell: 39520, buy: 39526, change: 0.18 },
  { ticker: "US100", name: "Nasdaq 100", sell: 18920, buy: 18926, change: -0.12 },
  { ticker: "DE30", name: "Germany 40 (DAX)", sell: 18450, buy: 18456, change: 0.05 },
  { ticker: "UK100", name: "FTSE 100", sell: 8320, buy: 8324, change: -0.08 },
  { ticker: "EU50", name: "Euro Stoxx 50", sell: 4915, buy: 4920, change: 0.10 },
  { ticker: "SA40", name: "South Africa 40", sell: 75120, buy: 75135, change: 0.22 },
];
