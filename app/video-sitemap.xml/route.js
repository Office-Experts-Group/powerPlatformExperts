// app/video-sitemap.xml/route.js
// Builds a valid video sitemap from videoData.js at build time

// Adjust this import path to wherever videoData.js lives
import videoMapping from "../../videoData.js";

export const dynamic = "force-static";

const SITE_URL =
  process.env.SITE_URL || "https://www.powerplatformexperts.com.au";

// Extracts the YouTube video ID from any embed, watch or share URL (ignores ?si= and other parameters)
const getYouTubeId = (url = "") =>
  url.match(/(?:embed\/|watch\?v=|youtu\.be\/)([\w-]{11})/)?.[1];

// Uses the stored thumbnail unless it is a malformed YouTube one, in which case it is rebuilt from the ID
const getThumbnail = (video) => {
  const id = getYouTubeId(video.playerUrl);
  return id
    ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
    : video.thumbnailUrl;
};

// Escapes characters that are not allowed in XML text
const escapeXml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

// A direct video file belongs in content_loc; an embeddable player page
// (e.g. a YouTube or Vimeo embed URL) belongs in player_loc
const isVideoFile = (url = "") => /\.(mp4|webm|mov)(\?.*)?$/i.test(url);

const buildVideo = (video) => `
    <video:video>
<video:thumbnail_loc>${escapeXml(getThumbnail(video))}</video:thumbnail_loc>
      <video:title>${escapeXml(video.title)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>
      ${
        isVideoFile(video.playerUrl)
          ? `<video:content_loc>${escapeXml(video.playerUrl)}</video:content_loc>`
          : `<video:player_loc>${escapeXml(video.playerUrl)}</video:player_loc>`
      }
      <video:duration>${video.duration}</video:duration>
    </video:video>`;

// One <url> per page, with its videos as direct children (no wrapper element)
const buildUrl = ([path, videos]) => `
  <url>
    <loc>${SITE_URL}${path}</loc>${videos.map(buildVideo).join("")}
  </url>`;

export function GET() {
  const entries = Object.entries(videoMapping).filter(([, v]) => v?.length);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">${entries
    .map(buildUrl)
    .join("")}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
