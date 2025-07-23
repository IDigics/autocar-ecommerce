import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    // Disable webpack cache on Windows to prevent file system issues
    if (process.platform === "win32") {
      config.cache = false;
    }
    return config;
  },
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["@radix-ui/react-icons", "lucide-react"],
  },
};

export default nextConfig;
