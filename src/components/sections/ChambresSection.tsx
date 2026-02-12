"use client";

import Link from "next/link";
import { chambres } from "@/data/mirande";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RoomCard from "@/components/ui/RoomCard";

export default function ChambresSection() {
  return (
    <section id="chambres" className="section-padding bg-blanc-lin">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        <SectionTitle
          surtitre="Chambres & Suites"
          title="Chaque chambre, une histoire"
          subtitle="Vingt-six chambres, vingt-six toiles imprimées d'époque — une collection unique au monde qui habille les murs depuis le XVIIIe siècle."
        />

        {/* Room grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
          {chambres.map((room, i) => (
            <ScrollReveal key={room.name} delay={i * 0.1}>
              <RoomCard room={room} />
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
