import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],

  // Image optimization for faster loading
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400, // Cache for 24 hours
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dentistemantantawy.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable compression for faster transfer
  compress: true,

  // Optimize production builds
  productionBrowserSourceMaps: false,

  // Enable React optimizations
  reactStrictMode: true,

  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  // HTTP headers for caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(js|css)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Turbopack configuration (compatible with Next.js 16)
  turbopack: {},
};

export default nextConfig;
