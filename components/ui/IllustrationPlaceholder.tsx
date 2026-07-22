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

const variantGradients: Record<IllustrationVariant, string> = {
  hero: "from-crimson/15 via-burgundy/10 to-amber/10",
  intro: "from-amber/10 via-burgundy/10 to-crimson/10",
  human: "from-crimson/10 via-amber/10 to-burgundy/10",
  culture: "from-amber/10 via-crimson/10 to-burgundy/10",
  ethics: "from-burgundy/15 via-crimson/10 to-amber/10",
  practice: "from-amber/10 via-burgundy/10 to-crimson/10",
  conclusion: "from-crimson/10 via-amber/10 to-burgundy/15",
};

function TraditionalLotusSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Lotus petals */}
      <ellipse cx="32" cy="44" rx="5" ry="9" stroke="#D4A84B" strokeWidth="1" opacity="0.5" />
      <ellipse cx="22" cy="40" rx="4" ry="12" stroke="#D4A84B" strokeWidth="1" transform="rotate(-25 22 40)" opacity="0.4" />
      <ellipse cx="42" cy="40" rx="4" ry="12" stroke="#D4A84B" strokeWidth="1" transform="rotate(25 42 40)" opacity="0.4" />
      <ellipse cx="14" cy="34" rx="3" ry="10" stroke="#D4A84B" strokeWidth="0.8" transform="rotate(-45 14 34)" opacity="0.3" />
      <ellipse cx="50" cy="34" rx="3" ry="10" stroke="#D4A84B" strokeWidth="0.8" transform="rotate(45 50 34)" opacity="0.3" />
      {/* Center */}
      <circle cx="32" cy="32" r="4" fill="#D4A84B" opacity="0.5" />
      {/* Small decorative dots */}
      <circle cx="32" cy="22" r="1.5" fill="#C8102E" opacity="0.4" />
    </svg>
  );
}

function TraditionalPatternSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Wave pattern */}
      <path d="M0 50 Q25 30 50 50 T100 50" stroke="#D4A84B" strokeWidth="0.5" opacity="0.15" />
      <path d="M0 60 Q25 40 50 60 T100 60" stroke="#C8102E" strokeWidth="0.3" opacity="0.1" />
      {/* Small stars */}
      <path d="M20 20 L22 25 L27 25 L23 28 L25 33 L20 30 L15 33 L17 28 L13 25 L18 25 Z" fill="#D4A84B" opacity="0.2" />
      <path d="M80 30 L81.5 34 L86 34 L82.5 36.5 L84 41 L80 38.5 L76 41 L77.5 36.5 L74 34 L78.5 34 Z" fill="#D4A84B" opacity="0.15" />
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
  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${variantGradients[variant]}`}
    >
      {/* Traditional pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <TraditionalPatternSVG className="h-full w-full" />
      </div>

      {/* Subtle corner decorations */}
      <div className="absolute left-2 top-2 opacity-20">
        <svg viewBox="0 0 40 40" className="h-8 w-8">
          <path d="M0 0 L40 0 L40 3 L3 3 L3 40 L0 40 Z" fill="#D4A84B" />
        </svg>
      </div>
      <div className="absolute right-2 top-2 opacity-20">
        <svg viewBox="0 0 40 40" className="h-8 w-8" style={{ transform: "scaleX(-1)" }}>
          <path d="M0 0 L40 0 L40 3 L3 3 L3 40 L0 40 Z" fill="#D4A84B" />
        </svg>
      </div>
      <div className="absolute bottom-2 left-2 opacity-20">
        <svg viewBox="0 0 40 40" className="h-8 w-8" style={{ transform: "scaleY(-1)" }}>
          <path d="M0 0 L40 0 L40 3 L3 3 L3 40 L0 40 Z" fill="#D4A84B" />
        </svg>
      </div>
      <div className="absolute bottom-2 right-2 opacity-20">
        <svg viewBox="0 0 40 40" className="h-8 w-8" style={{ transform: "scale(-1)" }}>
          <path d="M0 0 L40 0 L40 3 L3 3 L3 40 L0 40 Z" fill="#D4A84B" />
        </svg>
      </div>

      {/* Traditional lotus decorations */}
      <TraditionalLotusSVG className="absolute right-4 top-4 h-16 w-16 opacity-30" />
      <TraditionalLotusSVG className="absolute bottom-6 left-4 h-12 w-12 rotate-12 opacity-25" />

      {/* Subtle animated border ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-dashed border-amber/10"
      />

      {/* Center icon */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center gap-3 px-6 py-8"
      >
        <div className="relative">
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber/20 to-crimson/15 blur-md"
            aria-hidden
          />
          <div className="relative flex h-20 w-20 items-center justify-center rounded-lg border border-amber/30 bg-gradient-to-br from-[rgba(45,31,26,0.9)] to-[rgba(26,20,16,0.95)] shadow-[0_4px 20px_rgba(212,168,75,0.1)] backdrop-blur-sm">
            <Icon className="h-10 w-10 text-amber" strokeWidth={1.5} />
          </div>
        </div>

        {showCaption && (
          <div className="max-w-[240px] text-center">
            <p className="font-heading text-sm font-bold text-amber lg:text-base">
              {title}
            </p>
            {description && (
              <p className="mt-1.5 text-xs leading-relaxed text-cream/70 lg:text-sm">
                {description}
              </p>
            )}
          </div>
        )}
      </motion.div>

      {/* Bottom ornament */}
      <div className="absolute bottom-4 flex items-center gap-2 opacity-30">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber/40" />
        <span className="text-amber text-xs">☙</span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber/40" />
      </div>
    </div>
  );
}
