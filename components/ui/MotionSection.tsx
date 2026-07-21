"use client";

import { motion, useReducedMotion, type HTMLMotionProps, type Transition, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useIsMounted } from "@/hooks/useIsMounted";

export type MotionVariant = "fade-up" | "slide-left" | "slide-right" | "scale-fade" | "fade";

type MotionSectionProps = Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport" | "transition"> & {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: MotionVariant;
  spring?: boolean;
};

const offsets: Record<MotionVariant, { x?: number; y?: number; scale?: number }> = {
  "fade-up": { y: 40 },
  "slide-left": { x: -60 },
  "slide-right": { x: 60 },
  "scale-fade": { scale: 0.92 },
  fade: {},
};

export function MotionSection({
  children,
  className = "",
  delay = 0,
  variant = "fade-up",
  spring = false,
  ...props
}: MotionSectionProps) {
  const mounted = useIsMounted();
  const reduced = useReducedMotion();

  // SSR + first paint: render plain div (no animation, no transform).
  // After mount: apply initial="hidden" so the component can animate in.
  if (!mounted) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  const effectiveVariant = reduced ? "fade" : variant;
  const offset = offsets[effectiveVariant];

  const transition: Transition = reduced
    ? { duration: 0.25, ease: "easeOut", delay }
    : spring
      ? { type: "spring", stiffness: 90, damping: 16, mass: 0.6, delay }
      : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainerVariants = (reduced: boolean): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduced ? 0 : 0.12,
      delayChildren: reduced ? 0 : 0.05,
    },
  },
});

export const staggerItemVariants = (reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: reduced
      ? { duration: 0.25, ease: "easeOut" }
      : { type: "spring", stiffness: 100, damping: 15 },
  },
});