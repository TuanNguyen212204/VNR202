"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  AlertTriangle,
  Scale,
  TrendingDown,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cultureContent } from "@/lib/presentation-content";
import { cultureIllustrationIds, getIllustration } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";
import { CultureInfographic } from "@/components/CultureInfographic";

const cultureIllustration = getIllustration("culture");

const iconMap: Record<string, LucideIcon> = {
  TrendingDown,
  Users,
  AlertTriangle,
  Scale,
};

export function CultureSection() {
  const reduced = useReducedMotion();
  return (
    <section id="han-che" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge="Phần III.2"
          title="Hạn chế và nguyên nhân"
          subtitle="Những yếu kém còn tồn tại và nguyên nhân khách quan, chủ quan"
        />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <MotionSection>
            <div className="space-y-5 text-lg leading-relaxed text-ivory lg:text-xl" style={{ lineHeight: 1.75 }}>
              {cultureContent.mainParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </MotionSection>

          <MotionSection delay={0.15}>
            <IllustrationCard
              title={cultureIllustration.title}
              description={cultureIllustration.description}
              imageSrc={cultureIllustration.imageSrc}
              iconName={cultureIllustration.icon}
              variant={cultureIllustration.variant}
              size="lg"
              showCaption={false}
              skipImage
              delay={0.15}
            >
              <CultureInfographic />
            </IllustrationCard>
          </MotionSection>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {cultureContent.subBlocks.map((block, i) => {
            const Icon = iconMap[block.icon];
            const illustration = getIllustration(cultureIllustrationIds[block.id]);

            return (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: reduced ? 0 : 30, scale: reduced ? 1 : 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={reduced ? undefined : { y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-2xl border border-amber/20 bg-glass-dark backdrop-blur-md"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(220,38,38,0.3), rgba(245,197,24,0.2))",
                    filter: "blur(8px)",
                  }}
                />

                <IllustrationCard
                  title={illustration.title}
                  description={illustration.description}
                  imageSrc={illustration.imageSrc}
                  iconName={illustration.icon}
                  variant={illustration.variant}
                  size="sm"
                  showCaption={false}
                  delay={i * 0.06}
                  className="!rounded-none !border-0 !shadow-none !bg-transparent"
                />
                <div className="flex items-start gap-3 p-5 pt-4">
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber/30 to-crimson/20 text-sm font-bold text-amber shadow-[0_0_12px_rgba(245,197,24,0.3)]"
                  >
                    {i + 1}
                  </motion.span>
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-start gap-2">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-amber" strokeWidth={2} />
                      <p className="text-base font-bold leading-snug text-white lg:text-lg">
                        {block.title}
                      </p>
                    </div>
                    {block.description && (
                      <p className="text-sm leading-relaxed text-ivory lg:text-base" style={{ lineHeight: 1.7 }}>
                        {block.description}
                      </p>
                    )}
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