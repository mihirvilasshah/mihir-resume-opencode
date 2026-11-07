"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  pad?: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function Counter({
  value,
  pad = 2,
  suffix = "",
  duration = 1500,
  className = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let start = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        const step = (now: number) => {
          if (!start) start = now;
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(step);
        };

        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [duration, value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {String(display).padStart(pad, "0")}
      {suffix ? (
        <span className="ml-0.5 align-top text-[0.42em] font-normal tracking-normal text-accent">
          {suffix}
        </span>
      ) : null}
    </span>
  );
}
