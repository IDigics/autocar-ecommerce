/**
 * Footer Component for AutoCar'z
 *
 * A comprehensive footer featuring:
 * - Company information and contact details
 * - Navigation links
 * - Social media links
 * - Copyright information
 *
 * Design matches the luxury car dealership theme with dark background
 * and gold accents consistent with the site's color scheme.
 */
"use client";

import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FFD700] mb-4">AutoCar'z</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre destination privilégiée pour les véhicules de luxe. Nous
              offrons une sélection exclusive de voitures premium avec un
              service exceptionnel depuis plus de 15 ans.
            </p>

            {/* Contact Information */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#FFD700]" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#FFD700]" />
                <span>contact@autocarz.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#FFD700]" />
                <span>123 Avenue des Champs-Élysées, Paris</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FFD700] mb-4">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/"
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
              >
                Accueil
              </Link>
              <Link
                href="/boutique"
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
              >
                Boutique
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                href="/apropos"
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
              >
                À propos
              </Link>
            </nav>
          </div>

          {/* Social Media & Additional Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#FFD700] mb-4">
              Suivez-nous
            </h3>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>

            {/* Business Hours */}
            <div className="text-sm text-gray-300">
              <h4 className="font-semibold text-white mb-2">
                Horaires d'ouverture
              </h4>
              <p>Lun - Ven: 9h00 - 19h00</p>
              <p>Samedi: 9h00 - 17h00</p>
              <p>Dimanche: Fermé</p>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 AutoCar'z. Tous droits réservés.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link
                href="/mentions-legales"
                className="hover:text-[#FFD700] transition-colors duration-200"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="hover:text-[#FFD700] transition-colors duration-200"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
