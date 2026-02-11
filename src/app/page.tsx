import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import EngagementsSection from "@/components/sections/EngagementsSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { chambres, gastronomie, experiences } from "@/data/mirande";
import { ArrowRight, Maximize2, Eye } from "lucide-react";

function ChambresPreview() {
  const preview = chambres.slice(0, 3);
  return (
    <section className="section-padding bg-blanc-lin">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          surtitre="Chambres & Suites"
          title="Chaque chambre, une histoire"
          subtitle="Vingt-six toiles imprimées d'époque — une collection unique au monde."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {preview.map((room, i) => (
            <ScrollReveal key={room.slug} delay={i * 0.1}>
              <Link href={`/chambres/${room.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={room.image}
                    alt={`Chambre ${room.name}`}
                    fill
                    className="object-cover img-warm transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-encre/70 via-noir-encre/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block font-sans text-[9px] tracking-[0.2em] uppercase text-blanc-lin/90 border border-blanc-lin/25 backdrop-blur-sm px-2.5 py-1 bg-noir-encre/20">
                      {room.category}
                    </span>
                  </div>
                  {/* Bottom content */}
                  <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
                    <h3 className="font-display text-xl md:text-[22px] text-blanc-lin mb-1.5">
                      {room.name}
                    </h3>
                    <div className="flex items-center gap-3 font-sans text-[10px] tracking-wide text-creme/70">
                      <span className="flex items-center gap-1">
                        <Maximize2 size={10} strokeWidth={1.5} /> {room.surface}
                      </span>
                      <span className="w-px h-2.5 bg-blanc-lin/20" />
                      <span className="flex items-center gap-1">
                        <Eye size={10} strokeWidth={1.5} /> {room.vue}
                      </span>
                    </div>
                    {/* Price + CTA */}
                    <div className="mt-3 pt-3 border-t border-or-ancien/25 flex items-center justify-between">
                      <span className="font-display text-lg text-or-ancien">
                        {room.price}&nbsp;€
                        <span className="font-body text-[11px] text-blanc-lin/35 ml-0.5">/ nuit</span>
                      </span>
                      <span className="inline-flex items-center gap-1 font-sans text-[11px] text-or-ancien/80 translate-x-0 group-hover:translate-x-1 transition-transform duration-500">
                        Voir <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center mt-14">
          <Link href="/chambres" className="btn-outline inline-flex items-center gap-2">
            Découvrir toutes nos chambres <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TablesPreview() {
  const resto = gastronomie[0];
  return (
    <section className="section-padding bg-ivoire-chaud">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          surtitre="Gastronomie"
          title="Quatre tables, une philosophie"
        />
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={resto.image}
                alt={resto.name}
                fill
                className="object-cover img-warm"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien mb-3">
                {resto.badge}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-noir-encre mb-3">
                {resto.name}
              </h3>
              <p className="font-accent italic text-terre mb-4">{resto.chef}</p>
              <p className="font-body text-anthracite leading-relaxed mb-8">
                {resto.shortDescription}
              </p>
              <Link href="/tables" className="btn-gold inline-flex items-center gap-2">
                Découvrir nos tables <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ExperiencesPreview() {
  const preview = experiences.slice(0, 2);
  return (
    <section className="section-padding bg-blanc-lin">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          surtitre="Expériences"
          title="Bien plus qu'un hôtel"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {preview.map((exp, i) => (
            <ScrollReveal key={exp.slug} delay={i * 0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  className="object-cover img-warm transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-encre/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-xl md:text-2xl text-blanc-lin mb-2">{exp.name}</h3>
                  <p className="font-body text-sm text-creme/80">{exp.shortDescription}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center mt-14">
          <Link href="/experiences" className="btn-outline inline-flex items-center gap-2">
            Toutes nos expériences <ArrowRight size={14} />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ChambresPreview />
      <TablesPreview />
      <ExperiencesPreview />
      <EngagementsSection />
      {/* CTA final */}
      <section className="section-padding bg-bleu-papes text-center">
        <ScrollReveal>
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-or-ancien/70 mb-4">
            Réservation
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-blanc-lin mb-6">
            Votre séjour à La Mirande
          </h2>
          <p className="font-accent italic text-lg text-creme/70 mb-10 max-w-xl mx-auto">
            Sept siècles d&apos;histoire vous attendent
          </p>
          <Link href="/contact" className="btn-gold">
            Réserver votre séjour
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
