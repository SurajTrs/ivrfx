"use client";
import React from "react";

type Row = { asset: string; sell: string; buy: string; change: string };

const majors: Row[] = [
  { asset: "USD/MXN", sell: "17.21", buy: "17.23", change: "+0.34%" },
  { asset: "USD/JPY", sell: "156.10", buy: "156.12", change: "-0.12%" },
  { asset: "USD/PLN", sell: "3.92", buy: "3.93", change: "+0.08%" },
  { asset: "AUD/JPY", sell: "104.20", buy: "104.24", change: "+0.22%" },
  { asset: "GBP/ZAR", sell: "23.92", buy: "23.98", change: "-0.05%" },
];

const minors: Row[] = [
  { asset: "USD/BRL", sell: "5.32", buy: "5.33", change: "+0.14%" },
  { asset: "EUR/TRY", sell: "36.42", buy: "36.56", change: "+0.90%" },
  { asset: "NZD/USD", sell: "0.6042", buy: "0.6044", change: "-0.21%" },
  { asset: "USD/SGD", sell: "1.345", buy: "1.346", change: "-0.03%" },
  { asset: "EUR/NZD", sell: "1.787", buy: "1.788", change: "+0.12%" },
];

function MiniTable({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="col-12 col-lg-6">
      <div className="p-3 p-lg-4 rounded-4 card-gradient-border">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h4 className="h6 m-0 text-white-50">{title}</h4>
          <a href="/instruments" className="btn btn-outline-purple btn-sm">View all</a>
        </div>
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle mb-0">
            <thead>
              <tr className="text-white-50">
                <th scope="col">Asset</th>
                <th scope="col">Sell</th>
                <th scope="col">Buy</th>
                <th scope="col">Change (%)</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>{r.asset}</td>
                  <td>{r.sell}</td>
                  <td>{r.buy}</td>
                  <td className={r.change.startsWith("-") ? "text-danger" : "text-success"}>{r.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const ForexInstrumentsPreview: React.FC = () => {
  return (
    <section className="py-5 bg-black border-top">
      <div className="container">
        <div className="d-flex align-items-end justify-content-between mb-3">
          <h3 className="h2 fw-bold m-0">Market snapshot</h3>
          <a href="/instruments" className="btn btn-success btn-sm">Full Forex CFDs list</a>
        </div>
        <div className="row g-4">
          <MiniTable title="Majors & crosses" rows={majors} />
          <MiniTable title="More FX pairs" rows={minors} />
        </div>
      </div>
    </section>
  );
};

export default ForexInstrumentsPreview;
