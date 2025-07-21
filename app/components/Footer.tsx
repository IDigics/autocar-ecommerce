/**
 * Footer Component for AutoCar'z
 *
 * A comprehensive footer featuring:
 * - Company information and contact details
 * - Navigation links
 * - Business hours
 * - Copyright information
 *
 * Design matches the luxury car dealership theme with dark background
 * and gold accents consistent with the site's color scheme.
 */
"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#F8F8F5] text-[#0D1B2A] py-8 border-t border-[#71797E]/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Services Section */}
          <nav className="space-y-3">
            <h6 className="text-[#FFD700] font-semibold text-lg mb-4">
              Services
            </h6>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              Branding
            </a>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              Design
            </a>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              Marketing
            </a>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              Advertisement
            </a>
          </nav>

          {/* Company Section */}
          <nav className="space-y-3">
            <h6 className="text-[#FFD700] font-semibold text-lg mb-4">
              Company
            </h6>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              About us
            </a>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              Contact
            </a>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              Jobs
            </a>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              Press kit
            </a>
          </nav>

          {/* Legal Section */}
          <nav className="space-y-3">
            <h6 className="text-[#FFD700] font-semibold text-lg mb-4">Legal</h6>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              Terms of use
            </a>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              Privacy policy
            </a>
            <a className="block text-[#71797E] hover:text-[#FFD700] transition-colors duration-300 text-sm">
              Cookie policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
