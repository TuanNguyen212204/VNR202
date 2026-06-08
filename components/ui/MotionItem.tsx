"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { staggerItemVariants } from "@/components/ui/MotionSection";

type MotionItemProps = Omit<HTMLMotionProps<"div">, "variants"> & {
  children: ReactNode;
  className?: string;
};

export function MotionItem({ children, className = "", ...props }: MotionItemProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div variants={staggerItemVariants(!!reduced)} className={className} {...props}>
      {children}
    </motion.div>
  );
}
