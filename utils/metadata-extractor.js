// // utils/metadata-extractor.js
// import { headers } from "next/headers";

// const IMPORTANT_TAGS = [
//   "h1",
//   "h2",
//   "h3",
//   "p",
//   "li",
//   "article",
//   "section",
//   "main",
// ];

// export class ContentExtractor {
//   constructor() {
//     this.title = "";
//     this.description = "";
//     this.keywords = new Set();
//   }

//   extractFromContent(content) {
//     if (!content) return {};

//     // Extract meaningful words for keywords
//     const words = content
//       .toLowerCase()
//       .replace(/[^a-z0-9\s]/g, "")
//       .split(" ")
//       .filter((word) => word.length > 3)
//       .filter((word) => !["and", "the", "for", "that", "with"].includes(word));

//     words.forEach((word) => this.keywords.add(word));

//     // Get first paragraph-like content for description
//     const sentences = content.split(/[.!?]/);
//     this.description = sentences.slice(0, 2).join(". ").trim();

//     if (this.description.length > 157) {
//       this.description = this.description.slice(0, 157) + "...";
//     }

//     return {
//       description: this.description,
//       keywords: Array.from(this.keywords),
//     };
//   }
// }

// export async function generateEnhancedMetadata(content = "", options = {}) {
//   const {
//     serviceName = "",
//     location = "",
//     baseUrl = "powerplatformexperts.com.au",
//     path = "",
//   } = options;

//   const extractor = new ContentExtractor();
//   const extracted = extractor.extractFromContent(content);

//   // Generate location-based keywords
//   const locationKeywords = location
//     ? [
//         `${serviceName} ${location}`,
//         `${serviceName} expert ${location}`,
//         `${serviceName} consultant ${location}`,
//         `professional ${serviceName} ${location}`,
//       ]
//     : [];

//   // Base keywords that should always be included
//   const baseKeywords = [
//     serviceName,
//     `${serviceName} expert`,
//     `${serviceName} consultant`,
//     "professional",
//     "services",
//     "australia",
//   ].filter(Boolean);

//   const allKeywords = new Set([
//     ...extracted.keywords,
//     ...locationKeywords,
//     ...baseKeywords,
//   ]);

//   return {
//     description: extracted.description,
//     keywords: Array.from(allKeywords),
//     url: `https://${baseUrl}${path}`,
//     openGraph: {
//       description: extracted.description,
//       url: `https://${baseUrl}${path}`,
//       siteName: "Power Platform Experts",
//     },
//   };
// }

// // Helper function to combine metadata
// export function combineMetadata(autoMetadata = {}, existingMetadata = {}) {
//   return {
//     ...autoMetadata,
//     ...existingMetadata,
//     keywords: Array.from(
//       new Set([
//         ...(existingMetadata.keywords || []),
//         ...(autoMetadata.keywords || []),
//       ])
//     ),
//     openGraph: {
//       ...autoMetadata.openGraph,
//       ...existingMetadata.openGraph,
//     },
//   };
// }
