"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingParticles({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#f5c518"),
      new THREE.Color("#dc2626"),
      new THREE.Color("#10b981"),
      new THREE.Color("#06b6d4"),
      new THREE.Color("#8b5cf6"),
    ];
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function WireframeGlobe() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.08;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.04;
  });
  return (
    <mesh ref={ref} position={[6, -2, -4]}>
      <icosahedronGeometry args={[2.4, 1]} />
      <meshBasicMaterial color="#f5c518" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

function FloatingTorus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.4;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.2;
  });
  return (
    <mesh ref={ref} position={[-7, 3, -3]}>
      <torusGeometry args={[1.2, 0.4, 16, 32]} />
      <meshStandardMaterial
        color="#dc2626"
        emissive="#dc2626"
        emissiveIntensity={0.4}
        roughness={0.3}
        metalness={0.8}
      />
    </mesh>
  );
}

function FloatingOctahedron() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = -state.clock.getElapsedTime() * 0.3;
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.2;
  });
  return (
    <mesh ref={ref} position={[5, 4, -5]}>
      <octahedronGeometry args={[0.9, 0]} />
      <meshStandardMaterial
        color="#10b981"
        emissive="#10b981"
        emissiveIntensity={0.5}
        roughness={0.2}
        metalness={0.9}
      />
    </mesh>
  );
}

export function ParticleField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-90">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#f5c518" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#dc2626" />
        <FloatingParticles />
        <WireframeGlobe />
        <FloatingTorus />
        <FloatingOctahedron />
      </Canvas>
    </div>
  );
}