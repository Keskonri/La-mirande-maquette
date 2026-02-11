"use client";

import Image from "next/image";
import Link from "next/link";
import { chambres } from "@/data/mirande";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Maximize2, Eye, ArrowRight } from "lucide-react";

export default function ChambresSection() {
  return (
    <section id="chambres" className="section-padding bg-blanc-lin">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          surtitre="Chambres & Suites"
          title="Chaque chambre, une histoire"
          subtitle="Vingt-six chambres, vingt-six toiles imprimées d'époque — une collection unique au monde qui habille les murs depuis le XVIIIe siècle."
        />

        {/* Room grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {chambres.map((room, i) => (
            <ScrollReveal key={room.name} delay={i * 0.1}>
              <Link
                href={`/chambres/${room.slug}`}
                className="group block"
              >
                <article>
                  {/* Image with overlay content */}
                  <div className="relative aspect-[3/4] overflow-hidden card-hover">
                    <Image
                      src={room.image}
                      alt={`Chambre ${room.name} — ${room.vue}`}
                      fill
                      className="object-cover img-warm transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-encre/60 via-noir-encre/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    {/* Category badge */}
                    <div className="absolute top-5 left-5">
                      <span className="inline-block font-sans text-[10px] tracking-[0.2em] uppercase text-blanc-lin/90 border border-blanc-lin/25 backdrop-blur-sm px-3 py-1.5 bg-noir-encre/20">
                        {room.category}
                      </span>
                    </div>
                    {/* Bottom content */}
                    <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                      <h3 className="font-display text-2xl md:text-3xl text-blanc-lin mb-2">
                        {room.name}
                      </h3>
                      <p className="font-body text-sm text-creme/80 leading-relaxed line-clamp-2 mb-3 max-w-md">
                        {room.shortDescription}
                      </p>
                      <div className="flex items-center gap-4 font-sans text-[11px] tracking-wide text-creme/70">
                        <span className="flex items-center gap-1.5">
                          <Maximize2 size={12} strokeWidth={1.5} />
                          {room.surface}
                        </span>
                        <span className="w-px h-3 bg-blanc-lin/20" />
                        <span className="flex items-center gap-1.5">
                          <Eye size={12} strokeWidth={1.5} />
                          Vue {room.vue}
                        </span>
                      </div>
                      {/* Gold divider + price/CTA */}
                      <div className="mt-4 pt-4 border-t border-or-ancien/30 flex items-center justify-between">
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
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* CTAs */}
        <ScrollReveal className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
          <Link href="/chambres" className="btn-outline">
            Découvrir toutes nos chambres
          </Link>
          <Link href="/contact" className="btn-gold">
            Réserver
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
