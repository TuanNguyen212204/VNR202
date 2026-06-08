"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, ChevronDown, Sparkles } from "lucide-react";
import { heroContent } from "@/lib/presentation-content";
import { getIllustration } from "@/data/illustrations";
import { LOTUS_ICON_SRC } from "@/lib/assets";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";

function FloatingLotus() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="h-20 w-20"
      aria-hidden
    >
      <Image
        src={LOTUS_ICON_SRC}
        alt=""
        width={80}
        height={80}
        className="h-full w-full object-contain blur-[2px] opacity-90 drop-shadow-md saturate-90"
        draggable={false}
      />
    </motion.div>
  );
}

const heroIllustration = getIllustration("hero");

export function HeroSection() {
  const scrollToIntro = () => {
    document.querySelector("#muc-luc")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16 sm:pt-32">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="text-center lg:text-left">
          <MotionSection className="mb-6 flex justify-center gap-8 lg:justify-start">
            <FloatingLotus />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
            >
              <BookOpen className="h-10 w-10 text-gold" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/20 backdrop-blur-sm"
            >
              <Sparkles className="h-8 w-8 text-gold" />
            </motion.div>
          </MotionSection>

          <MotionSection delay={0.1}>
            <h1 className="font-heading text-3xl font-bold leading-tight text-brown sm:text-4xl lg:text-5xl xl:text-6xl">
              <span className="text-gradient-gold">{heroContent.title}</span>
            </h1>
          </MotionSection>

          <MotionSection delay={0.2}>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-brown/80 lg:mx-0 lg:text-lg xl:text-xl">
              {heroContent.subtitle}
            </p>
          </MotionSection>

          <MotionSection delay={0.3} className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {heroContent.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-gold/40 bg-white/50 px-5 py-2 text-sm font-semibold text-burgundy backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </MotionSection>

          <MotionSection delay={0.4} className="mt-10">
            <button
              type="button"
              onClick={scrollToIntro}
              className="inline-flex items-center gap-2 rounded-full bg-burgundy px-8 py-3.5 text-base font-semibold text-cream shadow-lg transition-transform hover:scale-105 hover:bg-burgundy/90"
            >
              {heroContent.cta}
              <ChevronDown className="h-5 w-5" />
            </button>
          </MotionSection>
        </div>

        <div>
          <IllustrationCard
            title={heroIllustration.title}
            description={heroIllustration.description}
            imageSrc={heroIllustration.imageSrc}
            iconName={heroIllustration.icon}
            variant={heroIllustration.variant}
            size="hero"
            floating
            showCaption={false}
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
