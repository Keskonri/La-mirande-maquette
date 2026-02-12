"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { hotel } from "@/data/mirande";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpCircle,
  Coffee,
  ShieldCheck,
} from "lucide-react";

const avantages = [
  { icon: Clock, label: "Late check-out offert" },
  { icon: ArrowUpCircle, label: "Surclassement sous réserve" },
  { icon: Coffee, label: "Petit-déjeuner inclus" },
  { icon: ShieldCheck, label: "Annulation flexible" },
];

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <>
      {/* Booking hero with parallax */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col overflow-hidden">
        <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
          <Image
            src="https://www.la-mirande.fr/_novaimg/4661031-1432404_0_0_4800_3200_2000_1333.webp"
            alt="Terrasse de La Mirande"
            fill
            priority
            className="object-cover img-warm scale-110"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-noir-encre/55 via-noir-encre/45 to-noir-encre/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center flex-1 flex flex-col justify-center pt-32 pb-12">
          <ScrollReveal>
            <p className="font-sans text-[12px] tracking-[0.45em] uppercase text-or-ancien/90 mb-5">
              Réservation directe
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-blanc-lin mb-5">
              Votre séjour à La Mirande
            </h2>
            <p className="font-accent italic text-xl md:text-2xl text-creme/80 font-light">
              Sept siècles d&apos;histoire vous attendent
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-14 bg-noir-encre/40 backdrop-blur-xl border border-blanc-lin/10 p-6 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                <div className="text-left">
                  <label className="block font-sans text-[12px] tracking-[0.1em] text-blanc-lin/70 mb-2.5 font-medium">
                    Arrivée
                  </label>
                  <input
                    type="date"
                    className="w-full bg-creme/10 border border-creme/15 text-creme font-sans text-sm px-4 py-3.5 outline-none focus:border-or-ancien/50 transition-colors [color-scheme:dark]"
                  />
                </div>
                <div className="text-left">
                  <label className="block font-sans text-[12px] tracking-[0.1em] text-blanc-lin/70 mb-2.5 font-medium">
                    Départ
                  </label>
                  <input
                    type="date"
                    className="w-full bg-creme/10 border border-creme/15 text-creme font-sans text-sm px-4 py-3.5 outline-none focus:border-or-ancien/50 transition-colors [color-scheme:dark]"
                  />
                </div>
                <div className="text-left">
                  <label className="block font-sans text-[12px] tracking-[0.1em] text-blanc-lin/70 mb-2.5 font-medium">
                    Personnes
                  </label>
                  <select className="w-full bg-noir-encre/70 border border-creme/15 text-creme font-sans text-sm px-4 py-3.5 outline-none focus:border-or-ancien/50 transition-colors appearance-none [&>option]:bg-noir-encre [&>option]:text-blanc-lin">
                    <option>1 adulte</option>
                    <option>2 adultes</option>
                    <option>2 adultes, 1 enfant</option>
                    <option>2 adultes, 2 enfants</option>
                  </select>
                </div>
                <div className="text-left">
                  <label className="block font-sans text-[12px] tracking-[0.1em] text-blanc-lin/70 mb-2.5 font-medium">
                    Chambre
                  </label>
                  <select className="w-full bg-noir-encre/70 border border-creme/15 text-creme font-sans text-sm px-4 py-3.5 outline-none focus:border-or-ancien/50 transition-colors appearance-none [&>option]:bg-noir-encre [&>option]:text-blanc-lin">
                    <option>Toutes les chambres</option>
                    <option>Chambre Supérieure</option>
                    <option>Chambre Prestige</option>
                    <option>Suite Prestige</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-gold-hero w-full md:w-auto">
                Vérifier les disponibilités
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* Reassurance bar — full width */}
        <div className="relative z-10 bg-noir-encre/50 backdrop-blur-md border-t border-blanc-lin/8">
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-5">
            <div className="flex flex-wrap justify-center gap-8 md:gap-14">
              {avantages.map((a) => (
                <div
                  key={a.label}
                  className="flex items-center gap-3 text-blanc-lin/70"
                >
                  <a.icon
                    size={18}
                    strokeWidth={1.3}
                    className="text-or-ancien/80"
                  />
                  <span className="font-sans text-[12px] tracking-[0.04em]">
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-padding bg-blanc-lin">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <ScrollReveal>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien mb-3">
                  Nous trouver
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-8">
                  Informations pratiques
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin
                      size={18}
                      className="text-or-ancien mt-1 shrink-0"
                    />
                    <div>
                      <p className="font-body text-noir-encre">
                        {hotel.address.street}
                      </p>
                      <p className="font-body text-noir-encre">
                        {hotel.address.zip} {hotel.address.city},{" "}
                        {hotel.address.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone
                      size={18}
                      className="text-or-ancien shrink-0"
                    />
                    <p className="font-body text-noir-encre">{hotel.phone}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail
                      size={18}
                      className="text-or-ancien shrink-0"
                    />
                    <p className="font-body text-noir-encre">{hotel.email}</p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-10 relative aspect-[16/9] bg-ivoire-chaud overflow-hidden">
                  <Image
                    src="https://www.la-mirande.fr/_novaimg/4661033-1432406_0_0_4800_3200_2000_1333.webp"
                    alt="Extérieurs de La Mirande — Avignon"
                    fill
                    quality={75}
                    className="object-cover img-warm opacity-70"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blanc-lin/90 backdrop-blur-sm px-6 py-4 text-center">
                      <p className="font-display text-lg text-noir-encre">
                        La Mirande
                      </p>
                      <p className="font-sans text-[11px] text-terre/60 mt-1">
                        Au pied du Palais des Papes
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact form */}
            <div>
              <ScrollReveal delay={0.15}>
                <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien mb-3">
                  Message
                </p>
                <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-8">
                  Nous écrire
                </h2>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-sans text-[11px] tracking-[0.1em] text-terre/60 mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        className="w-full bg-ivoire-chaud border border-terre/15 text-noir-encre font-body px-4 py-3 outline-none focus:border-or-ancien/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-[11px] tracking-[0.1em] text-terre/60 mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        className="w-full bg-ivoire-chaud border border-terre/15 text-noir-encre font-body px-4 py-3 outline-none focus:border-or-ancien/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[11px] tracking-[0.1em] text-terre/60 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-ivoire-chaud border border-terre/15 text-noir-encre font-body px-4 py-3 outline-none focus:border-or-ancien/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-sans text-[11px] tracking-[0.1em] text-terre/60 mb-2">
                      Objet
                    </label>
                    <select className="w-full bg-ivoire-chaud border border-terre/15 text-noir-encre font-body px-4 py-3 outline-none focus:border-or-ancien/40 transition-colors appearance-none">
                      <option>Réservation chambre</option>
                      <option>Réservation restaurant</option>
                      <option>École de cuisine</option>
                      <option>Événement privé</option>
                      <option>Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-[11px] tracking-[0.1em] text-terre/60 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full bg-ivoire-chaud border border-terre/15 text-noir-encre font-body px-4 py-3 outline-none focus:border-or-ancien/40 transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold">
                    Envoyer votre message
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
