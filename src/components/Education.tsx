import { GraduationCap } from "lucide-react";

const items = [
  {
    period: "2025 — Present",
    title: "Master's in Web & AI",
    place: "University Mohamed Cherif Messaadia, Souk Ahras",
    desc: "Advanced coursework in deep learning, distributed systems, and modern web architecture.",
  },
  {
    period: "2022 — 2025",
    title: "Bachelor's in Computer Science",
    place: "University Mohamed Cherif Messaadia",
    desc: "Foundations in algorithms, databases, and software engineering. Graduated with distinction.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-blue)]">Academia</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            <span className="text-gradient">Education</span>
          </h2>
        </div>
        <div className="space-y-6">
          {items.map((it) => (
            <div key={it.title} className="glass rounded-2xl p-6 md:p-8 flex gap-5 hover:glow-purple transition-shadow">
              <div className="shrink-0">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-blue)]">
                  <GraduationCap className="size-5 text-background" />
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-[var(--neon-blue)] mb-1">{it.period}</div>
                <h3 className="text-xl font-semibold">{it.title}</h3>
                <div className="text-sm text-muted-foreground mt-1">{it.place}</div>
                <p className="text-sm text-muted-foreground/80 mt-3">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
