"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Knot() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.y += delta * 0.24;
    // parallax suave con el mouse
    const { x, y } = state.pointer;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x * 0.6, 0.05);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, y * 0.4, 0.05);
  });
  return (
    <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.1}>
      <mesh ref={ref} position={[2.1, 0.3, 0]} scale={1.15}>
        <torusKnotGeometry args={[1, 0.32, 180, 32]} />
        <MeshDistortMaterial
          color="#1c1c1a"
          emissive="#DDF247"
          emissiveIntensity={0.08}
          roughness={0.25}
          metalness={0.85}
          distort={0.28}
          speed={2}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function WireRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.z += delta * 0.12;
    ref.current.rotation.x += delta * 0.05;
  });
  return (
    <mesh ref={ref} position={[2.1, 0.3, -0.6]} rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[1.9, 0.012, 16, 128]} />
      <meshBasicMaterial color="#DDF247" transparent opacity={0.35} />
    </mesh>
  );
}

function Icosa() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.3;
    ref.current.position.y = -1.7 + Math.sin(state.clock.elapsedTime * 0.8) * 0.18;
  });
  return (
    <Float speed={2} floatIntensity={1.4}>
      <mesh ref={ref} position={[-2.6, -1.7, 0.5]}>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#DDF247" roughness={0.3} metalness={0.4} flatShading />
      </mesh>
    </Float>
  );
}

function Rig() {
  useFrame((state) => {
    const { x, y } = state.pointer;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x * 0.7, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y * 0.5, 0.04);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Hero3D() {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 8], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="!absolute !inset-0"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 6, 4]} intensity={1.4} />
        <pointLight position={[-4, -2, 3]} intensity={12} color="#DDF247" />
        <Knot />
        <WireRing />
        <Icosa />
        <Sparkles count={90} scale={[12, 7, 4]} size={2.2} speed={0.35} opacity={0.5} color="#F5F5F0" position={[0, 0, -1]} />
        <Rig />
      </Canvas>
      {/* velo para legibilidad del headline */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_30%_55%,transparent_40%,#090909_92%)]" />
    </div>
  );
}
