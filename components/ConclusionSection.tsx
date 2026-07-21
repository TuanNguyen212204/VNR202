"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { conclusionContent } from "@/lib/presentation-content";
import { getIllustration } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";

const conclusionIllustration = getIllustration("conclusion");

export function ConclusionSection() {
  const reduced = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="ket-luan" className="relative z-10 px-6 py-20 lg:py-28">
      {/* Decorative gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-amber/[0.04] to-crimson/[0.06]" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle badge="Kết luận" title="Kết luận" align="center" />

        <MotionSection className="mx-auto mb-12 max-w-2xl">
          <IllustrationCard
            title={conclusionIllustration.title}
            description={conclusionIllustration.description}
            imageSrc={conclusionIllustration.imageSrc}
            iconName={conclusionIllustration.icon}
            variant={conclusionIllustration.variant}
            objectFit={conclusionIllustration.objectFit}
            objectPosition={conclusionIllustration.objectPosition}
            size="lg"
            delay={0.05}
          />
        </MotionSection>

        <MotionSection delay={0.1}>
          <div className="group relative overflow-hidden rounded-2xl border border-amber/20 bg-glass-dark p-8 backdrop-blur-md lg:p-12">
            <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, rgba(245,197,24,0.3), rgba(220,38,38,0.2))",
                filter: "blur(8px)",
              }}
            />
            <div className="relative space-y-5 text-base leading-relaxed text-cream/85 lg:text-lg">
              {conclusionContent.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection delay={0.2} className="mt-12 text-center">
          <div className="relative inline-block">
            <motion.div
              animate={reduced ? undefined : { scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-amber/20 via-crimson/15 to-amber/20 blur-2xl"
              aria-hidden
            />
            <Sparkles className="absolute -left-12 -top-2 h-8 w-8 text-amber opacity-50" />
            <Sparkles className="absolute -right-12 -top-2 h-8 w-8 text-amber opacity-50" />
            <p className="relative font-heading text-2xl font-bold text-gradient-aurora text-glow-gold sm:text-3xl lg:text-4xl xl:text-5xl">
              &ldquo;{conclusionContent.highlight}&rdquo;
            </p>
          </div>
        </MotionSection>

        <MotionSection delay={0.3} className="mt-12 flex justify-center">
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn inline-flex items-center gap-2 rounded-full border-2 border-amber bg-[#161e35]/60 px-8 py-3 font-semibold text-amber backdrop-blur-md transition-all hover:bg-gradient-to-r hover:from-crimson hover:via-burgundy hover:to-crimson hover:text-cream hover:shadow-[0_8px_32px_rgba(245,197,24,0.3)]"
          >
            <ArrowUp className="h-5 w-5 transition-transform group-hover/btn:-translate-y-0.5" />
            {conclusionContent.backToTop}
          </motion.button>
        </MotionSection>

        <footer className="mt-16 border-t border-amber/15 pt-8 text-center text-sm text-cream/50">
          <p className="text-gradient-gold font-semibold">
            Chương 3 — Lịch sử Đảng Cộng sản Việt Nam · Môn học: VNR202
          </p>
          <p className="mt-1">Giáo trình Lịch sử Đảng Cộng sản Việt Nam · Bộ GD&ĐT</p>
        </footer>
      </div>
    </section>
  );
}