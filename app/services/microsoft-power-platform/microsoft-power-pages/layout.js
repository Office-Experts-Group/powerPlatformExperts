import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Pages Services | Power Platform Experts",
  description:
    "Power Pages consultants for Australian businesses. We build external-facing portals connected to Dataverse, Dynamics 365 and Azure AD. Enterprise level security, role-based access, and embedded Power BI.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Pages Services | Power Platform Experts",
    description:
      "Power Pages consultants for Australian businesses. We build external-facing portals connected to Dataverse, Dynamics 365 and Azure AD. Enterprise level security, role-based access, and embedded Power BI.",
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
      "Power Pages consultants for Australian businesses. We build external-facing portals connected to Dataverse, Dynamics 365 and Azure AD. Enterprise level security, role-based access, and embedded Power BI.",
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
