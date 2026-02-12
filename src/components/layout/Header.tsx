"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { hotel } from "@/data/mirande";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const pathname = usePathname();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "bg-ivoire/95 backdrop-blur-lg shadow-[0_1px_0_rgba(196,162,101,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Burger menu — left, with circle backdrop on hero + MENU label */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <div
                className={`relative w-11 h-11 flex flex-col justify-center items-center gap-1.5 rounded-full transition-all duration-500 ${
                  scrolled ? "" : "bg-blanc-lin/10 backdrop-blur-sm"
                }`}
              >
                <span
                  className={`block w-7 h-[1.5px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen
                      ? "rotate-45 translate-y-[3.5px] bg-blanc-lin"
                      : scrolled
                      ? "bg-noir-encre"
                      : "bg-blanc-lin"
                  }`}
                />
                <span
                  className={`block w-7 h-[1.5px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen
                      ? "-rotate-45 -translate-y-[3.5px] bg-blanc-lin"
                      : scrolled
                      ? "bg-noir-encre"
                      : "bg-blanc-lin"
                  }`}
                />
              </div>
              <span
                className={`font-sans text-[10px] tracking-[0.2em] uppercase transition-all duration-500 ${
                  scrolled ? "text-noir-encre" : "text-blanc-lin/80"
                }`}
              >
                Menu
              </span>
            </button>

            {/* Logo — center (hidden on homepage hero, visible elsewhere or on scroll) */}
            <Link
              href="/"
              className={`absolute left-1/2 -translate-x-1/2 font-display text-2xl transition-all duration-500 ${
                scrolled ? "text-noir-encre opacity-100" : pathname === "/" ? "opacity-0 pointer-events-none" : "text-blanc-lin opacity-100"
              }`}
            >
              La Mirande
            </Link>

            {/* Right side — réserver */}
            <div className="flex items-center">
              <Link
                href="/contact"
                className={`hidden md:inline-block font-sans text-[12px] tracking-[0.08em] px-5 py-2.5 transition-all duration-500 ${
                  scrolled
                    ? pathname === "/contact"
                      ? "border border-or-ancien/40 text-or-ancien hover:bg-or-ancien/10"
                      : "bg-or-ancien text-blanc-lin hover:bg-[#b8953a]"
                    : "bg-or-ancien text-noir-encre border border-transparent hover:bg-transparent hover:border-or-ancien/60 hover:text-or-ancien backdrop-blur-sm"
                }`}
              >
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-noir-encre/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Slide-in panel — left */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 bottom-0 z-50 w-full md:w-[380px] md:max-w-[85vw] bg-noir-encre/95 backdrop-blur-md border-r border-blanc-lin/[0.06] flex flex-col"
          >
            {/* Top — close button + écusson */}
            <div className="flex items-center justify-between h-20 md:h-24 px-10">
              <button
                onClick={() => setMenuOpen(false)}
                className="relative w-11 h-11 flex flex-col justify-center items-center gap-1.5"
                aria-label="Fermer le menu"
              >
                <span className="block w-7 h-[1.5px] bg-blanc-lin/80 rotate-45 translate-y-[3.5px] transition-all duration-500" />
                <span className="block w-7 h-[1.5px] bg-blanc-lin/80 -rotate-45 -translate-y-[3.5px] transition-all duration-500" />
              </button>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <Image
                  src="/logo.webp"
                  alt="La Mirande"
                  width={200}
                  height={230}
                  className="h-16 w-auto brightness-0 invert opacity-30"
                />
              </motion.div>
            </div>

            {/* Navigation links */}
            <div className="flex-1 flex flex-col justify-center gap-10 px-12">
              {hotel.navigation.map((item, i) => {
                const isActive =
                  item.href === "/#maison"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{
                      delay: i * 0.07,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`group relative inline-block font-sans text-[13px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                        isActive
                          ? "text-or-ancien"
                          : "text-[#F5F5F0]/80 hover:text-or-ancien"
                      }`}
                    >
                      {item.label}
                      {/* Gold underline — expands from center on hover */}
                      <span
                        className={`absolute -bottom-1.5 left-0 h-px transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive
                            ? "w-full bg-or-ancien/50"
                            : "w-0 group-hover:w-full bg-or-ancien/40 left-1/2 group-hover:left-0"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom info */}
            <div className="px-12 pb-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="border-t border-or-ancien/15 pt-7 flex flex-col gap-4"
              >
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-or-ancien/40">
                  Hôtel 5 étoiles · Avignon, France
                </p>
                <p className="font-accent italic text-[15px] text-[#F5F5F0]/60">
                  4, Place de l&apos;Amirande
                </p>
                <a
                  href={`tel:${hotel.phone}`}
                  className="font-sans text-[13px] tracking-[0.03em] text-[#F5F5F0]/70 hover:text-or-ancien transition-colors duration-300"
                >
                  {hotel.phone}
                </a>
                <a
                  href={`mailto:${hotel.email}`}
                  className="font-sans text-[13px] tracking-[0.03em] text-[#F5F5F0]/70 hover:text-or-ancien transition-colors duration-300"
                >
                  {hotel.email}
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Social icons — fixed bottom left */}
      <div className="fixed bottom-2.5 left-8 md:bottom-3 md:left-10 z-30 hidden md:flex items-center gap-2.5">
        {[
          { label: "Facebook", icon: <Facebook size={16} strokeWidth={1.5} />, href: "#" },
          { label: "Instagram", icon: <Instagram size={16} strokeWidth={1.5} />, href: "#" },
          { label: "Pinterest", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20l4-9"/><path d="M10.7 14c-.4 1.5-1.4 2.7-2.7 3.3"/><circle cx="12" cy="12" r="10"/><path d="M9.3 6.6C10 5.6 11 5 12.2 5c2 0 3.5 1.5 3.5 3.5 0 2.6-1.6 5.5-4 5.5-1 0-1.7-.5-2-1.2"/></svg>, href: "#" },
          { label: "YouTube", icon: <Youtube size={16} strokeWidth={1.5} />, href: "#" },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
              scrolled
                ? "border-noir-encre/20 text-noir-encre/50 hover:border-noir-encre/50 hover:text-noir-encre"
                : "border-blanc-lin/30 text-blanc-lin/80 hover:border-blanc-lin/70 hover:text-blanc-lin"
            }`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Language switcher — fixed bottom right */}
      <div className="fixed bottom-2.5 right-8 md:bottom-3 md:right-10 z-30 hidden md:flex items-center gap-2.5 font-sans text-[13px]">
        {["Fr", "En", "De"].map((lang, i) => (
          <button
            key={lang}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
              i === 0
                ? scrolled
                  ? "border-noir-encre/50 text-noir-encre/80"
                  : "border-blanc-lin/60 text-blanc-lin"
                : scrolled
                  ? "border-noir-encre/20 text-noir-encre/50 hover:border-noir-encre/50 hover:text-noir-encre"
                  : "border-blanc-lin/30 text-blanc-lin/80 hover:border-blanc-lin/70 hover:text-blanc-lin"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Sticky bottom bar — mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 block md:hidden bg-ivoire/95 backdrop-blur-lg border-t border-or-ancien/15 px-4 py-3">
        <Link
          href="/contact"
          className="btn-gold w-full text-center text-sm tracking-[0.08em] block"
        >
          Réserver votre séjour
        </Link>
      </div>
    </>
  );
}
