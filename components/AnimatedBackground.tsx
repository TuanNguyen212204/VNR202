"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FallingFlowers } from "@/components/FallingFlowers";
import { LOTUS_ICON_SRC } from "@/lib/assets";

const sparkles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 13 + 5) % 98}%`,
  top: `${(i * 19 + 8) % 95}%`,
  size: 2 + (i % 5),
  delay: (i % 8) * 0.6,
  duration: 4 + (i % 5),
}));

const lotusPositions = [
  { x: "8%", y: "15%", scale: 0.7, delay: 0 },
  { x: "85%", y: "25%", scale: 0.55, delay: 2 },
  { x: "75%", y: "70%", scale: 0.65, delay: 1 },
  { x: "12%", y: "78%", scale: 0.5, delay: 3 },
];

function FloatingLotusBg({ x, y, scale, delay }: { x: string; y: string; scale: number; delay: number }) {
  const size = Math.round(100 * scale);
  return (
    <motion.div
      className="absolute opacity-[0.1]"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -18, 0], rotate: [0, 4, -4, 0] }}
      transition={{ duration: 14 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      <Image
        src={LOTUS_ICON_SRC}
        alt=""
        width={size}
        height={size}
        className="h-full w-full object-contain blur-lg brightness-110 saturate-50"
        draggable={false}
      />
    </motion.div>
  );
}

export function AnimatedBackground() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, reduced ? 0 : 120]);
  const y2 = useTransform(scrollY, [0, 800], [0, reduced ? 0 : -80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.85]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ opacity }}
      aria-hidden
    >
      {/* Base gradient mesh */}
      <div className="absolute inset-0 bg-animated-mesh" />

      {/* Grain texture */}
      <div className="absolute inset-0 bg-grain opacity-40" />

      {/* Light rays */}
      <div className="absolute inset-0 bg-light-rays animate-ray-pulse" />

      {/* Parallax orbs */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
        <div className="animate-blob-drift absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-burgundy/12 to-burgundy/4 blur-3xl" />
        <div
          className="animate-blob-drift absolute top-[20%] -right-32 h-[440px] w-[440px] rounded-full bg-gradient-to-bl from-gold/15 to-gold/5 blur-3xl"
          style={{ animationDelay: "5s", animationDuration: "16s" }}
        />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <div
          className="animate-blob-drift absolute -bottom-32 left-[20%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-jade/12 to-jade/4 blur-3xl"
          style={{ animationDelay: "9s", animationDuration: "18s" }}
        />
        <div
          className="animate-blob-drift absolute top-[55%] left-[55%] h-64 w-64 rounded-full bg-gold/8 blur-2xl"
          style={{ animationDelay: "3s", animationDuration: "14s" }}
        />
      </motion.div>

      {/* Golden sparkles */}
      {sparkles.map((p) => (
        <span
          key={p.id}
          className="animate-sparkle absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}

      {/* Larger glow dots */}
      {Array.from({ length: 6 }, (_, i) => (
        <span
          key={`glow-${i}`}
          className="animate-float-glow absolute rounded-full bg-gold/25 blur-[2px]"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i * 11) % 60}%`,
            width: 6 + (i % 3) * 2,
            height: 6 + (i % 3) * 2,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      {/* Floating lotus silhouettes */}
      {!reduced &&
        lotusPositions.map((pos, i) => (
          <FloatingLotusBg key={i} {...pos} />
        ))}

      {/* Falling lotus petals & blossoms */}
      <FallingFlowers />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(250,247,240,0.3)_70%,rgba(123,30,46,0.06)_100%)]" />
    </motion.div>
  );
}
