"use client";

import { useState } from "react";
import { ChevronDown, Flame, Scale, ShieldCheck, type LucideIcon } from "lucide-react";
import { ethicsContent } from "@/lib/presentation-content";
import { getIllustration, ethicsIllustrationIds } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Scale,
  Flame,
};

const ethicsMain = getIllustration("ethics");

export function EthicsSection() {
  const [openId, setOpenId] = useState<string | null>("principle");

  return (
    <section id="kinh-nghiem" className="relative z-10 bg-section-gradient px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge="Phần III.3"
          title="Kinh nghiệm của Đảng"
          subtitle="Những bài học quý báu qua hơn 30 năm đổi mới"
        />

        <MotionSection>
          <blockquote className="mb-8 rounded-2xl border border-gold/30 bg-gold/10 px-8 py-6 text-center font-heading text-xl italic text-burgundy lg:text-2xl">
            &ldquo;{ethicsContent.quote}&rdquo;
          </blockquote>
        </MotionSection>

        <div className="mb-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <MotionSection>
            <p className="text-base leading-relaxed text-brown/85 lg:text-lg">
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

        <div className="space-y-4 lg:hidden">
          {ethicsContent.parts.map((part, i) => {
            const Icon = iconMap[part.icon];
            const illustrationId = ethicsIllustrationIds[part.id];
            const illustration = getIllustration(illustrationId);
            const isOpen = openId === part.id;

            return (
              <MotionSection key={part.id} delay={i * 0.08}>
                <div className="glass-card overflow-hidden">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between p-5 text-left"
                    onClick={() => setOpenId(isOpen ? null : part.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-burgundy" />
                      <span className="font-heading font-bold text-brown">
                        {part.title}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-burgundy transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/40 px-5 pb-5 pt-3">
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
                      <div className="text-sm leading-relaxed text-brown/80">
                        {"content" in part && part.content}
                        {"items" in part && (
                          <ul className="mt-2 space-y-2">
                            {part.items?.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </MotionSection>
            );
          })}
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {ethicsContent.parts.map((part, i) => {
            const Icon = iconMap[part.icon];
            const illustrationId = ethicsIllustrationIds[part.id];
            const illustration = getIllustration(illustrationId);
            return (
              <MotionSection key={part.id} delay={i * 0.1}>
                <div className="glass-card card-hover h-full overflow-hidden">
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
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10">
                      <Icon className="h-6 w-6 text-burgundy" />
                    </div>
                    <h3 className="mb-3 font-heading text-lg font-bold text-brown">
                      {part.title}
                    </h3>
                    {"content" in part && (
                      <p className="text-sm leading-relaxed text-brown/80">
                        {part.content}
                      </p>
                    )}
                    {"items" in part && (
                      <ul className="mt-2 space-y-2 text-sm text-brown/80">
                        {part.items?.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
