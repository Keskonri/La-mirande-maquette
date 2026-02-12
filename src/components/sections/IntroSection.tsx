"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function IntroSection() {
  return (
    <section id="maison" className="section-padding bg-ivoire">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main content: image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Image — 60% */}
          <ScrollReveal
            className="lg:col-span-3 relative aspect-[4/3] overflow-hidden"
            direction="left"
          >
            <Image
              src="https://www.la-mirande.fr/_novaimg/4661034-1432407_0_0_3072_2048_2000_1333.webp"
              alt="Façade en pierre dorée de La Mirande"
              fill
              quality={75}
              className="object-cover img-warm"
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 60vw, 768px"
            />
          </ScrollReveal>

          {/* Text — 40% */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <ScrollReveal delay={0.1}>
              <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-terre">
                L&apos;âme de la maison
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <blockquote className="font-accent italic text-2xl md:text-3xl text-or-ancien leading-relaxed font-light">
                &laquo;&nbsp;Il y a des lieux où le temps ne passe pas.
                Il se pose.&nbsp;&raquo;
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-body text-anthracite leading-relaxed">
                Ancien palais de cardinal bâti au XIV<sup>e</sup> siècle, La
                Mirande est devenue l&apos;un des plus beaux hôtels
                particuliers d&apos;Avignon. Propriété de la famille Stein
                depuis 1987, la maison conjugue sept siècles d&apos;histoire
                avec un art de vivre où l&apos;élégance XVIII<sup>e</sup>{" "}
                rencontre l&apos;intimité d&apos;un foyer.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="font-body text-anthracite leading-relaxed">
                Chaque pièce, chaque détail — des toiles imprimées
                d&apos;époque aux tomettes patinées par les siècles — raconte
                une histoire d&apos;exigence et de passion. Ici, le luxe
                n&apos;est pas un artifice. C&apos;est une manière de vivre.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Link
                href="/histoire"
                className="btn-outline inline-flex items-center gap-2"
              >
                Découvrir notre histoire <ArrowRight size={14} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
