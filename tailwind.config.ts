import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "rgb(var(--canvas) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        raise: "rgb(var(--raise) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        amber: "rgb(var(--amber) / <alpha-value>)",
        signal: "rgb(var(--signal) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.055em",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-8px,0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        shimmer: {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "200% 50%" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
        draw: {
          to: { strokeDashoffset: "0" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgb(var(--signal) / 0.5)" },
          "70%": { boxShadow: "0 0 0 10px rgb(var(--signal) / 0)" },
          "100%": { boxShadow: "0 0 0 0 rgb(var(--signal) / 0)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-soft": "float-soft 5s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        blink: "blink 1.05s step-end infinite",
        shimmer: "shimmer 6s linear infinite",
        wave: "wave 1.4s ease-in-out infinite",
        draw: "draw 1s cubic-bezier(0.65,0,0.35,1) forwards",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
        "fade-up": "fade-up 0.55s cubic-bezier(0.16,1,0.3,1) both",
        "spin-slow": "spin-slow 22s linear infinite",
        "gradient-pan": "gradient-pan 9s ease infinite",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
