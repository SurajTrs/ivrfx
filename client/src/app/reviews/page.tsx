"use client";

import * as React from "react";
import Navbar from "components/Navbar";
import ReviewsSection from "components/ReviewsSection";

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ReviewsSection />
      </main>
    </>
  );
}
