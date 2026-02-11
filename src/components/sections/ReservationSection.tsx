"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Clock, ArrowUpCircle, Coffee, ShieldCheck } from "lucide-react";

const avantages = [
  { icon: Clock, label: "Late check-out offert" },
  { icon: ArrowUpCircle, label: "Surclassement sous réserve" },
  { icon: Coffee, label: "Petit-déjeuner inclus" },
  { icon: ShieldCheck, label: "Annulation flexible" },
];

export default function ReservationSection() {
  return (
    <section id="reserver" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://www.la-mirande.fr/_novaimg/4661032-1432405_0_0_4800_3200_2000_1333.webp"
          alt="Jardin de La Mirande au crépuscule"
          fill
          className="object-cover img-warm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-noir-encre/65" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <ScrollReveal>
          <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-or-ancien/80 mb-4">
            Réservation
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-blanc-lin mb-5">
            Votre séjour à La Mirande
          </h2>
          <p className="font-accent italic text-lg md:text-xl text-creme/80 mb-14">
            Sept siècles d&apos;histoire vous attendent — meilleur tarif garanti en réservation directe
          </p>
        </ScrollReveal>

        {/* Booking widget mock */}
        <ScrollReveal delay={0.2}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-blanc-lin/8 backdrop-blur-xl border border-blanc-lin/10 p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {/* Dates */}
              <div className="text-left">
                <label className="block font-sans text-[11px] tracking-[0.1em] text-creme/70 mb-2.5">
                  Arrivée
                </label>
                <input
                  type="date"
                  className="w-full bg-blanc-lin/8 border border-blanc-lin/12 text-blanc-lin font-sans text-sm px-4 py-3.5 outline-none focus:border-or-ancien/40 transition-colors [color-scheme:dark]"
                />
              </div>
              <div className="text-left">
                <label className="block font-sans text-[11px] tracking-[0.1em] text-creme/70 mb-2.5">
                  Départ
                </label>
                <input
                  type="date"
                  className="w-full bg-blanc-lin/8 border border-blanc-lin/12 text-blanc-lin font-sans text-sm px-4 py-3.5 outline-none focus:border-or-ancien/40 transition-colors [color-scheme:dark]"
                />
              </div>

              {/* Guests */}
              <div className="text-left">
                <label className="block font-sans text-[11px] tracking-[0.1em] text-creme/70 mb-2.5">
                  Personnes
                </label>
                <select className="w-full bg-blanc-lin/8 border border-blanc-lin/12 text-blanc-lin font-sans text-sm px-4 py-3.5 outline-none focus:border-or-ancien/40 transition-colors appearance-none">
                  <option>1 adulte</option>
                  <option>2 adultes</option>
                  <option>2 adultes, 1 enfant</option>
                  <option>2 adultes, 2 enfants</option>
                </select>
              </div>

              {/* Room type */}
              <div className="text-left">
                <label className="block font-sans text-[11px] tracking-[0.1em] text-creme/70 mb-2.5">
                  Chambre
                </label>
                <select className="w-full bg-blanc-lin/8 border border-blanc-lin/12 text-blanc-lin font-sans text-sm px-4 py-3.5 outline-none focus:border-or-ancien/40 transition-colors appearance-none">
                  <option>Toutes les chambres</option>
                  <option>Chambre Classique</option>
                  <option>Chambre Supérieure</option>
                  <option>Suite</option>
                  <option>Suite Prestige</option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn-gold w-full md:w-auto">
              Vérifier les disponibilités
            </button>
          </form>
        </ScrollReveal>

        {/* Avantages */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
            {avantages.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2.5 text-creme/70"
              >
                <a.icon size={15} strokeWidth={1.2} className="text-or-ancien/60" />
                <span className="font-sans text-[11px] tracking-[0.05em]">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
