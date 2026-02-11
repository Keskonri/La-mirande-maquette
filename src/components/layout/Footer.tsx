"use client";

import { hotel } from "@/data/mirande";
import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-noir-encre text-blanc-lin/80">
      {/* Gold separator line */}
      <div className="h-px bg-gradient-to-r from-transparent via-or-ancien/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Top — Logo + Tagline centered */}
        <div className="text-center mb-16">
          <Image
            src="/logo-mirande.webp"
            alt="La Mirande"
            width={200}
            height={40}
            className="h-8 w-auto brightness-0 invert sepia-[0.08] saturate-[2] mx-auto mb-5"
          />
          <p className="font-accent italic text-lg text-creme/50">
            Hôtel particulier au pied du Palais des Papes
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-or-ancien/50">
              Monument Historique
            </span>
            <span className="w-1 h-1 rounded-full bg-or-ancien/30" />
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-or-ancien/50">
              5 Étoiles
            </span>
            <span className="w-1 h-1 rounded-full bg-or-ancien/30" />
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-or-ancien/50">
              Depuis le XIV<sup>e</sup> siècle
            </span>
          </div>
        </div>

        {/* Gold thin separator */}
        <div className="h-px bg-or-ancien/10 mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Contact — Serif typography */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien/60 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 shrink-0 text-or-ancien/30" />
                <span className="font-accent italic text-[15px] text-creme/60 leading-relaxed">
                  {hotel.address.street}
                  <br />
                  {hotel.address.zip} {hotel.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="shrink-0 text-or-ancien/30" />
                <a
                  href={`tel:${hotel.phone}`}
                  className="font-accent text-[15px] text-creme/60 hover:text-or-ancien transition-colors duration-300"
                >
                  {hotel.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="shrink-0 text-or-ancien/30" />
                <a
                  href={`mailto:${hotel.email}`}
                  className="font-accent text-[15px] text-creme/60 hover:text-or-ancien transition-colors duration-300"
                >
                  {hotel.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation — Sans-Serif uppercase */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien/60 mb-6">
              Découvrir
            </h4>
            <ul className="space-y-3.5">
              {hotel.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-[12px] tracking-[0.15em] uppercase text-creme/50 hover:text-or-ancien transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="font-sans text-[12px] tracking-[0.15em] uppercase text-creme/50 hover:text-or-ancien transition-colors duration-300"
                >
                  Presse
                </a>
              </li>
            </ul>
          </div>

          {/* Distinctions */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien/60 mb-6">
              Distinctions
            </h4>
            <ul className="space-y-3.5">
              <li className="font-accent italic text-[15px] text-creme/60">
                1 étoile Guide Michelin
              </li>
              <li className="font-accent italic text-[15px] text-creme/60">
                Étoile Verte Michelin
              </li>
              <li className="font-accent italic text-[15px] text-creme/60">
                1 toque Gault &amp; Millau
              </li>
              <li className="font-accent italic text-[15px] text-creme/60">
                Monument Historique classé
              </li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien/60 mb-6">
              Newsletter
            </h4>
            <p className="font-accent italic text-sm text-creme/40 mb-5 leading-relaxed">
              Avant-premières, événements et menus de saison.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-or-ancien/15"
            >
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-transparent py-2.5 font-sans text-sm text-blanc-lin placeholder:text-blanc-lin/20 outline-none"
              />
              <button
                type="submit"
                className="p-2.5 text-or-ancien/50 hover:text-or-ancien transition-colors duration-300"
                aria-label="S'inscrire à la newsletter"
              >
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="flex gap-5 mt-8">
              <a
                href="#"
                className="text-creme/30 hover:text-or-ancien transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-creme/30 hover:text-or-ancien transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-or-ancien/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-creme/25">
            © {new Date().getFullYear()} La Mirande — Tous droits réservés
          </p>
          <p className="font-sans text-[11px] text-creme/25">
            Maquette réalisée par{" "}
            <a
              href="https://filix-agency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-or-ancien/40 hover:text-or-ancien transition-colors duration-300"
            >
              Filix Agency
            </a>{" "}
            · Agence digitale hôtellerie de luxe
          </p>
        </div>
      </div>
    </footer>
  );
}
