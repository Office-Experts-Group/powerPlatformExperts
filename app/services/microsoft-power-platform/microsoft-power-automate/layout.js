import React from "react";

export const metadata = {
  title:
    "Microsoft Power Automate & AI Builder Consulting | Power Platform Experts",
  description:
    "Expert Power Automate consultants to optimise your business processes. We can update your existing workflows and add new integrations that save you time and money. From simple flows, to AI Builder and Copilot Studio automation agents.",

  keywords: ["power automate"],

  alternates: {
    canonical: "/services/microsoft-power-platform/microsoft-power-automate",
    alternate: [
      {
        url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      },
    ],
  },

  // OpenGraph
  openGraph: {
    title:
      "Microsoft Power Automate & AI Builder Consulting | Power Platform Experts",
    description:
      "Expert Power Automate consultants to optimise your business processes. We can update your existing workflows and add new integrations that save you time and money. From simple flows, to AI Builder and Copilot Studio automation agents.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
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
    site: "@OfficeExpertsG1",
    title:
      "Microsoft Power Automate & AI Builder Consulting | Power Platform Experts",
    description:
      "Expert Power Automate consultants to optimise your business processes. We can update your existing workflows and add new integrations that save you time and money. From simple flows, to AI Builder and Copilot Studio automation agents.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
