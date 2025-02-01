const REDIRECTS = [
  {
    source:
      "/services/microsoft-power-platform/services/microsoft-power-platform/microsoft-power-pages",
    destination: "/services/microsoft-power-platform/microsoft-power-pages",
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

  webpack: (config, { dev, isServer }) => {
    // Add CSS minification in production builds
    if (!dev && !isServer) {
      config.optimization.minimizer.push(new CssMinimizerPlugin());
    }
    return config;
  },
};

module.exports = nextConfig;
