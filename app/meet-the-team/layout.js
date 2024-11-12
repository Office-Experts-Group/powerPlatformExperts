import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Meet The Team - Power Platform Experts | Microsoft Power Platform Specialists",
  description:
    "Meet our experienced team of Microsoft Power Platform specialists, including certified Power BI developers, Power Apps consultants, Power Automate experts, and Power Pages developers.",

  // OpenGraph
  openGraph: {
    title: "Our Expert Power Platform Team | Power Platform Experts",
    description:
      "Meet our certified Microsoft Power Platform consultants specializing in Power BI analytics, Power Apps development, Power Automate workflows, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/meet-the-team/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Team",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Team expertise specific
    "Power Platform solution architects Australia",
    "Certified Power BI dashboard developers",
    "Custom Power Apps development specialists",
    "Power Automate workflow consultants",
    "Power Pages portal developers",

    // Technical expertise combinations
    "Power Platform SQL Server integration experts",
    "Power BI SharePoint integration specialists",
    "Power Apps Azure integration consultants",
    "Power Automate Office 365 workflow experts",

    // Specific skill sets
    "Power BI financial dashboard specialists",
    "Power Apps mobile solution architects",
    "Power Automate process automation experts",
    "Power Pages web portal developers",

    // Solution specific
    "Power BI data visualization consultants",
    "Power Apps canvas app developers",
    "Power Automate cloud flow specialists",
    "Power Pages site template experts",

    // Industry expertise
    "Power Platform healthcare solutions experts",
    "Power BI financial services consultants",
    "Power Apps manufacturing specialists",
    "Power Automate retail automation experts",

    // Location specific expertise
    "Power Platform consultants Sydney",
    "Power BI developers Melbourne",
    "Power Apps specialists Brisbane",
    "Power Automate experts Perth",

    // Service combination expertise
    "Power Platform full-stack developers",
    "Microsoft 365 integration specialists",
    "Database solution architects",
    "Cloud integration experts",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title: "Meet Our Power Platform Expert Team",
    description:
      "Meet our certified Microsoft Power Platform consultants specializing in Power BI analytics, Power Apps development, Power Automate workflows, and Power Pages solutions.",
    images: [
      "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.powerplatformexperts.com.au/meet-the-team/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
