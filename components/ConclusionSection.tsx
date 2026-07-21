"use client";

import { ArrowUp } from "lucide-react";
import { conclusionContent } from "@/lib/presentation-content";
import { getIllustration } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";

const conclusionIllustration = getIllustration("conclusion");

export function ConclusionSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="ket-luan" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-burgundy/5" aria-hidden />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle badge="Kết luận" title="Kết luận" align="center" />

        <MotionSection className="mx-auto mb-10 max-w-2xl">
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
          <div className="glass-card space-y-5 p-8 text-base leading-relaxed text-brown/85 lg:p-12 lg:text-lg">
            {conclusionContent.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </MotionSection>

        <MotionSection delay={0.2} className="mt-12 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 rounded-3xl bg-gold/20 blur-2xl" aria-hidden />
            <p className="relative font-heading text-2xl font-bold text-burgundy sm:text-3xl lg:text-4xl">
              &ldquo;{conclusionContent.highlight}&rdquo;
            </p>
          </div>
        </MotionSection>

        <MotionSection delay={0.3} className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border-2 border-burgundy bg-white/60 px-8 py-3 font-semibold text-burgundy backdrop-blur-sm transition-all hover:bg-burgundy hover:text-cream"
          >
            <ArrowUp className="h-5 w-5" />
            {conclusionContent.backToTop}
          </button>
        </MotionSection>

        <footer className="mt-16 border-t border-brown/10 pt-8 text-center text-sm text-brown/50">
          <p>Chương 3 — Lịch sử Đảng Cộng sản Việt Nam · Môn học: VNR202</p>
          <p className="mt-1">Giáo trình Lịch sử Đảng Cộng sản Việt Nam · Bộ GD&ĐT</p>
        </footer>
      </div>
    </section>
  );
}
