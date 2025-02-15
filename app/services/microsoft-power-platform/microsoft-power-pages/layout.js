import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Pages Services | Power Platform Experts",
  description:
    "Empower your business with Microsoft Power Pages services. Create secure, responsive websites with data integration, visuals, and AI insights. Contact us today for expert assistance!",

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Pages Services | Power Platform Experts",
    description:
      "Empower your business with Microsoft Power Pages services. Create secure, responsive websites with data integration, visuals, and AI insights. Contact us today for expert assistance!",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
  },

  // Additional metadata
  keywords: [
    // Core Power Pages specific keywords (extracted from content)
    // "Power Pages cross-device compatibility",
    // "Power Pages data integration solutions",
    // "Power Pages security governance implementation",
    // "Interactive Power Pages visuals development",
    // "Power Pages AI-powered insights configuration",
    "Custom Power Pages web development",

    // // Integration specific (based on content)
    // "Power Pages Power BI integration",
    // "Power Pages Power Apps connectivity",
    // "Power Pages Power Platform integration",
    // "Power Pages Power Query implementation",

    // // Feature specific (from content analysis)
    // "Power Pages role-based security setup",
    // "Power Pages data visualisation tools",
    // "Power Pages Python integration services",
    // "Power Pages mobile optimisation",

    // // Service specific (based on provided services)
    // "Power Pages consultant Australia",
    // "Remote Power Pages development",
    // "Power Pages training services Sydney",
    // "Custom Power Pages solutions Melbourne",
    // "Power Pages support services Australia",

    // // Technical capabilities (from content)
    // "Power Pages dashboard development",
    // "Power Pages data source connectivity",
    // "Power Pages collaborative features",
    // "Power Pages security protocols",
    // "Power Pages governance framework",
  ],

  metadataBase: new URL("https://www.powerplatformexperts.com.au"),
  alternates: {
    canonical:
      "/services/microsoft-power-platform/services/microsoft-power-platform/microsoft-power-pages/",
    languages: {
      "en-AU":
        "/services/microsoft-power-platform/services/microsoft-power-platform/microsoft-power-pages/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
