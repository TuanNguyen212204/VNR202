"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Globe2,
  RefreshCw,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { contextContent } from "@/lib/presentation-content";
import { HighlightedText } from "@/lib/highlight-figures";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { useIsMounted } from "@/hooks/useIsMounted";

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Globe2,
  Scale,
  RefreshCw,
};

export function ContextSection() {
  const mounted = useIsMounted();

  return (
    <section id="boi-canh" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge={contextContent.badge}
          title={contextContent.title}
          subtitle={contextContent.intro}
        />

        <div className="relative">
          {/* Timeline spine — desktop */}
          <div className="pointer-events-none absolute top-4 bottom-4 left-[1.35rem] hidden w-px bg-gradient-to-b from-amber/40 via-crimson/30 to-amber/40 md:left-1/2 md:block md:-translate-x-px" />
          <div className="pointer-events-none absolute top-4 bottom-4 left-[1.35rem] w-px bg-gradient-to-b from-amber/40 via-crimson/30 to-amber/40 md:hidden" />

          <div className="space-y-8 md:space-y-10">
            {contextContent.items.map((item, i) => {
              const Icon = iconMap[item.icon];
              const isEven = i % 2 === 0;
              const Container = mounted ? motion.div : "div";
              const containerProps = mounted
                ? {
                    initial: { opacity: 0, y: 28 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true, margin: "-60px" },
                    transition: {
                      duration: 0.65,
                      delay: i * 0.08,
                      ease: [0.16, 1, 0.3, 1] as const,
                    },
                  }
                : {};

              return (
                <Container
                  key={item.id}
                  {...containerProps}
                  className={`relative flex items-start gap-5 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year node */}
                  <div className="relative z-10 flex w-11 shrink-0 justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-amber/50 bg-gradient-to-br from-crimson/80 to-burgundy/80 text-[10px] font-bold leading-tight text-amber shadow-[0_2px_12px_rgba(200,16,46,0.35)]">
                      {i + 1}
                    </span>
                  </div>

                  <div className={`w-full md:w-[calc(50%-2rem)] ${isEven ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"}`}>
                    <div className="group relative overflow-hidden rounded-lg border border-amber/20 bg-glass-dark p-5 backdrop-blur-md transition-colors hover:border-amber/40 lg:p-6">
                      <div className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-amber/25 transition-colors group-hover:border-amber/45" />
                      <div className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-amber/25 transition-colors group-hover:border-amber/45" />

                      <div
                        className={`mb-3 flex flex-wrap items-center gap-3 ${
                          isEven ? "md:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber/40 bg-gradient-to-br from-amber/20 to-crimson/15">
                          <Icon className="h-5 w-5 text-amber" strokeWidth={1.5} />
                        </span>
                        <div className={isEven ? "md:text-right" : ""}>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber/80">
                            <HighlightedText text={item.year} />
                          </p>
                          <h3 className="font-heading text-lg font-bold text-cream lg:text-xl">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <p
                        className="text-base leading-relaxed text-cream/85 lg:text-lg"
                        style={{ lineHeight: 1.75 }}
                      >
                        <HighlightedText text={item.description} />
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </Container>
              );
            })}
          </div>
        </div>

        <MotionSection delay={0.15} className="mt-14">
          <div className="group relative overflow-hidden rounded-lg border border-amber/20 bg-glass-dark p-6 backdrop-blur-md lg:p-8">
            <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-amber/25" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-amber/25" />

            <h3 className="mb-5 font-heading text-2xl font-bold text-cream lg:text-3xl">
              {contextContent.process.title}
            </h3>

            <div
              className="space-y-4 text-base leading-relaxed text-cream/85 lg:text-lg"
              style={{ lineHeight: 1.8 }}
            >
              {contextContent.process.paragraphs.map((p, i) => (
                <p key={i}>
                  <HighlightedText text={p} />
                </p>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection delay={0.25} className="mt-10">
          <blockquote className="relative mx-auto max-w-3xl border-l-4 border-amber/60 bg-gradient-to-r from-amber/10 to-transparent px-6 py-5 font-heading text-xl font-bold italic text-amber lg:text-2xl">
            <HighlightedText text={contextContent.closing} />
          </blockquote>
        </MotionSection>
      </div>
    </section>
  );
}
