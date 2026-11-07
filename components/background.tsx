const PARTICLES = Array.from({ length: 26 }, (_, i) => {
  const seed = i * 137.508;
  const palette = ["accent", "signal", "amber", "muted"] as const;
  return {
    left: `${(seed * 7.3) % 100}`,
    top: `${(seed * 3.7) % 100}`,
    size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1.5,
    delay: `${-((i * 0.73) % 7).toFixed(2)}s`,
    duration: `${(6 + (i % 7) * 1.15).toFixed(2)}s`,
    color: palette[i % palette.length],
    opacity: 0.22 + (i % 4) * 0.13,
  };
});

const colorMap: Record<string, string> = {
  accent: "bg-accent",
  signal: "bg-signal",
  amber: "bg-amber",
  muted: "bg-muted",
};

export function Background() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-canvas" />

      <div className="absolute inset-0 grid-lines opacity-[0.32] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_10%,transparent_80%)] dark:opacity-[0.22]" />

      <div className="absolute -top-[28rem] left-1/2 h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--accent)/0.16),transparent_66%)] blur-2xl dark:bg-[radial-gradient(circle,rgb(var(--accent)/0.24),transparent_66%)]" />
      <div className="absolute -right-40 top-[38%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgb(var(--signal)/0.09),transparent_68%)] blur-3xl dark:bg-[radial-gradient(circle,rgb(var(--signal)/0.11),transparent_68%)]" />
      <div className="absolute -left-48 top-[68%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgb(var(--amber)/0.07),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,rgb(var(--amber)/0.08),transparent_70%)]" />

      <div className="absolute inset-0">
        {PARTICLES.map((particle, index) => (
          <span
            key={index}
            className={`absolute rounded-full ${colorMap[particle.color]} animate-float-soft`}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 noise opacity-[0.16] dark:opacity-[0.22]" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-canvas to-transparent" />
    </div>
  );
}
