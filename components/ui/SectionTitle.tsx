"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  badge,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  const titleWords = title.split(" ");

  return (
    <div className={`mb-16 max-w-3xl ${alignClass}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={align === "center" ? "flex justify-center" : ""}
        >
          {/* Traditional badge with double border */}
          <span className="relative inline-flex items-center gap-2 overflow-hidden rounded-none border-2 border-amber/50 bg-gradient-to-r from-[rgba(200,16,46,0.15)] via-[rgba(139,105,20,0.2)] to-[rgba(200,16,46,0.15)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber backdrop-blur-sm">
            {/* Left ornament */}
            <span className="text-amber/60">❧</span>
            <span className="relative">{badge}</span>
            {/* Right ornament */}
            <span className="text-amber/60">❧</span>
          </span>
        </motion.div>
      )}

      {/* Traditional decorative line above title */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`mt-8 flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber/40" />
        <div className="h-0.5 w-20 bg-gradient-to-r from-crimson to-amber" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber/40" />
      </motion.div>

      <h2
        className="font-heading text-3xl font-bold leading-[1.2] text-cream sm:text-4xl lg:text-5xl"
        style={{ 
          wordSpacing: "0.08em", 
          textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          letterSpacing: "0.02em"
        }}
      >
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
            style={{ marginRight: "0.3em" }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {/* Traditional underline decoration */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`mt-8 h-1 w-32 origin-left rounded-full shadow-[0_0_8px_rgba(200,16,46,0.5)] ${
          align === "center" ? "mx-auto" : ""
        }`}
        style={{
          background: "linear-gradient(90deg, #C8102E, #D4A84B, #8B6914)",
        }}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg font-medium leading-relaxed text-cream/85 lg:text-xl"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Bottom decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className={`mt-6 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="text-amber/40 text-lg">☙</span>
        <span className="h-0.5 w-8 bg-gradient-to-r from-amber/30 to-transparent" />
        <span className="text-crimson/60">❋</span>
        <span className="h-0.5 w-8 bg-gradient-to-l from-amber/30 to-transparent" />
        <span className="text-amber/40 text-lg">❧</span>
      </motion.div>
    </div>
  );
}
