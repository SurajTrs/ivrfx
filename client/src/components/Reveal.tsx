"use client";
import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number; // seconds
  as?: React.ElementType;
} & Record<string, any>; // allow passthrough props like href, onClick, etc.

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, as = "div", ...rest }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Respect reduced motion; if enabled, show immediately
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp: any = as;

  return (
    <Comp
      ref={ref as any}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{
        // @ts-ignore CSS var is fine
        "--reveal-delay": `${delay}s`,
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export default Reveal;
