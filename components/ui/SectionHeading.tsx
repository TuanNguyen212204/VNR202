import { FadeIn } from "./FadeIn";
import type { AccentColor } from "@/lib/content";

type SectionHeadingProps = {
  children: React.ReactNode;
  accent?: AccentColor;
};

const accentBorder: Record<AccentColor, string> = {
  purple: "border-purple",
  teal: "border-teal",
  coral: "border-coral",
  blue: "border-blue",
};

export function SectionHeading({
  children,
  accent = "purple",
}: SectionHeadingProps) {
  return (
    <FadeIn>
      <h2
        className={`relative z-[1] mb-8 border-l-4 pl-5 text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold ${accentBorder[accent]}`}
      >
        {children}
      </h2>
    </FadeIn>
  );
}
