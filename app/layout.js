import React from "react";
import dynamic from "next/dynamic";

import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";

import HeadTop from "../components/HeadTop";
import Header from "./(components)/Header";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false, // Client-side only
});

const Footer = dynamic(() => import("./(components)/Footer"), {
  ssr: true, // We want this server rendered but loaded dynamically
});

const Copyright = dynamic(() => import("../components/Copyright"));
const ScrollBtn = dynamic(() => import("../components/ScrollBtn"), {
  ssr: false, // Client-side only as it depends on scroll
});

import "./global.css";
import ScrollIndicator from "../components/ScrollIndicator";
import AhrefsAnalytics from "../components/AhrefsAnalytics";

const aptos = localFont({
  src: [
    {
      path: "../public/fonts/aptos/Aptos.ttf",

      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/aptos/Aptos-ExtraBold.ttf",
      weight: "800",
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
  title: "Power Platform Consultants | Power Platform Experts",
  description:
    "Experts in Microsoft Power BI, Apps, Automate & Pages. We deliver tailored solutions to streamline business processes and improve efficiency.",

  // OpenGraph
  openGraph: {
    title: "Power Platform Consultants | Power Platform Experts",
    description:
    "Experts in Microsoft Power BI, Apps, Automate & Pages. We deliver tailored solutions to streamline business processes and improve efficiency.",
    url: "https://www.powerplatformexperts.com.au",
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

  // Additional metadata
  keywords: [
    // currently ranking with
    "power platform consultants",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title: "Power Platform Consultants | Power Platform Experts",
    description:
    "Experts in Microsoft Power BI, Apps, Automate & Pages. We deliver tailored solutions to streamline business processes and improve efficiency.",
    images: ["/logo.png"],
  },

  // Additional tags
  metadataBase: new URL("https://www.powerplatformexperts.com.au"),
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "/",
    },
  },
  verification: {
    google: "4pCGu8qrYPdfGHve5jLQXy0z9_WNgV7qAtUU4lg3QTo",
  },

  alternates: {
    canonical: "https://www.powerplatformexperts.com.au",
  },

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

  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.powerplatformexperts.com.au"
      : "http://localhost:3000"
  ),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body className={`${aptos.variable} ${garamond.variable}`}>
        <AhrefsAnalytics />
        <HeadTop />
        <Header />
        {children}
        <CookieConsent />
        <Footer />
        <Copyright />
        <ScrollBtn />
        <ScrollIndicator />
      </body>
    </html>
  );
}
