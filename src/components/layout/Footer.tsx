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

export default function Footer() {
  return (
    <footer className="bg-bleu-papes text-blanc-lin/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-blanc-lin mb-4">
              La Mirande
            </h3>
            <p className="font-accent italic text-creme/70 text-sm leading-relaxed">
              Hôtel particulier 5 étoiles
              <br />
              au pied du Palais des Papes
            </p>
            <p className="mt-5 font-sans text-[11px] text-blanc-lin/25 leading-relaxed">
              Membre fondateur de l&apos;art de vivre
              <br />
              avignonnais depuis 1987
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien/70 mb-6">
              Contact
            </h4>
            <ul className="space-y-3.5 font-sans text-sm text-creme/80">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-or-ancien/40" />
                <span>
                  {hotel.address.street}
                  <br />
                  {hotel.address.zip} {hotel.address.city}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="shrink-0 text-or-ancien/40" />
                <span>{hotel.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="shrink-0 text-or-ancien/40" />
                <span>{hotel.email}</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien/70 mb-6">
              Découvrir
            </h4>
            <ul className="space-y-3 font-sans text-sm text-creme/80">
              {hotel.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-or-ancien transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="hover:text-or-ancien transition-colors duration-300"
                >
                  Presse
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.2em] uppercase text-or-ancien/70 mb-6">
              Newsletter
            </h4>
            <p className="font-sans text-sm text-blanc-lin/45 mb-5">
              Avant-premières, événements exclusifs et menus de saison — directement dans votre boîte.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-blanc-lin/15"
            >
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-transparent py-2.5 font-sans text-sm text-blanc-lin placeholder:text-blanc-lin/25 outline-none"
              />
              <button
                type="submit"
                className="p-2.5 text-or-ancien/70 hover:text-blanc-lin transition-colors duration-300"
                aria-label="S'inscrire à la newsletter"
              >
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="flex gap-5 mt-8">
              <a
                href="#"
                className="text-blanc-lin/30 hover:text-or-ancien transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-blanc-lin/30 hover:text-or-ancien transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-blanc-lin/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-blanc-lin/25">
            © {new Date().getFullYear()} La Mirande — Tous droits réservés
          </p>
          <p className="font-sans text-[11px] text-blanc-lin/25">
            Maquette réalisée par{" "}
            <a
              href="https://filix-agency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-or-ancien/50 hover:text-or-ancien transition-colors duration-300"
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
