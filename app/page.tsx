/**
 * AutoCar'z Homepage Component
 *
 * This is the main landing page for the AutoCar'z luxury car dealership.
 * Features a hero section with statistics, promotional text, and call-to-action.
 *
 * Layout Structure:
 * - Header navigation
 * - Hero section with 3-column layout: Hero Image (left) | Stats (center) | CTA Text (right)
 * - Footer with company info and links
 * - Fully responsive design for mobile and desktop
 *
 * Color Scheme:
 * - Primary: #0D1B2A (Dark Navy)
 * - Accent: #FFD700 (Gold)
 * - Background: #F8F8F5 (Light Cream)
 */
"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import { FaCarSide, FaAward, FaSmile } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Site Navigation Header */}
      <Header />

      {/* Main Hero Section - Luxury Car Showcase */}
      <main className="bg-[#F8F8F5] min-h-screen flex items-center px-0 py-0">
        {/* Responsive Container - Image touching edges, content on right */}
        <div className="flex flex-col md:flex-row items-stretch h-screen w-full">
          {/* 🖼️ HERO IMAGE SECTION - Left Edge, touching header/footer */}
          <div className="w-full md:w-[25%] order-2 md:order-1 h-full">
            <Image
              src="/hero.jpeg"
              alt="Voiture de luxe AutoCar'z"
              width={1000}
              height={600}
              className="object-cover w-full h-full"
              priority // Load immediately as it's above the fold
            />
          </div>

          {/* Content Container - Statistics and CTA */}
          <div className="w-full md:w-[75%] flex flex-col md:flex-row items-center justify-center px-8 py-12 order-1 md:order-2">
            {/* 📊 STATISTICS SECTION - Left side of content area */}
            <div className="w-full md:w-[40%] flex flex-col gap-6 items-center md:items-start order-2 md:order-1">
              <div className="flex items-center gap-3">
                <FaCarSide className="text-[#FFD700] text-xl md:text-2xl" />
                <div className="text-[#0D1B2A] text-base md:text-lg font-semibold leading-tight">
                  <span className="text-[#FFD700] font-bold text-lg md:text-xl">
                    100+
                  </span>
                  <br />
                  <span className="text-sm md:text-base">
                    véhicules premium
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaAward className="text-[#FFD700] text-xl md:text-2xl" />
                <div className="text-[#0D1B2A] text-base md:text-lg font-semibold leading-tight">
                  <span className="text-[#FFD700] font-bold text-lg md:text-xl">
                    15+
                  </span>
                  <br />
                  <span className="text-sm md:text-base">
                    années d'expérience
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaSmile className="text-[#FFD700] text-xl md:text-2xl" />
                <div className="text-[#0D1B2A] text-base md:text-lg font-semibold leading-tight">
                  <span className="text-[#FFD700] font-bold text-lg md:text-xl">
                    500+
                  </span>
                  <br />
                  <span className="text-sm md:text-base">
                    clients satisfaits
                  </span>
                </div>
              </div>
            </div>

            {/* 📝 CALL-TO-ACTION SECTION - Right side of content area */}
            <div className="w-full md:w-[60%] text-center md:text-left space-y-6 order-1 md:order-2 md:pl-8">
              {/* Main Headline - Emotional Appeal */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D1B2A] leading-tight">
                Conduisez l'exception, Ressentez la passion...
              </h1>

              {/* Brand Tagline - Large Impact Text */}
              <p className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#E6B800] text-center md:text-left leading-tight">
                Vivez AutoCar'z
              </p>

              {/* Call-to-Action Button */}
              <button className="mt-6 px-10 py-4 bg-[#0D1B2A] text-white rounded-xl shadow-lg hover:bg-[#102438] hover:shadow-xl transition-all duration-300 font-medium text-lg">
                Découvrir nos modèles
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Site Footer - Company Info & Links */}
      <Footer />
    </>
  );
}
