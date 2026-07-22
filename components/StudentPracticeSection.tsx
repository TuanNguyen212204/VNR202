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
import { useIsMounted } from "@/hooks/useIsMounted";

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
  const mounted = useIsMounted();
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = checklistIconMap[iconName];

  const ItemContainer = mounted ? motion.li : "li";
  const IconOuter = mounted ? motion.span : "span";
  const IconCheck = mounted ? motion.span : "span";

  const itemProps = mounted
    ? {
        initial: { opacity: 0, x: -30 },
        animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0 },
        transition: { delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
        whileHover: { x: 4 },
      }
    : {};

  const iconProps = mounted
    ? {
        initial: { scale: 0 },
        animate: isInView ? { scale: 1 } : { scale: 0 },
        transition: { delay: index * 0.1 + 0.15, type: "spring" as const, stiffness: 200 },
      }
    : {};

  const checkProps = mounted
    ? {
        initial: { scale: 0, opacity: 0 },
        animate: isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 },
        transition: { delay: index * 0.1 + 0.35, type: "spring" as const, stiffness: 260 },
      }
    : {};

  return (
    <ItemContainer
      ref={ref}
      {...itemProps}
      className="group flex items-center gap-4 rounded-lg border border-amber/20 bg-glass-dark px-5 py-4 backdrop-blur-md transition-colors hover:border-amber/40"
    >
      <IconOuter
        {...iconProps}
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber/25 to-crimson/15 shadow-[0_0 12px_rgba(212,168,75,0.2)]"
      >
        <Icon className="h-5 w-5 text-amber" strokeWidth={2} />
        <IconCheck
          {...checkProps}
          className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-jade shadow-[0_0 6px_rgba(74,124,89,0.6)]"
        >
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        </IconCheck>
      </IconOuter>
      <span className="flex-1 text-justify text-base font-semibold text-cream/90 lg:text-lg" style={{ lineHeight: 1.65 }}>{text}</span>
    </ItemContainer>
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
              <div className="group relative mb-10 overflow-hidden rounded-lg border border-amber/20 bg-glass-dark p-8 backdrop-blur-md lg:p-10">
                {/* Traditional corner accents */}
                <div className="pointer-events-none absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-amber/20 transition-colors group-hover:border-amber/40" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-amber/20 transition-colors group-hover:border-amber/40" />

                <div className="relative space-y-5">
                  <p className="text-base leading-relaxed text-cream/90 lg:text-lg" style={{ lineHeight: 1.85 }}>
                    {studentPracticeContent.intro}
                  </p>
                  <p className="text-base leading-relaxed text-cream/90 lg:text-lg" style={{ lineHeight: 1.85 }}>
                    {studentPracticeContent.detail}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-cream/90 lg:text-lg" style={{ lineHeight: 1.85 }}>
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
