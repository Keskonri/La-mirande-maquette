import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiences } from "@/data/mirande";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Expériences — La Mirande",
  description:
    "École de cuisine, concerts de chambre, jardin secret, art & culture — bien plus qu'un hôtel.",
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        image="https://www.la-mirande.fr/_novaimg/4730264-1432764_0_0_2362_1324_2000_1121.webp"
        title="Expériences"
        subtitle="Bien plus qu'un hôtel — un art de vivre provençal."
        breadcrumb={[{ label: "Expériences", href: "/experiences" }]}
      />

      {/* Introduction */}
      <section className="section-padding bg-ivoire-chaud">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <p className="font-accent italic text-lg md:text-xl text-terre leading-relaxed">
              La Mirande ne se contente pas de vous héberger — elle vous invite
              à vivre. Cours de cuisine dans une cuisine du XIX<sup>e</sup>,
              concerts de musique de chambre aux bougies, promenades dans un
              jardin secret au pied du Palais des Papes. Chaque expérience est
              pensée pour que votre séjour devienne un souvenir inoubliable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Each experience */}
      {experiences.map((exp, i) => (
        <section
          key={exp.slug}
          className={`section-padding ${
            i % 2 === 0 ? "bg-blanc-lin" : "bg-ivoire-chaud"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden lg:[direction:ltr]">
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover img-warm"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="lg:[direction:ltr]">
                  <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-4">
                    {exp.name}
                  </h2>
                  <p className="font-body text-anthracite leading-relaxed mb-8">
                    {exp.longDescription}
                  </p>
                  <Link
                    href="/contact"
                    className="btn-outline inline-flex items-center gap-2"
                  >
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-bleu-papes text-center">
        <ScrollReveal>
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-or-ancien/70 mb-4">
            Sur mesure
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-blanc-lin mb-6">
            Une expérience sur mesure
          </h2>
          <p className="font-accent italic text-lg text-creme/70 mb-10 max-w-xl mx-auto">
            Privatisation, événement, demande particulière — notre conciergerie
            est à votre écoute
          </p>
          <Link href="/contact" className="btn-gold">
            Nous contacter
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
