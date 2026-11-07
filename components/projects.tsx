"use client";

import { useState, type MouseEvent, type ReactElement } from "react";
import { ArrowUpRight, Sparkles, TrendingUp, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { projects, type Project } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  Generated artwork — pure SVG, no external assets                   */
/* ------------------------------------------------------------------ */

function WaveArt() {
  const bars = Array.from({ length: 25 }, (_, index) => {
    const height = 10 + 78 * Math.sin((index / 24) * Math.PI);
    return { height, x: 32 + index * 14 };
  });

  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="wave-orb" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e9d5ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wave-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f0abfc" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="112" r="102" fill="url(#wave-orb)" />
      <g>
        {bars.map((bar, index) => (
          <rect
            key={index}
            x={bar.x}
            y={112 - bar.height / 2}
            width="5"
            height={bar.height}
            rx="2.5"
            fill={index % 4 === 0 ? "url(#wave-line)" : "rgba(255,255,255,0.34)"}
            className="transition-transform duration-700 ease-out group-hover:scale-y-125"
            style={{
              transformBox: "fill-box",
              transformOrigin: "center",
              transitionDelay: `${index * 14}ms`,
            }}
          />
        ))}
      </g>
      <path
        d="M24 112 C58 78 82 146 116 112 S174 76 208 112 S266 148 300 112 S358 86 376 108"
        fill="none"
        stroke="url(#wave-line)"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <circle cx="376" cy="108" r="4" fill="#f0abfc" />
      <circle cx="376" cy="108" r="9" fill="none" stroke="#f0abfc" strokeOpacity="0.35" />
    </svg>
  );
}

function GraphArt() {
  const nodes = [
    { x: 62, y: 62, r: 5, color: "#a5b4fc", label: "doc" },
    { x: 158, y: 40, r: 4, color: "#e2e8f0", label: "" },
    { x: 248, y: 62, r: 6, color: "#67e8f9", label: "tag" },
    { x: 332, y: 44, r: 4, color: "#e2e8f0", label: "" },
    { x: 96, y: 158, r: 4, color: "#e2e8f0", label: "" },
    { x: 200, y: 112, r: 9, color: "#c4b5fd", label: "graph" },
    { x: 304, y: 150, r: 5, color: "#67e8f9", label: "rel" },
    { x: 212, y: 182, r: 4, color: "#e2e8f0", label: "" },
  ];
  const edges = [
    [0, 5],
    [1, 5],
    [2, 5],
    [3, 2],
    [4, 5],
    [5, 6],
    [5, 7],
    [2, 6],
    [1, 2],
    [4, 0],
  ];

  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="graph-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="112" r="110" fill="url(#graph-glow)" />
      <g stroke="rgba(255,255,255,0.22)" strokeWidth="1">
        {edges.map(([from, to], index) => (
          <line
            key={index}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            strokeDasharray={index % 3 === 0 ? "3 5" : undefined}
          />
        ))}
      </g>
      <circle
        cx="200"
        cy="112"
        r="32"
        fill="none"
        stroke="rgba(196,181,253,0.35)"
        strokeDasharray="2 6"
        className="animate-spin-slow"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <circle cx="200" cy="112" r="48" fill="none" stroke="rgba(255,255,255,0.08)" />
      {nodes.map((node, index) => (
        <g key={index}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r + 4}
            fill={node.color}
            opacity="0.12"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={node.color}
            className="transition-transform duration-500 group-hover:scale-125"
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
          {node.label ? (
            <text
              x={node.x}
              y={node.y + node.r + 14}
              textAnchor="middle"
              fill="rgba(255,255,255,0.55)"
              fontSize="7.5"
              fontFamily="monospace"
              letterSpacing="1"
            >
              {node.label}
            </text>
          ) : null}
        </g>
      ))}
    </svg>
  );
}

function RadialArt() {
  const points = [
    [200, 52],
    [262, 74],
    [248, 138],
    [200, 190],
    [160, 133],
    [144, 78],
  ];
  const labels = [
    { letter: "R", x: 200, y: 16 },
    { letter: "I", x: 286, y: 64 },
    { letter: "A", x: 286, y: 164 },
    { letter: "S", x: 200, y: 213 },
    { letter: "E", x: 114, y: 164 },
    { letter: "C", x: 114, y: 64 },
  ];

  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="radial-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="radial-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.16" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="112" r="108" fill="url(#radial-glow)" />
      {[38, 64, 92].map((radius) => (
        <circle
          key={radius}
          cx="200"
          cy="112"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
        />
      ))}
      <g stroke="rgba(255,255,255,0.12)">
        {points.map(([x, y], index) => (
          <line key={index} x1="200" y1="112" x2={x} y2={y} />
        ))}
      </g>
      <polygon
        points={points.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="url(#radial-fill)"
        stroke="#a5b4fc"
        strokeWidth="1.6"
        className="transition-transform duration-700 group-hover:rotate-3"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      {points.map(([x, y], index) => (
        <circle key={index} cx={x} cy={y} r="3.5" fill="#e0e7ff" />
      ))}
      {labels.map((label) => (
        <text
          key={label.letter}
          x={label.x}
          y={label.y}
          textAnchor="middle"
          fill="rgba(255,255,255,0.55)"
          fontSize="8"
          fontFamily="monospace"
          letterSpacing="2"
        >
          {label.letter}
        </text>
      ))}
    </svg>
  );
}

function LabArt() {
  const tubes = [
    { x: 128, level: 54, bubbles: [150, 42, 34] },
    { x: 182, level: 76, bubbles: [48, 62, 38] },
    { x: 236, level: 62, bubbles: [55, 37, 26] },
  ];

  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="lab-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a3e635" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lab-liquid" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#a3e635" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="118" r="110" fill="url(#lab-glow)" />
      <line x1="92" y1="184" x2="308" y2="184" stroke="rgba(255,255,255,0.22)" />
      {tubes.map((tube, index) => {
        const top = 48;
        const height = 132;
        const liquidY = top + height - tube.level;
        return (
          <g
            key={index}
            className="transition-transform duration-700 group-hover:-translate-y-1"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <rect
              x={tube.x}
              y={top}
              width="36"
              height={height}
              rx="18"
              fill="rgba(255,255,255,0.06)"
              stroke="rgba(255,255,255,0.28)"
            />
            <rect
              x={tube.x + 3}
              y={liquidY}
              width="30"
              height={tube.level - 4}
              rx="14"
              fill="url(#lab-liquid)"
              opacity={0.75}
            />
            {tube.bubbles.map((bubble, bubbleIndex) => (
              <circle
                key={bubbleIndex}
                cx={tube.x + 10 + bubbleIndex * 8}
                cy={liquidY + bubble}
                r={bubbleIndex === 1 ? 2.6 : 1.8}
                fill="rgba(255,255,255,0.65)"
                className="animate-float-soft"
                style={{
                  animationDelay: `${bubbleIndex * 0.6 + index * 0.3}s`,
                }}
              />
            ))}
            <text
              x={tube.x + 18}
              y={200}
              textAnchor="middle"
              fill="rgba(255,255,255,0.4)"
              fontSize="7"
              fontFamily="monospace"
              letterSpacing="1.5"
            >
              0{index + 1}
            </text>
          </g>
        );
      })}
      <path
        d="M112 214 H288"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <text
        x="330"
        y="70"
        fill="rgba(255,255,255,0.4)"
        fontSize="8"
        fontFamily="monospace"
        letterSpacing="1.5"
      >
        LAB
      </text>
      <text
        x="330"
        y="82"
        fill="rgba(255,255,255,0.22)"
        fontSize="7"
        fontFamily="monospace"
        letterSpacing="1"
      >
        LMS
      </text>
    </svg>
  );
}

function LayersArt() {
  const windows = [
    { x: 92, y: 72, w: 216, h: 104, front: false },
    { x: 112, y: 56, w: 196, h: 108, front: false },
    { x: 132, y: 40, w: 176, h: 112, front: true },
  ];

  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="layers-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="210" cy="110" r="112" fill="url(#layers-glow)" />
      {windows.map((win, index) => (
        <g
          key={index}
          className={`transition-transform duration-700 ${
            win.front
              ? "group-hover:-translate-y-1.5"
              : "group-hover:translate-y-1"
          }`}
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          <rect
            x={win.x}
            y={win.y}
            width={win.w}
            height={win.h}
            rx="9"
            fill={win.front ? "rgba(255,255,255,0.13)" : "rgba(255,255,255,0.05)"}
            stroke={
              win.front ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.18)"
            }
          />
          <line
            x1={win.x}
            y1={win.y + 20}
            x2={win.x + win.w}
            y2={win.y + 20}
            stroke="rgba(255,255,255,0.2)"
          />
          <circle cx={win.x + 12} cy={win.y + 10} r="2.5" fill="#f87171" opacity={win.front ? 0.9 : 0.35} />
          <circle cx={win.x + 21} cy={win.y + 10} r="2.5" fill="#fbbf24" opacity={win.front ? 0.9 : 0.35} />
          <circle cx={win.x + 30} cy={win.y + 10} r="2.5" fill="#34d399" opacity={win.front ? 0.9 : 0.35} />
          <rect
            x={win.x + 16}
            y={win.y + 34}
            width={win.w * 0.46}
            height="7"
            rx="3.5"
            fill={win.front ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.2)"}
          />
          <rect
            x={win.x + 16}
            y={win.y + 50}
            width={win.w * 0.68}
            height="5"
            rx="2.5"
            fill="rgba(255,255,255,0.16)"
          />
          <rect
            x={win.x + 16}
            y={win.y + 62}
            width={win.w * 0.56}
            height="5"
            rx="2.5"
            fill="rgba(255,255,255,0.12)"
          />
          {win.front ? (
            <rect
              x={win.x + 16}
              y={win.y + 80}
              width="54"
              height="18"
              rx="9"
              fill="rgba(251,191,36,0.8)"
            />
          ) : null}
        </g>
      ))}
      <text
        x="316"
        y="170"
        fill="rgba(255,255,255,0.42)"
        fontSize="9"
        fontFamily="monospace"
        letterSpacing="2"
      >
        AEM
      </text>
    </svg>
  );
}

function BadgeArt() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="badge-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="badge-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="106" r="108" fill="url(#badge-glow)" />
      <circle
        cx="200"
        cy="106"
        r="88"
        fill="none"
        stroke="rgba(255,255,255,0.14)"
        strokeDasharray="2 8"
        className="animate-spin-slow"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <g
        className="transition-transform duration-700 group-hover:scale-105"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      >
        <path
          d="M200 38 L258 60 V110 C258 148 232 172 200 186 C168 172 142 148 142 110 V60 Z"
          fill="url(#badge-fill)"
          stroke="#ddd6fe"
          strokeWidth="1.4"
        />
        <path
          d="M200 56 L244 73 V110 C244 138 224 157 200 168 C176 157 156 138 156 110 V73 Z"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
        />
        <path
          d="M200 76 l10.6 21.5 23.7 3.4 -17.2 16.8 4.1 23.6 -21.2 -11.2 -21.2 11.2 4.1 -23.6 -17.2 -16.8 23.7 -3.4 Z"
          fill="#f5f3ff"
          opacity="0.95"
        />
        <path d="M180 184 L196 196 L200 186 Z" fill="#8b5cf6" opacity="0.85" />
        <path d="M220 184 L204 196 L200 186 Z" fill="#6d28d9" opacity="0.85" />
      </g>
      <g fill="rgba(255,255,255,0.45)">
        <circle cx="86" cy="60" r="2" />
        <circle cx="322" cy="140" r="2.5" />
        <circle cx="312" cy="56" r="1.5" />
        <circle cx="92" cy="156" r="1.5" />
      </g>
      <path d="M74 96 h10 M79 91 v10" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <path d="M326 96 h8 M330 92 v8" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
    </svg>
  );
}

const artMap = {
  wave: WaveArt,
  graph: GraphArt,
  radial: RadialArt,
  lab: LabArt,
  layers: LayersArt,
  badge: BadgeArt,
} satisfies Record<Project["art"], () => ReactElement>;

const artBackground: Record<Project["art"], string> = {
  wave: "from-[#1e1b4b] via-[#4338ca] to-[#a21caf]",
  graph: "from-[#082f49] via-[#0f766e] to-[#0891b2]",
  radial: "from-[#111827] via-[#1e3a8a] to-[#0369a1]",
  lab: "from-[#052e16] via-[#047857] to-[#4d7c0f]",
  layers: "from-[#1c1917] via-[#9a3412] to-[#b45309]",
  badge: "from-[#0b1120] via-[#4338ca] to-[#7c3aed]",
};

const categories = ["All", "Applied AI", "EdTech", "Enterprise", "Commerce"] as const;
type Category = (typeof categories)[number];

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export function Projects() {
  const [category, setCategory] = useState<Category>("All");
  const [tag, setTag] = useState<string | null>(null);

  const visible =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  function handleMove(event: MouseEvent<HTMLElement>) {
    const node = event.currentTarget;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  function chooseCategory(next: Category) {
    setCategory(next);
    setTag(null);
  }

  return (
    <section id="work" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-accent/70" />
                03 — Selected systems
              </p>
              <h2 className="mt-5 text-[clamp(2.15rem,4.5vw,3.6rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
                Work that{" "}
                <span className="font-serif font-normal italic text-accent">
                  shipped.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <p className="max-w-md text-[13.5px] leading-relaxed text-muted">
                Six pieces from a wider body of work. Some are products, some
                are platforms — all of them are in production, used by real
                people, and built with a team.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col gap-3 border-y border-line/70 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((option) => {
                const isActive = category === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => chooseCategory(option)}
                    aria-pressed={isActive}
                    className={`shrink-0 rounded-full px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] transition-all duration-300 ${
                      isActive
                        ? "bg-ink text-canvas"
                        : "text-muted hover:bg-raise hover:text-ink"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              {tag ? (
                <button
                  type="button"
                  onClick={() => setTag(null)}
                  className="group inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent"
                >
                  Stack: {tag}
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-accent/30 transition-colors group-hover:bg-accent group-hover:text-canvas">
                    <X className="h-2.5 w-2.5" />
                  </span>
                </button>
              ) : (
                <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-muted/70">
                  Tip: tap a stack tag to filter
                </p>
              )}
            </div>
          </div>
        </Reveal>

        <p className="sr-only" role="status">
          {visible.length} projects shown
          {tag ? `, highlighting ${tag}` : ""}.
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {visible.map((project, index) => {
            const Art = artMap[project.art];
            const matches = !tag || project.stack.includes(tag);
            return (
              <Reveal
                key={`${category}-${project.slug}`}
                delay={index * 70}
              >
                <article
                  onMouseMove={handleMove}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border bg-surface/60 backdrop-blur-md transition-all duration-500 ease-silk hover:-translate-y-1 hover:bg-surface hover:shadow-[0_45px_90px_-55px_rgb(var(--accent)/0.7)] ${
                    matches
                      ? "border-line/80 hover:border-accent/40"
                      : "border-line/50 opacity-40"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(460px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--accent) / 0.13), transparent 62%)",
                    }}
                  />

                  <div
                    className={`relative h-44 overflow-hidden bg-gradient-to-br ${artBackground[project.art]} sm:h-52`}
                  >
                    <div className="absolute inset-0 grid-lines opacity-[0.18]" />
                    <div className="absolute inset-0 noise opacity-20" />
                    <div className="absolute inset-0 bg-[#05060a]/10" />
                    <div className="absolute inset-0 flex items-center justify-center px-4 py-6 transition-transform duration-700 ease-silk group-hover:scale-[1.035]">
                      <Art />
                    </div>
                    <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between">
                      <span className="rounded-full border border-white/15 bg-black/25 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="font-mono text-[9px] tracking-[0.18em] text-white/55">
                        {project.year}
                      </span>
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[19px] font-medium tracking-tight text-ink sm:text-[20px]">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                          {project.role}
                        </p>
                      </div>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line/80 text-muted transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent group-hover:text-canvas">
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>

                    <p className="mt-3.5 text-[12.5px] leading-relaxed text-muted sm:text-[13px]">
                      {project.summary}
                    </p>

                    <div className="mt-4 flex items-start gap-2 rounded-lg border border-line/60 bg-canvas/40 px-3 py-2">
                      <TrendingUp className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                      <p className="text-[10.5px] leading-relaxed text-ink">
                        {project.impact}
                      </p>
                    </div>

                    <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                      {project.stack.map((tech) => {
                        const isActive = tag === tech;
                        return (
                          <button
                            key={tech}
                            type="button"
                            onClick={() => setTag(isActive ? null : tech)}
                            aria-pressed={isActive}
                            className={`rounded-full border px-2.5 py-1 font-mono text-[8.5px] tracking-wide transition-all duration-300 hover:-translate-y-px ${
                              isActive
                                ? "border-ink bg-ink text-canvas"
                                : "border-line/80 bg-surface/60 text-muted hover:border-accent/40 hover:text-accent"
                            }`}
                          >
                            {tech}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={80}>
          <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c0f16] p-6 text-white sm:p-8">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgb(139_134_255/0.35),transparent_65%)] blur-2xl" />
            <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.12]" />
            <div className="relative flex flex-col gap-6 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-[3.6rem] italic leading-none text-white sm:text-[4.4rem]">
                  48
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                  hours
                </span>
              </div>
              <div>
                <p className="flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.22em] text-[#c6f24e]">
                  <Sparkles className="h-3 w-3" />
                  Rapid prototyping → client acquisition
                </p>
                <h3 className="mt-2 text-[19px] font-medium tracking-tight text-white sm:text-[22px]">
                  The Career Coach POC that opened the IICE door.
                </h3>
                <p className="mt-1.5 max-w-xl text-[12.5px] leading-relaxed text-white/55">
                  A working prototype in two days, built to prove a point:
                  momentum is a feature. It became a client engagement and
                  expanded the team.
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 text-[12px] font-medium text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                Ask for the story
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
