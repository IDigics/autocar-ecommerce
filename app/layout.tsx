/**
 * ROOT LAYOUT - GLOBAL APPLICATION STRUCTURE
 *
 * ===== LAYOUT OVERVIEW =====
 * This is the root layout component that wraps all pages in the AutoCar'z
 * application. It defines the basic HTML structure, metadata, and global
 * styling that applies across the entire website.
 *
 * ===== TYPOGRAPHY SYSTEM =====
 * Font Configuration:
 * - Primary Font: Geist Sans (--font-geist-sans)
 *   - Modern, clean sans-serif for body text and UI elements
 *   - Optimized for digital readability and luxury aesthetic
 * - Monospace Font: Geist Mono (--font-geist-mono)
 *   - Used for code, data, and technical information
 *   - Consistent character spacing for tables and forms
 *
 * ===== SEO & METADATA =====
 * Page Metadata:
 * - Title: "AutoCar'z - Luxury Automotive Excellence"
 * - Description: French copy emphasizing luxury vehicle selection
 * - Language: French (lang="fr") for proper localization
 * - Character encoding and viewport optimization built-in
 *
 * ===== GLOBAL STYLES =====
 * CSS Configuration:
 * - ./globals.css import provides Tailwind CSS base styles
 * - Custom CSS variables for consistent theming
 * - antialiased class ensures smooth font rendering
 * - Responsive typography scaling across devices
 *
 * ===== ACCESSIBILITY FEATURES =====
 * - Semantic HTML structure with proper lang attribute
 * - Font loading optimization with subset specification
 * - Screen reader compatible markup
 * - Consistent heading hierarchy support
 *
 * ===== PERFORMANCE OPTIMIZATIONS =====
 * - Google Fonts optimization with selective subsets
 * - Font display swap for improved loading performance
 * - CSS variable system for efficient styling
 * - Minimal layout shift during font loading
 *
 * ===== LOCALIZATION =====
 * - French language setting (lang="fr")
 * - Supports French automotive terminology
 * - Compatible with French formatting standards
 * - Ready for multi-language expansion if needed
 */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// === FONT CONFIGURATION ===
// Primary sans-serif font for body text and UI elements
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS variable for consistent usage
  subsets: ["latin"], // Latin character subset for performance
});

// Monospace font for code, data, and technical content
const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // CSS variable for technical text
  subsets: ["latin"], // Latin character subset for performance
});

// === PAGE METADATA ===
// SEO and social media optimization for the AutoCar'z brand
export const metadata: Metadata = {
  title: "AutoCar'z - Luxury Automotive Excellence",
  description:
    "Découvrez une sélection exclusive de véhicules de luxe chez AutoCar'z. Excellence, élégance et performance pour les connaisseurs automobiles exigeants.",
};

// === ROOT LAYOUT COMPONENT ===
// Defines the basic HTML structure and global styling for all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // All page content will be injected here
}>) {
  return (
    // HTML document with French language attribute
    <html lang="fr">
      <body
        // Apply font variables and enable font antialiasing
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Page content injection point - all pages render here */}
        {children}
      </body>
    </html>
  );
}
