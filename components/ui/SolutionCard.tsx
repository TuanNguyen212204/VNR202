import { accentStyles, type AccentColor } from "@/lib/content";
import { FadeIn } from "./FadeIn";

type SolutionCardProps = {
  title: string;
  text: string;
  accent?: AccentColor;
};

export function SolutionCard({
  title,
  text,
  accent = "purple",
}: SolutionCardProps) {
  const styles = accentStyles[accent];

  return (
    <FadeIn>
      <div
        className={`rounded-[14px] border border-border bg-white p-6 border-t-[3px] ${styles.border}`}
      >
        <h4 className="mb-3 text-[1.05rem] font-semibold">{title}</h4>
        <p className="text-[0.92rem] text-text-muted">{text}</p>
      </div>
    </FadeIn>
  );
}
