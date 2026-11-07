import { ArrowUp, ArrowUpRight, Instagram, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: profile.linkedin, Icon: Linkedin },
  { label: "Instagram", href: profile.instagram, Icon: Instagram },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line/70 bg-canvas/40 pt-12 backdrop-blur-sm">
      <div className="shell">
        <div className="flex flex-col gap-3 border-b border-line/70 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.24em] text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
              </span>
              Available for the right conversation
            </p>
            <p className="mt-2 font-serif text-[clamp(1.5rem,3vw,2.1rem)] italic leading-tight text-ink">
              Good systems. Better teams. Let&apos;s make both.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-line bg-surface/50 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent sm:self-auto"
          >
            Start here
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid gap-9 py-10 sm:grid-cols-2 md:grid-cols-12">
          <div className="md:col-span-6">
            <a href="#top" className="group inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface/60 font-serif text-[19px] italic text-ink transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
                M
              </span>
              <span>
                <span className="block text-[14px] font-medium tracking-tight text-ink">
                  {profile.name}
                </span>
                <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
                  {profile.role} · {profile.company}
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[12px] leading-relaxed text-muted">
              Building accessible, high-performance products in Angular, React
              and Node.js — and the teams that keep them healthy.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line/80 bg-surface/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-muted">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[12px] text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-muted">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-1 text-[12px] text-muted transition-colors hover:text-ink"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group inline-flex items-center gap-1 text-[12px] text-muted transition-colors hover:text-ink"
                >
                  Instagram
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[12px] text-muted transition-colors hover:text-ink"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-muted">
              Say hello
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-3 block break-all text-[12px] leading-relaxed text-ink transition-colors hover:text-accent"
            >
              {profile.email}
            </a>
            <p className="mt-2 text-[11px] text-muted">{profile.phone}</p>
            <p className="mt-1 text-[11px] text-muted">{profile.location}</p>
          </div>
        </div>

        <div className="pointer-events-none relative -mb-2 select-none overflow-hidden">
          <p
            aria-hidden="true"
            className="whitespace-nowrap text-center font-serif text-[clamp(3.4rem,13.5vw,10.5rem)] italic leading-[0.78] tracking-[-0.04em] text-ink/[0.07] dark:text-ink/[0.09]"
          >
            mihir shah<span className="text-accent/40">.</span>
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-line/70 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted/70">
            © {new Date().getFullYear()} {profile.fullName} · All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted/70">
              Next.js · Tailwind CSS · Lucide
            </p>
            <a
              href="#top"
              aria-label="Back to top"
              className="group flex h-8 w-8 items-center justify-center rounded-full border border-line/80 bg-surface/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent"
            >
              <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
