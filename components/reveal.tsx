"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 26,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-silk will-change-transform ${className}`}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translate3d(0, 0, 0)" : `translate3d(0, ${y}px, 0)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
