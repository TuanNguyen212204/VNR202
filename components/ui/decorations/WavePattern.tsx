type WavePatternProps = {
  className?: string;
  tone?: "red" | "gold" | "cream";
};

const tones = {
  red: "text-red/10",
  gold: "text-gold/10",
  cream: "text-cream/10",
};

export function WavePattern({ className = "", tone = "red" }: WavePatternProps) {
  return (
    <svg
      className={`w-full ${tones[tone]} ${className}`}
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0,30 C150,60 350,0 500,30 C650,60 850,0 1000,30 C1100,50 1150,40 1200,30 L1200,60 L0,60 Z"
        fill="currentColor"
      />
      <path
        d="M0,40 C200,10 400,50 600,35 C800,20 1000,55 1200,40 L1200,60 L0,60 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}
