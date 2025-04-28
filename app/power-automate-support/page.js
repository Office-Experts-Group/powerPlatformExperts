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
import Segment4Repeat from './(components)/Segment4Repeat';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/power-automate-support",
      url: "https://www.powerplatformexperts.com.au/power-automate-support",
      name: "Power Automate Support Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-04-04T00:00:00+00:00",
      dateModified: "2025-04-04T00:00:00+00:00",
      description:
        "Power Automate support services for business intelligence solutions. Expert advice and training from Microsoft professionals.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-automate-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/power-automate-support"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.powerplatformexperts.com.au/power-automate-support#breadcrumb",
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
          name: "Power Automate Support Services",
          item: "https://www.powerplatformexperts.com.au/power-automate-support",
        },
      ],
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Power Automate Support Services",
  "provider": {
    "@type": "Organization",
    "name": "Power Platform Experts - Office Experts Group",
    "sameAs": [
      "https://powerplatformexperts.com.au",
      "https://officeexperts.com.au"
    ]
  },
  "serviceType": "Workflow Automation Support",
  "areaServed": {
    "@type": "Country",
    "name": "Australia"
  },
  "description": "Professional Power Automate support services including troubleshooting, workflow optimisation, integrations, and automation training for Australian businesses.",
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
    "audienceType": "Australian businesses using Microsoft Power Automate"
  },
  "serviceOutput": "Reliable and optimised automated workflows, reduced manual effort, and seamless integrations across business systems.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Power Automate Support Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Automate Troubleshooting & Technical Support"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Automate Maintenance & Enhancement"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Automate Integration Services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Power Automate Training & Knowledge Transfer"
        }
      }
    ]
  }
};

const PowerAutomate = () => {
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
        title="Professional Power Automate Support and Integration Services"
        desktopImage={longDesk}
        mobileImage={puzzleMob}
        altDesk={"people working at an office desk"}
        altMob={"people holding large puzzle pieces"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <BlackSegment />
      <PageSegment4 />
      <Contact />
    </main>
    </>
  )
}

export default PowerAutomate