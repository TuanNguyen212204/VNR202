"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useIsMounted } from "@/hooks/useIsMounted";

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
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <div className={`glass-card card-hover p-6 lg:p-8 ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className={`glass-card card-hover p-6 lg:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}