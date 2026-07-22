"use client";

import { motion } from "framer-motion";

export function TraditionalPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Central decorative frame - subtle */}
      <div className="absolute inset-0">
        {/* Top center ornament */}
        <motion.svg
          viewBox="0 0 200 40"
          className="absolute left-1/2 top-8 w-48 -translate-x-1/2 opacity-15"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <path
            d="M100 5 L105 15 L100 12 L95 15 Z M85 20 Q100 10 115 20 M75 25 Q100 15 125 25 M70 30 Q100 22 130 30"
            fill="none"
            stroke="#D4A84B"
            strokeWidth="1"
          />
          <circle cx="100" cy="8" r="3" fill="#C8102E" opacity="0.8" />
        </motion.svg>

        {/* Bottom center ornament */}
        <motion.svg
          viewBox="0 0 200 40"
          className="absolute left-1/2 bottom-8 w-48 -translate-x-1/2 opacity-15"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <path
            d="M100 35 L105 25 L100 28 L95 25 Z M85 20 Q100 30 115 20 M75 15 Q100 25 125 15 M70 10 Q100 18 130 10"
            fill="none"
            stroke="#D4A84B"
            strokeWidth="1"
          />
          <circle cx="100" cy="32" r="3" fill="#C8102E" opacity="0.8" />
        </motion.svg>

        {/* Left side wave pattern */}
        <motion.svg
          viewBox="0 0 30 200"
          className="absolute left-4 top-1/2 h-64 -translate-y-1/2 opacity-10"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <path
            d="M15 10 Q5 100 15 190 M10 20 Q25 100 10 180"
            fill="none"
            stroke="#D4A84B"
            strokeWidth="1"
          />
        </motion.svg>

        {/* Right side wave pattern */}
        <motion.svg
          viewBox="0 0 30 200"
          className="absolute right-4 top-1/2 h-64 -translate-y-1/2 opacity-10"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <path
            d="M15 10 Q25 100 15 190 M20 20 Q5 100 20 180"
            fill="none"
            stroke="#D4A84B"
            strokeWidth="1"
          />
        </motion.svg>
      </div>

      {/* Lotus motifs - subtle at corners */}
      <motion.div
        className="absolute top-20 left-20 opacity-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <LotusSVG size={60} />
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 opacity-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 0.7 }}
        style={{ transform: "scaleX(-1)" }}
      >
        <LotusSVG size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 opacity-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 0.9 }}
        style={{ transform: "scaleY(-1)" }}
      >
        <LotusSVG size={60} />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 opacity-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 2, delay: 1.1 }}
        style={{ transform: "scale(-1)" }}
      >
        <LotusSVG size={60} />
      </motion.div>

      {/* Scattered small stars - twinkling subtly */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute animate-star-twinkle"
          style={{
            top: `${15 + (i * 11) % 70}%`,
            left: `${10 + (i * 13) % 80}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <StarSVG size={8 + (i % 4) * 2} />
        </motion.div>
      ))}
    </div>
  );
}

function LotusSVG({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="24" cy="32" rx="5" ry="9" fill="#C8102E" opacity="0.6" />
      <ellipse cx="15" cy="28" rx="4" ry="12" fill="#C8102E" opacity="0.5" transform="rotate(-25 15 28)" />
      <ellipse cx="33" cy="28" rx="4" ry="12" fill="#C8102E" opacity="0.5" transform="rotate(25 33 28)" />
      <ellipse cx="8" cy="24" rx="3" ry="10" fill="#D4A84B" opacity="0.4" transform="rotate(-45 8 24)" />
      <ellipse cx="40" cy="24" rx="3" ry="10" fill="#D4A84B" opacity="0.4" transform="rotate(45 40 24)" />
      <circle cx="24" cy="24" r="4" fill="#D4A84B" opacity="0.6" />
    </svg>
  );
}

function StarSVG({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#D4A84B"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.2L12 16.4l-6.3 4.4 2.3-7.2-6-4.4h7.6z" opacity="0.6" />
    </svg>
  );
}
