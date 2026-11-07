import { ArrowUpRight } from "lucide-react";
import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { metrics } from "@/lib/data";

export function Metrics() {
  return (
    <section aria-label="Impact metrics" className="relative pb-6 pt-14 sm:pb-10 sm:pt-20">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-line/90 bg-surface/60 shadow-[0_30px_80px_-50px_rgb(var(--ink)/0.5)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

            <div className="grid grid-cols-2 gap-px bg-line/70 lg:grid-cols-4">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="group relative bg-surface/90 p-5 transition-colors duration-500 hover:bg-raise/80 sm:p-7"
                >
                  <span className="absolute inset-x-5 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-silk group-hover:scale-x-100" />
                  <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
                    <span>0{index + 1}</span>
                    <span className="h-1 w-1 rounded-full bg-line transition-colors duration-500 group-hover:bg-accent" />
                  </div>
                  <p className="mt-5 text-[clamp(2.5rem,5vw,3.6rem)] font-semibold leading-none tracking-tightest text-ink">
                    <Counter
                      value={metric.value}
                      pad={metric.pad}
                      suffix={metric.suffix}
                    />
                  </p>
                  <p className="mt-3.5 text-[13px] font-medium tracking-tight text-ink">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted">
                    {metric.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-line/70 bg-canvas/40 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
              <p className="max-w-xl text-[11.5px] leading-relaxed text-muted">
                The throughline:{" "}
                <span className="text-ink">
                  accessible systems, honest estimates, and teams that own the
                  outcome.
                </span>
              </p>
              <a
                href="#journey"
                className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.2em] text-ink transition-colors hover:text-accent"
              >
                Walk the timeline
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
