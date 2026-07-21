"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainerVariants } from "@/components/ui/MotionSection";
import { useIsMounted } from "@/hooks/useIsMounted";

type StaggerGridProps = Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView" | "viewport"> & {
  children: ReactNode;
  className?: string;
};

export function StaggerGrid({ children, className = "", ...props }: StaggerGridProps) {
  const mounted = useIsMounted();
  const reduced = useReducedMotion();

  if (!mounted) {
    return (
      <div className={className} {...(props as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

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