import { cultureContent } from "@/lib/presentation-content";
import { getIllustration } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { MotionCard } from "@/components/ui/MotionCard";
import { IllustrationCard } from "@/components/ui/IllustrationCard";
import { CultureInfographic } from "@/components/CultureInfographic";

const cultureIllustration = getIllustration("culture");

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

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {cultureContent.subBlocks.map((block, i) => (
            <MotionCard key={block} delay={i * 0.08} className="!p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/30 text-sm font-bold text-burgundy">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-brown/80 lg:text-base">
                  {block}
                </p>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}
