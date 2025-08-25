"use client";
import React from "react";

const FAQCTA: React.FC = () => (
  <section className="py-5 border-top">
    <div className="container d-lg-flex align-items-center justify-content-between">
      <div className="mb-3 mb-lg-0">
        <h3 className="h2 fw-bold m-0">Need more information?</h3>
        <div className="text-white-50">See all FAQs</div>
      </div>
      <div className="d-flex gap-2">
        <a href="/help/faq" className="btn btn-outline-purple">FAQs</a>
        <a href="/support" className="btn btn-success">Contact Support</a>
      </div>
    </div>
  </section>
);

export default FAQCTA;
