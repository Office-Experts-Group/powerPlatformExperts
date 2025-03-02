import React from "react";

export const metadata = {
  // Basic metadata
  title: " Author Archive | Power Platform Experts",
  description:
    "Articles and insights from our certified Power Platform consultants covering Power BI, Power Apps, Power Automate, and Power Pages development, implementation, and best practices.",

  // OpenGraph
  openGraph: {
    title: "Power Platform Experts | Technical Insights & Solutions",
    description:
      "Expert articles and technical guidance on Microsoft Power Platform implementation, covering data visualization, workflow automation, app development, and web solutions.",
    url: "https://www.powerplatformexperts.com.au/author/ppexperts",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://www.powerplatformexperts.com.au/logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Author Profile",
      },
    ],
    locale: "en-AU",
    type: "profile",
  },

  robots: {
    index: false,
    follow: false,
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title: "Power Platform Experts | Technical Insights & Solutions",
    description:
      "Expert articles and technical guidance on Microsoft Power Platform implementation, covering data visualization, workflow automation, app development, and web solutions.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/author/ppexperts",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
