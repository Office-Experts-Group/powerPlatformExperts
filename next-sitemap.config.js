// next-sitemap.config.js
// Page sitemap only; videos are served separately by app/video-sitemap.xml/route.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.powerplatformexperts.com.au",
  generateRobotsTxt: true,
  trailingSlash: false,
  autoLastmod: false, // Without this, every URL gets the build time as its lastmod
  exclude: ["/api/*"],

  exclude: ["/api/*", "/test-page, /video-sitemap.xml"],

  robotsTxtOptions: {},
};
