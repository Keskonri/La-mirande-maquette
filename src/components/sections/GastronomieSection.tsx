"use client";

import { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { gastronomie } from "@/data/mirande";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

export default function GastronomieSection() {
  const [activeTab, setActiveTab] = useState(0);
  const active = gastronomie[activeTab];

  return (
    <section id="tables" className="section-padding bg-ivoire-chaud">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionTitle
          surtitre="Gastronomie"
          title="Quatre tables, une philosophie"
          subtitle="Le terroir provençal sublimé par la créativité du Chef Florent Pietravalle et de son équipe."
        />

        {/* Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-14">
            {gastronomie.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(i)}
                className={`tab-underline font-sans text-[13px] tracking-[0.06em] px-3 py-2 transition-colors duration-400 ${
                  i === activeTab
                    ? "text-or-ancien active"
                    : "text-bleu-gris hover:text-terre"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active tab content */}
        <AnimatePresence mode="wait">
          <m.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={active.image}
                alt={active.name}
                fill
                quality={75}
                className="object-cover img-warm"
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
              />
              <div className="absolute inset-0 shadow-[inset_0_-60px_40px_-30px_rgba(26,26,26,0.1)] pointer-events-none" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                {active.badge.includes("Michelin") && (
                  <Star
                    size={14}
                    className="text-or-ancien fill-or-ancien"
                  />
                )}
                <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien">
                  {active.badge}
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-noir-encre">
                {active.name}
              </h3>

              {active.chef && (
                <p className="font-accent italic text-lg text-terre">
                  {active.chef}
                </p>
              )}

              <p className="font-body text-anthracite leading-relaxed">
                {active.shortDescription}
              </p>

              <a
                href="#"
                className="btn-gold self-start mt-2"
              >
                {active.cta}
              </a>
            </div>
          </m.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
