export type ForexPair = {
  symbol: string;
  name: string;
  bid: number;
  ask: number;
  change: number; // percent change
};

export const popularForex: ForexPair[] = [
  { symbol: "EURUSD", name: "Euro / US Dollar", bid: 1.0842, ask: 1.0844, change: 0.12 },
  { symbol: "GBPUSD", name: "British Pound / US Dollar", bid: 1.2748, ask: 1.2750, change: -0.05 },
  { symbol: "USDJPY", name: "US Dollar / Japanese Yen", bid: 156.82, ask: 156.84, change: 0.20 },
  { symbol: "AUDUSD", name: "Australian Dollar / US Dollar", bid: 0.6671, ask: 0.6673, change: 0.08 },
  { symbol: "USDCAD", name: "US Dollar / Canadian Dollar", bid: 1.3512, ask: 1.3514, change: -0.10 },
  { symbol: "USDCHF", name: "US Dollar / Swiss Franc", bid: 0.8823, ask: 0.8825, change: 0.03 },
];
