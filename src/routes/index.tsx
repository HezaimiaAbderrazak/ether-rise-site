import { createFileRoute } from "@tanstack/react-router";
import { ParticlesBg } from "@/components/ParticlesBg";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hazaimia Abderrazak — Full Stack Developer & AI Engineer" },
      { name: "description", content: "Portfolio of Hazaimia Abderrazak — Full Stack Developer & AI Engineer based in Souk Ahras, Algeria." },
      { property: "og:title", content: "Hazaimia Abderrazak — Full Stack & AI" },
      { property: "og:description", content: "Building intelligent web products at the edge of web & AI." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <ParticlesBg />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Education />
      <Contact />
    </main>
  );
}
