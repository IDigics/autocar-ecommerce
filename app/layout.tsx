/**
 * ROOT LAYOUT COMPONENT
 * =====================
 *
 * The main layout component for the AutoCar'z application. This component wraps
 * all pages and provides the common structure, styling, and functionality.
 *
 * LAYOUT STRUCTURE:
 * 1. HTML document setup with French language
 * 2. Font loading and CSS variable setup
 * 3. Global styling and theme colors
 * 4. React Query provider for data management
 * 5. Header navigation (fixed)
 * 6. Page content (dynamic)
 * 7. Footer (static)
 *
 * FEATURES:
 * - Multiple Google Fonts integration
 * - Responsive design foundation
 * - Global state management setup
 * - SEO-optimized metadata
 * - French localization
 *
 * BRAND COLORS:
 * - Background: #f8f8f6 (Light cream)
 * - Text: #0A0A23 (Dark navy)
 * - Accents: Gold (#FFD700) defined in components
 *
 * MODIFICATION GUIDELINES:
 * - Update metadata for SEO changes
 * - Add new font families by importing and adding to className
 * - Modify global colors in body className
 * - Add global providers (auth, theme, etc.) around children
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactQueryProvider from "../components/useQueryProvider";

import { Cormorant_Garamond } from "next/font/google";

// ===== FONT CONFIGURATIONS =====
/**
 * Google Fonts Setup
 *
 * Configures multiple font families for different use cases:
 * - Cormorant Garamond: Elegant serif for headings and luxury content
 * - Geist Sans: Modern sans-serif for body text and UI
 * - Geist Mono: Monospace for code or technical content
 *
 * Each font is set up with CSS custom properties for easy access throughout the app.
 */

// LUXURY SERIF FONT - For elegant headings and premium content
const cormorant = Cormorant_Garamond({
  subsets: ["latin"], // Character set (add more for international support)
  weight: ["400", "500", "600", "700"], // Font weights: normal, medium, semi-bold, bold
  variable: "--font-cormorant", // CSS custom property name
});

// MODERN SANS-SERIF FONT - Primary font for body text and interface
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS custom property name
  subsets: ["latin"], // Character set
});

// MONOSPACE FONT - For code blocks, technical specifications, or data
const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // CSS custom property name
  subsets: ["latin"], // Character set
});

// ===== SEO METADATA CONFIGURATION =====
/**
 * Page Metadata for SEO
 *
 * Defines default metadata that applies to all pages unless overridden.
 * Critical for search engine optimization and social media sharing.
 *
 * FRENCH LOCALIZATION:
 * - Title and description in French for French market
 * - Keywords focus on luxury automotive terms
 * - Brand positioning as premium/exclusive
 */
export const metadata: Metadata = {
  title: "AutoCar'z - Luxury Automotive Excellence",
  description:
    "Découvrez une sélection exclusive de véhicules de luxe chez AutoCar'z. Excellence, élégance et performance pour les connaisseurs automobiles exigeants.",

  // ADDITIONAL SEO PROPERTIES CAN BE ADDED:
  // keywords: "voitures de luxe, automobiles premium, BMW, Mercedes, Audi",
  // openGraph: {
  //   title: "AutoCar'z - Véhicules de Luxe",
  //   description: "Sélection exclusive de véhicules premium",
  //   images: ['/og-image.jpg'],
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: "AutoCar'z",
  //   description: "Véhicules de luxe et d'exception",
  // },
};

// ===== ROOT LAYOUT COMPONENT =====
/**
 * RootLayout - The foundational layout for all pages
 *
 * This component provides the HTML structure and global styling
 * that wraps every page in the application.
 *
 * @param children - The page content that will be rendered inside the layout
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ===== HTML DOCUMENT SETUP =====
    <html lang="fr">
      {/* 
      LANGUAGE ATTRIBUTE:
      - Set to French for proper SEO and accessibility
      - Helps screen readers and search engines understand content language
      */}

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased font-sans bg-[#f8f8f6] text-[#0A0A23]`}
      >
        {/* 
        BODY STYLING BREAKDOWN:
        - Font variables: Makes all imported fonts available via CSS custom properties
        - antialiased: Improves font rendering on all devices
        - font-sans: Sets Geist Sans as the default font family
        - bg-[#f8f8f6]: Light cream background color for luxury feel
        - text-[#0A0A23]: Dark navy text color for high contrast and readability
        */}

        {/* ===== GLOBAL DATA MANAGEMENT ===== */}
        {/* 
        ReactQueryProvider wraps the entire app to provide:
        - Data fetching and caching capabilities
        - Loading state management
        - Error handling for API calls
        - Background data synchronization
        */}
        <ReactQueryProvider>
          {/* ===== FIXED HEADER NAVIGATION ===== */}
          {/* 
          Header component provides:
          - Brand logo and navigation
          - Search functionality
          - Mobile-responsive menu
          - Fixed positioning for always-visible navigation
          */}
          <Header />

          {/* ===== DYNAMIC PAGE CONTENT ===== */}
          {/* 
          Children represents the current page content:
          - Home page, product listings, detail pages, etc.
          - Content changes based on current route
          - Inherits all global styles and font configurations
          */}
          {children}

          {/* ===== STATIC FOOTER ===== */}
          {/* 
          Footer component provides:
          - Company information and contact details
          - Legal links (privacy, terms, etc.)
          - Additional navigation options
          - Social media links
          */}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}

// ===== LAYOUT CUSTOMIZATION EXAMPLES =====
/**
 * Common layout modifications:
 *
 * 1. ADD AUTHENTICATION PROVIDER:
 * ```tsx
 * <ReactQueryProvider>
 *   <AuthProvider>
 *     <Header />
 *     {children}
 *     <Footer />
 *   </AuthProvider>
 * </ReactQueryProvider>
 * ```
 *
 * 2. ADD THEME PROVIDER:
 * ```tsx
 * <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
 *   // ... existing content
 * </ThemeProvider>
 * ```
 *
 * 3. CONDITIONAL LAYOUT ELEMENTS:
 * ```tsx
 * {pathname !== '/admin' && <Header />}
 * {children}
 * {pathname !== '/checkout' && <Footer />}
 * ```
 *
 * 4. ADD GLOBAL NOTIFICATIONS:
 * ```tsx
 * <Header />
 * <NotificationSystem />
 * {children}
 * <Footer />
 * ```
 */
