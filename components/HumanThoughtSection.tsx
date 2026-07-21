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

const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Heart,
  ShieldCheck,
  Landmark,
};

export function HumanThoughtSection() {
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
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: reduced ? 0 : 40, scale: reduced ? 1 : 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={reduced ? undefined : { y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-amber/20 bg-glass-dark backdrop-blur-md"
              >
                {/* Glow on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,197,24,0.35), rgba(220,38,38,0.2), transparent)",
                    filter: "blur(10px)",
                  }}
                />

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
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber/30 bg-gradient-to-br from-crimson/30 to-burgundy/20 shadow-[0_0_16px_rgba(245,197,24,0.15)]"
                    >
                      <Icon className="h-6 w-6 text-amber" strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="font-heading text-xl font-bold text-white lg:text-2xl">
                      {card.title}
                    </h3>
                  </div>
                  <div className="space-y-3 text-base leading-relaxed text-ivory lg:text-lg" style={{ lineHeight: 1.7 }}>
                    {card.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}