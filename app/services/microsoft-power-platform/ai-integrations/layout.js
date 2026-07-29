// app/services/microsoft-power-platform/ai-integrations/layout.js
import React from "react";

export const metadata = {
  // Basic metadata
  title: "AI Integrations for Microsoft 365 & Power Platform | Power Platform Experts",
  description:
    "Custom AI agents, Microsoft Copilot rollouts, and secure AI data solutions for Australian businesses. Built on Power Platform, Azure and Dataverse. Get a free consultation.",

  // OpenGraph
  openGraph: {
    title:
      "AI Integrations for Microsoft 365 & Power Platform | Power Platform Experts",
    description:
      "Custom AI agents, Microsoft Copilot rollouts, and secure AI data solutions for Australian businesses. Built on Power Platform, Azure and Dataverse. Get a free consultation.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/ai-integrations",
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
  keywords: [
    "AI integrations",
    "custom AI agents",
    "Microsoft Copilot integration",
    "Copilot intranet",
    "secure AI solutions Australia",
    "AI agent development",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "AI Integrations for Microsoft 365 & Power Platform | Power Platform Experts",
    description:
      "Custom AI agents, Microsoft Copilot rollouts, and secure AI data solutions for Australian businesses. Built on Power Platform, Azure and Dataverse. Get a free consultation.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/services/microsoft-power-platform/ai-integrations",
  },
};

export default function AiIntegrationsLayout({ children }) {
  return <>{children}</>;
}
