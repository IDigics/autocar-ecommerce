/**
 * BRAND FILTER COMPONENT
 * ======================
 *
 * Interactive brand selection filter for automotive product filtering.
 * Displays a grid of automotive brand logos that users can click to filter products.
 *
 * FEATURES:
 * - Visual brand logo grid layout
 * - Single brand selection (toggle on/off)
 * - URL parameter synchronization
 * - Responsive grid design
 * - Hover effects with grayscale/color transitions
 * - Visual feedback for selected brand
 *
 * BRAND MANAGEMENT:
 * - Predefined list of supported automotive brands
 * - Logo assets stored in /public/brands/ directory
 * - Easy to add/remove brands by updating the brands array
 *
 * URL INTEGRATION:
 * - Reads current brand filter from URL parameters
 * - Updates URL when brand selection changes
 * - Resets pagination when filter is applied
 *
 * USAGE:
 * Used in product listing pages (boutique) as part of the filtering system.
 *
 * STYLING:
 * - Gold accent color (#D4AF37) for selected state
 * - Grayscale/color transition effects
 * - Responsive grid layout (5 columns)
 */

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// ===== BRAND CONFIGURATION =====
/**
 * Automotive Brand Data
 *
 * Static array of supported automotive brands with their logo assets.
 * Each brand object contains name and logo path for display.
 *
 * ADDING NEW BRANDS:
 * 1. Add brand logo image to /public/brands/ directory
 * 2. Add new brand object to this array
 * 3. Ensure logo file follows naming convention: brandname.png
 *
 * LOGO REQUIREMENTS:
 * - Format: PNG with transparent background preferred
 * - Size: Square aspect ratio (70x70px display size)
 * - File naming: lowercase brand name + .png
 */
const brands = [
  { name: "Audi", logo: "/brands/audi.png" }, // German luxury
  { name: "BMW", logo: "/brands/bmw.png" }, // German luxury
  { name: "Chevrolet", logo: "/brands/chevrolet.png" }, // American
  { name: "Kia", logo: "/brands/kia.png" }, // Korean
  { name: "Toyota", logo: "/brands/toyota.png" }, // Japanese reliability
  { name: "Ford", logo: "/brands/ford.png" }, // American classic
  { name: "Honda", logo: "/brands/honda.png" }, // Japanese efficiency
  { name: "Hyundai", logo: "/brands/hyundai.png" }, // Korean value
  { name: "Mercedes-Benz", logo: "/brands/mercedes.png" }, // German luxury
  { name: "Nissan", logo: "/brands/nissan.png" }, // Japanese innovation

  // TO ADD MORE BRANDS:
  // { name: 'Volkswagen', logo: '/brands/volkswagen.png' },
  // { name: 'Porsche', logo: '/brands/porsche.png' },
  // { name: 'Ferrari', logo: '/brands/ferrari.png' },
];

// ===== MAIN COMPONENT =====
/**
 * BrandFilter Component
 *
 * Interactive filter component that allows users to select a single automotive brand
 * to filter the product listings. Integrates with URL parameters for deep linking.
 */
const BrandFilter = () => {
  // ===== NAVIGATION HOOKS =====
  const searchParams = useSearchParams(); // Read current URL parameters
  const pathname = usePathname(); // Get current page path
  const router = useRouter(); // Navigate and update URL

  // ===== STATE MANAGEMENT =====
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // ===== URL SYNCHRONIZATION EFFECT =====
  /**
   * Sync component state with URL parameters
   *
   * When the component mounts or URL parameters change,
   * update the local state to reflect the current brand filter.
   */
  useEffect(() => {
    const current = searchParams.get("brand");
    setSelectedBrand(current);
  }, [searchParams]);

  // ===== BRAND SELECTION HANDLER =====
  /**
   * Handle brand selection/deselection
   *
   * Toggles brand selection and updates URL parameters accordingly.
   * If the same brand is clicked again, it deselects (removes filter).
   * Always resets pagination to page 1 when filter changes.
   *
   * @param brand - The brand name to select/deselect
   */
  const handleBrandClick = (brand: string) => {
    // Create new URL parameters object from current state
    const newParams = new URLSearchParams(searchParams.toString());

    // TOGGLE LOGIC: If clicking selected brand, deselect it
    if (brand === selectedBrand) {
      newParams.delete("brand"); // Remove brand filter
      setSelectedBrand(null); // Clear local state
    } else {
      // SELECT NEW BRAND: Set brand filter and update state
      newParams.set("brand", brand); // Set brand filter
      setSelectedBrand(brand); // Update local state
    }

    // PAGINATION RESET: Always return to first page when filter changes
    newParams.set("page", "1");

    // UPDATE URL: Navigate to new URL with updated parameters
    router.push(`${pathname}?${newParams.toString()}`);
  };

  // ===== COMPONENT RENDER =====
  return (
    <div className="text-center">
      {/* ===== BRAND GRID LAYOUT ===== */}
      {/* 
      GRID CONFIGURATION:
      - 5 columns on all screen sizes
      - 6-unit gap between grid items
      - Responsive layout adjusts button size automatically
      */}
      <div className="grid grid-cols-5 gap-6">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => handleBrandClick(brand.name)}
            className={`p-4 rounded-lg border transition duration-300
              ${
                selectedBrand === brand.name
                  ? "border-[#D4AF37]" // Gold border for selected brand
                  : "border-transparent" // Invisible border for unselected
              }`}
          >
            {/* ===== BRAND LOGO IMAGE ===== */}
            {/* 
            IMAGE FEATURES:
            - Next.js Image component for optimization
            - 70x70px display size
            - Centered with mx-auto
            - Grayscale by default, color on hover
            - Smooth transition between states
            */}
            <Image
              src={brand.logo}
              alt={brand.name}
              width={70}
              height={70}
              className="mx-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </button>
        ))}
      </div>

      {/* ===== SELECTED BRAND INDICATOR ===== */}
      {/* 
      CONDITIONAL DISPLAY:
      - Only shows when a brand is selected
      - Displays selected brand name in gold color
      - Uppercase styling for emphasis
      */}
      {selectedBrand && (
        <p className="mt-4 text-[#D4AF37] font-semibold tracking-wide uppercase">
          Filtré : {selectedBrand}
        </p>
      )}
    </div>
  );
};

export default BrandFilter;

// ===== COMPONENT USAGE EXAMPLES =====
/**
 * Usage in parent components:
 *
 * ```tsx
 * // In boutique page or product listing
 * <div className="filters-section">
 *   <h3>Filtrer par marque</h3>
 *   <BrandFilter />
 * </div>
 * ```
 *
 * URL parameter integration:
 * - Reading: /boutique?brand=BMW
 * - Multiple filters: /boutique?brand=BMW&category=SUV&minPrice=30000
 *
 * Styling customization:
 * - Update grid-cols-5 to change number of columns
 * - Modify gap-6 to adjust spacing
 * - Change border color #D4AF37 for different accent color
 */
