"use client";

import * as React from "react";
import Navbar from "components/Navbar";
import TradingInstruments from "components/TradingInstruments";

export default function InstrumentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <TradingInstruments />
      </main>
    </>
  );
}
