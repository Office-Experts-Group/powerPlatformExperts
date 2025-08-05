import React from "react";

export const metadata = {
  // Basic metadata
  title: "Getting Started with Power Apps and Microsoft SQL Database",
  description:
    "Connect Power Apps to SQL databases: Set up Azure SQL, create tables and relationships, use stored procedures and Power Automate for inventory management.",

  // OpenGraph
  openGraph: {
    title: "Getting Started with Power Apps and Microsoft SQL Database",
    description:
      "Connect Power Apps to SQL databases: Set up Azure SQL, create tables and relationships, use stored procedures and Power Automate for inventory management.",
    url: "https://www.powerplatformexperts.com.au/blog/power-apps-with-sql-database",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: ["Power Apps SQL Database"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Getting Started with Power Apps and Microsoft SQL Database",
    description:
      "Connect Power Apps to SQL databases: Set up Azure SQL, create tables and relationships, use stored procedures and Power Automate for inventory management.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/power-apps-with-sql-database",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
