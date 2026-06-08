import { accentStyles, type AccentColor } from "@/lib/content";
import { FadeIn } from "./FadeIn";

type QuestionCardProps = {
  label: string;
  text: string;
  accent?: AccentColor;
};

export function QuestionCard({
  label,
  text,
  accent = "purple",
}: QuestionCardProps) {
  const styles = accentStyles[accent];

  return (
    <FadeIn>
      <div
        className={`rounded-[14px] border border-border bg-white p-6 border-t-[3px] ${styles.border}`}
      >
        <span className="mb-2.5 block font-bold">{label}</span>
        <p className="text-[0.95rem] text-text-muted">{text}</p>
      </div>
    </FadeIn>
  );
}
