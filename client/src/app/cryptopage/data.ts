export type CryptoAsset = {
  symbol: string;
  name: string;
  bid: number;
  ask: number;
  change: number; // percent change
};

export const popularCrypto: CryptoAsset[] = [
  { symbol: "BTCUSD", name: "Bitcoin / US Dollar", bid: 111013.6, ask: 111020.2, change: -2.17 },
  { symbol: "ETHUSD", name: "Ethereum / US Dollar", bid: 4556.44, ask: 4560.94, change: -4.69 },
  { symbol: "LTCUSD", name: "Litecoin / US Dollar", bid: 110.58, ask: 110.92, change: -6.18 },
  { symbol: "XRPUSD", name: "Ripple / US Dollar", bid: 2.9346, ask: 2.9400, change: -2.99 },
  { symbol: "SOLUSD", name: "Solana / US Dollar", bid: 195.64, ask: 196.43, change: -4.91 },
  { symbol: "DOGEUSD", name: "Dogecoin / US Dollar", bid: 0.1234, ask: 0.1239, change: -5.04 },
];
