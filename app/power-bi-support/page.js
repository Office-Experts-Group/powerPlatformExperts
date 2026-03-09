import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const SegmentMainRepeat = dynamic(
  () => import("./(components)/SegmentMainRepeat"),
);
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/power-bi-support",
      url: "https://www.powerplatformexperts.com.au/power-bi-support",
      name: "Power BI Support Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-04-04T00:00:00+00:00",
      dateModified: "2025-04-04T00:00:00+00:00",
      description:
        "Power BI support services for business intelligence solutions. Expert advice and training from certified professionals.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-bi-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/power-bi-support"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-bi-support#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.powerplatformexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Power BI Support Services",
          item: "https://www.powerplatformexperts.com.au/power-bi-support",
        },
      ],
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Power BI Support Services",
  provider: {
    "@type": "Organization",
    name: "Power Platform Experts - Office Experts Group",
    sameAs: [
      "https://powerplatformexperts.com.au",
      "https://officeexperts.com.au",
    ],
  },
  serviceType: "Business Intelligence Support",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  description:
    "Professional Power BI support services including troubleshooting, optimisation, training, and ongoing maintenance for Australian businesses.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AUD",
    },
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Australian businesses using Microsoft Power BI",
  },
  serviceOutput:
    "Optimised Power BI reports and dashboards, improved performance, and enhanced business intelligence capabilities",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Power BI Support Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power BI Troubleshooting & Technical Support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power BI Maintenance & Enhancement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power BI Training & Knowledge Transfer",
        },
      },
    ],
  },
};

const PowerBi = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <ServiceHero
          title="Professional Power BI Support and Training"
          desktopImage={handShake}
          mobileImage={handShakeMob}
          altDesk={"greeting shaking hands"}
          altMob={"greeting shaking hands"}
        />
        <PageSegmentMain />
        <PageSegment4 />
        <BlackSegment />
        <SegmentMainRepeat />
        <Segment4Repeat />
        <Contact />
      </main>
    </>
  );
};

export default PowerBi;
