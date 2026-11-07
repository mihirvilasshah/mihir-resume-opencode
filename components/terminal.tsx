"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { RotateCcw, TerminalSquare } from "lucide-react";

const SCRIPT = `$ whoami
mihir.shah — principal engineer @ tricon infotech

$ cat focus.json
{
  "craft":   ["Angular", "React", "TypeScript"],
  "systems": ["Node.js", "Python", "Neo4j"],
  "bar":     "WCAG 2.1 AA · fast by default"
}

$ git log --oneline -4
a1f9c3e  ship: AI speaking coach · Azure + Gemini
7b2d0f1  build: LLM metadata → Neo4j graph
8c02b71  lead: 4 projects · 18 shipped
e4c8b22  win:  IICE POC in 48 hours

$ echo "still writing code, still growing people"
still writing code, still growing people
$ `;

function Line({ line }: { line: string }) {
  const prompt = line.match(/^\$\s?(.*)$/);
  if (prompt) {
    return (
      <span>
        <span className="text-[#c6f24e]">$</span>{" "}
        <span className="text-[#f1f5f9]">{prompt[1]}</span>
      </span>
    );
  }

  const commit = line.match(/^([a-f0-9]{7})\s{2}(.*)$/);
  if (commit) {
    return (
      <span>
        <span className="text-[#fbbf24]">{commit[1]}</span>{" "}
        <span className="text-[#94a3b8]">{commit[2]}</span>
      </span>
    );
  }

  if (line.startsWith("mihir.shah")) {
    return <span className="text-[#c7d2fe]">{line}</span>;
  }

  if (line.startsWith("still writing")) {
    return <span className="text-[#5eead4]">{line}</span>;
  }

  if (line.trim().startsWith('"')) {
    const [key, ...rest] = line.split(":");
    return (
      <span>
        <span className="text-[#a5b4fc]">{key}</span>
        {rest.length ? (
          <span className="text-[#94a3b8]">:{rest.join(":")}</span>
        ) : null}
      </span>
    );
  }

  return <span className="text-[#94a3b8]">{line}</span>;
}

export function Terminal() {
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => clearTimeout(timer));
    timers.current = [];
  }, []);

  const play = useCallback(() => {
    clearTimers();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(SCRIPT);
      setStarted(true);
      return;
    }

    setTyped("");
    setStarted(false);
    let index = 0;

    const tick = () => {
      index = Math.min(SCRIPT.length, index + 3);
      setTyped(SCRIPT.slice(0, index));
      if (index < SCRIPT.length) {
        timers.current.push(
          setTimeout(tick, SCRIPT[index - 1] === "\n" ? 55 : 9),
        );
      } else {
        setStarted(true);
      }
    };

    timers.current.push(setTimeout(tick, 650));
  }, [clearTimers]);

  useEffect(() => {
    play();
    return clearTimers;
  }, [play, clearTimers]);

  const lines = typed.split("\n");

  return (
    <div className="group/terminal relative">
      <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_60%_40%,rgb(99_102_241/0.28),transparent_65%)] blur-2xl transition-opacity duration-700 dark:bg-[radial-gradient(circle_at_60%_40%,rgb(139_134_255/0.32),transparent_65%)]" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12]/95 shadow-[0_40px_100px_-30px_rgb(0_0_0/0.65)] ring-1 ring-white/5 backdrop-blur-2xl">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-2 hidden items-center gap-1.5 font-mono text-[10px] text-[#64748b] sm:flex">
              <TerminalSquare className="h-3 w-3" />
              mihir@tricon — ~/portfolio
            </span>
          </div>
          <button
            type="button"
            onClick={play}
            className="flex h-7 w-7 items-center justify-center rounded-md text-[#64748b] transition-colors hover:bg-white/5 hover:text-[#cbd5e1]"
            aria-label="Replay terminal animation"
            title="Replay"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>

        <div
          className="relative px-4 pb-5 pt-4 sm:px-5"
          role="img"
          aria-label="Terminal summary: Mihir is a principal engineer at Tricon Infotech who works with Angular, React, TypeScript, Node.js, Python and Neo4j, upholds WCAG 2.1 AA, has led 4 projects and shipped 18, and won the IICE engagement with a 48-hour proof of concept."
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgb(255_255_255/0.03),transparent_24%)]" />
          <pre
            aria-hidden="true"
            className="relative min-h-[21.5rem] overflow-hidden whitespace-pre-wrap break-words font-mono text-[10.5px] leading-[1.75] tracking-tight text-[#94a3b8] sm:min-h-[23rem] sm:text-[12px]"
          >
            {lines.map((line, index) => (
              <span key={index} className="block min-h-[1.75em]">
                <Line line={line} />
                {index === lines.length - 1 ? (
                  <span
                    className={`ml-0.5 inline-block h-[1.05em] w-[0.5em] translate-y-[0.15em] bg-[#c6f24e] ${
                      started ? "animate-blink" : ""
                    }`}
                  />
                ) : null}
              </span>
            ))}
          </pre>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-2.5 font-mono text-[9.5px] text-[#64748b] sm:px-5">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#28c840] shadow-[0_0_8px_#28c840]" />
            all systems nominal
          </span>
          <span className="flex items-center gap-3">
            <span className="hidden sm:inline">UTF-8</span>
            <span className="text-[#475569]">zsh</span>
          </span>
        </div>
      </div>
    </div>
  );
}
