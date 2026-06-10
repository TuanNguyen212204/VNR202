"use client";

import { motion, useInView } from "framer-motion";
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
  const Icon = checklistIconMap[iconName];

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.4 }}
      className="flex items-center gap-4 rounded-xl border border-white/40 bg-white/50 px-5 py-4 backdrop-blur-sm"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.12 + 0.15, type: "spring", stiffness: 200 }}
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/25"
      >
        <Icon className="h-5 w-5 text-burgundy" strokeWidth={2} />
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: index * 0.12 + 0.35, type: "spring", stiffness: 260 }}
          className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-jade/80"
        >
          <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
        </motion.span>
      </motion.span>
      <span className="flex-1 text-justify text-base font-medium text-brown lg:text-lg">{text}</span>
    </motion.li>
  );
}

export function StudentPracticeSection() {
  return (
    <section id="lien-he" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge="Liên hệ thực tiễn"
          title="Vận dụng với sinh viên hiện nay"
          align="center"
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <MotionSection>
              <div className="glass-card mb-10 p-8 lg:p-10">
                <p className="mb-4 text-base leading-relaxed text-brown/85 lg:text-lg">
                  {studentPracticeContent.intro}
                </p>
                <p className="text-base leading-relaxed text-brown/80 lg:text-lg">
                  {studentPracticeContent.detail}
                </p>
                <p className="mt-4 text-base leading-relaxed text-brown/80 lg:text-lg">
                  {studentPracticeContent.closing}
                </p>
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
