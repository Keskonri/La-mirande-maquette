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
      <section className="section-padding bg-ivoire-chaud">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Description */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-6">
                  {room.name}
                </h2>
                <p className="font-body text-anthracite leading-relaxed text-lg">
                  {room.longDescription}
                </p>
              </ScrollReveal>
            </div>

            {/* Info card */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.15}>
                <div className="bg-blanc-lin p-8 border border-or-ancien/15">
                  <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien mb-6">
                    Informations
                  </p>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <Maximize2 size={16} className="text-bleu-gris" />
                      <div>
                        <p className="font-sans text-[11px] text-bleu-gris uppercase tracking-wider">
                          Surface
                        </p>
                        <p className="font-body text-noir-encre">
                          {room.surface}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Eye size={16} className="text-bleu-gris" />
                      <div>
                        <p className="font-sans text-[11px] text-bleu-gris uppercase tracking-wider">
                          Vue
                        </p>
                        <p className="font-body text-noir-encre">{room.vue}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <BedDouble size={16} className="text-bleu-gris" />
                      <div>
                        <p className="font-sans text-[11px] text-bleu-gris uppercase tracking-wider">
                          Literie
                        </p>
                        <p className="font-body text-noir-encre">
                          {room.bedType}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-or-ancien/10 mt-6 pt-6">
                    <p className="font-sans text-[11px] text-bleu-gris uppercase tracking-wider mb-1">
                      À partir de
                    </p>
                    <p className="font-display text-3xl text-noir-encre">
                      {room.price}{" "}
                      <span className="font-body text-base text-bleu-gris/70">
                        € / nuit
                      </span>
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-gold w-full mt-6 text-center"
                  >
                    Réserver cette chambre
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-blanc-lin">
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
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-ivoire-chaud">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien mb-3 text-center">
              Équipements
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-noir-encre mb-10 text-center">
              Tout pour votre confort
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
              {room.amenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3">
                  <Check
                    size={14}
                    className="text-or-ancien shrink-0"
                    strokeWidth={2}
                  />
                  <span className="font-body text-anthracite">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
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
                  className="text-terre/40 group-hover:text-bleu-papes transition-colors"
                />
                <div>
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-terre/40 mb-1">
                    Précédente
                  </p>
                  <p className="font-display text-lg text-noir-encre group-hover:text-bleu-papes transition-colors">
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
                  <p className="font-display text-lg text-noir-encre group-hover:text-bleu-papes transition-colors">
                    {nextRoom.name}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-terre/40 group-hover:text-bleu-papes transition-colors"
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
