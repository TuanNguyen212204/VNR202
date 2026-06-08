import { FadeIn } from "./FadeIn";

type PullQuoteProps = {
  text: string;
  footer: string;
  variant?: "purple" | "teal";
};

export function PullQuote({
  text,
  footer,
  variant = "purple",
}: PullQuoteProps) {
  const isTeal = variant === "teal";

  return (
    <FadeIn>
      <blockquote
        className={`relative z-[1] rounded-2xl border-l-4 p-8 text-[1.05rem] italic ${
          isTeal
            ? "border-teal bg-teal-light"
            : "border-purple bg-purple-light"
        }`}
      >
        {text}
        <footer className="mt-3.5 text-[0.92rem] font-bold not-italic">
          {footer}
        </footer>
      </blockquote>
    </FadeIn>
  );
}
