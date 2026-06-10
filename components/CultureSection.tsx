import { Globe2, Heart, Scale, Sprout, type LucideIcon } from "lucide-react";
import { cultureContent } from "@/lib/presentation-content";
import { cultureIllustrationIds, getIllustration } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { MotionCard } from "@/components/ui/MotionCard";
import { IllustrationCard } from "@/components/ui/IllustrationCard";
import { CultureInfographic } from "@/components/CultureInfographic";

const cultureIllustration = getIllustration("culture");

const iconMap: Record<string, LucideIcon> = {
  Sprout,
  Heart,
  Scale,
  Globe2,
};

export function CultureSection() {
  return (
    <section id="van-hoa" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge="Phần IV.1"
          title="Xây dựng và phát triển văn hóa, con người"
          subtitle="Văn hóa — nền tảng tinh thần của xã hội"
        />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <MotionSection>
            <div className="space-y-5 text-base leading-relaxed text-brown/85 lg:text-lg">
              {cultureContent.mainParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </MotionSection>

          <MotionSection delay={0.15}>
            <IllustrationCard
              title={cultureIllustration.title}
              description={cultureIllustration.description}
              imageSrc={cultureIllustration.imageSrc}
              iconName={cultureIllustration.icon}
              variant={cultureIllustration.variant}
              size="lg"
              showCaption={false}
              skipImage
              delay={0.15}
            >
              <CultureInfographic />
            </IllustrationCard>
          </MotionSection>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {cultureContent.subBlocks.map((block, i) => {
            const Icon = iconMap[block.icon];
            const illustration = getIllustration(cultureIllustrationIds[block.id]);

            return (
              <MotionCard key={block.id} delay={i * 0.08} className="!p-0 overflow-hidden">
                <IllustrationCard
                  title={illustration.title}
                  description={illustration.description}
                  imageSrc={illustration.imageSrc}
                  iconName={illustration.icon}
                  variant={illustration.variant}
                  size="sm"
                  showCaption={false}
                  delay={i * 0.06}
                  className="!rounded-none !border-0 !shadow-none !bg-transparent"
                />
                <div className="flex items-start gap-3 p-5 pt-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/30 text-sm font-bold text-burgundy">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-start gap-2">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-burgundy" />
                      <p className="text-sm font-semibold leading-snug text-brown lg:text-base">
                        {block.title}
                      </p>
                    </div>
                    {block.description && (
                      <p className="text-xs leading-relaxed text-brown/70 lg:text-sm">
                        {block.description}
                      </p>
                    )}
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
