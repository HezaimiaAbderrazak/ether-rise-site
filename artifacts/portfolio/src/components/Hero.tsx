import { useEffect, useState } from "react";
import { HeroScene } from "./HeroScene";
import { ArrowDown, Download, FolderGit2 } from "lucide-react";

const roles = ["Full Stack Developer", "AI Engineer"];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 45 : 90;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-90">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground mb-6">
            <span className="size-2 rounded-full bg-[var(--neon-blue)] animate-glow-pulse" />
            Available for opportunities · Algeria
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            Hazaimia
            <br />
            <span className="text-gradient">Abderrazak</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-mono mb-10 h-7">
            <span className="text-[var(--neon-blue)]">&gt;</span>{" "}
            <span className="cursor-blink">{text}</span>
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-6 py-3 text-sm font-semibold text-background hover:scale-105 transition-transform animate-glow-pulse"
            >
              <FolderGit2 className="size-4" />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:neon-border transition-all"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs">
          <span className="uppercase tracking-widest">Scroll</span>
          <ArrowDown className="size-4 animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}
