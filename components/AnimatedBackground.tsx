"use client";

import { useEffect, useState } from "react";
import { useReducedMotion, motion, useScroll, useTransform } from "framer-motion";
import { TraditionalPattern } from "@/components/ui/decorations/TraditionalPattern";

function TraditionalOrb({
  color,
  size,
  position,
  delay = 0,
  blur = 120,
}: {
  color: string;
  size: string;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  delay?: number;
  blur?: number;
}) {
  return (
    <div
      className="pointer-events-none absolute animate-blob-aurora rounded-full"
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
  const opacity = useTransform(scrollY, [0, 400], [1, 0.92]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-parchment"
      style={{ opacity }}
      aria-hidden
    >
      {/* Traditional Dragon Scale Pattern - subtle background */}
      <div className="absolute inset-0 bg-pattern-dragon-scale opacity-60" />

      {/* Traditional Cloud Pattern - floating */}
      <div className="absolute inset-0 bg-pattern-clouds opacity-40" />

      {/* Warm glowing orbs - candle/fire light feel */}
      <TraditionalOrb 
        color="rgba(200, 16, 46, 0.12)" 
        size="500px" 
        position={{ top: "-150px", left: "-100px" }} 
        delay={0} 
        blur={100}
      />
      <TraditionalOrb 
        color="rgba(212, 168, 75, 0.08)" 
        size="400px" 
        position={{ top: "15%", right: "-80px" }} 
        delay={4} 
        blur={80}
      />
      <TraditionalOrb 
        color="rgba(200, 16, 46, 0.06)" 
        size="450px" 
        position={{ bottom: "-100px", left: "25%" }} 
        delay={8} 
        blur={90}
      />

      {/* Traditional Pattern Overlay */}
      {mounted && !reduced && <TraditionalPattern />}

      {/* Top + bottom fade - paper roll effect */}
      <div
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#1a1410] to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#1a1410] to-transparent"
        aria-hidden
      />

      {/* Left + Right subtle borders */}
      <div
        className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-[rgba(200,16,46,0.03)] to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-[rgba(212,168,75,0.03)] to-transparent"
        aria-hidden
      />

      {/* Vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(26, 20, 16, 0.4) 100%)",
        }}
        aria-hidden
      />
    </motion.div>
  );
}
