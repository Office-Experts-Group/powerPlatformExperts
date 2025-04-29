import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Pages Services | Power Platform Experts",
  description:
    "Build secure, responsive websites with Microsoft Power Pages. Integrate data, enhance visuals, and unlock AI insights. Expert help from Power Platform specialists.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Pages Services | Power Platform Experts",
    description:
    "Build secure, responsive websites with Microsoft Power Pages. Integrate data, enhance visuals, and unlock AI insights. Expert help from Power Platform specialists.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 620,
        alt: "Power Platform Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      site: "@PowerPlatformExp",
      title: "Microsoft Power Pages Services | Power Platform Experts",
      description:
      "Build secure, responsive websites with Microsoft Power Pages. Integrate data, enhance visuals, and unlock AI insights. Expert help from Power Platform specialists.",
      images: ["/logo.png"],
    },

  // Additional metadata
  keywords: ["Custom Power Pages web development"],

  alternates: {
    canonical: "/services/microsoft-power-platform/microsoft-power-pages",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
