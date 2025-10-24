import React from "react";

export const metadata = {
  title: "Power BI Consultants Sydney | Expert Dashboard Development",
  description:
    "Leading Power BI consultants in Sydney. Custom dashboards, real-time analytics, and data visualisation solutions. Get in touch for a free consultation.",

  openGraph: {
    title: "Power BI Consultants Sydney | Power Platform Experts",
    description:
      "Expert Power BI consulting services in Sydney. Transform your data into actionable insights with custom dashboards and real-time reporting.",
    url: "https://www.powerplatformexperts.com.au/power-bi-sydney",
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

  keywords: ["Power BI Sydney"],

  alternates: {
    canonical: "/power-bi-sydney",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
