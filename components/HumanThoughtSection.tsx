"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Heart,
  Landmark,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import {
  achievementsClosing,
  humanThoughtCards,
  internationalStanding,
} from "@/lib/presentation-content";
import { HighlightedText } from "@/lib/highlight-figures";
import { getIllustration, humanIllustrationIds } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { IllustrationCard } from "@/components/ui/IllustrationCard";
import { MotionSection } from "@/components/ui/MotionSection";
import { useIsMounted } from "@/hooks/useIsMounted";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Heart,
  ShieldCheck,
  Landmark,
};

export function HumanThoughtSection() {
  const mounted = useIsMounted();

  return (
    <section id="thanh-tuu" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge="1"
          title="Thành tựu của công cuộc đổi mới"
          subtitle="Kinh tế, văn hóa - xã hội, quốc phòng - an ninh và xây dựng Đảng"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {humanThoughtCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            const illustrationId = humanIllustrationIds[card.id];
            const illustration = getIllustration(illustrationId);
            const Container = mounted ? motion.div : "div";
            const IconContainer = mounted ? motion.div : "div";

            const containerProps = mounted
              ? {
                  initial: { opacity: 0, y: 30, scale: 0.98 },
                  whileInView: { opacity: 1, y: 0, scale: 1 },
                  viewport: { once: true, margin: "-60px" },
                  transition: {
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1] as const,
                  },
                  whileHover: { y: -4 },
                }
              : {};

            const iconProps = mounted ? { whileHover: { scale: 1.1 } } : {};

            return (
              <Container
                key={card.id}
                {...containerProps}
                className="group relative overflow-hidden rounded-lg border border-amber/20 bg-glass-dark backdrop-blur-md"
              >
                <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-amber/20 transition-colors group-hover:border-amber/40" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-amber/20 transition-colors group-hover:border-amber/40" />

                <IllustrationCard
                  title={illustration.title}
                  description={illustration.description}
                  imageSrc={illustration.imageSrc}
                  iconName={illustration.icon}
                  variant={illustration.variant}
                  size="sm"
                  showCaption={false}
                  delay={i * 0.08}
                  className="!rounded-none !border-0 !shadow-none"
                />

                <div className="relative p-6 lg:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <IconContainer
                      {...iconProps}
                      className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber/40 bg-gradient-to-br from-amber/20 to-crimson/15 shadow-[0_0_12px_rgba(212,168,75,0.15)]"
                    >
                      <Icon className="h-6 w-6 text-amber" strokeWidth={1.5} />
                    </IconContainer>
                    <h3 className="font-heading text-xl font-bold text-cream lg:text-2xl">
                      {card.title}
                    </h3>
                  </div>
                  <div
                    className="space-y-3 text-base leading-relaxed text-cream/85 lg:text-lg"
                    style={{ lineHeight: 1.8 }}
                  >
                    {card.paragraphs.map((p, j) => (
                      <p key={j}>
                        <HighlightedText text={p} />
                      </p>
                    ))}
                  </div>
                  {card.source && (
                    <p className="mt-4 border-t border-amber/15 pt-3 text-xs leading-relaxed text-cream/55 lg:text-sm">
                      <span className="font-semibold text-amber/70">Nguồn: </span>
                      {card.source}
                    </p>
                  )}
                </div>
              </Container>
            );
          })}
        </div>

        <MotionSection delay={0.12} className="mt-12">
          <div className="group relative overflow-hidden rounded-lg border border-amber/20 bg-glass-dark p-6 backdrop-blur-md lg:p-8">
            <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-amber/25" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-amber/25" />

            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber/40 bg-gradient-to-br from-amber/20 to-crimson/15">
                <Globe2 className="h-6 w-6 text-amber" strokeWidth={1.5} />
              </span>
              <h3 className="font-heading text-2xl font-bold text-cream lg:text-3xl">
                {internationalStanding.title}
              </h3>
            </div>

            <p
              className="mb-6 text-base leading-relaxed text-cream/85 lg:text-lg"
              style={{ lineHeight: 1.8 }}
            >
              <HighlightedText text={internationalStanding.intro} />
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {internationalStanding.points.map((point, i) => {
                const PointCard = mounted ? motion.div : "div";
                const pointProps = mounted
                  ? {
                      initial: { opacity: 0, y: 16 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: true },
                      transition: { duration: 0.5, delay: 0.08 * i },
                    }
                  : {};

                return (
                  <PointCard
                    key={point.id}
                    {...pointProps}
                    className="rounded-lg border border-amber/15 bg-amber/[0.04] p-4 lg:p-5"
                  >
                    <h4 className="mb-2 font-heading text-lg font-bold text-amber">
                      {point.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed text-cream/85 lg:text-base"
                      style={{ lineHeight: 1.75 }}
                    >
                      <HighlightedText text={point.text} />
                    </p>
                    {point.source && (
                      <p className="mt-3 text-[11px] leading-relaxed text-cream/50 lg:text-xs">
                        <span className="font-semibold text-amber/60">Nguồn: </span>
                        {point.source}
                      </p>
                    )}
                  </PointCard>
                );
              })}
            </div>

            <p
              className="mt-6 border-t border-amber/15 pt-5 text-base font-medium leading-relaxed text-cream/90 lg:text-lg"
              style={{ lineHeight: 1.8 }}
            >
              <HighlightedText text={internationalStanding.closing} />
            </p>
          </div>
        </MotionSection>

        <MotionSection delay={0.2} className="mt-10">
          <blockquote className="relative mx-auto max-w-4xl border-l-4 border-amber/60 bg-gradient-to-r from-amber/10 to-transparent px-6 py-5 text-lg font-medium leading-relaxed text-cream/90 lg:text-xl">
            {achievementsClosing}
          </blockquote>
        </MotionSection>
      </div>
    </section>
  );
}
