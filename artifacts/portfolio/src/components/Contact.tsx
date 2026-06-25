import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--neon-blue)]">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's build something <span className="text-gradient">together</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a href="mailto:hazaimiaabderrazak@gmail.com" className="glass rounded-2xl p-5 flex items-center gap-4 hover:glow-blue transition-shadow">
              <Mail className="size-5 text-[var(--neon-blue)]" />
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="text-sm">hazaimiaabderrazak@gmail.com</div>
              </div>
            </a>
            <a href="tel:+213794828320" className="glass rounded-2xl p-5 flex items-center gap-4 hover:glow-blue transition-shadow">
              <Phone className="size-5 text-[var(--neon-blue)]" />
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Phone</div>
                <div className="text-sm">+213 794 82 83 20</div>
              </div>
            </a>
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <MapPin className="size-5 text-[var(--neon-purple)]" />
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Location</div>
                <div className="text-sm">Souk Ahras, Algeria</div>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://github.com/HezaimiaAbderrazak" target="_blank" rel="noreferrer" aria-label="GitHub" className="glass rounded-xl p-3 hover:glow-blue transition-shadow">
                <Github className="size-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass rounded-xl p-3 hover:glow-blue transition-shadow">
                <Linkedin className="size-5" />
              </a>
              <a href="mailto:hazaimiaabderrazak@gmail.com" aria-label="Email" className="glass rounded-xl p-3 hover:glow-blue transition-shadow">
                <Mail className="size-5" />
              </a>
            </div>
          </div>

          <form onSubmit={submit} className="glass-strong rounded-2xl p-6 space-y-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input required className="mt-1.5 w-full bg-secondary/60 border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--neon-blue)] focus:glow-blue transition-shadow" placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input required type="email" className="mt-1.5 w-full bg-secondary/60 border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--neon-blue)] focus:glow-blue transition-shadow" placeholder="you@domain.com" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea required rows={4} className="mt-1.5 w-full bg-secondary/60 border border-border rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--neon-blue)] focus:glow-blue transition-shadow resize-none" placeholder="Tell me about your project…" />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-6 py-3 text-sm font-semibold text-background hover:scale-[1.02] transition-transform">
              <Send className="size-4" />
              {sent ? "Message sent ✓" : "Send message"}
            </button>
          </form>
        </div>

        <footer className="text-center text-xs text-muted-foreground mt-20 pb-6">
          © {new Date().getFullYear()} Hazaimia Abderrazak. Crafted with React, Three.js & GSAP.
        </footer>
      </div>
    </section>
  );
}
