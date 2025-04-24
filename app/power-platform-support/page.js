import React from 'react'

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from './(components)/PageSegmentMain';
import PageSegment4 from './(components)/PageSegment4';
import BlackSegment from './(components)/BlackSegment';

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/power-platform-support",
      url: "https://www.powerplatformexperts.com.au/power-platform-support",
      name: "Power Platform Support Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-04-08T00:00:00+00:00",
      dateModified: "2025-04-08T00:00:00+00:00",
      description:
        "Power Platform support services for Power BI, Power Apps, Power Automate, and Power Pages. Expert assistance, consulting, and training for Australian businesses.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/power-platform-support"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.powerplatformexperts.com.au/power-platform-support#breadcrumb",
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
          name: "Power Platform Support Services",
          item: "https://www.powerplatformexperts.com.au/power-platform-support",
        },
      ],
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Power Platform Support Services",
  "provider": {
    "@type": "Organization",
    "name": "Power Platform Experts - Office Experts Group",
    "sameAs": [
      "https://powerplatformexperts.com.au",
      "https://officeexperts.com.au"
    ]
  },
  "serviceType": "Power Platform Consulting and Support",
  "areaServed": {
    "@type": "Country",
    "name": "Australia"
  },
  "description": "Expert support for the Microsoft Power Platform including Power BI, Power Apps, Power Automate, and Power Pages. Troubleshooting, consulting, and training services tailored to your business needs.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "AUD"
    }
  },
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Australian businesses using Microsoft Power Platform"
  },
  "serviceOutput": "Efficient apps, automations, reports, and websites built and maintained using Microsoft Power Platform tools.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Power Platform Support Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power BI Support & Visualisation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Apps Development & Maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Automate Workflows & Automation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Pages Setup & Portal Support"
        }
      }
    ]
  }
};

const PowerPlatformSupport = () => {
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
          title="Power Platform Support for Australian Businesses"
          desktopImage={handShake}
          mobileImage={handShakeMob}
          altDesk={"Business partners shaking hands"}
          altMob={"Business partners shaking hands"}
        />
        <PageSegmentMain />
        <BlackSegment />
        <PageSegment4 />
        <Contact />
      </main>
    </>
  );
};

export default PowerPlatformSupport;
