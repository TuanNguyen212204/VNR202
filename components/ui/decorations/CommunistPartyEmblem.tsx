type CommunistPartyEmblemProps = {
  className?: string;
  size?: number;
  useImage?: boolean;
};

export function CommunistPartyEmblem({ 
  className = "", 
  size = 32,
  useImage = false 
}: CommunistPartyEmblemProps) {
  // Use the actual logo image for better quality
  if (useImage) {
    return (
      <img
        src="/images/lich-su-dang.jpg"
        alt="Đảng Cộng sản Việt Nam"
        width={size}
        height={size}
        className={className}
        style={{ objectFit: "contain" }}
      />
    );
  }

  // Fallback SVG emblem
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {/* Outer golden ring */}
      <circle cx="32" cy="32" r="28" stroke="#D4A84B" strokeWidth="2" opacity="0.8" />
      
      {/* Red star in center */}
      <path
        d="M32 12 L35.5 22 L46 22 L37.5 28 L40.5 38 L32 32.5 L23.5 38 L26.5 28 L18 22 L28.5 22 Z"
        fill="#C8102E"
        stroke="#D4A84B"
        strokeWidth="0.5"
      />
      
      {/* Golden inner circle */}
      <circle cx="32" cy="32" r="18" stroke="#D4A84B" strokeWidth="1" opacity="0.5" />
      
      {/* Half-circle wheat/hammer patterns - simplified */}
      <path
        d="M14 32 Q14 20 32 20 Q50 20 50 32"
        stroke="#D4A84B"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M14 32 Q14 44 32 44 Q50 44 50 32"
        stroke="#D4A84B"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      
      {/* Small decorative dots */}
      <circle cx="32" cy="10" r="1.5" fill="#D4A84B" opacity="0.7" />
      <circle cx="32" cy="54" r="1.5" fill="#D4A84B" opacity="0.7" />
      <circle cx="10" cy="32" r="1.5" fill="#D4A84B" opacity="0.7" />
      <circle cx="54" cy="32" r="1.5" fill="#D4A84B" opacity="0.7" />
    </svg>
  );
}
