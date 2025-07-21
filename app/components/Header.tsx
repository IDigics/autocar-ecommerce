/**
 * Header Navigation Component for AutoCar'z
 *
 * Clean, minimalist design matching the screenshot reference:
 * - Dark navy background
 * - Logo and brand on the left
 * - Simple navigation menu on the right
 * - Yellow CTA button
 * - Smooth scrolling to page sections
 */
"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  // Smooth scroll function to navigate to page sections
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1B2A] text-white py-4 shadow-lg">
      <div className="w-full px-6 flex items-center">
        {/* Brand Section - Far Left */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Logo AutoCar'z"
              width={40}
              height={40}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#FFD700] font-serif tracking-wide">
              AutoCar'z
            </span>
            <span className="text-xs text-gray-300 font-light tracking-widest uppercase">
              LUXURY VEHICLES
            </span>
          </div>
        </Link>

        {/* Search Bar - Center */}
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher des véhicules..."
              className="w-full px-4 py-2 pl-10 pr-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent backdrop-blur-sm"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Navigation Menu - Far Right */}
        <nav className="hidden md:flex items-center space-x-8 ml-auto">
          {/* Navigation Links */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Accueil
          </button>

          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("advantages")}
            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Avantages
          </button>

          <Link
            href="/boutique"
            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Boutique
          </Link>

          {/* Yellow CTA Button */}
          <Link
            href="/boutique"
            className="px-6 py-2 bg-[#FFD700] text-black rounded font-semibold text-sm hover:bg-[#E6B800] transition-colors duration-300"
          >
            Collection
          </Link>
        </nav>

        {/* Mobile Menu Button - Far Right on Mobile */}
        <div className="md:hidden flex items-center space-x-4 ml-auto">
          {/* Mobile Search Icon */}
          <button className="p-2">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button className="flex flex-col space-y-1 p-2">
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
