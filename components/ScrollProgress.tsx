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
      className="fixed top-0 right-0 left-0 z-[60] h-1 bg-[#1a1410]/60 backdrop-blur-sm"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="relative h-full overflow-hidden bg-gradient-to-r from-crimson via-amber to-gold"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.15 }}
      >
        {/* Subtle shimmer */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,254,245,0.4), transparent)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s linear infinite",
          }}
        />
        {/* Glow effect */}
        <div
          className="absolute inset-0 blur-sm"
          style={{
            background: "linear-gradient(90deg, rgba(200,16,46,0.6), rgba(212,168,75,0.6))",
            boxShadow: "0 0 10px rgba(212,168,75,0.5)",
          }}
        />
      </motion.div>
    </div>
  );
}
