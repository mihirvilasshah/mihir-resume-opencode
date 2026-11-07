"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sync = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage can be blocked — the class change still applies */
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`group relative h-9 w-[3.6rem] shrink-0 rounded-full border border-line bg-raise/70 shadow-inner transition-colors duration-300 hover:border-accent/40 dark:bg-raise ${className}`}
    >
      <Sun
        aria-hidden="true"
        className="absolute left-[9px] top-1/2 h-3 w-3 -translate-y-1/2 text-amber transition-all duration-500 group-hover:rotate-45 dark:opacity-0"
      />
      <Moon
        aria-hidden="true"
        className="absolute right-[9px] top-1/2 h-3 w-3 -translate-y-1/2 text-accent opacity-0 transition-all duration-500 dark:opacity-100"
      />
      <span
        aria-hidden="true"
        className="absolute left-[3px] top-[3px] flex h-[26px] w-[26px] items-center justify-center rounded-full border border-line bg-surface text-ink shadow-[0_2px_8px_rgb(var(--ink)/0.12)] transition-transform duration-500 ease-silk dark:translate-x-[26px]"
      >
        <Sun className="h-3.5 w-3.5 dark:hidden" strokeWidth={2} />
        <Moon className="hidden h-3.5 w-3.5 dark:block" strokeWidth={2} />
      </span>
    </button>
  );
}
