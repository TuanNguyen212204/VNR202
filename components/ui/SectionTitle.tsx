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
    <div className={`mb-14 max-w-3xl ${alignClass}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={align === "center" ? "flex justify-center" : ""}
        >
          <span className="relative mb-4 inline-flex items-center gap-2 overflow-hidden rounded-full border border-amber/40 bg-gradient-to-r from-crimson/20 via-burgundy/15 to-amber/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_8px_rgba(245,197,24,0.8)]" />
            <span className="relative">{badge}</span>
            <span className="absolute inset-0 animate-shine-sweep bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
          </span>
        </motion.div>
      )}

      <h2
        className="font-heading text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-5xl"
        style={{ wordSpacing: "0.12em", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}
      >
        {titleWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
            style={{ marginRight: "0.35em" }}
          >
            {word}
          </motion.span>
        ))}
      </h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 text-lg font-medium text-ivory lg:text-xl"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Underline accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`mt-6 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-amber via-crimson to-transparent shadow-[0_0_12px_rgba(245,197,24,0.6)] ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}