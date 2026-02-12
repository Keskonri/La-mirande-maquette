import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import EngagementsSection from "@/components/sections/EngagementsSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import RoomCard from "@/components/ui/RoomCard";
import { chambres, gastronomie, experiences } from "@/data/mirande";
import { ArrowRight } from "lucide-react";

function ChambresPreview() {
  const preview = chambres.slice(0, 3);
  return (
    <section className="section-padding bg-blanc-lin">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <SectionTitle
          surtitre="Chambres & Suites"
          title="Chaque chambre, une histoire"
          subtitle="Vingt-six toiles imprimées d'époque — une collection unique au monde."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {preview.map((room, i) => (
            <ScrollReveal key={room.slug} delay={i * 0.1}>
              <RoomCard room={room} variant="compact" />
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <SectionTitle
          surtitre="Gastronomie"
          title="Quatre tables, une philosophie"
        />
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={resto.image}
                alt={resto.name}
                fill
                quality={75}
                className="object-cover img-warm"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <SectionTitle
          surtitre="Expériences"
          title="Bien plus qu'un hôtel"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {preview.map((exp, i) => (
            <ScrollReveal key={exp.slug} delay={i * 0.1}>
              <div className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  quality={75}
                  className="object-cover img-warm transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
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
    </>
  );
}
