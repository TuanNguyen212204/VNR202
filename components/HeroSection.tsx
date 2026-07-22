"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { heroContent } from "@/lib/presentation-content";
import { getIllustration } from "@/data/illustrations";
import { MotionSection } from "@/components/ui/MotionSection";

const heroIllustration = getIllustration("hero");

export function HeroSection() {
  const scrollToIntro = () => {
    document.querySelector("#muc-luc")?.scrollIntoView({ behavior: "smooth" });
  };

  const titleWords = heroContent.title.split(" ");

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16 sm:pt-32">
      {/* Traditional corner decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left corner ornament */}
        <div className="absolute left-0 top-0 opacity-20">
          <svg viewBox="0 0 150 150" className="h-40 w-40">
            <path d="M0 0 L150 0 L150 20 L20 20 L20 150 L0 150 Z" fill="none" stroke="#D4A84B" strokeWidth="1" opacity="0.5" />
            <path d="M10 10 L100 10 L10 100 Z" fill="none" stroke="#C8102E" strokeWidth="0.5" opacity="0.3" />
            <circle cx="25" cy="25" r="8" fill="none" stroke="#D4A84B" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </div>
        {/* Top right corner ornament */}
        <div className="absolute right-0 top-0 opacity-20">
          <svg viewBox="0 0 150 150" className="h-40 w-40" style={{ transform: "scaleX(-1)" }}>
            <path d="M0 0 L150 0 L150 20 L20 20 L20 150 L0 150 Z" fill="none" stroke="#D4A84B" strokeWidth="1" opacity="0.5" />
            <path d="M10 10 L100 10 L10 100 Z" fill="none" stroke="#C8102E" strokeWidth="0.5" opacity="0.3" />
            <circle cx="25" cy="25" r="8" fill="none" stroke="#D4A84B" strokeWidth="0.5" opacity="0.4" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          {/* Traditional badge row with star icons */}
          <MotionSection className="mb-6 flex justify-center gap-4 lg:justify-start">
            {[
              { label: "Thành tựu", color: "#C8102E" },
              { label: "Kinh nghiệm", color: "#D4A84B" },
              { label: "Tham nhũng", color: "#8B6914" },
            ].map(({ label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex items-center gap-2 overflow-hidden rounded-lg border border-amber/30 bg-gradient-to-r from-[rgba(45,31,26,0.9)] to-[rgba(26,20,16,0.9)] px-4 py-2.5 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
              >
                <Star className="h-4 w-4" style={{ color }} fill={color} strokeWidth={1.5} />
                <span className="text-sm font-semibold text-amber">{label}</span>
              </motion.div>
            ))}
          </MotionSection>

          {/* Traditional decorative line above title */}
          <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber/40" />
            <span className="text-amber/50 text-xl">❧</span>
            <div className="h-0.5 w-24 bg-gradient-to-r from-crimson to-amber" />
            <span className="text-amber/50 text-xl">☙</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber/40" />
          </div>

          {/* Title - HIGH CONTRAST for TV presentation */}
          <MotionSection delay={0.1}>
            <h1
              className="font-heading text-4xl font-bold leading-[1.15] tracking-wide text-cream sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                wordSpacing: "0.1em",
                letterSpacing: "0.02em",
                textShadow: "0 2px 16px rgba(0, 0, 0, 0.6)",
              }}
            >
              <span className="block">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                    style={{ marginRight: "0.35em" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>
          </MotionSection>

          {/* Traditional underline */}
          <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
            <div className="h-px w-24 bg-gradient-to-r from-amber to-crimson" />
            <div className="h-1 w-1 rotate-45 bg-amber" />
            <div className="h-px w-24 bg-gradient-to-l from-amber to-crimson" />
          </div>

          {/* Subtitle - HIGH CONTRAST */}
          <MotionSection delay={0.3}>
            <p
              className="mx-auto mt-8 max-w-3xl text-lg font-medium leading-relaxed text-cream/90 lg:mx-0 lg:text-xl xl:text-2xl"
              style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)" }}
            >
              {heroContent.subtitle}
            </p>
          </MotionSection>

          {/* CTA - Traditional button style */}
          <MotionSection delay={0.5} className="mt-10 flex justify-center lg:justify-start">
            <motion.button
              type="button"
              onClick={scrollToIntro}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/cta relative inline-flex items-center gap-3 overflow-hidden rounded-lg border-2 border-amber/60 bg-gradient-to-r from-crimson/90 via-burgundy/90 to-crimson/90 px-10 py-4 text-lg font-bold text-cream shadow-[0_4px_20px_rgba(200,16,46,0.4)] transition-all hover:border-amber hover:shadow-[0_8px 32px_rgba(212,168,75,0.3)]"
            >
              {/* Traditional corner accents */}
              <span className="absolute left-2 top-2 text-amber/40 text-sm">❧</span>
              <span className="absolute right-2 top-2 text-amber/40 text-sm">☙</span>
              <span className="relative z-10">{heroContent.cta}</span>
              <motion.span
                className="relative z-10"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
              <ArrowRight className="relative z-10 h-5 w-5 opacity-0 transition-all duration-300 group-hover/cta:translate-x-1 group-hover/cta:opacity-100" />
            </motion.button>
          </MotionSection>
        </div>

        {/* Right side - Illustration with traditional frame */}
        <MotionSection delay={0.2} className="relative flex justify-center">
          <div className="relative perspective-1000">
            {/* Traditional frame decoration */}
            <div className="absolute -inset-4 border-2 border-amber/20" aria-hidden />
            <div className="absolute -inset-6 border border-crimson/10" aria-hidden />
            
            {/* Corner ornaments */}
            <div className="absolute -top-2 -left-2 text-amber/40">
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path d="M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 text-amber/40">
              <svg viewBox="0 0 24 24" className="h-6 w-6" style={{ transform: "scaleX(-1)" }}>
                <path d="M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute -bottom-2 -left-2 text-amber/40">
              <svg viewBox="0 0 24 24" className="h-6 w-6" style={{ transform: "scaleY(-1)" }}>
                <path d="M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z" fill="currentColor" />
              </svg>
            </div>
            <div className="absolute -bottom-2 -right-2 text-amber/40">
              <svg viewBox="0 0 24 24" className="h-6 w-6" style={{ transform: "scale(-1)" }}>
                <path d="M0 0 L24 0 L24 4 L4 4 L4 24 L0 24 Z" fill="currentColor" />
              </svg>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative aspect-[4/5] w-full max-h-[520px] overflow-hidden rounded-lg border border-amber/25 bg-dark-card lg:aspect-square"
            >
              {/* Direct img tag for trien-lam2.jpg - more reliable */}
              <img
                src={heroIllustration.imageSrc || "/images/trien-lam2.jpg"}
                alt={heroIllustration.title}
                className="h-full w-full object-contain"
                style={{ 
                  objectPosition: heroIllustration.objectPosition || "center",
                  filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.3))"
                }}
              />
            </motion.div>
          </div>
        </MotionSection>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-amber/40 text-xs uppercase tracking-widest">Cuộn xuống</span>
          <ChevronDown className="h-6 w-6 text-amber/50" />
        </div>
      </motion.div>
    </section>
  );
}
