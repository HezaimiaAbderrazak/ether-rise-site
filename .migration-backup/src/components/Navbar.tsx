import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";


const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav className={`mx-auto max-w-6xl px-4 ${scrolled ? "glass-strong rounded-full mx-4 md:mx-auto" : ""}`}>
        <div className="flex items-center justify-between py-3 px-4">
          <a href="#hero" className="font-display text-lg font-bold tracking-tight">
            <span className="text-gradient">HA.</span>
          </a>
          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center rounded-full glass px-4 py-2 text-xs font-medium hover:glow-blue transition-shadow"
            >
              Let's talk
            </a>
          </div>
          <div className="md:hidden"><ThemeToggle /></div>

        </div>
      </nav>
    </header>
  );
}
