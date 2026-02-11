"use client";

import Image from "next/image";
import { experiences } from "@/data/mirande";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function ExperiencesSection() {
  return (
    <section id="experiences" className="section-padding bg-blanc-lin">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          surtitre="Expériences"
          title="Bien plus qu'un hôtel"
          subtitle="Un lieu de vie où se croisent gastronomie, musique, art et nature depuis trente ans."
        />

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, i) => (
            <ScrollReveal
              key={exp.name}
              delay={i * 0.1}
              className={exp.size === "large" ? "md:row-span-2" : ""}
            >
              <article className="group relative h-full overflow-hidden cursor-pointer">
                <div
                  className={`relative overflow-hidden ${
                    exp.size === "large" ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={exp.image}
                    alt={exp.name}
                    fill
                    className="object-cover img-warm transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay — deepens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-encre/70 via-noir-encre/10 to-transparent transition-opacity duration-500 group-hover:from-noir-encre/80" />

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-display text-xl md:text-2xl text-blanc-lin mb-2">
                      {exp.name}
                    </h3>
                    <p className="font-body text-sm text-creme/80 leading-relaxed line-clamp-2 transition-opacity duration-300 group-hover:text-blanc-lin/90">
                      {exp.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 font-sans text-[11px] tracking-[0.1em] uppercase text-or-ancien group-hover:gap-3 transition-all duration-400">
                      En savoir plus
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
