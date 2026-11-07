"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#story", label: "Story" },
  { href: "#journey", label: "Journey" },
  { href: "#work", label: "Work" },
  { href: "#beyond", label: "Beyond" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${ratio})`;
        }
        setScrolled(window.scrollY > 24);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = ["story", "journey", "work", "beyond", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        ref={progressRef}
        aria-hidden="true"
        className="h-[2px] origin-left scale-x-0 bg-gradient-to-r from-accent via-accent to-signal transition-transform duration-150 ease-out"
      />

      <div
        className={`border-b transition-all duration-500 ease-silk ${
          scrolled
            ? "border-line/70 bg-canvas/70 shadow-[0_12px_40px_-24px_rgb(var(--ink)/0.35)] backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="shell flex h-16 items-center justify-between gap-4 sm:h-[4.75rem]"
        >
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Mihir Shah — back to top"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-line/90 bg-surface/70 font-serif text-[17px] italic leading-none text-ink shadow-[0_6px_20px_-12px_rgb(var(--ink)/0.5)] transition-all duration-500 group-hover:border-accent/50 group-hover:text-accent">
              M
              <span className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full bg-accent/15 blur-md transition-all duration-500 group-hover:bg-accent/30" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[13.5px] font-medium tracking-tight text-ink">
                Mihir Shah
              </span>
              <span className="mt-1 flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.18em] text-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                Principal engineer
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-[12.5px] tracking-tight transition-colors duration-300 ${
                  active === link.href
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ease-silk ${
                    active === link.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href="#contact"
              className="group hidden h-9 items-center gap-1.5 rounded-full bg-ink px-4 text-[12px] font-medium text-canvas transition-all duration-300 hover:shadow-[0_10px_30px_-12px_rgb(var(--accent)/0.7)] sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/60 text-ink transition-colors hover:border-accent/40 lg:hidden"
            >
              {open ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="mx-4 mt-2 origin-top animate-fade-up overflow-hidden rounded-2xl border border-line bg-canvas/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
        >
          <div className="flex flex-col">
            {links.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] tracking-tight text-ink transition-colors hover:bg-raise"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-muted">
                    0{index + 1}
                  </span>
                  {link.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-between rounded-xl bg-ink px-4 py-3.5 text-[14px] font-medium text-canvas"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
