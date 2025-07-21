/**
 * Header Navconst scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Approximate header height
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};omponent for AutoCar'z
 *
 * Features:
 * - Enhanced luxury design with premium styling
 * - Company logo and brand name with elegant typography
 * - Sophisticated navigation menu with hover effects
 * - Smooth scroll navigation to page sections
 * - Responsive design with mobile-friendly layout
 * - Consistent luxury color scheme with gold accents and dark navy
 * - Added subtle animations and premium visual elements
 *
 * Note: Mobile menu implementation can be added later for hamburger navigation
 */
"use client";
import Link from "next/link";
import Image from "next/image";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Header() {
  return (
    <header className="bg-[#0D1B2A] text-[#F8F8F5] py-4 shadow-lg border-b border-[#FFD700]/20 fixed w-full top-0 z-50">
      <div className="w-full px-8 flex justify-between items-center">
        {/* Brand Section - Logo positioned at far left */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Logo AutoCar'z"
              width={40}
              height={40}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
            {/* Subtle glow effect behind logo */}
            <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#FFD700] font-serif tracking-wide group-hover:text-[#E6B800] transition-colors duration-300">
              AutoCar'z
            </span>
            <span className="text-xs text-[#718396] font-light tracking-widest uppercase hidden sm:block">
              Luxury Vehicles
            </span>
          </div>
        </Link>

        {/* Enhanced Navigation Menu - Better proportioned */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("hero")}
            className="relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#FFD700] group text-[#71797E]"
          >
            <span className="relative z-10">Accueil</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#FFD700] group text-[#71797E]"
          >
            <span className="relative z-10">Services</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></div>
          </button>

          <button
            onClick={() => scrollToSection("advantages")}
            className="relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#FFD700] group text-[#71797E]"
          >
            <span className="relative z-10">Avantages</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></div>
          </button>

          <Link
            href="/boutique"
            className="relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#FFD700] group text-[#71797E]"
          >
            <span className="relative z-10">Boutique</span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFD700] group-hover:w-full transition-all duration-300"></div>
          </Link>

          {/* Premium CTA Button - Better sized */}
          <Link
            href="/boutique"
            className="ml-2 px-5 py-2 bg-gradient-to-r from-[#FFD700] to-[#E6B800] text-[#0D1B2A] rounded-lg font-semibold text-sm tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-[#FFD700] hover:from-[#E6B800] hover:to-[#FFD700]"
          >
            Collection
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col space-y-1 p-2 hover:bg-[#FFD700]/10 rounded-lg transition-colors duration-300">
          <span className="w-5 h-0.5 bg-white transition-all duration-300"></span>
          <span className="w-5 h-0.5 bg-white transition-all duration-300"></span>
          <span className="w-5 h-0.5 bg-white transition-all duration-300"></span>
        </button>
      </div>
    </header>
  );
}
