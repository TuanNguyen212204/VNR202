type SectionTitleProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  badge,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignClass}`}>
      {badge && (
        <span className="mb-3 inline-block rounded-full bg-burgundy/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-burgundy">
          {badge}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-brown lg:text-4xl xl:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-brown/60 lg:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
