import type { ReactNode } from "react";

/** Số liệu cần làm nổi bật khi thuyết trình */
const FIGURES = [
  "188 trong số 193",
  "7,08%",
  "774%",
  "1975",
  "1979",
  "1985",
  "1986",
  "58%",
  "6%",
] as const;

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const figurePattern = new RegExp(`(${FIGURES.map(escapeRegExp).join("|")})`, "g");
const figureSet = new Set<string>(FIGURES);

export function HighlightedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(figurePattern);

  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (figureSet.has(part)) {
          return (
            <mark
              key={`${part}-${i}`}
              className="rounded-sm bg-amber/20 px-1 py-0.5 font-bold text-amber not-italic shadow-[0_0_8px_rgba(212,168,75,0.25)]"
            >
              {part}
            </mark>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

export function highlightFigures(text: string): ReactNode {
  return <HighlightedText text={text} />;
}
