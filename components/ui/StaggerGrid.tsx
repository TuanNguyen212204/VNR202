"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainerVariants } from "@/components/ui/MotionSection";

type StaggerGridProps = Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport"> & {
  children: ReactNode;
  className?: string;
};

export function StaggerGrid({ children, className = "", ...props }: StaggerGridProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={staggerContainerVariants(!!reduced)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
