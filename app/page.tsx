import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { Story } from "@/components/story";
import { Timeline } from "@/components/timeline";
import { Projects } from "@/components/projects";
import { Social } from "@/components/social";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" className="relative">
        <Hero />
        <Metrics />
        <Story />
        <Timeline />
        <Projects />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
