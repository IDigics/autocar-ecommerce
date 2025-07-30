/**
 * NEXT.JS CONFIGURATION FILE
 * =========================
 *
 * This file configures various Next.js features and optimizations for the AutoCar'z application.
 *
 * KEY CONFIGURATIONS:
 * 1. Image handling for external sources
 * 2. Webpack optimizations for Windows compatibility
 * 3. Performance optimizations for package imports
 *
 * MODIFICATION GUIDELINES:
 * - Add new image sources to remotePatterns for external images
 * - Add package names to optimizePackageImports for better performance
 * - Webpack config can be extended for custom build requirements
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ===== IMAGE OPTIMIZATION CONFIGURATION =====
  // Configures Next.js Image component to handle external image sources
  images: {
    // Define allowed external image sources for security
    remotePatterns: [
      {
        protocol: "http", // Allow HTTP protocol (development only)
        hostname: "localhost", // Allow localhost images
        port: "3000", // Specific port for local development
        pathname: "/image/**", // Only allow images from /image/ path
      },
      // TO ADD MORE IMAGE SOURCES:
      // {
      //   protocol: "https",
      //   hostname: "your-cdn.com",
      //   pathname: "/images/**",
      // },
    ],
  },

  // ===== WEBPACK CONFIGURATION =====
  // Custom webpack settings for build optimization and platform compatibility
  webpack: (config, { isServer }) => {
    // WINDOWS COMPATIBILITY FIX
    // Disable webpack cache on Windows to prevent file system issues
    // This resolves common development problems on Windows machines
    if (process.platform === "win32") {
      config.cache = false;
    }

    // CUSTOM WEBPACK EXTENSIONS CAN BE ADDED HERE:
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ["@svgr/webpack"]
    // });

    return config;
  },

  // ===== EXPERIMENTAL FEATURES =====
  // Enable Next.js experimental features for better performance
  experimental: {
    // PACKAGE IMPORT OPTIMIZATION
    // Automatically optimizes imports from these packages to reduce bundle size
    // Add more packages here as needed for better performance
    optimizePackageImports: [
      "@radix-ui/react-icons", // Icon library optimization
      "lucide-react", // Another icon library optimization
      // ADD MORE PACKAGES HERE AS NEEDED:
      // "lodash",
      // "date-fns",
    ],
  },

  // ===== ADDITIONAL CONFIGURATIONS CAN BE ADDED HERE =====
  // Examples:
  // output: 'standalone',              // For Docker deployments
  // poweredByHeader: false,            // Remove X-Powered-By header
  // compress: true,                    // Enable gzip compression
  // reactStrictMode: true,             // Enable React strict mode
};

export default nextConfig;
