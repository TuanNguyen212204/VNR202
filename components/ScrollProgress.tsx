"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 right-0 left-0 z-[60] h-1.5 bg-[#0a0e1a]/60 backdrop-blur-sm"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="relative h-full overflow-hidden bg-gradient-to-r from-crimson via-amber to-amber"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="absolute inset-0 animate-shimmer"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
            backgroundSize: "200% 100%",
          }}
        />
        <div
          className="absolute inset-0 blur-sm"
          style={{
            background: "linear-gradient(90deg, rgba(245,197,24,0.6), rgba(220,38,38,0.6))",
            boxShadow: "0 0 12px rgba(245,197,24,0.8)",
          }}
        />
      </motion.div>
    </div>
  );
}