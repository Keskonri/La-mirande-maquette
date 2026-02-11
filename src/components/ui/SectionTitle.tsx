import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  surtitre?: string;
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionTitle({
  surtitre,
  title,
  subtitle,
  className = "",
  light = false,
}: SectionTitleProps) {
  return (
    <ScrollReveal className={`text-center mb-12 md:mb-16 ${className}`}>
      {surtitre && (
        <p
          className={`font-sans text-xs tracking-[0.3em] uppercase mb-4 ${
            light ? "text-or-ancien/80" : "text-terre"
          }`}
        >
          {surtitre}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl ${
          light ? "text-blanc-lin" : "text-noir-encre"
        }`}
      >
        {title}
      </h2>
      <div className="ornament-line mt-6">
        <span className="sr-only">ornement</span>
      </div>
      {subtitle && (
        <p
          className={`font-accent italic text-lg md:text-xl mt-6 max-w-2xl mx-auto ${
            light ? "text-blanc-lin/80" : "text-terre"
          }`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
