import React from "react";

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import ServicePageCards from "./(components)/ServicePageCards";
import DeskImage from "./(components)/DeskImage";
import Bullets from "./(components)/Bullets";

import integration from "../../public/pageHeros/integration.webp";
import integrationMob from "../../public/pageHeros/mob/integrationMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import PageSegment5 from "./(components)/PageSegment5";
import ExpertsAwait from "../../components/ExpertsAwait";
import Segment4Repeat from "./(components)/Segment4Repeat";
import UseCases from "./(components)/UseCases";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/power-bi-data-integration",
      url: "https://www.powerplatformexperts.com.au/power-bi-data-integration",
      name: "Power BI Data Integration Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-09-25T00:00:00+00:00",
      dateModified: "2025-09-25T00:00:00+00:00",
      description:
        "Expert Power BI data integration services for Australian businesses. Connect multiple data sources into unified dashboards for better insights.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-bi-data-integration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-bi-data-integration",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-bi-data-integration#breadcrumb",
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
          name: "Power BI Data Integration Services",
          item: "https://www.powerplatformexperts.com.au/power-bi-data-integration",
        },
      ],
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Power BI Data Integration Services",
  provider: {
    "@type": "Organization",
    name: "Power Platform Experts - Office Experts Group",
    sameAs: [
      "https://powerplatformexperts.com.au",
      "https://officeexperts.com.au",
    ],
  },
  serviceType: "Business Intelligence Data Integration",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  description:
    "Professional Power BI data integration services including ETL processes, data source connectivity, custom API integrations, and unified dashboard creation.",
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
    audienceType: "Australian businesses seeking data integration solutions",
  },
  serviceOutput:
    "Unified Power BI dashboards with integrated data from multiple sources, automated ETL processes, and real-time reporting capabilities",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Power BI Data Integration Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Source Identification & Mapping",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ETL (Extract, Transform, Load) Configuration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom API & Connector Setup",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Modelling & Relationships",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Scheduled Refresh & Automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Legacy System & Custom Integrations",
        },
      },
    ],
  },
};

const PowerBiDataIntegration = () => {
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
          title="Power BI Data Integration Services"
          desktopImage={integration}
          mobileImage={integrationMob}
          altDesk={"data integration visualization"}
          altMob={"data integration visualization"}
        />
        <ServicePageCards />
        <PageSegmentMain />
        <DeskImage />
        <Bullets />
        <PageSegment5 />
        <ExpertsAwait />
        <Segment4Repeat />
        <UseCases />
        <Contact />
      </main>
    </>
  );
};

export default PowerBiDataIntegration;
