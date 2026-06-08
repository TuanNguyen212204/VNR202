"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { timelineContent } from "@/lib/presentation-content";
import { SectionTitle } from "@/components/ui/SectionTitle";

function scrollToSection(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export function PresentationTimeline() {
  const reduced = useReducedMotion();

  return (
    <section id="muc-luc" className="relative z-10 px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          badge={timelineContent.badge}
          title={timelineContent.title}
          subtitle={timelineContent.subtitle}
          align="center"
        />

        <div className="relative">
          <div
            className="absolute top-0 bottom-0 left-[1.15rem] w-0.5 bg-gradient-to-b from-burgundy/20 via-gold/40 to-burgundy/20 lg:left-1/2 lg:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-8">
            {timelineContent.items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: reduced ? 0 : 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex items-start gap-6 lg:gap-0 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="relative z-10 flex w-9 shrink-0 justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold bg-white text-sm font-bold text-burgundy shadow-md">
                      {item.id}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className={`group glass-card card-hover ml-0 w-full cursor-pointer p-5 text-left transition-colors lg:w-[calc(50%-2.5rem)] ${
                      isEven ? "lg:mr-auto lg:pr-8" : "lg:ml-auto lg:pl-8"
                    }`}
                  >
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-burgundy/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-burgundy">
                        {item.badge}
                      </span>
                      <ChevronRight className="h-4 w-4 text-gold opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>

                    <h3 className="font-heading text-lg font-bold text-brown lg:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-brown/75 lg:text-base">
                      {item.description}
                    </p>

                    {item.subItems.length > 0 && (
                      <ul className="mt-3 space-y-1.5 border-t border-gold/20 pt-3">
                        {item.subItems.map((sub) => (
                          <li
                            key={sub}
                            className="flex items-start gap-2 text-sm text-brown/70"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </button>

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
