"use client";

import { useState } from "react";
import { Code2, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { timeline, type TimelineKind } from "@/lib/data";

type Filter = "all" | TimelineKind;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Both tracks" },
  { id: "code", label: "Engineering" },
  { id: "lead", label: "Leadership" },
];

const kindConfig = {
  code: {
    label: "Engineering",
    Icon: Code2,
    dot: "bg-accent",
    text: "text-accent",
    soft: "bg-accent/10",
    border: "border-accent/20",
    ring: "ring-accent/15",
  },
  lead: {
    label: "Leadership",
    Icon: Users,
    dot: "bg-amber",
    text: "text-amber",
    soft: "bg-amber/10",
    border: "border-amber/20",
    ring: "ring-amber/15",
  },
} as const;

export function Timeline() {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = {
    all: timeline.length,
    code: timeline.filter((item) => item.kind === "code").length,
    lead: timeline.filter((item) => item.kind === "lead").length,
  };

  const items =
    filter === "all" ? timeline : timeline.filter((item) => item.kind === filter);

  return (
    <section
      id="journey"
      className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-line to-transparent" />

      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-amber/70" />
                02 — The timeline
              </p>
              <h2 className="mt-5 text-[clamp(2.15rem,4.5vw,3.6rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
                Eight years,
                <br />
                <span className="font-serif font-normal italic text-amber">
                  two tracks.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <p className="max-w-md text-[13.5px] leading-relaxed text-muted">
                The systems I&apos;ve architected and the people I&apos;ve grown
                aren&apos;t separate résumé lines. They&apos;re the same body of
                work — filter it either way.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <div
                  role="group"
                  aria-label="Filter timeline"
                  className="inline-flex rounded-full border border-line/80 bg-surface/60 p-1 backdrop-blur-md"
                >
                  {filters.map((option) => {
                    const isActive = filter === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setFilter(option.id)}
                        aria-pressed={isActive}
                        className={`rounded-full px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] transition-all duration-300 sm:text-[9.5px] ${
                          isActive
                            ? "bg-ink text-canvas shadow-sm"
                            : "text-muted hover:text-ink"
                        }`}
                      >
                        {option.label}
                        <span
                          className={`ml-1.5 text-[8px] ${
                            isActive ? "text-canvas/50" : "text-muted/70"
                          }`}
                        >
                          {String(counts[option.id]).padStart(2, "0")}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="relative mt-14 sm:mt-16">
          <div className="absolute bottom-2 left-4 top-2 w-px bg-gradient-to-b from-accent/50 via-line to-amber/50 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-6 md:space-y-2">
            {items.map((item, index) => {
              const config = kindConfig[item.kind];
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={`${item.year}-${item.title}`} delay={index * 30}>
                  <div className="relative pl-11 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                    <span
                      aria-hidden="true"
                      className={`absolute left-4 top-7 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-canvas ${config.soft} ring-4 ${config.ring} md:left-1/2`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
                    </span>

                    <div
                      className={`${
                        isLeft
                          ? "md:col-start-1 md:row-start-1"
                          : "md:col-start-2 md:row-start-1"
                      }`}
                    >
                      <article className="group relative overflow-hidden rounded-2xl border border-line/80 bg-surface/60 p-5 backdrop-blur-md transition-all duration-500 ease-silk hover:-translate-y-0.5 hover:border-ink/20 hover:bg-surface hover:shadow-[0_30px_70px_-46px_rgb(var(--ink)/0.6)] sm:p-6">
                        <div
                          className={`flex items-center justify-between gap-3 ${
                            isLeft ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[8.5px] uppercase tracking-[0.14em] ${config.soft} ${config.text} ${config.border}`}
                          >
                            <config.Icon className="h-3 w-3" />
                            {config.label}
                          </span>
                          <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                            {item.year}
                          </span>
                        </div>

                        <h3
                          className={`mt-4 text-[16.5px] font-medium leading-snug tracking-tight text-ink sm:text-[17.5px] ${
                            isLeft ? "md:text-right" : ""
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p
                          className={`mt-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted ${
                            isLeft ? "md:text-right" : ""
                          }`}
                        >
                          {item.org}
                        </p>
                        <p
                          className={`mt-3 text-[12.5px] leading-relaxed text-muted sm:text-[13px] ${
                            isLeft ? "md:text-right" : ""
                          }`}
                        >
                          {item.body}
                        </p>

                        <div
                          className={`mt-4 flex flex-wrap gap-1.5 ${
                            isLeft ? "md:justify-end" : ""
                          }`}
                        >
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-line/70 bg-canvas/50 px-1.5 py-0.5 font-mono text-[8.5px] tracking-wide text-muted transition-colors duration-300 group-hover:text-ink"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    </div>

                    <div
                      aria-hidden="true"
                      className={`hidden md:row-start-1 md:flex md:pt-1 ${
                        isLeft
                          ? "md:col-start-2 md:justify-start md:pl-2"
                          : "md:col-start-1 md:justify-end md:pr-2"
                      }`}
                    >
                      <span className="select-none font-serif text-[4.2rem] italic leading-none text-ink/[0.055] transition-colors duration-700 dark:text-ink/[0.08]">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="relative mt-8 flex justify-center pl-11 md:mt-6 md:pl-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-canvas/80 px-3.5 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.2em] text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
              The next chapter is being written
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
