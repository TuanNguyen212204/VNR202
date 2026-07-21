"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ParticleField } from "@/components/three/ParticleField";
import { FallingFlowers } from "@/components/FallingFlowers";

function GlowingOrb({
  color,
  size,
  position,
  delay = 0,
  blur = 100,
}: {
  color: string;
  size: string;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  delay?: number;
  blur?: number;
}) {
  return (
    <div
      className="pointer-events-none absolute aurora-blob animate-blob-aurora rounded-full"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
        animationDelay: `${delay}s`,
      }}
      aria-hidden
    />
  );
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0.85]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-mesh"
      style={{ opacity }}
      aria-hidden
    >
      {/* 3D Particle Field */}
      {mounted && !reduced && <ParticleField />}

      {/* Aurora glow orbs */}
      <GlowingOrb color="rgba(185, 28, 44, 0.55)" size="600px" position={{ top: "-200px", left: "-200px" }} delay={0} />
      <GlowingOrb color="rgba(245, 197, 24, 0.4)" size="500px" position={{ top: "10%", right: "-180px" }} delay={3} />
      <GlowingOrb color="rgba(16, 185, 129, 0.35)" size="550px" position={{ bottom: "-180px", left: "20%" }} delay={6} />
      <GlowingOrb color="rgba(139, 92, 246, 0.3)" size="450px" position={{ top: "60%", right: "15%" }} delay={9} />

      {/* Animated grid */}
      <div
        className="absolute inset-0 bg-grid animate-grid-move opacity-60"
        aria-hidden
      />

      {/* Top + bottom fade for depth */}
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0e1a] to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0e1a] to-transparent"
        aria-hidden
      />

      {/* Falling lotus petals */}
      <FallingFlowers />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(10, 14, 26, 0.5) 100%)",
        }}
        aria-hidden
      />
    </motion.div>
  );
}