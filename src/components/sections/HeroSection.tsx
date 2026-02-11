"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  // Ken Burns — slow zoom from 1.05 to 1.15 over scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden"
      aria-label="Accueil"
    >
      {/* Background with parallax + Ken Burns zoom */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y, scale }}
      >
        <Image
          src="https://www.la-mirande.fr/_novaimg/4661000-1432381_0_0_3712_2474_2000_1333.webp"
          alt="Vue du Palais des Papes depuis La Mirande"
          fill
          priority
          className="object-cover img-warm"
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient overlay — stronger at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-noir-encre/40 via-noir-encre/15 to-noir-encre/70" />

      {/* Bottom shelf gradient — anchors social icons & language switcher */}
      <div className="absolute bottom-0 left-0 right-0 h-[14%] bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-[5]" />

      {/* Content — nudged slightly above center */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 -mt-8 md:-mt-12"
        style={{ opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-sans text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#FFFDF0]/85 mb-6"
          style={{ textShadow: "0 1px 12px rgba(43, 30, 22, 0.7), 0 0 40px rgba(0, 0, 0, 0.3)" }}
        >
          Avignon&ensp;·&ensp;Depuis le XIV<sup>e</sup> siècle
        </motion.p>

        {/* Logo — white with soft glow shadow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="drop-shadow-[0_4px_30px_rgba(255,255,255,0.12)]"
        >
          <Image
            src="/logo.webp"
            alt="La Mirande"
            width={400}
            height={460}
            priority
            className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto brightness-0 invert sepia-[0.08] saturate-[2]"
          />
        </motion.div>
        <h1 className="sr-only">La Mirande</h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-16 h-px bg-or-ancien/60 mt-6 mb-6"
        />

        {/* Subtitle — slightly bolder with text shadow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="font-accent italic text-xl md:text-2xl lg:text-[1.7rem] text-[#FFFDF0]/90 font-medium tracking-[0.02em]"
          style={{ textShadow: "0 2px 24px rgba(43, 30, 22, 0.6)" }}
        >
          Hôtel particulier au pied du Palais des Papes
        </motion.p>

        {/* Scroll indicator */}
        <motion.a
          href="#maison"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ opacity: arrowOpacity }}
          className="absolute bottom-10 md:bottom-14 animate-float text-blanc-lin/40 hover:text-blanc-lin/70 transition-colors"
          aria-label="Découvrir"
        >
          <ChevronDown size={28} strokeWidth={1} />
        </motion.a>
      </motion.div>
    </section>
  );
}
