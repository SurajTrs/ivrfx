export type BondItem = {
  symbol: string;
  name: string;
  bid: string;
  ask: string;
  change: number;
};

export const popularBonds: BondItem[] = [
  { symbol: "TBOND30", name: "US TBond 30Y", bid: "114.06", ask: "114.14", change: -0.26 },
  { symbol: "TNOTE10", name: "US TNote 10Y", bid: "112.02", ask: "112.10", change: -0.05 },
  { symbol: "GER10YBOND", name: "GER 10Y Bond", bid: "128.90", ask: "128.96", change: -0.32 },
  { symbol: "GILT10Y", name: "Gilt 10Y Bond", bid: "90.92", ask: "90.98", change: 0.35 },
];
