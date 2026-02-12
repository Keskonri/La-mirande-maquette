import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  surtitre: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CTASection({ surtitre, title, description, ctaText = "Nous contacter", ctaHref = "/contact" }: CTASectionProps) {
  return (
    <section className="section-padding bg-noir-encre text-center">
      <ScrollReveal>
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-or-ancien/70 mb-4">{surtitre}</p>
        <h2 className="font-display text-3xl md:text-4xl text-blanc-lin mb-6">{title}</h2>
        <p className="font-accent italic text-lg text-creme/70 mb-10 max-w-xl mx-auto">{description}</p>
        <Link href={ctaHref} className="btn-gold inline-flex items-center gap-2">
          {ctaText} <ArrowRight size={14} />
        </Link>
      </ScrollReveal>
    </section>
  );
}
