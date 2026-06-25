import { useCallback } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

function ParticlesInner() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        fpsLimit: 60,
        background: { color: "transparent" },
        particles: {
          color: { value: ["#00d4ff", "#7c3aed", "#ffffff"] },
          links: { color: "#00d4ff", distance: 140, enable: true, opacity: 0.15, width: 1 },
          move: { enable: true, speed: 0.6, outModes: { default: "bounce" } },
          number: { value: 60, density: { enable: true, area: 900 } },
          opacity: { value: { min: 0.2, max: 0.7 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
      }}
    />
  );
}

export function ParticlesBg() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={init}>
      <ParticlesInner />
    </ParticlesProvider>
  );
}
