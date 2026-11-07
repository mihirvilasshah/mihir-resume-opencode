import {
  Activity,
  ArrowUpRight,
  Coffee,
  Film,
  Instagram,
  Linkedin,
  MapPin,
  Mountain,
  PenTool,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile, socialTiles } from "@/lib/data";

const iconMap = {
  pen: PenTool,
  mountain: Mountain,
  activity: Activity,
  film: Film,
  pin: MapPin,
  coffee: Coffee,
} as const;

export function Social() {
  return (
    <section id="beyond" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-signal/70" />
                04 — Off the clock
              </p>
              <h2 className="mt-5 text-[clamp(2.15rem,4.5vw,3.6rem)] font-semibold leading-[1.02] tracking-tightest text-ink">
                Beyond the{" "}
                <span className="font-serif font-normal italic text-signal">
                  pull request.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <p className="max-w-md text-[13.5px] leading-relaxed text-muted">
                Two feeds, two modes. LinkedIn is where the work lives.
                Instagram is where the ink, ridgelines and badminton rallies
                do.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0a0d14] p-6 text-white shadow-[0_40px_90px_-55px_rgb(0_0_0/0.85)] sm:p-7">
              <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.13]" />
              <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgb(99_102_241/0.45),transparent_65%)] blur-2xl transition-opacity duration-700 group-hover:opacity-80" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgb(34_211_238/0.16),transparent_65%)] blur-2xl" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-14 select-none font-serif text-[8rem] italic leading-none text-white/[0.045]"
              >
                MS
              </span>

              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.2em] text-white/55">
                  <Linkedin className="h-3 w-3 text-[#8b9dff]" />
                  Professional
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.18em] text-white/45">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#c6f24e]" />
                  Active
                </span>
              </div>

              <div className="relative mt-8">
                <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/40">
                  linkedin.com/in/mihirvilasshah
                </p>
                <h3 className="mt-3 font-serif text-[2.1rem] italic leading-none tracking-tight text-white">
                  The professional cut.
                </h3>
                <p className="mt-3 max-w-sm text-[12.5px] leading-relaxed text-white/55">
                  Systems, delivery, and the people who make both possible. The
                  version of me your hiring manager should meet first.
                </p>
              </div>

              <div className="relative mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
                {[
                  { value: "8+", label: "Years" },
                  { value: "04", label: "Led" },
                  { value: "18", label: "Shipped" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[#0a0d14]/90 px-3 py-3.5">
                    <p className="text-[20px] font-semibold tracking-tight text-white">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 font-mono text-[7.5px] uppercase tracking-[0.2em] text-white/40">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-3 flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-[#c6f24e]">
                  <span className="font-mono text-[10px]">@</span>
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[11.5px] text-white/80">
                    Principal Engineer · Tricon Infotech
                  </p>
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
                    Bengaluru, India · since 2018
                  </p>
                </div>
              </div>

              <div className="relative mt-auto pt-7">
                <blockquote className="border-l border-white/15 pl-4 font-serif text-[17px] italic leading-snug text-white/65">
                  &ldquo;Ship the system. Grow the people who keep it
                  alive.&rdquo;
                </blockquote>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-[12px] font-medium text-[#0a0d14] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_16px_35px_-16px_rgb(255_255_255/0.45)]"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <p className="mt-4 text-center font-mono text-[8px] uppercase tracking-[0.16em] text-white/30">
                  {profile.available}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="group/insta relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line/80 bg-surface/60 p-5 backdrop-blur-md transition-colors duration-500 hover:border-line sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[conic-gradient(at_30%_30%,#f9ce34,#ee2a7b_45%,#6228d7_80%,#f9ce34)] text-white shadow-[0_10px_24px_-14px_rgb(238_42_123/0.8)]">
                    <Instagram className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[13.5px] font-medium tracking-tight text-ink">
                      @mihirvilasshah
                    </p>
                    <p className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.18em] text-muted">
                      The off-duty index
                    </p>
                  </div>
                </div>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/follow inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-canvas/50 px-3 py-1.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent"
                >
                  Follow
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/follow:-translate-y-0.5 group-hover/follow:translate-x-0.5" />
                </a>
              </div>

              <p className="mt-4 max-w-md text-[12.5px] leading-relaxed text-muted">
                Calligraphy, ridgelines, badminton, and a film list longer than
                my backlog. The textures that keep the engineering honest.
              </p>

              <div className="mt-5 grid flex-1 grid-cols-3 gap-2 sm:gap-2.5">
                {socialTiles.map((tile, index) => {
                  const Icon = iconMap[tile.icon];
                  return (
                    <a
                      key={tile.label}
                      href={profile.instagram}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${tile.label} — ${tile.caption} (opens Instagram)`}
                      className={`group/tile relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br ${tile.gradient} ring-1 ring-white/10 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-24px_rgb(0_0_0/0.6)]`}
                    >
                      <div className="absolute inset-0 noise opacity-25" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(255_255_255/0.28),transparent_55%)] opacity-70" />
                      <span className="absolute left-2 top-2 font-mono text-[7px] tracking-[0.2em] text-white/45">
                        0{index + 1}
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon
                          className="h-6 w-6 text-white/85 transition-transform duration-500 ease-silk group-hover/tile:scale-125 group-hover/tile:-rotate-6 sm:h-7 sm:w-7"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-2 pt-7 sm:p-2.5 sm:pt-8">
                        <p className="text-[8.5px] font-medium leading-tight text-white sm:text-[9.5px]">
                          {tile.label}
                        </p>
                        <p className="mt-0.5 hidden text-[7.5px] leading-tight text-white/55 transition-all duration-300 group-hover/tile:block sm:block">
                          {tile.caption}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-col gap-2 border-t border-line/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[10px] leading-relaxed text-muted">
                  Also: volunteer teacher at WHEEL Orphanage · coordinator,
                  IEEE-MTTS workshop &amp; hackathon.
                </p>
                <div className="flex shrink-0 flex-wrap gap-1.5">
                  {["Calligraphy", "Travel", "Cinema", "Badminton"].map(
                    (hobby) => (
                      <span
                        key={hobby}
                        className="rounded-full border border-line/70 bg-canvas/50 px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.14em] text-muted"
                      >
                        {hobby}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
