"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Heart,
  Landmark,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { humanThoughtCards } from "@/lib/presentation-content";
import { getIllustration, humanIllustrationIds } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { IllustrationCard } from "@/components/ui/IllustrationCard";
import { useIsMounted } from "@/hooks/useIsMounted";

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Heart,
  ShieldCheck,
  Landmark,
};

export function HumanThoughtSection() {
  const mounted = useIsMounted();
  const reduced = useReducedMotion();

  return (
    <section
      id="thanh-tuu"
      className="relative z-10 px-6 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge="Phần III.1"
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
                  transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
                  whileHover: { y: -4 },
                }
              : {};

            const iconProps = mounted
              ? { whileHover: { scale: 1.1 } }
              : {};

            return (
              <Container
                key={card.id}
                {...containerProps}
                className="group relative overflow-hidden rounded-lg border border-amber/20 bg-glass-dark backdrop-blur-md"
              >
                {/* Traditional corner accents */}
                <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-amber/20 transition-colors group-hover:border-amber/40" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-amber/20 transition-colors group-hover:border-amber/40" />

                {/* Illustration */}
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

                {/* Content */}
                <div className="relative p-6 lg:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <IconContainer
                      {...iconProps}
                      className="flex h-12 w-12 items-center justify-center rounded-lg border border-amber/40 bg-gradient-to-br from-amber/20 to-crimson/15 shadow-[0_0 12px_rgba(212,168,75,0.15)]"
                    >
                      <Icon className="h-6 w-6 text-amber" strokeWidth={1.5} />
                    </IconContainer>
                    <h3 className="font-heading text-xl font-bold text-cream lg:text-2xl">
                      {card.title}
                    </h3>
                  </div>
                  <div className="space-y-3 text-base leading-relaxed text-cream/85 lg:text-lg" style={{ lineHeight: 1.8 }}>
                    {card.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </Container>
            );
          })}
        </div>
      </div>
    </section>
  );
}
