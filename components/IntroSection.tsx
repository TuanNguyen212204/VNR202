"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { introContent } from "@/lib/presentation-content";
import { getIllustration } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";

const introIllustration = getIllustration("intro");

export function IntroSection() {
  return (
    <section id="mo-dau" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge="Mở đầu"
          title="Lời mở đầu"
          align="center"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionSection>
            <div className="group relative overflow-hidden rounded-lg border border-amber/20 bg-glass-dark p-8 backdrop-blur-md lg:p-12">
              {/* Traditional corner accents */}
              <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-amber/30 transition-colors group-hover:border-amber/50" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-amber/30 transition-colors group-hover:border-amber/50" />

              {/* Top decorative line */}
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />

              <div className="relative space-y-5 text-lg leading-relaxed text-cream/90 lg:text-xl" style={{ lineHeight: 1.85 }}>
                {introContent.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Traditional quote block */}
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative mt-10 border-l-4 border-amber/60 bg-gradient-to-r from-amber/10 to-transparent pl-6 py-4 font-heading text-2xl font-bold italic text-amber lg:text-3xl"
                style={{ 
                  wordSpacing: "0.06em", 
                  textShadow: "0 2px 8px rgba(212,168,75,0.3)",
                  lineHeight: 1.4
                }}
              >
                <Quote className="absolute -left-3 -top-3 h-8 w-8 rounded-full bg-amber/20 p-1.5 text-amber shadow-[0_0 12px_rgba(212,168,75,0.4)]" />
                {introContent.quote}
              </motion.blockquote>
            </div>
          </MotionSection>

          <MotionSection delay={0.15}>
            <IllustrationCard
              title={introIllustration.title}
              description={introIllustration.description}
              imageSrc={introIllustration.imageSrc}
              iconName={introIllustration.icon}
              variant={introIllustration.variant}
              size="md"
              showCaption={false}
              delay={0.1}
            />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
