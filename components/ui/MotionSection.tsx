"use client";

import { motion, useReducedMotion, type HTMLMotionProps, type Transition, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export type MotionVariant = "fade-up" | "slide-left" | "slide-right" | "scale-fade" | "fade";

type MotionSectionProps = Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport" | "transition"> & {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: MotionVariant;
  spring?: boolean;
};

const offsets: Record<MotionVariant, { x?: number; y?: number; scale?: number }> = {
  "fade-up": { y: 32 },
  "slide-left": { x: -48 },
  "slide-right": { x: 48 },
  "scale-fade": { scale: 0.94 },
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
  const reduced = useReducedMotion();
  const effectiveVariant = reduced ? "fade" : variant;
  const offset = offsets[effectiveVariant];

  const transition: Transition = reduced
    ? { duration: 0.25, ease: "easeOut", delay }
    : spring
      ? { type: "spring", stiffness: 90, damping: 16, mass: 0.6, delay }
      : { duration: 0.6, ease: "easeOut", delay };

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
      staggerChildren: reduced ? 0 : 0.1,
      delayChildren: reduced ? 0 : 0.05,
    },
  },
});

export const staggerItemVariants = (reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: reduced
      ? { duration: 0.25, ease: "easeOut" }
      : { type: "spring", stiffness: 100, damping: 15 },
  },
});
