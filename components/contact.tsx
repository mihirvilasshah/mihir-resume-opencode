"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data";

type FormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "sending" | "success";

const EMPTY: FormValues = { name: "", email: "", company: "", message: "" };

const usefulFor = [
  "Frontend architecture — Angular, React, TypeScript",
  "Accessibility and performance remediation",
  "Applied AI features with a real product wrapper",
  "Embedded technical leadership for a delivery team",
];

type FieldProps = {
  id: keyof FormValues;
  label: string;
  value: string;
  placeholder: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  focused: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
};

function Field({
  id,
  label,
  value,
  placeholder,
  type = "text",
  textarea = false,
  required = false,
  autoComplete,
  error,
  focused,
  onChange,
  onFocus,
  onBlur,
}: FieldProps) {
  const floated = focused || value.length > 0;
  const labelClass = `pointer-events-none absolute left-4 z-10 font-mono uppercase transition-all duration-300 ${
    floated
      ? "top-[11px] text-[8.5px] tracking-[0.24em] text-accent"
      : textarea
        ? "top-6 text-[10.5px] tracking-[0.18em] text-muted"
        : "top-1/2 -translate-y-1/2 text-[10.5px] tracking-[0.18em] text-muted"
  }`;

  return (
    <div>
      <div className="relative">
        <label htmlFor={id} className={labelClass}>
          {label}
          {required ? <span className="ml-1 text-amber">*</span> : null}
        </label>
        {textarea ? (
          <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            rows={4}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`input-shell min-h-[132px] resize-none leading-relaxed ${
              error ? "border-red-500/60 focus:border-red-500" : ""
            }`}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            className={`input-shell h-16 ${error ? "border-red-500/60 focus:border-red-500" : ""}`}
          />
        )}
      </div>
      <div className="min-h-[18px] pt-1">
        {error ? (
          <p id={`${id}-error`} className="text-[10px] text-red-600 dark:text-red-400">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `Portfolio enquiry${values.name ? ` — ${values.name}` : ""}`,
    );
    const body = encodeURIComponent(
      `Hi Mihir,\n\n${values.message}\n\n— ${values.name || "Someone"}${
        values.company ? `\n${values.company}` : ""
      }${values.email ? `\n${values.email}` : ""}`,
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [values]);

  function update(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => {
      if (!previous[name as keyof FormValues]) return previous;
      const next = { ...previous };
      delete next[name as keyof FormValues];
      return next;
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "A name helps me address the reply.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      nextErrors.email = "That email doesn't look quite right.";
    }
    if (values.message.trim().length < 10) {
      nextErrors.message = "Tell me a little more — 10 characters minimum.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    timerRef.current = setTimeout(() => setStatus("success"), 900);
  }

  function reset() {
    setValues(EMPTY);
    setErrors({});
    setFocused(null);
    setStatus("idle");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
      copyTimerRef.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgb(var(--accent)/0.09),transparent_68%)] blur-3xl" />

      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-accent/70" />
                05 — Contact
              </p>
              <h2 className="mt-5 text-[clamp(2.2rem,4.6vw,3.7rem)] font-semibold leading-[1.0] tracking-tightest text-ink">
                Let&apos;s build
                <br />
                something{" "}
                <span className="font-serif font-normal italic text-accent">
                  worth shipping.
                </span>
              </h2>
              <p className="mt-6 max-w-md text-[14px] leading-[1.8] text-muted">
                A platform to modernise, a team to level up, or an AI idea that
                needs an engineer&apos;s scepticism — tell me what you&apos;re
                wrestling with. I read every message myself.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-7 rounded-2xl border border-line/70 bg-surface/40 p-4 backdrop-blur-md">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.22em] text-muted">
                  Where I&apos;m most useful
                </p>
                <ul className="mt-3 space-y-2.5">
                  {usefulFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[12px] leading-relaxed text-ink/85"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-6 space-y-0">
                <div className="flex items-center justify-between gap-3 border-b border-line/70 py-3.5">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group flex min-w-0 items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line/70 bg-surface/60 text-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
                      <Mail className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
                        Email
                      </span>
                      <span className="block truncate text-[13px] text-ink transition-colors group-hover:text-accent">
                        {profile.email}
                      </span>
                    </span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email address"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line/70 bg-surface/50 text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent"
                  >
                    {copied ? (
                      <Check className="h-3.5 w-3.5 text-signal" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3 border-b border-line/70 py-3.5">
                  <a
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line/70 bg-surface/60 text-muted transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
                      <Phone className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
                        Phone
                      </span>
                      <span className="block text-[13px] text-ink transition-colors group-hover:text-accent">
                        {profile.phone}
                      </span>
                    </span>
                  </a>
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted/60">
                    IST
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line/70 bg-surface/60 text-muted">
                      <MapPin className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-muted">
                        Based in
                      </span>
                      <span className="block text-[13px] text-ink">
                        {profile.location}
                      </span>
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line/70 bg-canvas/40 px-2 py-1 font-mono text-[7.5px] uppercase tracking-[0.14em] text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                    UTC +5:30
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-line/80 bg-surface/70 p-5 shadow-[0_40px_100px_-60px_rgb(var(--ink)/0.6)] backdrop-blur-xl sm:p-7">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

              {status === "success" ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[28rem] animate-fade-up flex-col items-center justify-center px-2 py-8 text-center"
                >
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    <span className="absolute inset-0 animate-ping rounded-full bg-signal/15 [animation-duration:2.6s]" />
                    <span className="absolute inset-0 rounded-full border border-signal/20 bg-signal/[0.06]" />
                    <svg
                      viewBox="0 0 52 52"
                      className="relative h-14 w-14 text-signal"
                      aria-hidden="true"
                    >
                      <circle
                        cx="26"
                        cy="26"
                        r="23"
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.25"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M15 27 l7 7 l15 -16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        pathLength={1}
                        style={{
                          strokeDasharray: 1,
                          strokeDashoffset: 1,
                        }}
                        className="animate-draw"
                      />
                    </svg>
                  </div>

                  <p className="mt-6 font-mono text-[8.5px] uppercase tracking-[0.26em] text-muted">
                    Draft composed · nothing sent yet
                  </p>
                  <h3 className="mt-3 text-[clamp(1.7rem,3vw,2.2rem)] font-semibold tracking-tightest text-ink">
                    One tap from my inbox.
                  </h3>
                  <p className="mt-3 max-w-sm text-[12.5px] leading-relaxed text-muted">
                    This site is static — no database, no tracking. Your note is
                    ready as an email to{" "}
                    <span className="text-ink">{profile.email}</span>. Open it
                    in your mail app and hit send.
                  </p>

                  <a href={mailto} className="btn-primary group mt-7 w-full sm:w-auto">
                    <Send className="h-3.5 w-3.5" />
                    Open in my mail app
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
                    >
                      {copied ? (
                        <Check className="h-3 w-3 text-signal" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                      {copied ? "Copied" : "Copy address"}
                    </button>
                    <span className="h-3 w-px bg-line" />
                    <button
                      type="button"
                      onClick={reset}
                      className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
                    >
                      Write another
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="flex items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.2em] text-muted">
                        <Sparkles className="h-3 w-3 text-accent" />
                        Compose a message
                      </p>
                      <h3 className="mt-2 text-[19px] font-medium tracking-tight text-ink">
                        Start the conversation.
                      </h3>
                    </div>
                    <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-line/70 bg-canvas/40 px-2.5 py-1.5 font-mono text-[7.5px] uppercase tracking-[0.14em] text-muted sm:inline-flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                      No spam, ever
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="mt-6">
                    <div className="grid gap-x-4 sm:grid-cols-2">
                      <Field
                        id="name"
                        label="Your name"
                        value={values.name}
                        placeholder="Your name"
                        autoComplete="name"
                        required
                        error={errors.name}
                        focused={focused === "name"}
                        onChange={update}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                      />
                      <Field
                        id="email"
                        label="Email"
                        value={values.email}
                        placeholder="Email"
                        type="email"
                        autoComplete="email"
                        required
                        error={errors.email}
                        focused={focused === "email"}
                        onChange={update}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>

                    <Field
                      id="company"
                      label="Company / team (optional)"
                      value={values.company}
                      placeholder="Company"
                      autoComplete="organization"
                      error={errors.company}
                      focused={focused === "company"}
                      onChange={update}
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                    />

                    <Field
                      id="message"
                      label="What are we building?"
                      value={values.message}
                      placeholder="What are we building?"
                      textarea
                      required
                      error={errors.message}
                      focused={focused === "message"}
                      onChange={update}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                    />

                    <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-[19rem] text-[10px] leading-relaxed text-muted">
                        Submitting composes an email — nothing is stored or sent
                        from this page.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-primary group w-full shrink-0 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                      >
                        {status === "sending" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Composing…
                          </>
                        ) : (
                          <>
                            Compose message
                            <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
