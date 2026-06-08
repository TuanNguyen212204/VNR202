export function BambooDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-8 ${className}`} aria-hidden>
      <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-green/40" />
      <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
        <rect x="8" y="4" width="4" height="16" rx="2" fill="#4A7C59" opacity="0.7" />
        <rect x="20" y="2" width="4" height="20" rx="2" fill="#4A7C59" />
        <rect x="32" y="6" width="4" height="14" rx="2" fill="#4A7C59" opacity="0.8" />
        <rect x="44" y="2" width="4" height="20" rx="2" fill="#4A7C59" />
        <rect x="56" y="4" width="4" height="16" rx="2" fill="#4A7C59" opacity="0.7" />
        <rect x="68" y="6" width="4" height="14" rx="2" fill="#4A7C59" opacity="0.6" />
        <line x1="10" y1="10" x2="22" y2="8" stroke="#4A7C59" strokeWidth="1" opacity="0.5" />
        <line x1="34" y1="12" x2="46" y2="10" stroke="#4A7C59" strokeWidth="1" opacity="0.5" />
        <line x1="58" y1="10" x2="70" y2="12" stroke="#4A7C59" strokeWidth="1" opacity="0.5" />
      </svg>
      <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-green/40" />
    </div>
  );
}
