import { introContent } from "@/lib/presentation-content";
import { getIllustration } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionSection } from "@/components/ui/MotionSection";
import { IllustrationCard } from "@/components/ui/IllustrationCard";

const introIllustration = getIllustration("intro");

export function IntroSection() {
  return (
    <section id="mo-dau" className="relative z-10 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle badge="Mở đầu" title="Lời mở đầu" align="center" />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <MotionSection>
            <div className="glass-card p-8 lg:p-12">
              <div className="space-y-5 text-base leading-relaxed text-brown/85 lg:text-lg">
                {introContent.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <blockquote className="mt-8 border-l-4 border-gold pl-6 font-heading text-xl italic text-burgundy lg:text-2xl">
                &ldquo;{introContent.quote}&rdquo;
              </blockquote>
            </div>
          </MotionSection>

          <MotionSection delay={0.15}>
            <IllustrationCard
              title={introIllustration.title}
              description={introIllustration.description}
              imageSrc={introIllustration.imageSrc}
              iconName={introIllustration.icon}
              variant={introIllustration.variant}
              size="md"
              showCaption={false}
              delay={0.1}
            />
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
