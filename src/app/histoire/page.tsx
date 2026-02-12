import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Notre Histoire — La Mirande",
  description:
    "Des Romains à la papauté, de la France pré-révolutionnaire à aujourd'hui — sept siècles d'histoire au pied du Palais des Papes.",
};

const periodes = [
  {
    date: "1309",
    titre: "Origines papales",
    texte:
      "L'histoire documentée commence avec l'installation des papes à Avignon. Le cardinal de Pellegrue, neveu du pape Clément V, fait construire une « livrée » — une demeure cardinale — à l'ombre du Palais des Papes. Elle restera aux mains de cardinaux jusqu'au siège du Palais en 1410.",
    images: [
      "https://www.la-mirande.fr/_novaimg/4656197-1432446_0_0_1200_677_1200_675.webp",
      "https://www.la-mirande.fr/_novaimg/4656200-1432445_34_363_1202_675_1200_675.webp",
    ],
  },
  {
    date: "1653",
    titre: "La façade classique",
    texte:
      "Vendue à Claude de Vervins, avocat, la demeure est transformée par son fils Pierre, marquis de Bédouin. Il fait édifier la façade que l'on connaît aujourd'hui — une création classique de l'architecte Pierre Mignard. La famille de Vervins occupe les lieux pendant près d'un siècle et demi, jusqu'en 1796.",
    images: [
      "https://www.la-mirande.fr/_novaimg/4660152-1432402_0_0_4800_3200_2000_1333.webp",
    ],
  },
  {
    date: "1796",
    titre: "L'époque bourgeoise",
    texte:
      "Vendue à Jean-Baptiste Bénézet-Pamard, la maison devient l'Hôtel Pamard. Une grande famille avignonnaise la possède pendant deux siècles. Au XIXe siècle, elle subit des modifications néogothiques selon les principes de Viollet-le-Duc. En 1966, le cinéaste Jacques Rivette y tourne La Religieuse avec Anna Karina — un film controversé jusqu'aux plus hauts niveaux de l'État.",
    images: [
      "https://www.la-mirande.fr/_novaimg/4656194-1432448_58_0_2132_1199_1200_675.webp",
    ],
  },
  {
    date: "1987",
    titre: "La renaissance",
    texte:
      "La famille Stein acquiert le bâtiment. En trois ans, avec le décorateur François-Joseph Graf et l'architecte Gilles Grégoire, ils transforment La Mirande en créant une harmonieuse fusion des styles XVIIIe et XIXe siècles. Chaque chambre est habillée de toiles imprimées d'époque — une collection unique au monde.",
    images: [
      "https://www.la-mirande.fr/_novaimg/4661485-1432531_0_0_4800_3200_2000_1333.webp",
    ],
  },
] as const;

export default function HistoirePage() {
  return (
    <>
      <PageHero
        image="https://www.la-mirande.fr/_novaimg/4659652-1432429_0_0_2009_1422_2000_1415.webp"
        title="Notre Histoire"
        subtitle="Sept siècles au pied du Palais des Papes"
        breadcrumb={[{ label: "Histoire", href: "/histoire" }]}
      />

      {/* Introduction */}
      <section className="section-padding bg-ivoire-chaud">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-6">
              Patrimoine vivant, à l&apos;ombre du Palais des Papes
            </h2>
            <p className="font-accent italic text-lg md:text-xl text-terre leading-relaxed">
              Des Romains à la papauté « babylonienne », de la France
              pré-révolutionnaire à aujourd&apos;hui, La Mirande est
              étroitement liée à l&apos;histoire d&apos;Avignon et de son
              Palais des Papes. En devenant un hôtel, elle a protégé son
              histoire mieux que bien des palais conservés uniquement pour les
              visites.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      {periodes.map((p, i) => (
        <section
          key={p.date}
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
                {/* Image(s) */}
                <div className="lg:[direction:ltr]">
                  {p.images.length === 1 ? (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={p.images[0]}
                        alt={p.titre}
                        fill
                        className="object-cover img-warm"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {p.images.map((img, j) => (
                        <div key={j} className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={img}
                            alt={`${p.titre} — ${j + 1}`}
                            fill
                            className="object-cover img-warm"
                            sizes="(max-width: 1024px) 50vw, 25vw"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="lg:[direction:ltr]">
                  <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-or-ancien mb-3">
                    {p.date}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-5">
                    {p.titre}
                  </h2>
                  <p className="font-body text-anthracite leading-relaxed text-lg">
                    {p.texte}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Le nom La Mirande */}
      <section className="section-padding bg-noir-encre text-center">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-or-ancien/70 mb-4">
              Le saviez-vous ?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-blanc-lin mb-6">
              Pourquoi « La Mirande » ?
            </h2>
            <p className="font-accent italic text-lg text-creme/80 leading-relaxed mb-10">
              L&apos;hôtel porte le nom de la célèbre salle du Palais des Papes
              — une pièce rectangulaire de 18 mètres sur 8,50 mètres qui
              accueillait banquets, bals et réceptions de dignitaires. Le nom
              dérive de « salle admirable » — étymologiquement,
              « l&apos;Amirande ».
            </p>
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              Réserver votre séjour <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
