"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { studentPracticeContent } from "@/lib/presentation-content";
import { getIllustration } from "@/data/illustrations";
import { checklistIconMap } from "@/lib/illustration-icons";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";

const practiceIllustration = getIllustration("practice");

function ChecklistItem({
  text,
  iconName,
  index,
}: {
  text: string;
  iconName: keyof typeof checklistIconMap;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const Icon = checklistIconMap[iconName];

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: reduced ? 0 : -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduced ? undefined : { x: 4, scale: 1.01 }}
      className="group flex items-center gap-4 rounded-xl border border-amber/20 bg-glass-dark px-5 py-4 backdrop-blur-md transition-colors hover:border-amber/40"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.15, type: "spring", stiffness: 200 }}
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber/30 to-crimson/20 shadow-[0_0_16px_rgba(245,197,24,0.25)]"
      >
        <Icon className="h-5 w-5 text-amber" strokeWidth={2} />
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.35, type: "spring", stiffness: 260 }}
          className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-jade shadow-[0_0_8px_rgba(16,185,129,0.6)]"
        >
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        </motion.span>
      </motion.span>
      <span className="flex-1 text-justify text-base font-semibold text-ivory lg:text-lg" style={{ lineHeight: 1.65 }}>{text}</span>
    </motion.li>
  );
}

export function StudentPracticeSection() {
  return (
    <section id="tham-nhung" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge="Phần IV"
          title="Nguyên nhân và tác hại của tham nhũng"
          align="center"
        />

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <MotionSection>
              <div className="group relative mb-10 overflow-hidden rounded-2xl border border-amber/20 bg-glass-dark p-8 backdrop-blur-md lg:p-10">
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(135deg, rgba(220,38,38,0.3), rgba(245,197,24,0.2))",
                    filter: "blur(8px)",
                  }}
                />
                <div className="relative space-y-5">
                  <p className="text-base leading-relaxed text-ivory lg:text-lg" style={{ lineHeight: 1.75 }}>
                    {studentPracticeContent.intro}
                  </p>
                  <p className="text-base leading-relaxed text-ivory lg:text-lg" style={{ lineHeight: 1.75 }}>
                    {studentPracticeContent.detail}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-ivory lg:text-lg" style={{ lineHeight: 1.75 }}>
                    {studentPracticeContent.closing}
                  </p>
                </div>
              </div>
            </MotionSection>

            <ul className="space-y-3">
              {studentPracticeContent.checklist.map((item, i) => (
                <ChecklistItem
                  key={item.text}
                  text={item.text}
                  iconName={item.icon}
                  index={i}
                />
              ))}
            </ul>
          </div>

          <MotionSection delay={0.15} className="lg:sticky lg:top-28">
            <IllustrationCard
              title={practiceIllustration.title}
              description={practiceIllustration.description}
              imageSrc={practiceIllustration.imageSrc}
              iconName={practiceIllustration.icon}
              variant={practiceIllustration.variant}
              objectFit={practiceIllustration.objectFit}
              objectPosition={practiceIllustration.objectPosition}
              size="lg"
              delay={0.1}
            />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}