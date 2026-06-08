import { accentStyles, type AccentColor } from "@/lib/content";
import { FadeIn } from "./FadeIn";

type QuoteCardProps = {
  text: string;
  footer: string;
  accent: AccentColor;
};

export function QuoteCard({ text, footer, accent }: QuoteCardProps) {
  const styles = accentStyles[accent];

  return (
    <FadeIn>
      <div
        className={`relative overflow-hidden rounded-[18px] p-9 ${styles.bg} ${styles.text}`}
      >
        <span className="absolute -top-2.5 left-4 font-serif text-[6rem] font-bold leading-none opacity-[0.18]">
          &ldquo;
        </span>
        <p className="relative z-[1] text-[1.02rem] italic">{text}</p>
        <footer className="relative z-[1] mt-4 text-[0.9rem] italic opacity-80">
          {footer}
        </footer>
      </div>
    </FadeIn>
  );
}
