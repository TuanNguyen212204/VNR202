"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { IllustrationVariant } from "@/data/illustrations";

type IllustrationPlaceholderProps = {
  title: string;
  description?: string;
  icon: LucideIcon;
  variant?: IllustrationVariant;
  showCaption?: boolean;
};

const variantClass: Record<IllustrationVariant, string> = {
  hero: "illustration-variant-hero",
  intro: "illustration-variant-intro",
  human: "illustration-variant-human",
  culture: "illustration-variant-culture",
  ethics: "illustration-variant-ethics",
  practice: "illustration-variant-practice",
  conclusion: "illustration-variant-conclusion",
};

function LotusLineArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      <ellipse cx="32" cy="44" rx="6" ry="10" stroke="#f5c518" strokeWidth="1.2" opacity="0.5" />
      <ellipse cx="20" cy="40" rx="5" ry="14" stroke="#f5c518" strokeWidth="1.2" transform="rotate(-25 20 40)" opacity="0.45" />
      <ellipse cx="44" cy="40" rx="5" ry="14" stroke="#f5c518" strokeWidth="1.2" transform="rotate(25 44 40)" opacity="0.45" />
      <circle cx="32" cy="32" r="5" fill="#f5c518" opacity="0.6" />
    </svg>
  );
}

export function IllustrationPlaceholder({
  title,
  description,
  icon: Icon,
  variant = "hero",
  showCaption = true,
}: IllustrationPlaceholderProps) {
  const sparkles = [12, 28, 45, 62, 78, 88];

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden ${variantClass[variant]}`}
    >
      {/* Animated grid backdrop */}
      <div className="absolute inset-0 bg-grid-dense opacity-40" aria-hidden />

      {/* Glowing ring */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="h-64 w-64 rounded-full border border-amber/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute h-48 w-48 rounded-full border border-crimson/15"
        />
      </div>

      {/* Decorative lotuses */}
      <LotusLineArt className="absolute right-4 top-4 h-14 w-14 opacity-50" />
      <LotusLineArt className="absolute bottom-6 left-4 h-10 w-10 rotate-12 opacity-40" />

      {/* Floating sparkles */}
      {sparkles.map((left, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-amber"
          style={{
            left: `${left}%`,
            top: `${15 + (i * 13) % 65}%`,
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            boxShadow: "0 0 12px rgba(245,197,24,0.8)",
          }}
          aria-hidden
        />
      ))}

      {/* Center icon */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center gap-3 px-6 py-8"
      >
        <div className="relative">
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber/30 to-crimson/20 blur-xl"
            aria-hidden
          />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-amber/40 bg-gradient-to-br from-[#161e35]/90 to-[#0f1729]/90 shadow-[0_8px_32px_rgba(245,197,24,0.15)] backdrop-blur-md">
            <Icon className="h-12 w-12 text-amber" strokeWidth={1.5} />
          </div>
        </div>

        {showCaption && (
          <div className="max-w-[240px] text-center">
            <p className="font-heading text-sm font-bold text-amber lg:text-base">
              {title}
            </p>
            {description && (
<p className="mt-1.5 text-xs leading-relaxed text-cream/75 lg:text-sm">
              {description}
            </p>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}