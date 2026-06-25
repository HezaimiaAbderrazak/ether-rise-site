import { Code2, Server, Brain, Wrench } from "lucide-react";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    color: "from-[var(--neon-blue)] to-cyan-400",
    items: [
      { name: "React", level: 92, icons: [`${ICON_BASE}/react/react-original.svg`] },
      { name: "Next.js", level: 92, icons: [`${ICON_BASE}/nextjs/nextjs-original.svg`] },
      { name: "TypeScript", level: 88, icons: [`${ICON_BASE}/typescript/typescript-original.svg`] },
      { name: "Tailwind CSS", level: 95, icons: [`${ICON_BASE}/tailwindcss/tailwindcss-original.svg`] },
      { name: "CSS3", level: 93, icons: [`${ICON_BASE}/css3/css3-original.svg`] },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    color: "from-emerald-400 to-[var(--neon-blue)]",
    items: [
      { name: "Node.js", level: 88, icons: [`${ICON_BASE}/nodejs/nodejs-original.svg`] },
      { name: "Express", level: 86, icons: [`${ICON_BASE}/express/express-original.svg`] },
      { name: "Python", level: 85, icons: [`${ICON_BASE}/python/python-original.svg`] },
      { name: "PostgreSQL", level: 82, icons: [`${ICON_BASE}/postgresql/postgresql-original.svg`] },
      { name: "MongoDB", level: 80, icons: [`${ICON_BASE}/mongodb/mongodb-original.svg`] },
    ],
  },
  {
    icon: Brain,
    title: "AI / ML",
    color: "from-[var(--neon-purple)] to-pink-400",
    items: [
      { name: "TensorFlow", level: 84, icons: [`${ICON_BASE}/tensorflow/tensorflow-original.svg`] },
      { name: "PyTorch", level: 83, icons: [`${ICON_BASE}/pytorch/pytorch-original.svg`] },
      { name: "Scikit-learn", level: 88, icons: [`${ICON_BASE}/scikitlearn/scikitlearn-original.svg`] },
      { name: "Pandas", level: 86, icons: [`${ICON_BASE}/pandas/pandas-original.svg`] },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    color: "from-amber-400 to-[var(--neon-purple)]",
    items: [
      { name: "Git", level: 90, icons: [`${ICON_BASE}/git/git-original.svg`] },
      { name: "Docker", level: 87, icons: [`${ICON_BASE}/docker/docker-original.svg`] },
      { name: "Linux", level: 85, icons: [`${ICON_BASE}/linux/linux-original.svg`] },
      { name: "Figma", level: 75, icons: [`${ICON_BASE}/figma/figma-original.svg`] },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-blue)]">Toolbox</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Skills & <span className="text-gradient">Stack</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective">
          {groups.map((g, i) => (
            <div
              key={g.title}
              className="group glass rounded-2xl p-6 tilt-3d hover:-translate-y-2 hover:rotate-[1deg] hover:glow-blue transition-all"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${g.color} mb-4`}>
                <g.icon className="size-5 text-background" />
              </div>
              <h3 className="text-lg font-semibold mb-5">{g.title}</h3>
              <ul className="space-y-4">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        {s.icons.map((url) => (
                          <img
                            key={url}
                            src={url}
                            alt={s.name}
                            className="size-4 inline-block"
                            loading="lazy"
                          />
                        ))}
                        {s.name}
                      </span>
                      <span className="text-[var(--neon-blue)] font-mono">{s.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] transition-all duration-1000 group-hover:shadow-[0_0_10px_var(--neon-blue)]"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
