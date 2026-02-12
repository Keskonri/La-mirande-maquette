import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { gastronomie } from "@/data/mirande";
import { Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Gastronomie — La Mirande",
  description:
    "Quatre tables et un bar pour une philosophie : la Provence sublimée. Restaurant étoilé Michelin, Table Haute, Bistrot, Mirage et Bar.",
};

export default function TablesPage() {
  return (
    <>
      <PageHero
        image="https://www.la-mirande.fr/_novaimg/5015827-1500662_0_0_1500_1000_1200_800.webp"
        title="Gastronomie"
        subtitle="Quatre tables, un bar, une philosophie : la Provence sublimée."
        breadcrumb={[{ label: "Tables", href: "/tables" }]}
      />

      {/* Introduction */}
      <section className="section-padding bg-ivoire-chaud">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-accent italic text-lg md:text-xl text-terre leading-relaxed">
              De la cuisine étoilée à la pizza au feu de bois, de la Table Haute
              intime au Bistrot de terrasse — à La Mirande, chaque repas est une
              célébration du terroir provençal. Des produits du Luberon et du
              Ventoux, des relations directes avec nos producteurs depuis quinze
              ans, et la créativité sans artifice du Chef Florent Pietravalle.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Each restaurant */}
      {gastronomie.map((resto, i) => (
        <section
          key={resto.id}
          className={`section-padding ${
            i % 2 === 0 ? "bg-blanc-lin" : "bg-ivoire-chaud"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
            <ScrollReveal>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden lg:[direction:ltr]">
                  <Image
                    src={resto.image}
                    alt={resto.name}
                    fill
                    quality={75}
                    className="object-cover img-warm"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                  />
                </div>

                {/* Content */}
                <div className="lg:[direction:ltr]">
                  <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien mb-3">
                    {resto.badge}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-3">
                    {resto.name}
                  </h2>
                  {resto.chef && (
                    <p className="font-accent italic text-terre mb-4">
                      {resto.chef}
                    </p>
                  )}
                  <p className="font-body text-anthracite leading-relaxed mb-6">
                    {resto.longDescription}
                  </p>
                  <div className="flex items-center gap-2 text-bleu-gris mb-8">
                    <Clock size={14} strokeWidth={1.5} />
                    <span className="font-sans text-[12px] tracking-wide">
                      {resto.horaires}
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="btn-gold inline-flex items-center gap-2"
                  >
                    {resto.cta} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-noir-encre text-center">
        <ScrollReveal>
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-or-ancien/70 mb-4">
            Réservation
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-blanc-lin mb-6">
            Réservez votre table
          </h2>
          <p className="font-accent italic text-lg text-creme/70 mb-10 max-w-xl mx-auto">
            Pour le Restaurant Gastronomique et La Table Haute, la réservation
            est indispensable
          </p>
          <Link href="/contact" className="btn-gold">
            Nous contacter
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
