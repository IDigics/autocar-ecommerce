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

export default function Header() {
  const router = useRouter();

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
      {/* MAIN FLEX CONTAINER
          Full width with minimal horizontal padding
          items-center vertically centers all content */}
      <div className="w-full px-4 flex items-center">
        {/* ===== SECTION 1: BRAND/LOGO (FAR LEFT) ===== */}
        {/* 
        BRAND SECTION FEATURES:
        - Logo image with hover scale animation
        - Brand name "AutoCar'z" in gold serif font
        - Tagline "LUXURY VEHICLES" in small caps
        - Entire section is clickable link to homepage
        */}
        <Link href="/" className="flex items-center space-x-3 group">
          {/* LOGO IMAGE
              Bigger 28x28px logo for better visibility and design balance
              group-hover:scale-110 creates subtle zoom on parent hover */}
          <div className="relative">
            <Image
              src="/logo.png"
              alt="Logo AutoCar'z"
              width={28}
              height={28}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* BRAND TEXT STACK */}
          <div className="flex flex-col">
            {/* MAIN BRAND NAME
                Smaller text size for better proportion with larger logo
                Gold color (#FFD700) with serif font for luxury feel
                tracking-wide adds letter spacing */}
            <span className="text-xs font-bold text-[#FFD700] font-serif tracking-wide">
              AutoCar'z
            </span>
            {/* TAGLINE
                Extra tiny gray text in all caps with wide letter spacing
                uppercase class transforms text to capitals */}
            <span className="text-[10px] text-gray-300 font-light tracking-widest uppercase">
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
        <div className="md:hidden flex items-center space-x-4 ml-auto">
          {/* MOBILE SEARCH ICON
              Provides access to search functionality on mobile
              Same SVG icon as desktop search bar - now clickable to redirect */}
          <button
            onClick={handleSearch}
            className="p-2 hover:bg-white/10 rounded transition-colors"
          >
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

          {/* HAMBURGER MENU BUTTON
              Three horizontal lines indicating mobile menu
              Standard pattern for mobile navigation
              Currently static - would need state management for full functionality */}
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
