import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { chambres } from "@/data/mirande";
import { Maximize2, Eye, BedDouble, ArrowRight, ArrowLeft, Check } from "lucide-react";

export function generateStaticParams() {
  return chambres.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = chambres.find((r) => r.slug === slug);
  if (!room) return {};
  return {
    title: `${room.name} — Chambres — La Mirande`,
    description: room.shortDescription,
  };
}

export default async function ChambreDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = chambres.find((r) => r.slug === slug);
  if (!room) notFound();

  const currentIndex = chambres.indexOf(room);
  const prevRoom = currentIndex > 0 ? chambres[currentIndex - 1] : null;
  const nextRoom =
    currentIndex < chambres.length - 1 ? chambres[currentIndex + 1] : null;

  return (
    <>
      <PageHero
        image={room.heroImage}
        title={room.name}
        subtitle={room.category}
        breadcrumb={[
          { label: "Chambres", href: "/chambres" },
          { label: room.name, href: `/chambres/${room.slug}` },
        ]}
      />

      {/* Room details */}
      <section className="py-16 md:py-24 bg-blanc-lin">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-noir-encre mb-6">
              {room.name}
            </h1>
            <p className="font-accent text-xl md:text-2xl text-or-ancien mb-10">
              {room.shortDescription}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="font-body text-lg leading-relaxed text-noir-encre/80 mb-14 space-y-5">
              <p>{room.longDescription}</p>
              <p>
                Chaque détail de cette chambre a été pensé pour vous offrir une
                expérience unique. Du mobilier d&apos;époque aux équipements
                modernes, tout se conjugue pour créer un havre de paix où le
                temps semble suspendu.
              </p>
            </div>
          </ScrollReveal>

          {/* Info card */}
          <ScrollReveal delay={0.15}>
            <div className="bg-ivoire-chaud p-8 md:p-10 border border-or-ancien/15 mb-14">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Maximize2 size={16} className="text-or-ancien" />
                  <div>
                    <p className="font-sans text-[10px] text-terre/50 uppercase tracking-wider">
                      Surface
                    </p>
                    <p className="font-body text-noir-encre">{room.surface}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Eye size={16} className="text-or-ancien" />
                  <div>
                    <p className="font-sans text-[10px] text-terre/50 uppercase tracking-wider">
                      Vue
                    </p>
                    <p className="font-body text-noir-encre">{room.vue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BedDouble size={16} className="text-or-ancien" />
                  <div>
                    <p className="font-sans text-[10px] text-terre/50 uppercase tracking-wider">
                      Literie
                    </p>
                    <p className="font-body text-noir-encre">{room.bedType}</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-or-ancien/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="font-display text-3xl text-noir-encre">
                  {room.price}{" "}
                  <span className="font-body text-base text-terre/50">
                    € / nuit
                  </span>
                </p>
                <Link href="/contact" className="btn-gold text-center">
                  Réserver cette chambre
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Tissu d'Époque */}
          <ScrollReveal delay={0.1}>
            <div className="bg-ivoire-chaud p-8 md:p-10 mb-14">
              <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-5">
                Histoire &amp; Tissu d&apos;Époque
              </h2>
              <p className="font-accent italic text-lg text-noir-encre/80 mb-4">
                {room.patternName}
              </p>
              <p className="font-body text-base text-noir-encre/65 leading-relaxed">
                Ces tissus rares ont été restaurés par des artisans experts en
                conservation textile, préservant ainsi l&apos;authenticité et le
                caractère unique de cette chambre historique.
              </p>
            </div>
          </ScrollReveal>

          {/* Équipements */}
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-8">
              Équipements &amp; Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {room.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-3 bg-ivoire-chaud p-4"
                >
                  <Check
                    size={18}
                    className="text-or-ancien shrink-0"
                    strokeWidth={2}
                  />
                  <span className="font-body text-lg text-noir-encre">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Services Inclus */}
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-8">
              Services Inclus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
              {[
                "Petit-déjeuner continental",
                "Wi-Fi haut débit",
                "Service en chambre 24h/24",
                "Accès au jardin privé",
                "Conciergerie dédiée",
                "Parking privé",
                "Presse quotidienne",
                "Produits de toilette L'Occitane",
              ].map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <Check
                    size={16}
                    className="text-or-ancien shrink-0"
                    strokeWidth={2}
                  />
                  <span className="font-body text-base text-noir-encre/75">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="text-center">
              <Link href="/contact" className="btn-gold-hero">
                Réserver cette chambre
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-ivoire-chaud">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien mb-3 text-center">
              Galerie
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-10 text-center">
              En images
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {room.gallery.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img}
                    alt={`${room.name} — vue ${i + 1}`}
                    fill
                    className="object-cover img-warm hover:scale-[1.03] transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation between rooms */}
      <section className="bg-blanc-lin border-t border-or-ancien/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 divide-x divide-or-ancien/10">
            {prevRoom ? (
              <Link
                href={`/chambres/${prevRoom.slug}`}
                className="group flex items-center gap-4 py-8 md:py-12 pr-6"
              >
                <ArrowLeft
                  size={20}
                  className="text-terre/40 group-hover:text-or-ancien transition-colors"
                />
                <div>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-terre/40 mb-1">
                    Précédente
                  </p>
                  <p className="font-display text-lg text-noir-encre group-hover:text-or-ancien transition-colors">
                    {prevRoom.name}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextRoom ? (
              <Link
                href={`/chambres/${nextRoom.slug}`}
                className="group flex items-center justify-end gap-4 py-8 md:py-12 pl-6 text-right"
              >
                <div>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-terre/40 mb-1">
                    Suivante
                  </p>
                  <p className="font-display text-lg text-noir-encre group-hover:text-or-ancien transition-colors">
                    {nextRoom.name}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-terre/40 group-hover:text-or-ancien transition-colors"
                />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
