"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { staggerItemVariants } from "@/components/ui/MotionSection";
import { useIsMounted } from "@/hooks/useIsMounted";

type MotionItemProps = Omit<HTMLMotionProps<"div">, "variants"> & {
  children: ReactNode;
  className?: string;
};

export function MotionItem({ children, className = "", ...props }: MotionItemProps) {
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
    <motion.div variants={staggerItemVariants(!!reduced)} className={className} {...props}>
      {children}
    </motion.div>
  );
}