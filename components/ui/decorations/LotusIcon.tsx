type LotusIconProps = {
  className?: string;
  size?: number;
};

export function LotusIcon({ className = "", size = 48 }: LotusIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-pulse-lotus ${className}`}
      aria-hidden
    >
      <ellipse cx="32" cy="44" rx="6" ry="10" fill="#C8102E" opacity="0.9" />
      <ellipse cx="20" cy="40" rx="5" ry="14" fill="#C8102E" transform="rotate(-25 20 40)" />
      <ellipse cx="44" cy="40" rx="5" ry="14" fill="#C8102E" transform="rotate(25 44 40)" />
      <ellipse cx="12" cy="36" rx="4" ry="12" fill="#C8102E" opacity="0.8" transform="rotate(-45 12 36)" />
      <ellipse cx="52" cy="36" rx="4" ry="12" fill="#C8102E" opacity="0.8" transform="rotate(45 52 36)" />
      <circle cx="32" cy="32" r="5" fill="#F5C518" />
    </svg>
  );
}
