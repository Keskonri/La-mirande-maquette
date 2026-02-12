import Image from "next/image";
import Link from "next/link";
import { Maximize2, Eye, ArrowRight } from "lucide-react";
import type { Room } from "@/data/mirande";

interface RoomCardProps {
  room: Room;
  index?: number;
  /** "compact" = homepage preview (3-col), "full" = ChambresSection (2-col) */
  variant?: "compact" | "full";
}

export default function RoomCard({
  room,
  variant = "full",
}: RoomCardProps) {
  const isCompact = variant === "compact";

  return (
    <Link href={`/chambres/${room.slug}`} className="group block">
      {isCompact ? (
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={room.image}
            alt={`Chambre ${room.name}`}
            fill
            quality={75}
            className="object-cover img-warm transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-noir-encre/70 via-noir-encre/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block font-sans text-[9px] tracking-[0.2em] uppercase text-blanc-lin/90 border border-blanc-lin/25 backdrop-blur-sm px-2.5 py-1 bg-noir-encre/20">
              {room.category}
            </span>
          </div>
          {/* Bottom content */}
          <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
            <h3 className="font-display text-xl md:text-[22px] text-blanc-lin mb-1.5">
              {room.name}
            </h3>
            <div className="flex items-center gap-3 font-sans text-[10px] tracking-wide text-creme/70">
              <span className="flex items-center gap-1">
                <Maximize2 size={10} strokeWidth={1.5} /> {room.surface}
              </span>
              <span className="w-px h-2.5 bg-blanc-lin/20" />
              <span className="flex items-center gap-1">
                <Eye size={10} strokeWidth={1.5} /> {room.vue}
              </span>
            </div>
            {/* Price + CTA */}
            <div className="mt-3 pt-3 border-t border-or-ancien/25 flex items-center justify-between">
              <span className="font-display text-lg text-or-ancien">
                {room.price}&nbsp;€
                <span className="font-body text-[11px] text-blanc-lin/35 ml-0.5">/ nuit</span>
              </span>
              <span className="inline-flex items-center gap-1 font-sans text-[11px] text-or-ancien/80 translate-x-0 group-hover:translate-x-1 transition-transform duration-500">
                Voir <ArrowRight size={12} />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <article>
          {/* Image with overlay content */}
          <div className="relative aspect-[3/4] overflow-hidden card-hover">
            <Image
              src={room.image}
              alt={`Chambre ${room.name} — ${room.vue}`}
              fill
              quality={75}
              className="object-cover img-warm transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-noir-encre/60 via-noir-encre/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            {/* Category badge */}
            <span className="absolute top-5 left-5 inline-block font-sans text-[10px] tracking-[0.2em] uppercase text-blanc-lin/90 border border-blanc-lin/25 backdrop-blur-sm px-3 py-1.5 bg-noir-encre/20">
              {room.category}
            </span>
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
      )}
    </Link>
  );
}
