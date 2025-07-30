/**
 * TAILWIND CSS CONFIGURATION
 * ==========================
 *
 * This file configures Tailwind CSS for the AutoCar'z application.
 * Tailwind is a utility-first CSS framework that provides pre-built classes.
 *
 * KEY CONFIGURATIONS:
 * 1. Content paths - Where Tailwind should look for class usage
 * 2. Theme extensions - Custom colors, fonts, and breakpoints
 * 3. Responsive breakpoints - Screen sizes for responsive design
 *
 * BRAND DESIGN SYSTEM:
 * - Primary Color: #0D1B2A (Dark Navy) - Authority and luxury
 * - Accent Color: #FFD700 (Gold) - Premium and elegance
 * - Typography: Open Sans (modern) + Merriweather (elegant serif)
 *
 * MODIFICATION GUIDELINES:
 * - Add new color variables in the colors section
 * - Extend fontFamily for new font stacks
 * - Add custom breakpoints in screens section
 * - Install plugins via npm and add to plugins array
 */

import type { Config } from "tailwindcss";

export default {
  // ===== CONTENT CONFIGURATION =====
  // Tells Tailwind where to look for class names to include in the final CSS
  // This enables tree-shaking to keep the CSS bundle size minimal
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Pages directory (if using pages router)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // All component files
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // App directory (Next.js 13+ app router)
    // ADD MORE PATHS AS NEEDED:
    // "./lib/**/*.{js,ts,jsx,tsx}",         // Utility functions with classes
    // "./styles/**/*.{css,scss}",           // Style files with Tailwind classes
  ],

  // ===== THEME CONFIGURATION =====
  theme: {
    extend: {
      // ===== CUSTOM COLORS =====
      // Extend the default Tailwind color palette with brand-specific colors
      colors: {
        // CSS CUSTOM PROPERTIES (defined in globals.css)
        background: "var(--background)", // Dynamic background color
        foreground: "var(--foreground)", // Dynamic foreground color

        // ADD BRAND COLORS HERE:
        // primary: "#0D1B2A",               // Dark Navy - use bg-primary
        // accent: "#FFD700",                // Gold - use bg-accent
        // muted: "#71797E",                 // Medium Gray - use text-muted
        // cream: "#F8F8F5",                 // Light Cream - use bg-cream
      },

      // ===== CUSTOM FONT FAMILIES =====
      // Define font stacks that can be used with font-sans, font-serif classes
      fontFamily: {
        // SANS-SERIF FONTS (Modern, Clean)
        // Usage: font-sans or font-family: theme('fontFamily.sans')
        sans: [
          "Open Sans", // Primary web font (Google Fonts)
          "system-ui", // System font fallback
          "-apple-system", // macOS system font
          "BlinkMacSystemFont", // Older macOS
          "Segoe UI", // Windows system font
          "Roboto", // Android system font
          "sans-serif", // Generic fallback
        ],

        // SERIF FONTS (Elegant, Traditional)
        // Usage: font-serif for headings and elegant text
        serif: [
          "Merriweather", // Primary serif font (Google Fonts)
          "Georgia", // Web-safe serif
          "Times New Roman", // Classic serif fallback
          "serif", // Generic serif fallback
        ],

        // ADD MORE FONT FAMILIES AS NEEDED:
        // mono: ["Fira Code", "Consolas", "monospace"],  // For code blocks
        // display: ["Playfair Display", "serif"],        // For large headings
      },
    },

    // ===== RESPONSIVE BREAKPOINTS =====
    // Custom screen sizes for responsive design
    // These override Tailwind's default breakpoints
    screens: {
      xs: "475px", // Extra small devices (large phones)
      sm: "640px", // Small devices (tablets) - Tailwind default
      md: "768px", // Medium devices (small laptops) - Tailwind default
      lg: "1024px", // Large devices (laptops) - Tailwind default
      desktop: "1000px", // Custom breakpoint for desktop layouts
      xl: "1280px", // Extra large devices - Tailwind default

      // ADD MORE BREAKPOINTS AS NEEDED:
      // "2xl": "1536px",     // 2X large devices
      // "3xl": "1920px",     // Ultra-wide screens
      // "mobile": "480px",   // Mobile-specific breakpoint
    },
  },

  // ===== PLUGINS CONFIGURATION =====
  // Add Tailwind plugins for additional functionality
  plugins: [
    // ADD PLUGINS HERE:
    // require('@tailwindcss/forms'),        // Better form styling
    // require('@tailwindcss/typography'),   // Prose classes for rich text
    // require('@tailwindcss/aspect-ratio'), // Aspect ratio utilities
    // require('@tailwindcss/container-queries'), // Container queries
  ],

  // ===== ADDITIONAL CONFIGURATIONS =====
  // darkMode: 'class',                    // Enable class-based dark mode
  // important: true,                      // Make all utilities !important
  // prefix: 'tw-',                        // Prefix all classes with 'tw-'
  // corePlugins: {                        // Disable specific core plugins
  //   preflight: false,                   // Disable base styles reset
  // },
} satisfies Config;
