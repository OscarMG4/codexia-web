import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF pesa ~20-30% menos que WebP; los navegadores sin soporte reciben WebP
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
