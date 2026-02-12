"use client";

import Image from "next/image";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
}

export default function PageHero({
  image,
  title,
  subtitle,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover img-warm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir-encre/50 via-noir-encre/30 to-noir-encre/70" />
      </div>

      <LazyMotion features={domAnimation}>
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-16 md:pb-20 text-center px-6">
          {breadcrumb && (
            <m.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-2 mb-6 font-sans text-[11px] tracking-[0.1em] text-creme/70"
              aria-label="Fil d'Ariane"
            >
              <Link href="/" className="hover:text-blanc-lin/80 transition-colors">
                Accueil
              </Link>
              {breadcrumb.map((item) => (
                <span key={item.href} className="flex items-center gap-2">
                  <ChevronRight size={10} />
                  <Link
                    href={item.href}
                    className="hover:text-blanc-lin/80 transition-colors"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </m.nav>
          )}

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-blanc-lin"
          >
            {title}
          </m.h1>

          {subtitle && (
            <m.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-accent italic text-lg md:text-xl text-creme/80 mt-4 max-w-2xl"
            >
              {subtitle}
            </m.p>
          )}
        </div>
      </LazyMotion>
    </section>
  );
}
