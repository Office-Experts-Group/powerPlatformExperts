import React from 'react'

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from './(components)/PageSegmentMain';
import PageSegment4 from './(components)/PageSegment4';
import SegmentMainRepeat from './(components)/SegmentMainRepeat';
import BlackSegment from './(components)/BlackSegment';

import notes from "../../public/pageHeros/notes.webp";
import coffeeMob from "../../public/pageHeros/mob/coffeeMob.webp";

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
      "@id": "https://www.powerplatformexperts.com.au/power-apps-support",
      url: "https://www.powerplatformexperts.com.au/power-apps-support",
      name: "Power Apps Support Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-04-04T00:00:00+00:00",
      dateModified: "2025-04-04T00:00:00+00:00",
      description:
        "Power Apps support services for business intelligence solutions. Expert advice and training from certified professionals.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-apps-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/power-apps-support"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.powerplatformexperts.com.au/power-apps-support#breadcrumb",
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
          name: "Power Apps Support Services",
          item: "https://www.powerplatformexperts.com.au/power-apps-support",
        },
      ],
    },
  ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Power Apps Support Services",
    "provider": {
      "@type": "Organization",
      "name": "Power Platform Experts - Office Experts Group",
      "sameAs": [
        "https://powerplatformexperts.com.au",
        "https://officeexperts.com.au"
      ]
    },
    "serviceType": "Business Intelligence Support",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "description": "Professional Power Apps support services including troubleshooting, optimisation, training, and ongoing maintenance for Australian businesses.",
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
      "audienceType": "Australian businesses using Microsoft Power Apps"
    },
    "serviceOutput": "Optimised Power Apps reports and dashboards, improved performance, and enhanced business intelligence capabilities",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Power Apps Support Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Apps Troubleshooting & Technical Support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Apps Maintenance & Enhancement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Apps Training & Knowledge Transfer"
          }
        }
      ]
    }
  };

const PowerApps = () => {
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
        title="Professional Power Apps Support and Training"
        desktopImage={notes}
        mobileImage={coffeeMob}
        altDesk={"graphs on a table"}
        altMob={"graphs on a table with coffee"}
      />
      <PageSegmentMain />
      <PageSegment4 />
      <BlackSegment />
      <SegmentMainRepeat />
      <Contact />
    </main>
    </>
  )
}

export default PowerApps