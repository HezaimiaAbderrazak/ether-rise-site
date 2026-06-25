import { useState, useEffect, useCallback } from "react";
import { Github, ExternalLink, X, Layers, Calendar, Zap, ChevronRight } from "lucide-react";

import demoJournalist from "@/assets/demos/ai-journalist.png";
import demoFreed from "@/assets/demos/freed-ai.png";
import demoEcoBird from "@/assets/demos/eco.png";

/* ── project data ── */
const projects = [
  {
    title: "AI Journalist",
    tag: "Fake News Detector",
    desc: "NLP-powered platform that analyzes articles and scores credibility using transformer models and source cross-referencing.",
    longDesc:
      "AI Journalist is an intelligent fake-news detection system that combines multiple NLP techniques to evaluate article credibility. The platform ingests raw article text, applies transformer-based sentiment and factuality analysis, cross-references sources against known databases, and produces a multi-dimensional credibility score. The system features a clean React dashboard for real-time analysis, with highlighted suspicious passages and detailed confidence metrics.",
    stack: ["Python", "PyTorch", "FastAPI", "React"],
    features: [
      "Transformer-based credibility scoring",
      "Source cross-referencing engine",
      "Real-time article analysis dashboard",
      "NLP confidence & tone metrics",
    ],
    date: "2025",
    category: "NLP · AI",
    href: "https://github.com/HezaimiaAbderrazak/ai-journalism-platform-prototype.git",
    demo: demoJournalist,
    accent: "from-[var(--neon-blue)] to-cyan-400",
    accentColor: "var(--neon-blue)",
  },
  
  {
    title: "Freed AI Platform",
    tag: "Full-stack AI Suite",
    desc: "A multi-tool AI workspace integrating LLM chat, image tools, and document Q&A behind a clean dashboard.",
    longDesc:
      "Freed AI is a comprehensive AI workspace that unifies multiple AI capabilities under a single, elegant interface. It features an LLM-powered chat assistant, an AI image generation and editing suite, and a document Q&A system that can parse PDFs and answer questions about their content. Built with a modern Next.js frontend and a robust Node.js backend, the platform leverages OpenAI APIs and stores conversations and generated assets in PostgreSQL.",
    stack: ["Next.js", "Node", "OpenAI", "Postgres"],
    features: [
      "Multi-model LLM chat interface",
      "AI image generation & editing",
      "Document Q&A with PDF parsing",
      "Persistent conversation history",
    ],
    date: "2025",
    category: "Full-Stack · AI",
    href: "https://thi9ati.vercel.app",
    demo: demoFreed,
    accent: "from-[var(--neon-purple)] to-pink-400",
    accentColor: "var(--neon-purple)",
  },
  
  {
   title: "EcoBird Counter",
   tag: "AI Bird Detection",
   desc: "Real-time bird species detection platform that analyzes video footage using Gemini Vision AI, with live bounding-box overlays and an interactive field guide.",
   longDesc:
    "EcoBird Counter is a production-grade AI bird monitoring web application focused on North African and Algerian biodiversity. Users upload MP4/AVI/MOV video files, set a sampling interval, and a multi-stage computer vision pipeline extracts frames with FFmpeg and sends them to Google Gemini Vision for frame-by-frame species detection. The system draws live bounding-box overlays with confidence scores during video playback, accumulates unique-bird counters per species, and generates AI-powered field guide cards with scientific name, conservation status, habitat, diet, and eBird North Africa context. Results are cached in PostgreSQL to eliminate duplicate API calls.",
   stack: ["React", "TypeScript", "Express", "PostgreSQL", "Gemini Vision AI", "FFmpeg", "Drizzle ORM"],
   features: [
    "Gemini Vision AI frame-by-frame species identification",
    "Live bounding-box canvas overlay during video playback",
    "Real-time species counters updating frame-by-frame",
    "AI-generated field guide cards with North African eBird context",
    "PostgreSQL result caching for instant repeat lookups",
  ],
   date: "2026",
   category: "Computer Vision · AI",
   href: "https://github.com/HezaimiaAbderrazak/Eco-Bird-Count.git",
   demo: demoEcoBird,
   accent: "from-[var(--neon-green)] to-emerald-400",
   accentColor: "var(--neon-green)",
 },
];

type Project = (typeof projects)[number];

/* ── modal component ── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  // close on Escape
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fade-in" />

      {/* modal */}
      <div
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl glass-strong border border-white/10 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 glass rounded-full p-2 hover:bg-white/10 transition-colors group"
          aria-label="Close"
        >
          <X className="size-5 text-muted-foreground group-hover:text-foreground transition-colors" />
        </button>

        {/* demo image section */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-3xl">
          <img
            src={project.demo}
            alt={`${project.title} demo`}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.02_270)] via-transparent to-transparent" />

          {/* floating title over image */}
          <div className="absolute bottom-6 left-6 right-16">
            <div
              className="inline-block text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-full mb-3"
              style={{
                background: `${project.accentColor}20`,
                color: project.accentColor,
                border: `1px solid ${project.accentColor}40`,
              }}
            >
              {project.category}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold font-display">{project.title}</h3>
          </div>
        </div>

        {/* content body */}
        <div className="p-6 md:p-10">
          {/* meta row */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="size-3.5" style={{ color: project.accentColor }} />
              {project.date}
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Layers className="size-3.5" style={{ color: project.accentColor }} />
              {project.tag}
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            {/* left — description */}
            <div className="md:col-span-3">
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <Zap className="size-3.5" style={{ color: project.accentColor }} />
                Overview
              </h4>
              <p className="text-muted-foreground leading-relaxed text-[15px] mb-8">
                {project.longDesc}
              </p>

              {/* tech stack */}
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-lg glass font-mono text-foreground border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* action buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-6 py-2.5 text-sm font-semibold text-background hover:scale-105 transition-transform"
                >
                  <Github className="size-4" />
                  View Source Code
                </a>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-2.5 text-sm font-semibold hover:neon-border transition-all"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
              </div>
            </div>

            {/* right — features */}
            <div className="md:col-span-2">
              <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
                Key Features
              </h4>
              <ul className="space-y-3">
                {project.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 glass rounded-xl p-4 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <ChevronRight
                      className="size-4 mt-0.5 shrink-0 transition-transform group-hover:translate-x-1"
                      style={{ color: project.accentColor }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── main projects section ── */
export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-blue)]">Work</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3">
                Selected <span className="text-gradient">Projects</span>
              </h2>
            </div>
            <a
              href="https://github.com/HezaimiaAbderrazak"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
            >
              See all on GitHub <ExternalLink className="size-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                onClick={() => setActiveProject(p)}
                className="group relative rounded-2xl glass overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_oklch(0.78_0.2_230/0.15)]"
              >
                {/* demo preview */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.demo}
                    alt={`${p.title} preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.03_270)] via-[oklch(0.12_0.03_270/0.4)] to-transparent" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-[0.08] group-hover:opacity-[0.15] transition-opacity duration-500`}
                  />

                  {/* click indicator */}
                  <div className="absolute top-3 right-3 glass rounded-full px-3 py-1 text-[10px] font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    <span>View Details</span>
                    <ChevronRight className="size-3" />
                  </div>
                </div>

                {/* card body */}
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] mb-2" style={{ color: p.accentColor }}>
                    {p.tag}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-5">
                    {p.desc}
                  </p>

                  {/* tech stack pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] px-2 py-1 rounded-md bg-secondary/70 text-muted-foreground font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* bottom accent line */}
                <div
                  className={`h-[2px] bg-gradient-to-r ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </>
  );
}
