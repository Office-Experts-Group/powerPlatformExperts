// powerplatformexperts.com.au/sharepoint-consulting-and-development/layout.js
import React from "react";

export const metadata = {
  title:
    "SharePoint Consulting & Development Services | Power Platform Experts",
  description:
    "Expert SharePoint consultants with 25+ years of experience. Implementation, migration, custom development and Copilot readiness. Call for a free assessment.",

  openGraph: {
    title:
      "SharePoint Consulting & Development Services | Power Platform Experts",
    description:
      "Expert SharePoint consultants with 25+ years of experience. Implementation, migration, custom development and Copilot readiness. Call for a free assessment.",
    url: "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development",
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

  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title:
      "SharePoint Consulting & Development Services | Power Platform Experts",
    description:
      "Expert SharePoint consultants with 25+ years of experience. Implementation, migration, custom development and Copilot readiness. Call for a free assessment.",
    images: ["/logo.png"],
  },

  keywords: ["SharePoint consulting"],

  alternates: {
    canonical: "/sharepoint-consulting-and-development",
  },
};

export default function SharePointLayout({ children }) {
  return <>{children}</>;
}
