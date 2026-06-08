import type { LucideIcon } from "lucide-react";
import type { IllustrationVariant } from "@/data/illustrations";

type IllustrationPlaceholderProps = {
  title: string;
  description?: string;
  icon: LucideIcon;
  variant?: IllustrationVariant;
  showCaption?: boolean;
};

const variantClass: Record<IllustrationVariant, string> = {
  hero: "illustration-variant-hero",
  intro: "illustration-variant-intro",
  human: "illustration-variant-human",
  culture: "illustration-variant-culture",
  ethics: "illustration-variant-ethics",
  practice: "illustration-variant-practice",
  conclusion: "illustration-variant-conclusion",
};

function LotusLineArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      <ellipse cx="32" cy="44" rx="6" ry="10" stroke="#7B1E2E" strokeWidth="1.2" opacity="0.5" />
      <ellipse cx="20" cy="40" rx="5" ry="14" stroke="#7B1E2E" strokeWidth="1.2" transform="rotate(-25 20 40)" opacity="0.45" />
      <ellipse cx="44" cy="40" rx="5" ry="14" stroke="#7B1E2E" strokeWidth="1.2" transform="rotate(25 44 40)" opacity="0.45" />
      <circle cx="32" cy="32" r="5" fill="#F5C518" opacity="0.6" />
    </svg>
  );
}

export function IllustrationPlaceholder({
  title,
  description,
  icon: Icon,
  variant = "hero",
  showCaption = true,
}: IllustrationPlaceholderProps) {
  const sparkles = [12, 28, 45, 62, 78, 88];

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center overflow-hidden ${variantClass[variant]}`}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Ccircle cx='60' cy='60' r='55' fill='none' stroke='%237B1E2E' stroke-width='1'/%3E%3Ccircle cx='60' cy='60' r='35' fill='none' stroke='%237B1E2E' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
        aria-hidden
      />

      <LotusLineArt className="absolute right-4 top-4 h-14 w-14 opacity-40" />
      <LotusLineArt className="absolute bottom-6 left-4 h-10 w-10 rotate-12 opacity-30" />

      {sparkles.map((left, i) => (
        <span
          key={i}
          className="animate-float-glow absolute rounded-full bg-gold/50"
          style={{
            left: `${left}%`,
            top: `${15 + (i * 13) % 65}%`,
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            animationDelay: `${i * 0.7}s`,
          }}
          aria-hidden
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-3 px-6 py-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-gold/40 bg-white/50 shadow-lg backdrop-blur-sm">
          <Icon className="h-10 w-10 text-burgundy" strokeWidth={1.5} />
        </div>

        {showCaption && (
          <div className="max-w-[220px] text-center">
            <p className="font-heading text-sm font-semibold text-burgundy/80">{title}</p>
            {description && (
              <p className="mt-1 text-xs leading-relaxed text-brown/55">{description}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
