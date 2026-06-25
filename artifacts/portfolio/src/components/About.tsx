import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Brain, Eye, Cpu, Sparkles } from "lucide-react";
import portrait from "@/assets/hazaimia-portrait.jpg";

/* ── animated counter ── */
function Counter({ to, label, suffix = "" }: { to: number; label: string; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient">
        {n}{suffix}
      </div>
      <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

/* ── focus areas ── */
const focusAreas = [
  { icon: Brain, label: "Deep Learning", color: "var(--neon-purple)" },
  { icon: Eye, label: "Computer Vision", color: "var(--neon-blue)" },
  { icon: Cpu, label: "Machine Learning", color: "var(--neon-purple)" },
  { icon: Sparkles, label: "Generative AI", color: "var(--neon-blue)" },
];

export function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg) translateZ(20px)`;
  };
  const handleLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "rotateY(0) rotateX(0) translateZ(0)";
  };

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14 items-center">

        {/* ── portrait with enhanced design ── */}
        <div className="perspective flex justify-center">
          <div className="relative">
            {/* outer rotating gradient ring */}
            <div className="absolute -inset-3 rounded-3xl animate-spin-slow opacity-60 pointer-events-none"
              style={{
                background: "conic-gradient(from 0deg, var(--neon-blue), var(--neon-purple), transparent, var(--neon-blue))",
                filter: "blur(8px)",
              }}
            />

            {/* glowing backdrop */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[var(--neon-blue)]/30 to-[var(--neon-purple)]/30 blur-md pointer-events-none" />

            {/* main card */}
            <div
              ref={cardRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              className="tilt-3d relative rounded-3xl overflow-hidden glass-strong p-1.5"
            >
              <img
                src={portrait}
                alt="Hazaimia Abderrazak"
                width={768}
                height={768}
                loading="lazy"
                className="w-full h-auto rounded-2xl relative z-10"
              />

              {/* inner gradient overlay */}
              <div className="absolute inset-1.5 rounded-2xl bg-gradient-to-tr from-[var(--neon-blue)]/10 via-transparent to-[var(--neon-purple)]/25 pointer-events-none z-20" />

              {/* corner glow accents */}
              <div className="absolute top-3 left-3 size-3 rounded-full bg-[var(--neon-blue)] blur-[2px] animate-glow-pulse z-20" />
              <div className="absolute bottom-3 right-3 size-3 rounded-full bg-[var(--neon-purple)] blur-[2px] animate-glow-pulse z-20" style={{ animationDelay: "1.5s" }} />
            </div>

            {/* floating tech badges around portrait */}
            <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-1.5 text-[10px] font-mono font-bold text-[var(--neon-blue)] uppercase tracking-wider animate-float z-30 border border-[var(--neon-blue)]/30">
              🧠 DL
            </div>
            <div className="absolute -bottom-3 -left-4 glass rounded-xl px-3 py-1.5 text-[10px] font-mono font-bold text-[var(--neon-purple)] uppercase tracking-wider animate-float z-30 border border-[var(--neon-purple)]/30"
              style={{ animationDelay: "2s" }}
            >
              👁️ CV
            </div>
            <div className="absolute top-1/2 -right-6 glass rounded-xl px-3 py-1.5 text-[10px] font-mono font-bold text-[var(--neon-blue)] uppercase tracking-wider animate-float z-30 border border-[var(--neon-blue)]/30"
              style={{ animationDelay: "3.5s" }}
            >
              ⚡ ML
            </div>
          </div>
        </div>

        {/* ── text content ── */}
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-blue)]">About</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Crafting intelligence through{" "}
            <span className="text-gradient">code & data</span>.
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
            I'm <span className="text-foreground font-semibold">Hazaimia Abderrazak</span>, a Full Stack Developer & AI Engineer
            based in Souk Ahras, Algeria. Currently pursuing my Master's in Web & AI,
            I specialize in designing end-to-end intelligent systems — from deep neural architectures
            to production-ready APIs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
            My core expertise lies in <span className="text-foreground font-medium">Machine Learning</span>,{" "}
            <span className="text-foreground font-medium">Deep Learning</span>,{" "}
            and <span className="text-foreground font-medium">Computer Vision</span> — building
            models that see, understand, and reason about real-world data. From CNNs for image
            classification to transformer-based NLP pipelines, I bridge the gap between
            research and deployment.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
            Whether it's training custom vision models, fine-tuning LLMs, or building full-stack
            AI platforms with React & FastAPI — I turn complex problems into elegant, scalable solutions.
          </p>

          {/* focus areas chips */}
          <div className="flex flex-wrap gap-3 mb-10">
            {focusAreas.map((area) => (
              <div
                key={area.label}
                className="group inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium hover:neon-border transition-all duration-300 cursor-default"
              >
                <area.icon className="size-3.5 transition-transform duration-300 group-hover:scale-125" style={{ color: area.color }} />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">{area.label}</span>
              </div>
            ))}
          </div>

          {/* counters */}
          <div className="grid grid-cols-3 gap-4">
            <Counter to={3} label="Projects" />
            <Counter to={2} label="Years Exp" suffix="+" />
            <Counter to={10} label="AI Models" suffix="+" />
          </div>
        </div>
      </div>
    </section>
  );
}
