import { accentStyles, type AccentColor } from "@/lib/content";
import { FadeIn } from "./FadeIn";

type AnswerBlockProps = {
  verdict?: string;
  paragraphs: string[];
  conclusion?: string;
  accent?: AccentColor;
};

export function AnswerBlock({
  verdict,
  paragraphs,
  conclusion,
  accent = "purple",
}: AnswerBlockProps) {
  const styles = accentStyles[accent];

  return (
    <FadeIn>
      <div
        className={`relative z-[1] mt-5 rounded-r-2xl border-l-4 p-6 ${styles.border} ${styles.bg}`}
      >
        {verdict && (
          <span className="mb-4 inline-block rounded-full bg-coral px-[18px] py-2 text-[0.88rem] font-semibold text-white">
            {verdict}
          </span>
        )}
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-3.5 text-text-muted last:mb-0">
            {p}
          </p>
        ))}
        {conclusion && (
          <p className="mt-4 border-t border-dashed border-border pt-3.5 font-semibold text-text">
            {conclusion}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
