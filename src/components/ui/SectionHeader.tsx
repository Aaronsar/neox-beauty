interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  accent?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  accent = "#d4145a",
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <span
        className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold tracking-[0.3em] uppercase"
        style={{ backgroundColor: `${accent}12`, color: accent }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: accent }}
        />
        {label}
      </span>
      <h2 className="font-display text-4xl leading-[0.95] font-bold tracking-tight text-charcoal md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-md text-sm leading-relaxed text-muted ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
