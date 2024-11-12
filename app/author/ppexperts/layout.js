import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Power Platform Experts | Author Archive | Microsoft Power Platform Specialists",
  description:
    "Articles and insights from our certified Power Platform consultants covering Power BI, Power Apps, Power Automate, and Power Pages development, implementation, and best practices.",

  // OpenGraph
  openGraph: {
    title: "Power Platform Experts | Technical Insights & Solutions",
    description:
      "Expert articles and technical guidance on Microsoft Power Platform implementation, covering data visualization, workflow automation, app development, and web solutions.",
    url: "https://www.powerplatformexperts.com.au/author/ppexperts/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Author Profile",
      },
    ],
    locale: "en-AU",
    type: "profile",
  },

  // Additional metadata
  keywords: [
    // Expertise-specific long tail
    "Power BI dashboard optimization techniques",
    "Power Apps canvas app development guides",
    "Power Automate flow templates tutorials",
    "Power Pages portal customization tips",
    "Power Platform security best practices",

    // Solution-specific
    "Power BI financial reporting templates",
    "Power Apps inventory tracking solutions",
    "Power Automate approval workflow guides",
    "Power Pages form development tutorials",

    // Integration-focused
    "Power Platform Dataverse integration",
    "SharePoint Power Platform connections",
    "Power Platform Azure AD integration",
    "Teams Power Platform implementation",

    // Industry-specific
    "Healthcare Power Platform solutions",
    "Manufacturing Power Apps templates",
    "Financial services Power BI reports",
    "Retail Power Automate workflows",

    // Technical deep-dives
    "Power Platform licensing optimization",
    "Power Apps performance tuning",
    "Power BI DAX formula guides",
    "Power Automate error handling",

    // Implementation
    "Power Platform governance framework",
    "Power Apps deployment strategies",
    "Power BI report distribution",
    "Power Platform change management",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title: "Power Platform Experts | Technical Insights & Solutions",
    description:
      "Expert articles and technical guidance on Microsoft Power Platform implementation, covering data visualization, workflow automation, app development, and web solutions.",
    images: [
      "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.powerplatformexperts.com.au/author/ppexperts/",
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
