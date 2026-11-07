import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/background";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const title = "Mihir Shah — Principal Engineer & Team Lead";
const description =
  "Mihir Shah is a Principal Engineer at Tricon Infotech with 8+ years building accessible, high-performance web products in Angular, React, TypeScript and Node.js — and leading the teams that ship them.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — Mihir Shah",
  },
  description,
  applicationName: "Mihir Shah — Portfolio",
  authors: [{ name: "Mihir Shah" }],
  creator: "Mihir Shah",
  keywords: [
    "Mihir Shah",
    "Principal Engineer",
    "Team Lead",
    "Frontend Engineer",
    "Angular",
    "React",
    "TypeScript",
    "Node.js",
    "Accessibility",
    "WCAG 2.1 AA",
    "Tricon Infotech",
    "Bengaluru",
  ],
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Mihir Shah",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f6" },
    { media: "(prefers-color-scheme: dark)", color: "#080a0e" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function(){try{var stored=localStorage.getItem("theme");var prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;if(stored==="dark"||(!stored&&prefersDark)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mihir Vilaskumar Shah",
  alternateName: "Mihir Shah",
  jobTitle: "Principal Engineer",
  description,
  email: "mailto:mihirvilasshah@gmail.com",
  telephone: "+91-9095051022",
  worksFor: {
    "@type": "Organization",
    name: "Tricon Infotech",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Vellore Institute of Technology" },
    {
      "@type": "CollegeOrUniversity",
      name: "Liverpool John Moores University",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Institute of Management Technology, Ghaziabad",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/mihirvilasshah/",
    "https://www.instagram.com/mihirvilasshah/",
  ],
  knowsAbout: [
    "Angular",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Accessibility",
    "WCAG 2.1 AA",
    "Applied AI",
    "Engineering leadership",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="relative min-h-screen">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-xs font-medium text-canvas transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Background />
        {children}
      </body>
    </html>
  );
}
