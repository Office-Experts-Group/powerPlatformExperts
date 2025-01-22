import React from "react";

export const metadata = {
  // Basic metadata
  title: "Our Expert Power Platform Team | Power Platform Experts",
  description:
    "Meet our certified Microsoft Power Platform consultants specialising in Power BI analytics, Power Apps development, Power Automate workflows, and Power Pages solutions.",

  // OpenGraph
  openGraph: {
    title: "Our Expert Power Platform Team | Power Platform Experts",
    description:
      "Meet our certified Microsoft Power Platform consultants specialising in Power BI analytics, Power Apps development, Power Automate workflows, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/meet-the-team/",
  },

  // Additional metadata
  keywords: [
    "Power Platform expert development team",
    // Team expertise specific
    // "Power Platform solution architects Australia",
    // "Certified Power BI dashboard developers",
    // "Custom Power Apps development specialists",
    // "Power Automate workflow consultants",
    // "Power Pages portal developers",

    // // Technical expertise combinations
    // "Power Platform SQL Server integration experts",
    // "Power BI SharePoint integration specialists",
    // "Power Apps Azure integration consultants",
    // "Power Automate Office 365 workflow experts",

    // // Specific skill sets
    // "Power BI financial dashboard specialists",
    // "Power Apps mobile solution architects",
    // "Power Automate process automation experts",
    // "Power Pages web portal developers",

    // // Solution specific
    // "Power BI data visualization consultants",
    // "Power Apps canvas app developers",
    // "Power Automate cloud flow specialists",
    // "Power Pages site template experts",

    // // Industry expertise
    // "Power Platform healthcare solutions experts",
    // "Power BI financial services consultants",
    // "Power Apps manufacturing specialists",
    // "Power Automate retail automation experts",

    // // Location specific expertise
    // "Power Platform consultants Sydney",
    // "Power BI developers Melbourne",
    // "Power Apps specialists Brisbane",
    // "Power Automate experts Perth",

    // // Service combination expertise
    // "Power Platform full-stack developers",
    // "Microsoft 365 integration specialists",
    // "Database solution architects",
    // "Cloud integration experts",
  ],

  metadataBase: new URL("https://www.powerplatformexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-power-platform/meet-the-team/",
    languages: {
      "en-AU": "/services/microsoft-power-platform/meet-the-team/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
