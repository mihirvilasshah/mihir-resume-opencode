import { ArrowUpRight, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { credentials, principles, profile } from "@/lib/data";

export function Story() {
  return (
    <section id="story" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-accent/60" />
                01 — The operating system
              </p>
              <h2 className="mt-5 text-[clamp(2.15rem,4.2vw,3.35rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
                Lead from the{" "}
                <span className="font-serif font-normal italic text-accent">
                  code
                </span>{" "}
                up.
              </h2>
              <div className="mt-6 space-y-4 text-[14px] leading-[1.8] text-muted sm:text-[15px]">
                <p>
                  I joined{" "}
                  <span className="font-medium text-ink">Tricon Infotech</span>{" "}
                  in July 2018 as an associate software engineer. Eight years
                  later I&apos;m a principal engineer — the title changed, the
                  habit didn&apos;t: I still open the editor, read the diff and
                  ship. What grew is the radius: four projects led, eighteen
                  contributed to, and a front-row seat to how engineering
                  decisions become business outcomes.
                </p>
                <p>
                  The work I&apos;m proudest of sits where craft meets people. An
                  accessible Angular platform used by students in grades 6–12. A
                  48-hour proof of concept that became the IICE engagement. A
                  teammate who no longer needs me in the room. And an MBA
                  completed alongside delivery, because systems don&apos;t exist
                  outside budgets and deadlines.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="chip">Bengaluru, India</span>
                <span className="chip">{profile.years} years shipping</span>
                <span className="chip">English · Hindi · Gujarati · Telugu</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-3">
              {principles.map((principle, index) => (
                <Reveal key={principle.index} delay={80 * index}>
                  <article className="group relative flex gap-5 overflow-hidden rounded-2xl border border-line/80 bg-surface/50 p-5 transition-all duration-500 ease-silk hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface hover:shadow-[0_24px_60px_-40px_rgb(var(--ink)/0.55)] sm:p-6">
                    <span className="mt-0.5 font-mono text-[10px] tracking-[0.2em] text-muted transition-colors duration-500 group-hover:text-accent">
                      {principle.index}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-[16px] font-medium tracking-tight text-ink sm:text-[17px]">
                          {principle.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-muted sm:text-[13.5px]">
                        {principle.body}
                      </p>
                      <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-muted/70">
                        {principle.meta}
                      </p>
                    </div>
                    <span className="pointer-events-none absolute inset-y-4 left-0 w-px bg-gradient-to-b from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="relative mt-16 overflow-hidden rounded-[1.5rem] border border-line/70 bg-gradient-to-br from-surface/70 via-canvas/40 to-surface/70 px-6 py-10 sm:mt-20 sm:px-12 sm:py-12">
            <Quote
              aria-hidden="true"
              className="absolute -right-4 -top-6 h-32 w-32 text-accent/[0.07]"
              strokeWidth={1}
            />
            <blockquote className="relative max-w-3xl text-balance font-serif text-[clamp(1.5rem,3.4vw,2.35rem)] italic leading-[1.22] tracking-tight text-ink">
              &ldquo;The best codebase is one the team can confidently own
              without me in the room.&rdquo;
            </blockquote>
            <div className="relative mt-6 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-muted">
                How I measure a lead
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-14">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.24em] text-muted">
                Credentials
              </p>
              <p className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-muted/70 sm:block">
                2014 — 2023
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line/80 bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
              {credentials.map((credential) => (
                <div
                  key={credential.title}
                  className="group bg-canvas/80 p-5 transition-colors duration-500 hover:bg-surface"
                >
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-muted/80">
                    {credential.years}
                  </p>
                  <p className="mt-2.5 text-[13.5px] font-medium tracking-tight text-ink">
                    {credential.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted">
                    {credential.org}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
