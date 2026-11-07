"use client";

import { useRef, type MouseEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react";
import { Terminal } from "@/components/terminal";
import { profile } from "@/lib/data";

const marquee = [
  "Angular",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Neo4j",
  "Azure",
  "AEM",
  "WCAG 2.1 AA",
  "Applied AI",
  "Team leadership",
  "Delivery ownership",
];

export function Hero() {
  const tiltRef = useRef<HTMLDivElement>(null);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const node = tiltRef.current;
    if (!node) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translate3d(${(x * 8).toFixed(1)}px, ${(y * 8).toFixed(1)}px, 0)`;
  }

  function onLeave() {
    const node = tiltRef.current;
    if (node) node.style.transform = "rotateX(0deg) rotateY(0deg) translate3d(0,0,0)";
  }

  return (
    <section id="top" className="relative overflow-hidden pb-10 pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(var(--accent)/0.08),transparent_70%)] blur-3xl" />

      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="relative lg:col-span-7">
            <div className="flex animate-fade-up flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-surface/60 px-3 py-1.5 backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                {profile.role} · {profile.company}
              </span>
              <span className="hidden h-3 w-px bg-line sm:block" />
              <span className="text-[9.5px] tracking-[0.24em]">
                Bengaluru, IN · {profile.years} years
              </span>
            </div>

            <h1 className="mt-7 text-balance text-[clamp(2.7rem,6.6vw,5.15rem)] font-semibold leading-[0.93] tracking-tightest text-ink">
              <span className="block animate-fade-up">Architecting</span>
              <span className="relative inline-block animate-fade-up [animation-delay:80ms]">
                <span className="font-serif font-normal italic tracking-[-0.03em] text-gradient animate-gradient-pan">
                  scalable
                </span>{" "}
                <span>systems.</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 14"
                  fill="none"
                  className="absolute -bottom-1 left-0 h-3 w-[64%] text-accent sm:-bottom-2"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 10.5C58 5.5 122 3 297 6.5"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    className="underline-draw opacity-70"
                  />
                </svg>
              </span>
              <span className="mt-2 block animate-fade-up text-ink/45 [animation-delay:160ms] dark:text-ink/55">
                Leading high-impact
              </span>
              <span className="block animate-fade-up [animation-delay:240ms]">
                engineering{" "}
                <span className="relative font-serif font-normal italic tracking-[-0.03em] text-amber">
                  teams.
                </span>
              </span>
            </h1>

            <p className="mt-7 max-w-[34rem] animate-fade-up text-pretty text-[14.5px] leading-[1.75] text-muted [animation-delay:320ms] sm:text-[15.5px]">
              I&apos;m Mihir — a principal engineer who still writes production
              code every week. For {profile.years} years I&apos;ve shipped
              accessible, high-performance products in{" "}
              <span className="font-medium text-ink">Angular, React and Node.js</span>
              , led the teams around them, and turned ambiguous ideas into
              systems that hold up.
            </p>

            <div className="mt-8 flex animate-fade-up flex-col gap-3 [animation-delay:400ms] sm:flex-row sm:items-center">
              <a href="#work" className="btn-primary group w-full sm:w-auto">
                Explore selected work
                <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a href="#contact" className="btn-ghost group w-full sm:w-auto">
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-x-5 gap-y-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted [animation-delay:480ms]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {profile.location}
              </span>
              <span className="hidden h-3 w-px bg-line sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-amber" />
                WCAG 2.1 AA by default
              </span>
              <span className="hidden h-3 w-px bg-line sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-signal" />
                48h POC → client win
              </span>
            </div>
          </div>

          <div
            className="relative lg:col-span-5 lg:pl-4"
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ perspective: "1400px" }}
          >
            <div className="pointer-events-none absolute -left-6 top-1/3 hidden -translate-y-1/2 select-none font-mono text-[9px] uppercase tracking-[0.4em] text-muted/60 [writing-mode:vertical-rl] lg:block">
              portfolio — 2026
            </div>

            <div
              ref={tiltRef}
              className="relative will-change-transform transition-transform duration-300 ease-out"
            >
              <div className="animate-float-soft">
                <Terminal />
              </div>

              <div className="absolute -right-3 -top-5 z-10 animate-float rounded-xl border border-line/80 bg-surface/80 px-3.5 py-2.5 shadow-[0_20px_50px_-24px_rgb(var(--ink)/0.5)] backdrop-blur-xl [animation-delay:1.2s] sm:-right-6">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-muted">
                  Delivery record
                </p>
                <p className="mt-1 flex items-baseline gap-1.5 text-[15px] font-semibold tracking-tight text-ink">
                  4 led
                  <span className="text-muted/50">·</span>
                  18 shipped
                </p>
              </div>

              <div className="absolute -bottom-6 -left-2 z-10 hidden animate-float rounded-xl border border-line/80 bg-surface/80 px-3.5 py-2.5 shadow-[0_20px_50px_-24px_rgb(var(--ink)/0.5)] backdrop-blur-xl [animation-delay:0.4s] sm:block lg:-left-8">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-signal/10 text-signal">
                    <Zap className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-muted">
                      IICE engagement
                    </p>
                    <p className="text-[12px] font-medium tracking-tight text-ink">
                      48-hour POC → new client
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-y border-line/70 bg-surface/25 py-4 backdrop-blur-sm sm:mt-20">
        <div className="mask-fade-x flex overflow-hidden">
          <div className="flex w-max animate-marquee items-center">
            {[0, 1].map((group) => (
              <div
                key={group}
                aria-hidden={group === 1}
                className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10"
              >
                {marquee.map((item) => (
                  <span
                    key={`${group}-${item}`}
                    className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.22em] text-muted sm:gap-10"
                  >
                    {item}
                    <span className="h-1 w-1 rounded-full bg-accent/50" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
