"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type PetalType = "petal-red" | "petal-gold" | "petal-pink";

const petals = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${(i * 9.1 + 3) % 97}%`,
  size: 12 + (i % 6) * 3,
  duration: 14 + (i % 7) * 3,
  delay: -((i * 2.3) % 18),
  sway: 25 + (i % 5) * 18,
  type: (["petal-red", "petal-gold", "petal-pink"] as const)[i % 3],
  opacity: 0.35 + (i % 4) * 0.12,
}));

function PetalSvg({ type }: { type: PetalType }) {
  const fills: Record<PetalType, { main: string; light: string }> = {
    "petal-red": { main: "#C8102E", light: "#E85D6A" },
    "petal-gold": { main: "#D4A017", light: "#F5C518" },
    "petal-pink": { main: "#E85D6A", light: "#F5B8C0" },
  };

  const { main, light } = fills[type];

  return (
    <svg viewBox="0 0 28 40" fill="none" className="h-full w-full">
      <ellipse cx="14" cy="20" rx="9" ry="16" fill={main} opacity="0.85" />
      <ellipse cx="14" cy="18" rx="5" ry="10" fill={light} opacity="0.5" />
      <path d="M14 6 Q16 14 14 22 Q12 14 14 6" fill="white" opacity="0.15" />
    </svg>
  );
}

export function FallingFlowers() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const reduced = useReducedMotion();
  if (!mounted || reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {petals.map((f) => (
        <div
          key={`petal-${f.id}`}
          className="animate-fall-flower absolute top-0"
          style={{
            left: f.left,
            width: f.size,
            height: f.size * 1.35,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            ["--sway" as string]: `${f.sway}px`,
            ["--sway-reverse" as string]: `${-f.sway * 0.7}px`,
          }}
        >
          <PetalSvg type={f.type} />
        </div>
      ))}
    </div>
  );
}
