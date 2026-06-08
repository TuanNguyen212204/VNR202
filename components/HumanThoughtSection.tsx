import { Heart, Sprout, User, Users, type LucideIcon } from "lucide-react";
import { humanThoughtCards } from "@/lib/presentation-content";
import { getIllustration, humanIllustrationIds } from "@/data/illustrations";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { MotionCard } from "@/components/ui/MotionCard";
import { IllustrationCard } from "@/components/ui/IllustrationCard";

const iconMap: Record<string, LucideIcon> = {
  User,
  Heart,
  Users,
  Sprout,
};

export function HumanThoughtSection() {
  return (
    <section id="con-nguoi" className="relative z-10 bg-section-gradient px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          badge="Phần III"
          title="Tư tưởng Hồ Chí Minh về con người"
          subtitle="Con người — mục tiêu, động lực và chiến lược trồng người"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {humanThoughtCards.map((card, i) => {
            const Icon = iconMap[card.icon];
            const illustrationId = humanIllustrationIds[card.id];
            const illustration = getIllustration(illustrationId);
            return (
              <MotionCard key={card.id} delay={i * 0.08} className="!p-0 overflow-hidden">
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
                <div className="p-6 lg:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10">
                      <Icon className="h-6 w-6 text-burgundy" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-brown lg:text-xl">
                      {card.title}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm leading-relaxed text-brown/80 lg:text-base">
                    {card.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
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
