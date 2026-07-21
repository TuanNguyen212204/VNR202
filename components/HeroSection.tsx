"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { heroContent } from "@/lib/presentation-content";
import { getIllustration } from "@/data/illustrations";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";

const heroIllustration = getIllustration("hero");

export function HeroSection() {
  const scrollToIntro = () => {
    document.querySelector("#muc-luc")?.scrollIntoView({ behavior: "smooth" });
  };

  const titleWords = heroContent.title.split(" ");

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16 sm:pt-32">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          {/* Floating badges row */}
          <MotionSection className="mb-6 flex justify-center gap-4 lg:justify-start">
            {[
              { icon: Sparkles, color: "#f5c518" },
              { icon: Sparkles, color: "#dc2626" },
              { icon: Sparkles, color: "#10b981" },
            ].map(({ icon: Icon, color }, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-amber/30 bg-gradient-to-br from-[#161e35]/80 to-[#0a0e1a]/80 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                style={{
                  boxShadow: `0 0 24px ${color}20, inset 0 1px 0 rgba(255,255,255,0.06)`,
                }}
              >
                <Icon className="h-6 w-6" style={{ color }} strokeWidth={1.5} />
                <span
                  className="absolute inset-0 rounded-2xl opacity-50"
                  style={{
                    background: `radial-gradient(circle at center, ${color}10, transparent 70%)`,
                  }}
                />
              </motion.div>
            ))}
          </MotionSection>

          {/* Title with word reveal - HIGH CONTRAST for TV presentation */}
          <MotionSection delay={0.1}>
            <h1
              className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                wordSpacing: "0.15em",
                letterSpacing: "0.005em",
                textShadow: "0 2px 20px rgba(0, 0, 0, 0.6)",
              }}
            >
              <span className="block">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                    style={{ marginRight: "0.4em" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>
          </MotionSection>

          {/* Subtitle - HIGH CONTRAST */}
          <MotionSection delay={0.4}>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-relaxed text-ivory lg:mx-0 lg:text-xl xl:text-2xl"
              style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.5)" }}
            >
              {heroContent.subtitle}
            </p>
          </MotionSection>

          {/* Tags */}
          <MotionSection delay={0.5} className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {heroContent.badges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                className="group/tag relative overflow-hidden rounded-full border-2 border-amber/50 bg-gradient-to-r from-[#161e35]/85 to-[#0f1729]/85 px-5 py-2.5 text-base font-bold text-amber backdrop-blur-md transition-all hover:border-amber/70 hover:shadow-[0_0_20px_rgba(245,197,24,0.3)]"
              >
                <span className="relative z-10">{badge}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/tag:opacity-100" />
              </motion.span>
            ))}
          </MotionSection>

          {/* CTA */}
          <MotionSection delay={0.7} className="mt-10">
            <motion.button
              type="button"
              onClick={scrollToIntro}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group/cta relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-crimson via-burgundy to-crimson px-10 py-4 text-lg font-bold text-white shadow-[0_8px_32px_rgba(185,28,44,0.5)] transition-all hover:shadow-[0_12px_48px_rgba(245,197,24,0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber via-crimson to-amber opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100" />
              <span className="relative z-10">{heroContent.cta}</span>
              <motion.span
                className="relative z-10"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
              <ArrowRight className="relative z-10 h-5 w-5 opacity-0 transition-all duration-300 group-hover/cta:translate-x-1 group-hover/cta:opacity-100" />
            </motion.button>
          </MotionSection>
        </div>

        {/* Right side - Illustration with 3D rotation */}
        <MotionSection delay={0.3} className="relative flex justify-center">
          <div className="relative perspective-1000">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative"
            >
              <IllustrationCard
                title={heroIllustration.title}
                description={heroIllustration.description}
                imageSrc={heroIllustration.imageSrc}
                iconName={heroIllustration.icon}
                variant={heroIllustration.variant}
                size="hero"
                showCaption={false}
                delay={0.3}
              />
            </motion.div>
            {/* Orbiting accents */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 -z-10"
              aria-hidden
            >
              <div className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-amber shadow-[0_0_16px_rgba(245,197,24,0.8)]" />
              <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-crimson shadow-[0_0_16px_rgba(220,38,38,0.8)]" />
            </motion.div>
          </div>
        </MotionSection>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <ChevronDown className="h-8 w-8 text-amber/60" />
      </motion.div>
    </section>
  );
}