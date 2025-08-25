export type Row = { ticker: string; name: string; sell: string; buy: string; change: string };

export const popular: Row[] = [
  { ticker: "AAPL", name: "Apple Inc.", sell: "227.15", buy: "227.35", change: "+0.84%" },
  { ticker: "TSLA", name: "Tesla, Inc.", sell: "245.20", buy: "245.55", change: "-1.12%" },
  { ticker: "AMZN", name: "Amazon.com, Inc.", sell: "176.30", buy: "176.55", change: "+0.42%" },
  { ticker: "MSFT", name: "Microsoft Corp.", sell: "415.05", buy: "415.35", change: "+0.21%" },
];
