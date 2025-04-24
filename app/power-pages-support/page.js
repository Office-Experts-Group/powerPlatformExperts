import React from 'react'

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from './(components)/PageSegmentMain';
import PageSegment4 from './(components)/PageSegment4';

import longDesk from "../../public/pageHeros/longDesk.webp";
import puzzleMob from "../../public/pageHeros/mob/puzzleMob.webp";
import BlackSegment from './(components)/BlackSegment';

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
      "@id": "https://www.powerplatformexperts.com.au/power-pages-support",
      url: "https://www.powerplatformexperts.com.au/power-pages-support",
      name: "Power Pages Support Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-04-04T00:00:00+00:00",
      dateModified: "2025-04-04T00:00:00+00:00",
      description:
        "Power Pages support services for business intelligence solutions. Expert advice and training from certified professionals.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-pages-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/power-pages-support"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.powerplatformexperts.com.au/power-pages-support#breadcrumb",
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
          name: "Power Pages Support Services",
          item: "https://www.powerplatformexperts.com.au/power-pages-support",
        },
      ],
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Power Pages Support Services",
  "provider": {
    "@type": "Organization",
    "name": "Power Platform Experts - Office Experts Group",
    "sameAs": [
      "https://powerplatformexperts.com.au",
      "https://officeexperts.com.au"
    ]
  },
  "serviceType": "Power Pages Development & Support",
  "areaServed": {
    "@type": "Country",
    "name": "Australia"
  },
  "description": "Professional Power Pages support services including troubleshooting, performance optimisation, maintenance, and feature enhancements for Australian businesses.",
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
    "audienceType": "Australian businesses using Microsoft Power Pages"
  },
  "serviceOutput": "Reliable, secure, and user-friendly Power Pages portals with optimised performance and seamless user experience.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Power Pages Support Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Pages Troubleshooting & Technical Support"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Pages Maintenance & Enhancement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Pages Performance Optimisation & Design Updates"
        }
      }
    ]
  }
};

const PowerPages = () => {
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
        title="Professional Power Pages Support and Development"
        desktopImage={longDesk}
        mobileImage={puzzleMob}
        altDesk={"people working at an office desk"}
        altMob={"people holding large puzzle pieces"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <BlackSegment />
      <Contact />
    </main>
    </>
  )
}

export default PowerPages