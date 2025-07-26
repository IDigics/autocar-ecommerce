/**
 * Header Navigation Component for AutoCar'z
 *
 * LAYOUT STRUCTURE:
 * - Fixed header with dark navy background (#0D1B2A)
 * - Three-section layout: Logo (left) | Search Bar (center) | Navigation (right)
 * - Responsive design with mobile menu fallback
 *
 * FEATURES:
 * - Smooth scrolling navigation to page sections
 * - Integrated search bar with glass-morphism effect
 * - Hover animations and focus states
 * - Mobile-responsive with hamburger menu
 *
 * STYLING:
 * - Brand colors: Gold (#FFD700) and Navy (#0D1B2A)
 * - Typography: Serif for brand name, sans-serif for navigation
 * - Consistent spacing and transitions
 */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * SMOOTH SCROLLING FUNCTION
   * Navigates to specific sections on the page using smooth scroll behavior
   * Used by navigation buttons to scroll to: hero, services, advantages sections
   *
   * @param sectionId - The ID of the HTML element to scroll to
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Smooth animation instead of instant jump
        block: "start", // Align to top of viewport
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  /**
   * TOGGLE MOBILE MENU FUNCTION
   * Opens/closes the mobile dropdown menu
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileSearchOpen(false); // Close search when opening menu
  };

  /**
   * TOGGLE MOBILE SEARCH FUNCTION
   * Opens/closes the mobile search input
   */
  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    setIsMobileMenuOpen(false); // Close menu when opening search
  };

  /**
   * HANDLE MOBILE SEARCH SUBMIT
   * Processes mobile search submission
   */
  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/boutique?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push("/boutique");
    }
    setIsMobileSearchOpen(false);
    setSearchQuery("");
  };

  /**
   * SEARCH REDIRECT FUNCTION
   * Redirects user to boutique page when search is triggered
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/boutique");
  };

  return (
    // HEADER CONTAINER
    // Fixed positioning keeps header visible during scroll
    // z-50 ensures header stays above other content
    // bg-[#0D1B2A] is the custom navy brand color
    // Ultra compact vertical padding for minimal header height
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1B2A] text-white py-2 shadow-lg">
      {/* MAIN FLEX CONTAINER - Responsive padding */}
      <div className="w-full px-2 sm:px-4 lg:px-6 flex items-center justify-between">
        {/* ===== SECTION 1: BRAND/LOGO (FAR LEFT) ===== */}
        <Link
          href="/"
          className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
        >
          {/* LOGO IMAGE - Responsive size */}
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Logo AutoCar'z"
              width={24}
              height={24}
              className="sm:w-7 sm:h-7 object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* BRAND TEXT STACK - More responsive visibility */}
          <div className="hidden sm:flex flex-col">
            <span className="text-xs sm:text-sm font-bold text-[#FFD700] font-serif tracking-wide">
              AutoCar'z
            </span>
            <span className="text-[9px] sm:text-[10px] text-gray-300 font-light tracking-widest uppercase">
              LUXURY VEHICLES
            </span>
          </div>
        </Link>

        {/* ===== SECTION 2: SEARCH BAR (CENTER) ===== */}
        {/* 
        SEARCH BAR FEATURES:
        - Flexible width that grows to fill available space (flex-1)
        - Larger max width for better usability (max-w-96)
        - Glass-morphism effect with backdrop blur
        - Hidden on mobile devices (hidden md:block)
        - Focus states with gold ring to match brand colors
        */}
        <div className="flex-1 max-w-96 mx-3 hidden md:block">
          <form onSubmit={handleSearch} className="relative">
            {/* SEARCH INPUT FIELD
                Smaller height with compact padding
                Glass-morphism styling with semi-transparent background
                bg-white/10 = 10% opacity white background
                border-white/20 = 20% opacity white border
                backdrop-blur-sm creates the glass effect */}
            <input
              type="text"
              placeholder="Rechercher un véhicule..."
              className="w-full px-3 py-1 pl-8 pr-3 bg-white/10 border border-white/20 rounded-md text-sm text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent backdrop-blur-sm"
            />
            {/* SEARCH ICON
                Positioned absolutely inside the input field (left side)
                SVG icon with stroke styling for clean appearance */}
            <button
              type="submit"
              className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 text-gray-300 hover:text-[#FFD700] transition-colors"
            >
              <svg
                className="w-full h-full"
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
          </form>
        </div>

        {/* ===== SECTION 3: NAVIGATION MENU (FAR RIGHT) ===== */}
        {/* 
        NAVIGATION FEATURES:
        - Hidden on mobile (hidden md:flex)
        - ml-auto pushes navigation to far right
        - Ultra compact spacing between items (space-x-3)
        - Smooth hover transitions for all links
        - Mix of scroll buttons and direct links
        */}
        <nav className="hidden md:flex items-center space-x-3 ml-auto">
          {/* === NAVIGATION LINKS === */}
          {/* Each button uses scrollToSection function to navigate smoothly */}

          {/* HOME/ACCUEIL BUTTON
              Scrolls to "hero" section on the page */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-gray-300 hover:text-white transition-colors duration-300 text-xs font-medium"
          >
            Accueil
          </button>

          {/* SERVICES BUTTON
              Scrolls to "services" section on the page */}
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-300 hover:text-white transition-colors duration-300 text-xs font-medium"
          >
            Services
          </button>

          {/* ADVANTAGES BUTTON
              Scrolls to "advantages" section on the page */}
          <button
            onClick={() => scrollToSection("advantages")}
            className="text-gray-300 hover:text-white transition-colors duration-300 text-xs font-medium"
          >
            Avantages
          </button>

          {/* === CALL-TO-ACTION BUTTON === */}
          {/* 
          BOUTIQUE CTA BUTTON:
          - Prominent yellow background (#FFD700) to stand out
          - Ultra compact size for minimal header
          - Links to /boutique page (different from scroll buttons above)
          - Darker hover state (#E6B800) for feedback
          - Black text for contrast against yellow background
          */}
          <Link
            href="/boutique"
            className="px-2 py-1 bg-[#FFD700] text-black rounded text-xs font-semibold hover:bg-[#E6B800] transition-colors duration-300"
          >
            Boutique
          </Link>
        </nav>

        {/* ===== SECTION 4: MOBILE MENU (MOBILE ONLY) ===== */}
        {/* 
        MOBILE FEATURES:
        - Only visible on mobile devices (md:hidden)
        - ml-auto pushes to far right (same as desktop nav)
        - Search icon provides mobile search access
        - Hamburger menu for navigation drawer
        - Space between search and menu buttons
        */}
        <div className="md:hidden flex items-center space-x-2 ml-auto">
          {/* MOBILE SEARCH ICON
              Opens mobile search input when tapped */}
          <button
            onClick={toggleMobileSearch}
            className="p-1.5 hover:bg-white/10 rounded transition-colors"
          >
            <svg
              className="w-4 h-4 text-white"
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

          {/* HAMBURGER MENU BUTTON
              Three horizontal lines indicating mobile menu
              Now functional with click handler and animation */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col space-y-0.5 p-1.5 relative"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-5 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* ===== MOBILE SEARCH BAR ===== */}
      {/* 
      MOBILE SEARCH FEATURES:
      - Only visible when isMobileSearchOpen is true
      - Slides down with smooth animation
      - Full-width search input
      - Submit on Enter or search button
      */}
      {isMobileSearchOpen && (
        <div className="md:hidden bg-[#0D1B2A] border-t border-white/10">
          <div className="px-4 py-3">
            <form onSubmit={handleMobileSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un véhicule..."
                className="w-full px-4 py-2 pl-10 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent backdrop-blur-sm"
                autoFocus
              />
              {/* Search Icon Inside Input */}
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-4 h-4 text-gray-300"
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
              {/* Submit Button */}
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#FFD700] text-black px-3 py-1 rounded text-xs font-semibold hover:bg-[#E6B800] transition-colors"
              >
                OK
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ===== MOBILE DROPDOWN MENU ===== */}
      {/* 
      MOBILE DROPDOWN FEATURES:
      - Only visible when isMobileMenuOpen is true
      - Slides down with smooth animation
      - Full-width navigation links
      - Same styling as desktop but optimized for touch
      - Includes all navigation options plus boutique link
      */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D1B2A] border-t border-white/10">
          <div className="px-4 py-3 space-y-3">
            {/* Mobile Navigation Links */}
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left text-white hover:text-[#FFD700] transition-colors duration-300 py-2 text-sm font-medium"
            >
              Accueil
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-white hover:text-[#FFD700] transition-colors duration-300 py-2 text-sm font-medium"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("advantages")}
              className="block w-full text-left text-white hover:text-[#FFD700] transition-colors duration-300 py-2 text-sm font-medium"
            >
              Avantages
            </button>

            {/* Mobile Boutique Link */}
            <Link
              href="/boutique"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-[#FFD700] text-black text-center py-2 px-4 rounded text-sm font-semibold hover:bg-[#E6B800] transition-colors duration-300"
            >
              Boutique
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
