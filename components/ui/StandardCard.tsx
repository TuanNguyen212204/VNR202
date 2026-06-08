import { accentStyles, type AccentColor } from "@/lib/content";
import { FadeIn } from "./FadeIn";

type StandardCardProps = {
  num: string;
  title: string;
  text: string;
  accent?: AccentColor;
};

export function StandardCard({
  num,
  title,
  text,
  accent = "purple",
}: StandardCardProps) {
  const styles = accentStyles[accent];

  return (
    <FadeIn>
      <div
        className={`relative rounded-2xl border border-border bg-white p-6 border-t-[3px] ${styles.border}`}
      >
        <span
          className={`mb-3.5 inline-block rounded-lg px-3 py-1 text-[0.85rem] font-bold ${styles.bg} ${styles.text}`}
        >
          {num}
        </span>
        <h4 className="mb-2.5 text-[1.1rem] font-semibold">{title}</h4>
        <p className="text-[0.93rem] text-text-muted">{text}</p>
      </div>
    </FadeIn>
  );
}
