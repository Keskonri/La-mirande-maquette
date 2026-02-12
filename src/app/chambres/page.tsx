import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { chambres } from "@/data/mirande";
import { ArrowRight, Maximize2, Eye, BedDouble } from "lucide-react";

export const metadata = {
  title: "Chambres & Suites — La Mirande",
  description:
    "Vingt-six chambres et suites ornées de toiles imprimées d'époque, chacune unique. Au pied du Palais des Papes, Avignon.",
};

export default function ChambresPage() {
  return (
    <>
      <PageHero
        image="https://www.la-mirande.fr/_novaimg/5007159-1499138_0_0_1966_1311_2000_1333.webp"
        title="Chambres & Suites"
        subtitle="Vingt-six toiles imprimées d'époque — une collection unique au monde."
        breadcrumb={[{ label: "Chambres", href: "/chambres" }]}
      />

      {/* Introduction */}
      <section className="section-padding bg-ivoire-chaud">
        <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-10 text-center">
          <ScrollReveal>
            <p className="font-accent italic text-lg md:text-xl text-terre leading-relaxed">
              Chaque chambre de La Mirande porte le nom de la toile qui habille
              ses murs. Chinées par la famille Stein au fil des décennies, ces
              toiles imprimées du XVIII<sup>e</sup> siècle composent une
              collection unique au monde — et chaque séjour est une immersion
              dans un chapitre d&apos;histoire.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Room grid */}
      <section className="section-padding bg-blanc-lin">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-14">
            {chambres.map((room, i) => (
              <ScrollReveal key={room.slug} delay={i * 0.1}>
                <Link
                  href={`/chambres/${room.slug}`}
                  className="group block"
                >
                  {/* Image container */}
                  <div className="relative aspect-[3/4] overflow-hidden card-hover">
                    <Image
                      src={room.image}
                      alt={`Chambre ${room.name}`}
                      fill
                      quality={75}
                      className="object-cover img-warm transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                    />
                    {/* Gradient overlay — stronger on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-encre/60 via-noir-encre/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    {/* Category badge top-left */}
                    <span className="absolute top-5 left-5 inline-block font-sans text-[10px] tracking-[0.2em] uppercase text-blanc-lin/90 border border-blanc-lin/25 backdrop-blur-sm px-3 py-1.5 bg-noir-encre/20">
                      {room.category}
                    </span>
                    {/* Bottom content overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                      <h2 className="font-display text-2xl md:text-3xl text-blanc-lin mb-2">
                        {room.name}
                      </h2>
                      <p className="font-body text-sm text-creme/80 leading-relaxed line-clamp-2 mb-4 max-w-md">
                        {room.shortDescription}
                      </p>
                      {/* Meta row */}
                      <div className="flex items-center gap-4 font-sans text-[11px] tracking-wide text-creme/70">
                        <span className="flex items-center gap-1.5">
                          <Maximize2 size={12} strokeWidth={1.5} />
                          {room.surface}
                        </span>
                        <span className="w-px h-3 bg-blanc-lin/20" />
                        <span className="flex items-center gap-1.5">
                          <Eye size={12} strokeWidth={1.5} />
                          {room.vue}
                        </span>
                        <span className="w-px h-3 bg-blanc-lin/20" />
                        <span className="flex items-center gap-1.5">
                          <BedDouble size={12} strokeWidth={1.5} />
                          {room.surface}
                        </span>
                      </div>
                      {/* Gold line + CTA */}
                      <div className="mt-5 pt-4 border-t border-or-ancien/30 flex items-center justify-between">
                        <div>
                          <span className="font-sans text-[10px] tracking-wider text-blanc-lin/40 uppercase">
                            à partir de{" "}
                          </span>
                          <span className="font-display text-xl text-or-ancien">
                            {room.price}&nbsp;€
                          </span>
                          <span className="font-body text-xs text-blanc-lin/40 ml-0.5">
                            / nuit
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-2 font-sans text-[12px] tracking-wide text-or-ancien translate-x-0 group-hover:translate-x-1 transition-transform duration-500">
                          Découvrir <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-noir-encre text-center">
        <ScrollReveal>
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-or-ancien/70 mb-4">
            Réservation directe
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-blanc-lin mb-6">
            Réservez au meilleur tarif garanti
          </h2>
          <p className="font-accent italic text-lg text-creme/70 mb-10 max-w-xl mx-auto">
            Late check-out, surclassement, petit-déjeuner — les avantages de la
            réservation directe
          </p>
          <Link href="/contact" className="btn-gold">
            Réserver votre chambre
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
