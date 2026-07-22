"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type PetalType = "petal-red" | "petal-gold" | "petal-cream";

const petals = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 10.5 + 5) % 95}%`,
  size: 10 + (i % 5) * 2,
  duration: 16 + (i % 6) * 3,
  delay: -((i * 2.5) % 20),
  sway: 20 + (i % 4) * 15,
  type: (["petal-red", "petal-gold", "petal-cream"] as const)[i % 3],
  opacity: 0.25 + (i % 3) * 0.08,
}));

function PetalSvg({ type }: { type: PetalType }) {
  const fills: Record<PetalType, { main: string; light: string }> = {
    "petal-red": { main: "#C8102E", light: "#9b1c2a" },
    "petal-gold": { main: "#D4A84B", light: "#E8C068" },
    "petal-cream": { main: "#faf3e3", light: "#fffef5" },
  };

  const { main, light } = fills[type];

  return (
    <svg viewBox="0 0 24 36" fill="none" className="h-full w-full">
      <ellipse cx="12" cy="18" rx="7" ry="14" fill={main} opacity="0.8" />
      <ellipse cx="12" cy="16" rx="4" ry="9" fill={light} opacity="0.5" />
      <path d="M12 6 Q13.5 12 12 20 Q10.5 12 12 6" fill="white" opacity="0.15" />
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
          className="animate-fall-petal absolute top-0"
          style={{
            left: f.left,
            width: f.size,
            height: f.size * 1.4,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            filter: "drop-shadow(0 2px 3px rgba(0,0,0,0.15))",
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
