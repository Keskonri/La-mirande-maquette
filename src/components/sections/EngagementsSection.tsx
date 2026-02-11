"use client";

import { engagements } from "@/data/mirande";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Leaf, Sprout, Warehouse, UtensilsCrossed } from "lucide-react";

const icons = [Leaf, Sprout, Warehouse, UtensilsCrossed];

export default function EngagementsSection() {
  return (
    <section className="section-padding bg-ivoire">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <SectionTitle
          surtitre="Engagements"
          title="L'art de vivre, responsable"
          subtitle="Ce n'est pas un engagement marketing, c'est notre façon de vivre depuis toujours."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14 mt-12">
          {engagements.map((item, i) => {
            const Icon = icons[i];
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-vert-jardin/20 rounded-full">
                    <Icon
                      size={20}
                      strokeWidth={1.2}
                      className="text-vert-jardin"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-noir-encre mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-anthracite leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
