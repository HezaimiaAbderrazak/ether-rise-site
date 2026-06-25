# Hazaimia Abderrazak — Personal Portfolio

> A modern, dark-themed personal portfolio website built with React, TanStack Start, and Three.js — showcasing AI & Full-Stack projects with smooth animations and a stunning glassmorphism design.

---

## 🌐 Live Preview

<!-- Add your deployment URL here -->
> Coming soon / [Deploy on Cloudflare Pages](#-deployment)

---

## ✨ Features

- 🎨 **Glassmorphism UI** — Dark theme with neon accents (blue, purple, green)
- 🌌 **3D Hero Scene** — Interactive Three.js particle field with `@react-three/fiber`
- ✍️ **Typewriter Effect** — Animated role cycling (`Full Stack Developer` / `AI Engineer`)
- 🗂️ **Project Showcase** — Card grid with modal detail view, demo images, and live/GitHub links
- 🧠 **Skills Section** — Progress bars with Devicon icons grouped by category (Frontend, Backend, AI/ML, Tools)
- 📚 **Education Section** — Academic background display
- 📬 **Contact Section** — Reachable via the contact form
- 🌙 **Theme Toggle** — Light / Dark mode support
- ⚡ **Particle Background** — `@tsparticles/react` v3 ambient particle effect
- 📱 **Fully Responsive** — Mobile-first design that scales to all screen sizes

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) + [React 19](https://react.dev) |
| Routing | [TanStack Router](https://tanstack.com/router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| 3D / WebGL | [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei) |
| Animations | [GSAP](https://gsap.com/) + CSS micro-animations |
| Particles | [@tsparticles/react](https://github.com/tsparticles/react) v3 |
| UI Components | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Icons | [Lucide React](https://lucide.dev/) + [Devicon CDN](https://devicon.dev/) |
| Build Tool | [Vite](https://vitejs.dev/) v7 |
| Runtime | [Bun](https://bun.sh/) |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com/) (via Wrangler) |

---

## 📁 Project Structure

```
ether-rise-site-main/
├── src/
│   ├── assets/
│   │   └── demos/              # Project demo screenshots
│   ├── components/
│   │   ├── Hero.tsx            # Hero section with typewriter & 3D scene
│   │   ├── HeroScene.tsx       # Three.js 3D particle/mesh scene
│   │   ├── Navbar.tsx          # Top navigation bar
│   │   ├── Projects.tsx        # Project cards + detail modal
│   │   ├── Skills.tsx          # Skills grid with progress bars
│   │   ├── About.tsx           # About me section
│   │   ├── Education.tsx       # Education section
│   │   ├── Contact.tsx         # Contact form section
│   │   ├── ParticlesBg.tsx     # tsParticles background
│   │   ├── ThemeToggle.tsx     # Dark/Light mode toggle
│   │   └── ui/                 # Reusable shadcn/ui primitives
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── routes/                 # TanStack Router file-based routes
│   ├── styles.css              # Global CSS + design tokens
│   ├── router.tsx              # Router configuration
│   ├── server.ts               # Server entry point
│   └── start.ts                # App start entry point
├── vite.config.ts              # Vite + Cloudflare + TanStack plugin config
├── tsconfig.json               # TypeScript config
├── wrangler.jsonc              # Cloudflare Workers/Pages config
├── components.json             # shadcn/ui config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) >= 1.x  **or** Node.js >= 20
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/HezaimiaAbderrazak/ether-rise-site.git
cd ether-rise-site-main

# Install dependencies with Bun (recommended)
bun install

# Or with npm
npm install
```

### Development Server

```bash
# Start the dev server (Bun)
bun run dev

# Or with npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
bun run build
# or
npm run build
```

### Preview Production Build

```bash
bun run preview
# or
npm run preview
```

---

## 🎨 Design System

The site uses CSS custom properties defined in `src/styles.css` for consistent theming:

| Token | Color | Usage |
|-------|-------|-------|
| `--neon-blue` | `oklch(0.78 0.2 230)` | Primary accent, links, progress bars |
| `--neon-purple` | `oklch(0.72 0.22 285)` | Secondary accent, gradients |
| `--neon-green` | `oklch(0.80 0.18 155)` | Tertiary accent (EcoBird project) |

**Glassmorphism** is achieved via `.glass` and `.glass-strong` utility classes that apply `backdrop-blur`, semi-transparent backgrounds, and subtle borders.

---

## 📦 Key Dependencies

```json
{
  "react": "^19.2.0",
  "@tanstack/react-router": "^1.168.25",
  "@tanstack/react-start": "^1.167.50",
  "@react-three/fiber": "^9.6.1",
  "@react-three/drei": "^10.7.7",
  "three": "^0.184.0",
  "gsap": "^3.15.0",
  "@tsparticles/react": "^3.0.0",
  "@tsparticles/slim": "^3.0.0",
  "tailwindcss": "^4.2.1",
  "lucide-react": "^0.575.0"
}
```

---

## ☁️ Deployment

This project is configured for **Cloudflare Pages** via the `@cloudflare/vite-plugin` and `wrangler.jsonc`.

```bash
# Deploy to Cloudflare Pages
bunx wrangler pages deploy
```

Or connect your GitHub repo to Cloudflare Pages for automatic CI/CD deployments on every push to `main`.

---

## 🧹 Code Quality

```bash
# Run ESLint
bun run lint
# or
npm run lint

# Format with Prettier
bun run format
# or
npm run format
```

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Hazaimia Abderrazak**

- 🌍 Algeria
- 🔗 GitHub: [@HezaimiaAbderrazak](https://github.com/HezaimiaAbderrazak)
- 💼 Full Stack Developer & AI Engineer

---

> *"Building at the intersection of AI and beautiful interfaces."*
