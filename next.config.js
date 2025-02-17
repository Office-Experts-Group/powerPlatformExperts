const REDIRECTS = [
  {
    source:
      "/services/microsoft-power-platform/services/microsoft-power-platform/microsoft-power-pages",
    destination: "/",
    permanent: true,
  },
  {
    source: "/services/microsoft-power-platform",
    destination: "/",
    permanent: true,
  },
];

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,

  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
  },

  async redirects() {
    return REDIRECTS;
  },

  async headers() {
    return [
      {
        // Match all routes including static files and images
        source: "/:all*(svg|jpg|png|webp|css|js|woff|woff2|ttf|eot)",
        locale: false,
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow, noimageindex",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
      {
        // Regular routes
        source: "/:path*",
        headers: [
          // Same headers as above
          {
            key: "X-Robots-Tag",
            value: "index, follow, noimageindex",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },

  webpack: (config, { dev, isServer }) => {
    // Add CSS minification in production builds
    if (!dev && !isServer) {
      config.optimization.minimizer.push(new CssMinimizerPlugin());
    }
    return config;
  },
};

module.exports = nextConfig;
