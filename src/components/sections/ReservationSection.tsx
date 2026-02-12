"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { chambres } from "@/data/mirande";
import {
  Clock,
  ArrowUpCircle,
  Coffee,
  ShieldCheck,
  Check,
  X,
} from "lucide-react";

const avantages = [
  { icon: Clock, label: "Late check-out offert" },
  { icon: ArrowUpCircle, label: "Surclassement sous réserve" },
  { icon: Coffee, label: "Petit-déjeuner inclus" },
  { icon: ShieldCheck, label: "Annulation flexible" },
];

export default function ReservationSection() {
  const [arrivee, setArrivee] = useState("");
  const [depart, setDepart] = useState("");
  const [personnes, setPersonnes] = useState("2 adultes");
  const [chambre, setChambre] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const selectedRoom = chambres.find((r) => r.slug === chambre);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <section
        id="reserver"
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      >
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
              Réservation directe
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-blanc-lin mb-5">
              Votre séjour à La Mirande
            </h2>
            <p className="font-accent italic text-lg md:text-xl text-creme/80 mb-14">
              Sept siècles d&apos;histoire vous attendent — meilleur tarif
              garanti en réservation directe
            </p>
          </ScrollReveal>

          {/* Interactive booking form */}
          <ScrollReveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="bg-ivoire-chaud/8 backdrop-blur-xl border border-blanc-lin/10 p-6 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {/* Arrivée */}
                <div className="text-left">
                  <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-creme/70 mb-2.5">
                    Arrivée
                  </label>
                  <input
                    type="date"
                    value={arrivee}
                    onChange={(e) => setArrivee(e.target.value)}
                    className="w-full min-h-[48px] bg-ivoire-chaud/10 border border-blanc-lin/12 text-blanc-lin font-body text-sm px-4 py-3.5 outline-none focus:border-or-ancien/40 transition-colors duration-300 accent-or-ancien [color-scheme:dark]"
                  />
                </div>

                {/* Départ */}
                <div className="text-left">
                  <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-creme/70 mb-2.5">
                    Départ
                  </label>
                  <input
                    type="date"
                    value={depart}
                    onChange={(e) => setDepart(e.target.value)}
                    className="w-full min-h-[48px] bg-ivoire-chaud/10 border border-blanc-lin/12 text-blanc-lin font-body text-sm px-4 py-3.5 outline-none focus:border-or-ancien/40 transition-colors duration-300 accent-or-ancien [color-scheme:dark]"
                  />
                </div>

                {/* Personnes */}
                <div className="text-left">
                  <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-creme/70 mb-2.5">
                    Personnes
                  </label>
                  <select
                    value={personnes}
                    onChange={(e) => setPersonnes(e.target.value)}
                    className="w-full min-h-[48px] bg-ivoire-chaud/10 border border-blanc-lin/12 text-blanc-lin font-body text-sm px-4 py-3.5 outline-none focus:border-or-ancien/40 transition-colors duration-300 accent-or-ancien appearance-none [&>option]:bg-noir-encre [&>option]:text-blanc-lin"
                  >
                    <option>1 adulte</option>
                    <option>2 adultes</option>
                    <option>2 adultes, 1 enfant</option>
                    <option>2 adultes, 2 enfants</option>
                  </select>
                </div>

                {/* Chambre */}
                <div className="text-left">
                  <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-creme/70 mb-2.5">
                    Chambre
                  </label>
                  <select
                    value={chambre}
                    onChange={(e) => setChambre(e.target.value)}
                    className="w-full min-h-[48px] bg-ivoire-chaud/10 border border-blanc-lin/12 text-blanc-lin font-body text-sm px-4 py-3.5 outline-none focus:border-or-ancien/40 transition-colors duration-300 accent-or-ancien appearance-none [&>option]:bg-noir-encre [&>option]:text-blanc-lin"
                  >
                    <option value="all">Toutes les chambres</option>
                    {chambres.map((r) => (
                      <option key={r.slug} value={r.slug}>
                        {r.name} — {r.category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-gold-hero w-full md:w-auto"
              >
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
                  <a.icon
                    size={15}
                    strokeWidth={1.2}
                    className="text-or-ancien/60"
                  />
                  <span className="font-sans text-[11px] tracking-[0.05em]">
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Confirmation modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-noir-encre/60 backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[70] flex items-end md:items-center justify-center px-0 md:px-6"
            >
              <div className="bg-ivoire border border-or-ancien/15 p-6 md:p-12 max-w-lg w-full relative shadow-2xl rounded-t-2xl md:rounded-t-none max-h-[85vh] overflow-y-auto">
                {/* Close */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-5 right-5 text-terre/40 hover:text-noir-encre transition-colors"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>

                {/* Check icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-16 h-16 rounded-full bg-or-ancien/10 border border-or-ancien/20 flex items-center justify-center mx-auto mb-6"
                >
                  <Check size={28} className="text-or-ancien" strokeWidth={1.5} />
                </motion.div>

                <h3 className="font-display text-2xl md:text-3xl text-noir-encre text-center mb-3">
                  Demande enregistrée
                </h3>

                <p className="font-accent italic text-terre text-center mb-8">
                  Merci pour votre intérêt pour La Mirande
                </p>

                {/* Recap */}
                <div className="bg-blanc-lin border border-or-ancien/10 p-6 space-y-3 mb-8">
                  {arrivee && (
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-terre/60">Arrivée</span>
                      <span className="text-noir-encre">
                        {new Date(arrivee).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  )}
                  {depart && (
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-terre/60">Départ</span>
                      <span className="text-noir-encre">
                        {new Date(depart).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-terre/60">Personnes</span>
                    <span className="text-noir-encre">{personnes}</span>
                  </div>
                  <div className="flex justify-between font-sans text-sm">
                    <span className="text-terre/60">Chambre</span>
                    <span className="text-noir-encre">
                      {selectedRoom ? selectedRoom.name : "Toutes"}
                    </span>
                  </div>
                  {selectedRoom && (
                    <div className="flex justify-between font-sans text-sm pt-2 border-t border-or-ancien/10">
                      <span className="text-terre/60">À partir de</span>
                      <span className="font-display text-lg text-or-ancien">
                        {selectedRoom.price}&nbsp;€
                        <span className="font-body text-xs text-terre/50 ml-1">
                          / nuit
                        </span>
                      </span>
                    </div>
                  )}
                </div>

                <p className="font-body text-sm text-anthracite text-center leading-relaxed mb-6">
                  Notre équipe vous recontactera sous 24h pour confirmer votre
                  réservation et vous proposer les meilleures options.
                </p>

                <button
                  onClick={() => setShowModal(false)}
                  className="btn-gold w-full text-center"
                >
                  Parfait, merci
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
