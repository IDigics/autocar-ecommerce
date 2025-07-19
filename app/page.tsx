/**
 * AutoCar'z Homepage Component
 *
 * This is the main landing page for the AutoCar'z luxury car dealership.
 * Features a full-screen hero section with background image, centered text, and statistics.
 *
 * Layout Structure:
 * - Header navigation
 * - Full-screen hero with background image
 * - Centered headline and CTA
 * - Statistics bar at bottom
 * - Footer with company info and links
 * - Fully responsive design for mobile and desktop
 *
 * Color Scheme:
 * - Primary: #0D1B2A (Dark Navy)
 * - Accent: #FFD700 (Gold)
 * - Background: Dark overlay on hero image
 */
"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Site Navigation Header */}
      <Header />

      {/* Full-Screen Hero Section with Background Image */}
      <main className="relative min-h-screen flex flex-col justify-center items-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpeg"
            alt="Voiture de luxe AutoCar'z"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Main Content - Centered */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Conduisez l'exception<br />
            ressentez la <span className="text-[#FFD700]">passion</span><br />
            <span className="text-[#FFD700] text-5xl md:text-7xl lg:text-8xl">Vivez AutoCar'z</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection exclusive de véhicules luxueux qui 
            marient élégance et performance, pour ceux qui exigent 
            l'excellence.
          </p>

          {/* CTA Button */}
          <button className="px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#E6B800] text-[#0D1B2A] rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-lg tracking-wide">
            Découvrir la boutique →
          </button>
        </div>

        {/* Statistics Bar at Bottom */}
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Statistic 1 */}
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">100+</span>
                <span className="text-sm md:text-base text-gray-300 uppercase tracking-wide">Véhicules Premium</span>
              </div>

              {/* Statistic 2 */}
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">15+</span>
                <span className="text-sm md:text-base text-gray-300 uppercase tracking-wide">Années d'Expérience</span>
              </div>

              {/* Statistic 3 */}
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-2">500+</span>
                <span className="text-sm md:text-base text-gray-300 uppercase tracking-wide">Clients Satisfaits</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Site Footer - Company Info & Links */}
      <Footer />
    </>
  );
}
