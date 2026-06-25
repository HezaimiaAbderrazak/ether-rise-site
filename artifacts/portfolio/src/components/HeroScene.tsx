import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function NeuralCore() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.25;
      ref.current.rotation.x += dt * 0.1;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={ref} args={[1.6, 4]}>
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#00d4ff"
          emissiveIntensity={0.4}
          distort={0.45}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

export function HeroScene() {
  if (!isWebGLAvailable()) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-64 h-64 rounded-full border border-[var(--neon-blue)] opacity-30 animate-spin-slow" />
      </div>
    );
  }
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#00d4ff" />
        <pointLight position={[-5, -5, 3]} intensity={1.5} color="#7c3aed" />
        <NeuralCore />
        <Sparkles count={80} scale={6} size={2} speed={0.4} color="#00d4ff" />
      </Suspense>
    </Canvas>
  );
}
