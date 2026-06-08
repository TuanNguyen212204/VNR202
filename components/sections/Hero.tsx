import Image from "next/image";
import { heroContent } from "@/lib/content";
import { images } from "@/lib/images";

const badgeColors = {
  purple: "bg-purple",
  teal: "bg-teal",
  coral: "bg-coral",
  blue: "bg-blue",
};

export function Hero() {
  const titleLines = heroContent.title.split("\n");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-20 pt-[120px] text-center text-white">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,30,0.6)] to-[rgba(10,10,30,0.75)]" />

      <div className="relative z-[1] mx-auto max-w-[840px]">
        <p className="mb-6 text-[0.75rem] uppercase tracking-[0.18em] text-purple-light/70">
          {heroContent.eyebrow}
        </p>
        <h1 className="mb-7 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.15]">
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        <blockquote className="mx-auto mb-9 max-w-[680px] border-l-[3px] border-purple pl-5 text-left text-[1.1rem] italic text-white/75">
          &ldquo;{heroContent.quote}&rdquo;
          <footer className="mt-2.5 text-[0.9rem] not-italic text-white/55">
            {heroContent.quoteFooter}
          </footer>
        </blockquote>
        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {heroContent.badges.map((badge) => (
            <span
              key={badge.label}
              className={`rounded-full px-[18px] py-2 text-[0.82rem] font-semibold text-white ${badgeColors[badge.color]}`}
            >
              {badge.label}
            </span>
          ))}
        </div>
        <div className="animate-bounce-slow text-2xl text-white/60">↓</div>
      </div>
    </section>
  );
}
