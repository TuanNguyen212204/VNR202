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
            <div className="group relative overflow-hidden rounded-3xl border border-amber/20 bg-glass-dark p-8 backdrop-blur-md lg:p-12">
              {/* Glow border on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: "linear-gradient(135deg, rgba(245,197,24,0.3), rgba(220,38,38,0.2))",
                  filter: "blur(12px)",
                }}
              />

              {/* Content */}
              <div className="relative space-y-5 text-base leading-relaxed text-cream/85 lg:text-lg">
                {introContent.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative mt-10 border-l-4 border-amber bg-gradient-to-r from-amber/10 to-transparent px-6 py-4 font-heading text-xl italic text-gradient-gold lg:text-2xl"
              >
                <Quote className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-amber p-1 text-[#0a0e1a] shadow-[0_0_16px_rgba(245,197,24,0.6)]" />
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