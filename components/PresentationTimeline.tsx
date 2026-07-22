"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { timelineContent } from "@/lib/presentation-content";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useIsMounted } from "@/hooks/useIsMounted";

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function PresentationTimeline() {
  const reduced = useReducedMotion();
  const mounted = useIsMounted();

  return (
    <section id="muc-luc" className="relative z-10 px-6 py-20 lg:py-28">
      {/* Traditional decorative top border */}
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
          <span className="text-amber/50 text-2xl">☙</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
        </div>

        <SectionTitle
          badge={timelineContent.badge}
          title={timelineContent.title}
          subtitle={timelineContent.subtitle}
          align="center"
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Central vertical line - traditional rope style */}
        {mounted && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-0 bottom-0 left-[1.15rem] origin-top lg:left-1/2 lg:-translate-x-px"
          >
            {/* Multiple line layers for rope effect */}
            <div className="h-full w-0.5 bg-gradient-to-b from-transparent via-amber/40 to-transparent" />
            <div className="absolute inset-0 w-0.5 -translate-x-px bg-gradient-to-b from-transparent via-crimson/20 to-transparent" />
          </motion.div>
        )}
        {!mounted && (
          <div
            className="absolute top-0 bottom-0 left-[1.15rem] w-1 origin-top lg:left-1/2 lg:-translate-x-px"
            style={{
              background: "linear-gradient(180deg, transparent, rgba(212,168,75,0.4), transparent)",
            }}
          />
        )}

        <div className="space-y-10">
          {timelineContent.items.map((item, index) => {
            const isEven = index % 2 === 0;
            const Container = mounted ? motion.div : "div";
            const ButtonContainer = mounted ? motion.button : "button";

            const containerProps = mounted
              ? {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: "-40px" },
                  transition: { duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const },
                }
              : {};

            const buttonProps = mounted
              ? {
                  whileHover: { y: -4 },
                  transition: { type: "spring" as const, stiffness: 300, damping: 20 },
                }
              : {};

            return (
              <Container
                key={item.id}
                {...containerProps}
                className={`relative flex items-start gap-6 lg:gap-0 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Number node - traditional medallion style */}
                <div className="relative z-10 flex w-9 shrink-0 justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  <div className="relative">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-amber/30" />
                    {/* Medallion */}
                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber/50 bg-gradient-to-br from-crimson/80 to-burgundy/80 text-sm font-bold text-amber shadow-[0_2px 12px_rgba(200,16,46,0.3)]">
                      {item.id}
                    </span>
                    {/* Decorative dots */}
                    <div className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-amber/60" />
                  </div>
                </div>

                {/* Card - traditional scroll/document style */}
                <ButtonContainer
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  {...buttonProps}
                  className={`group relative w-full cursor-pointer overflow-hidden rounded-lg border border-amber/20 bg-glass-dark p-6 text-left backdrop-blur-md transition-all hover:border-amber/40 lg:w-[calc(50%-2.5rem)] ${
                    isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                  }`}
                >
                  {/* Traditional corner accents */}
                  <div className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-amber/30 transition-colors group-hover:border-amber/50" />
                  <div className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-amber/30 transition-colors group-hover:border-amber/50" />

                  {/* Top decorative line */}
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber/20 to-transparent" />

                  <div className="relative">
                    {/* Badge with traditional styling */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-sm border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber">
                        {item.badge}
                      </span>
                      <ArrowRight className="h-4 w-4 text-amber opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>

                    <h3 
                      className="font-heading text-xl font-bold text-cream lg:text-2xl" 
                      style={{ 
                        textShadow: "0 1px 6px rgba(0,0,0,0.4)",
                        letterSpacing: "0.02em"
                      }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2.5 text-base leading-relaxed text-cream/85 lg:text-lg">
                      {item.description}
                    </p>

                    {item.subItems.length > 0 && (
                      <ul className="mt-4 space-y-2.5 border-t border-amber/15 pt-3">
                        {item.subItems.map((sub) => (
                          <li
                            key={sub}
                            className="flex items-start gap-2.5 text-base text-cream/80"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-amber shadow-[0_0_6px_rgba(212,168,75,0.6)]" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </ButtonContainer>

                <div className="hidden flex-1 lg:block" aria-hidden />
              </Container>
            );
          })}
        </div>

        {/* Traditional bottom decoration */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
          <span className="text-amber/50 text-2xl">❧</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
