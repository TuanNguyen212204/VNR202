"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Flame, Quote, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import { ethicsContent } from "@/lib/presentation-content";
import { getIllustration, ethicsIllustrationIds } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";
import { useIsMounted } from "@/hooks/useIsMounted";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Scale,
  Flame,
};

const ethicsMain = getIllustration("ethics");

export function EthicsSection() {
  const mounted = useIsMounted();
  const [openId, setOpenId] = useState<string | null>("principle");

  return (
    <section id="kinh-nghiem" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge="Phần III.3"
          title="Kinh nghiệm của Đảng"
          subtitle="Những bài học quý báu qua hơn 30 năm đổi mới"
        />

        <MotionSection>
          {mounted ? (
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative mb-12 overflow-hidden rounded-2xl border border-amber/30 bg-gradient-to-r from-crimson/15 via-burgundy/20 to-amber/15 px-8 py-8 text-center lg:py-10"
              style={{ boxShadow: "0 0 40px rgba(245,197,24,0.15), inset 0 0 20px rgba(245,197,24,0.05)" }}
            >
              <div className="absolute inset-0 bg-dot-pattern opacity-30" aria-hidden />
              <Quote className="mx-auto mb-3 h-8 w-8 text-amber opacity-50" />
              <p className="relative font-heading text-2xl font-bold italic text-amber lg:text-3xl xl:text-4xl" style={{ wordSpacing: "0.08em", textShadow: "0 2px 16px rgba(245,197,24,0.4)" }}>
                {ethicsContent.quote}
              </p>
            </motion.blockquote>
          ) : (
            <blockquote
              className="group relative mb-12 overflow-hidden rounded-2xl border border-amber/30 bg-gradient-to-r from-crimson/15 via-burgundy/20 to-amber/15 px-8 py-8 text-center lg:py-10"
              style={{ boxShadow: "0 0 40px rgba(245,197,24,0.15), inset 0 0 20px rgba(245,197,24,0.05)" }}
            >
              <div className="absolute inset-0 bg-dot-pattern opacity-30" aria-hidden />
              <Quote className="mx-auto mb-3 h-8 w-8 text-amber opacity-50" />
              <p className="relative font-heading text-2xl font-bold italic text-amber lg:text-3xl xl:text-4xl" style={{ wordSpacing: "0.08em", textShadow: "0 2px 16px rgba(245,197,24,0.4)" }}>
                {ethicsContent.quote}
              </p>
            </blockquote>
          )}
        </MotionSection>

        <div className="mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <MotionSection>
            <p className="text-lg leading-relaxed text-ivory lg:text-xl" style={{ lineHeight: 1.75 }}>
              {ethicsContent.intro}
            </p>
          </MotionSection>

          <MotionSection delay={0.15}>
            <IllustrationCard
              title={ethicsMain.title}
              description={ethicsMain.description}
              imageSrc={ethicsMain.imageSrc}
              iconName={ethicsMain.icon}
              variant={ethicsMain.variant}
              size="md"
              delay={0.1}
            />
          </MotionSection>
        </div>

        {/* Mobile accordion */}
        <div className="space-y-4 lg:hidden">
          {ethicsContent.parts.map((part, i) => {
            const Icon = iconMap[part.icon];
            const illustrationId = ethicsIllustrationIds[part.id];
            const illustration = getIllustration(illustrationId);
            const isOpen = openId === part.id;

            return (
              <MotionSection key={part.id} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-amber/20 bg-glass-dark backdrop-blur-md transition-colors hover:border-amber/40">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between p-5 text-left"
                    onClick={() => setOpenId(isOpen ? null : part.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-amber" strokeWidth={2.5} />
                      <span className="font-heading text-base font-bold text-white lg:text-lg">
                        {part.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-amber transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="border-t border-amber/15 px-5 pb-5 pt-3"
                    >
                      <IllustrationCard
                        title={illustration.title}
                        description={illustration.description}
                        imageSrc={illustration.imageSrc}
                        iconName={illustration.icon}
                        variant={illustration.variant}
                        size="sm"
                        className="mb-4 !max-h-32"
                        showCaption={false}
                        delay={0}
                      />
                      <div className="text-base leading-relaxed text-ivory lg:text-lg" style={{ lineHeight: 1.7 }}>
                        {"content" in part && part.content}
                        {"items" in part && (
                          <ul className="mt-2 space-y-2.5">
                            {part.items?.map((item) => (
                              <li key={item} className="flex items-start gap-2.5">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber shadow-[0_0_8px_rgba(245,197,24,0.9)]" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </MotionSection>
            );
          })}
        </div>

        {/* Desktop grid */}
        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {ethicsContent.parts.map((part, i) => {
            const Icon = iconMap[part.icon];
            const illustrationId = ethicsIllustrationIds[part.id];
            const illustration = getIllustration(illustrationId);
            const Container = mounted ? motion.div : "div";
            const IconContainer = mounted ? motion.div : "div";

            const containerProps = mounted
              ? {
                  initial: { opacity: 0, y: 40, scale: 0.96 },
                  whileInView: { opacity: 1, y: 0, scale: 1 },
                  viewport: { once: true, margin: "-60px" },
                  transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
                  whileHover: { y: -8, scale: 1.02 },
                }
              : {};

            const iconProps = mounted
              ? { whileHover: { rotate: 12, scale: 1.1 } }
              : {};

            return (
              <Container
                key={part.id}
                {...containerProps}
                className="group relative h-full overflow-hidden rounded-2xl border border-amber/20 bg-glass-dark backdrop-blur-md"
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(245,197,24,0.3), rgba(220,38,38,0.2))",
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
                  className="!rounded-none !border-0 !shadow-none"
                  delay={i * 0.08}
                />
                <div className="p-6">
                  <IconContainer
                    {...iconProps}
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-amber/30 bg-gradient-to-br from-amber/20 to-crimson/15 shadow-[0_0_16px_rgba(245,197,24,0.15)]"
                  >
                    <Icon className="h-6 w-6 text-amber" strokeWidth={1.5} />
                  </IconContainer>
                  <h3 className="mb-3 font-heading text-xl font-bold text-white lg:text-2xl">
                    {part.title}
                  </h3>
                  {"content" in part && (
                    <p className="text-base leading-relaxed text-ivory lg:text-lg" style={{ lineHeight: 1.7 }}>
                      {part.content}
                    </p>
                  )}
                  {"items" in part && (
                    <ul className="mt-3 space-y-2.5 text-base text-ivory">
                      {part.items?.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber shadow-[0_0_8px_rgba(245,197,24,0.9)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Container>
            );
          })}
        </div>
      </div>
    </section>
  );
}