"use client";
import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap's JS (includes Popper) on client only
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return null;
}
