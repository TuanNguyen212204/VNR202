"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionCard({
  children,
  className = "",
  delay = 0,
}: MotionCardProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      className={`glass-card card-hover p-6 lg:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
