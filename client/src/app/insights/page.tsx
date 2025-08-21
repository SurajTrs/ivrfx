"use client";

import * as React from "react";
import MarketInsights from "components/MarketInsights";
import Navbar from "components/Navbar";

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <MarketInsights />
      </main>
    </>
  );
}
