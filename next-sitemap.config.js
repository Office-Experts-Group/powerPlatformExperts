// next-sitemap.config.js
const sitemapXmlNamespace = {
  xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
  'xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1'
};

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.powerplatformexperts.com.au',
  generateRobotsTxt: true,
  transform: async (config, path) => {
    // Get video data for this specific page path
    const videos = await getVideoDataForPath(path);
    
    // If no videos for this page, return normal sitemap entry
    if (!videos || videos.length === 0) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      };
    }
    
    // Create video sitemap entries
    const videoTags = videos.map(video => `
      <video:video>
        <video:thumbnail_loc>${video.thumbnailUrl}</video:thumbnail_loc>
        <video:title>${video.title}</video:title>
        <video:description>${video.description}</video:description>
        <video:player_loc allow_embed="yes">${video.playerUrl}</video:player_loc>
        <video:duration>${video.duration}</video:duration>
      </video:video>
    `).join('');

    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
      additionalTags: videoTags,
    };
  },
}

// This function retrieves video data for a specific page path
async function getVideoDataForPath(path) {
  const videoMapping = require('./videoData.js');
  return videoMapping[path] || [];
}