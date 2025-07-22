"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export default function Footer() {
  return (
    /* ===== MAIN FOOTER CONTAINER ===== */
    /* 
    FOOTER STYLING:
    - Light cream background (#F8F8F5) consistent with page sections
    - Dark navy text (#0D1B2A) for readability
    - Subtle top border with opacity for visual separation
    - Generous padding for breathing room
    */
    <footer className="bg-[#F8F8F5] text-[#0D1B2A] py-8 border-t border-[#71797E]/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* === MAIN FOOTER GRID === */}
        {/* 
        RESPONSIVE GRID LAYOUT:
        - 1 column on mobile (grid-cols-1)
        - 4 columns on desktop (md:grid-cols-4)
        - Equal gap spacing between sections
        - Bottom margin before copyright section
        */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          {/* === SECTION 1: COMPANY BRAND & CONTACT === */}
          {/* 
          BRAND SECTION FEATURES:
          - Company name in gold brand color
          - Brief business description
          - Contact information with icons
          - Phone, email, and address details
          */}
          <div className="space-y-4">
            {/* BRAND NAME - Gold color for prominence */}
            <h6 className="text-[#FFD700] font-bold text-xl mb-4">AutoCar'z</h6>

            {/* COMPANY DESCRIPTION */}
            <p className="text-[#71797E] text-sm leading-relaxed">
              Votre destination privilégiée pour les véhicules de luxe.
              Excellence, élégance.
            </p>

            {/* CONTACT INFORMATION LIST
                Each item has an icon + text combination for clarity */}
            <div className="space-y-2 text-sm">
              {/* PHONE NUMBER */}
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#FFD700]" />
                <span className="text-[#71797E]">test</span>
              </div>
              {/* EMAIL ADDRESS */}
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#FFD700]" />
                <span className="text-[#71797E]">test</span>
              </div>
              {/* PHYSICAL ADDRESS */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#FFD700]" />
                <span className="text-[#71797E]">test</span>
              </div>
            </div>
          </div>

          {/* === SECTION 2: SERVICES NAVIGATION === */}
          {/* 
          SERVICES LINKS:
          - Gold header for section identification
          - List of automotive services offered
          - Internal navigation links with hover effects
          */}
          <nav className="space-y-3">
            <h6 className="text-[#FFD700] font-semibold text-lg mb-4">
              Services
            </h6>
            <Link
              href="/vehicles/new"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Véhicules Neufs
            </Link>
            <Link
              href="/vehicles/used"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Véhicules d'Occasion
            </Link>
            <Link
              href="/financing"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Financement
            </Link>
            <Link
              href="/maintenance"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Maintenance & SAV
            </Link>
            <Link
              href="/trade-in"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Reprise Véhicule
            </Link>
          </nav>

          {/* Société */}
          <nav className="space-y-3">
            <h6 className="text-[#FFD700] font-semibold text-lg mb-4">
              Société
            </h6>
            <Link
              href="/about"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Contact
            </Link>
            <Link
              href="/showroom"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Notre Showroom
            </Link>
            <Link
              href="/testimonials"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Témoignages
            </Link>
            <Link
              href="/news"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Actualités
            </Link>
          </nav>

          {/* Informations Légales */}
          <nav className="space-y-3">
            <h6 className="text-[#FFD700] font-semibold text-lg mb-4">Légal</h6>
            <Link
              href="/terms"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Conditions d'Utilisation
            </Link>
            <Link
              href="/privacy"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Confidentialité
            </Link>
            <Link
              href="/cookies"
              className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm cursor-pointer"
            >
              Cookies
            </Link>
            <div className="pt-4 border-t border-[#71797E]/20">
              <p className="text-xs text-[#71797E]">
                © {new Date().getFullYear()} AutoCar'z
              </p>
              <p className="text-xs text-[#71797E]">Tous droits réservés</p>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
