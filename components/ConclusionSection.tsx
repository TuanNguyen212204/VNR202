"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { conclusionContent } from "@/lib/presentation-content";
import { getIllustration } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";
import { useIsMounted } from "@/hooks/useIsMounted";

const conclusionIllustration = getIllustration("conclusion");

export function ConclusionSection() {
  const mounted = useIsMounted();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PulseGlow = mounted ? motion.div : "div";
  const TopButton = mounted ? motion.button : "button";

  const pulseProps = mounted
    ? {
        animate: { scale: [1, 1.03, 1] },
        transition: { duration: 4, repeat: Infinity },
      }
    : {};

  const buttonProps = mounted
    ? {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      }
    : {};

  return (
    <section id="ket-luan" className="relative z-10 px-6 py-20 lg:py-28">
      {/* Traditional decorative top border */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-crimson/[0.03] to-transparent" aria-hidden />

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
          <div className="group relative overflow-hidden rounded-lg border border-amber/20 bg-glass-dark p-8 backdrop-blur-md lg:p-12">
            {/* Traditional corner accents */}
            <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-amber/20 transition-colors group-hover:border-amber/40" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-amber/20 transition-colors group-hover:border-amber/40" />

            {/* Top decorative line */}
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />

            <div className="relative space-y-5 text-lg leading-relaxed text-cream/90 lg:text-xl" style={{ lineHeight: 1.85 }}>
              {conclusionContent.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </MotionSection>

        {/* Highlight quote */}
        <MotionSection delay={0.2} className="mt-12 text-center">
          <div className="relative inline-block">
            <PulseGlow
              {...pulseProps}
              className="absolute -inset-8 rounded-2xl bg-gradient-to-r from-crimson/10 via-amber/10 to-crimson/10 blur-xl"
              aria-hidden
            />
            
            {/* Traditional ornaments */}
            <span className="absolute -left-16 -top-1 text-amber/40 text-3xl">☙</span>
            <span className="absolute -right-16 -top-1 text-amber/40 text-3xl">❧</span>
            
            <p className="relative font-heading text-3xl font-bold text-amber sm:text-4xl lg:text-5xl xl:text-6xl" style={{ wordSpacing: "0.04em", letterSpacing: "0.02em", textShadow: "0 3px 16px rgba(212,168,75,0.4), 0 2px 6px rgba(0,0,0,0.4)" }}>
              &ldquo;{conclusionContent.highlight}&rdquo;
            </p>
          </div>
        </MotionSection>

        {/* Back to top button */}
        <MotionSection delay={0.3} className="mt-12 flex justify-center">
          <TopButton
            type="button"
            onClick={scrollToTop}
            {...buttonProps}
            className="group/btn inline-flex items-center gap-2.5 rounded-lg border-2 border-amber/40 bg-[rgba(45,31,26,0.8)] px-10 py-3.5 text-base font-bold text-amber backdrop-blur-md transition-all hover:border-amber hover:bg-gradient-to-r hover:from-crimson/80 hover:to-burgundy/80 hover:text-cream hover:shadow-[0_4px 24px_rgba(212,168,75,0.3)]"
          >
            <ArrowUp className="h-5 w-5 transition-transform group-hover/btn:-translate-y-0.5" />
            {conclusionContent.backToTop}
          </TopButton>
        </MotionSection>

        {/* Traditional footer divider */}
        <div className="mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
          <span className="text-amber/50 text-xl">☙ ❧</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
        </div>

        <footer className="mt-8 text-center text-sm text-cream/70 lg:text-base">
          <p className="font-bold text-amber/80" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}>
            Chương 3 — Lịch sử Đảng Cộng sản Việt Nam · Môn học: VNR202
          </p>
          <p className="mt-1">Giáo trình Lịch sử Đảng Cộng sản Việt Nam · Bộ GD&ĐT</p>
        </footer>
      </div>
    </section>
  );
}
