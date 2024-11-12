import React from "react";
import PropTypes from "prop-types";

import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

import HeadTop from "../components/HeadTop";
import Header from "./(components)/Header";
import CookieConsent from "../components/CookieConsent";
import Footer from "./(components)/Footer";
import Copyright from "../components/Copyright";
import ScrollBtn from "../components/ScrollBtn";

import "./global.css";

const aptos = localFont({
  src: [
    {
      path: "../public/fonts/Aptos/Aptos.ttf", // Assuming this is the Regular weight
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aptos/Aptos-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Aptos/Aptos-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Aptos/Aptos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Aptos/Aptos-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Aptos/Aptos-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-aptos",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-garamond",
});

export const metadata = {
  // Basic metadata
  title:
    "Power Platform Experts | Microsoft Power Platform Design, Development and Consulting",
  description:
    "Microsoft's Power Platform specialists offering expert consulting in Power BI, Power Apps, Power Automate, and Power Pages. Delivering tailored solutions for business efficiency and automation.",

  // OpenGraph
  openGraph: {
    title:
      "Power Platform Experts | Microsoft Power Platform Consulting & Solutions",
    description:
      "Specialized Microsoft Power Platform consulting services including Power BI visualization, Power Apps development, Power Automate workflow automation, and Power Pages web solutions.",
    url: "https://www.powerplatformexperts.com.au/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Core Power Platform services
    "Power Platform consulting Australia",
    "Power BI dashboard development",
    "Custom Power Apps solutions",
    "Power Automate workflow automation",
    "Power Pages web development",

    // Location-based
    "Power Platform consultants Sydney",
    "Power BI specialists Melbourne",
    "Power Apps developers Brisbane",
    "Power Automate experts Perth",

    // Service-specific long tail
    "Power BI real-time analytics dashboards",
    "Power Apps custom business applications",
    "Power Automate process automation workflows",
    "Power Pages data collection forms",
    "Power Platform system integration",

    // Industry-specific
    "Power BI financial reporting solutions",
    "Power Apps inventory management systems",
    "Power Automate document processing",
    "Power Platform business process automation",

    // Technology combinations
    "Power BI SQL Server integration",
    "Power Apps SharePoint connectivity",
    "Power Automate Azure integration",
    "Power Platform Microsoft 365 integration",

    // Specific solutions
    "Power BI data visualization consulting",
    "Power Apps mobile solution development",
    "Power Automate email workflow automation",
    "Power Pages customer portal development",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title:
      "Power Platform Experts | Microsoft Power Platform Consulting & Solutions",
    description:
      "Specialized Microsoft Power Platform consulting services including Power BI visualization, Power Apps development, Power Automate workflow automation, and Power Pages web solutions.",
    images: [
      "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.powerplatformexperts.com.au/",
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
  return (
    <html lang="en-AU">
      <body className={`${aptos.variable} ${garamond.variable}`}>
        <HeadTop />
        <Header />
        {children}
        <CookieConsent />
        <Footer />
        <Copyright />
        <ScrollBtn />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
