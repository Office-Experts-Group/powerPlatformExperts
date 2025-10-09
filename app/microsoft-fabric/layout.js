import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Fabric Services | Power Platform Experts",
  description:
    "Expert Microsoft Fabric implementation and consulting services. Unify your data analytics with OneLake, real-time insights, and seamless Power BI integration.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Fabric Services | Unified Analytics Platform",
    description:
      "Transform your data estate with Microsoft's all-in-one analytics solution. Expert Fabric implementation, OneLake configuration, and seamless Power BI integration.",
    url: "https://www.powerplatformexperts.com.au/microsoft-fabric",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Keywords
  keywords: ["Microsoft Fabric"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Fabric Services | Power Platform Experts",
    description:
      "Expert Microsoft Fabric implementation and consulting services. Unify your data analytics with OneLake and seamless Power BI integration.",
    images: ["/logo.png"],
  },

  // Canonical URL
  alternates: {
    canonical: "/microsoft-fabric",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
