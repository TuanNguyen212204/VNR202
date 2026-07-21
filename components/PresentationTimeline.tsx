"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { timelineContent } from "@/lib/presentation-content";
import { SectionTitle } from "@/components/ui/SectionTitle";

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function PresentationTimeline() {
  const reduced = useReducedMotion();

  return (
    <section id="muc-luc" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          badge={timelineContent.badge}
          title={timelineContent.title}
          subtitle={timelineContent.subtitle}
          align="center"
        />

        <div className="relative">
          {/* Central glowing line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-0 bottom-0 left-[1.15rem] origin-top lg:left-1/2 lg:-translate-x-px"
          >
            <div className="h-full w-0.5 bg-gradient-to-b from-transparent via-amber/40 to-transparent" />
            <div
              className="absolute inset-0 w-1 -translate-x-[2px] blur-md"
              style={{
                background: "linear-gradient(180deg, transparent, rgba(245,197,24,0.4), transparent)",
              }}
            />
          </motion.div>

          <div className="space-y-10">
            {timelineContent.items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: reduced ? 0 : 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start gap-6 lg:gap-0 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Number node */}
                  <div className="relative z-10 flex w-9 shrink-0 justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <div className="relative">
                      <motion.div
                        animate={reduced ? undefined : { scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        className="absolute inset-0 rounded-full bg-amber/40"
                      />
                      <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber bg-gradient-to-br from-crimson to-burgundy text-sm font-bold text-amber shadow-[0_0_20px_rgba(245,197,24,0.4)]">
                        {item.id}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <motion.button
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    whileHover={reduced ? undefined : { y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-amber/20 bg-glass-dark p-6 text-left backdrop-blur-md transition-all hover:border-amber/50 hover:shadow-[0_8px_40px_-8px_rgba(245,197,24,0.3)] lg:w-[calc(50%-2.5rem)] ${
                      isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                    }`}
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(135deg, rgba(245,197,24,0.3), rgba(220,38,38,0.2), transparent)",
                        filter: "blur(8px)",
                      }}
                    />

                    <div className="relative">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber">
                          {item.badge}
                        </span>
                        <ArrowRight className="h-4 w-4 text-amber opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </div>

                      <h3 className="font-heading text-xl font-bold text-white lg:text-2xl" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-base leading-relaxed text-ivory lg:text-lg">
                        {item.description}
                      </p>

                      {item.subItems.length > 0 && (
                        <ul className="mt-4 space-y-2.5 border-t border-amber/15 pt-3">
                          {item.subItems.map((sub) => (
                            <li
                              key={sub}
                              className="flex items-start gap-2.5 text-base text-ivory"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber shadow-[0_0_8px_rgba(245,197,24,0.9)]" />
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.button>

                  <div className="hidden flex-1 lg:block" aria-hidden />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}