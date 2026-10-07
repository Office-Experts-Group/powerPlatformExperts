import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const DeskImage = dynamic(() => import("./(components)/DeskImage"));
const Bullets = dynamic(() => import("./(components)/Bullets"));
const PageSegment5 = dynamic(() => import("./(components)/PageSegment5"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));
const UseCases = dynamic(() => import("./(components)/UseCases"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import integration from "../../public/pageHeros/integration.webp";
import integrationMob from "../../public/pageHeros/mob/integrationMob.webp";

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
        <RelatedLinks
          theme="dark"
          eyebrow="Case Studies"
          heading="Power BI data projects"
          links={[
            {
              href: "https://www.officeexperts.com.au/case-studies/retail-power-bi-partner-reporting-security",
              linkText: "Read how partner data was isolated",
              title:
                "Proving external partners could never see each other's Power BI data",
              description:
                "A retail data provider needed certainty that one wrong setting couldn't expose a partner's data to another before opening its Power BI reports to external partners. We reviewed the reports for design and usability, locked access down with Row-Level Security, and tested with a real external account against the provider's own figures, which matched to the cent, without changing what the internal team relied on.",
              image:
                "https://www.officeexperts.com.au/case-studies/retail-power-bi-partner-securityLg.webp",
              imageAlt:
                "Partner-facing Power BI reports secured with Row-Level Security",
            },
            {
              href: "https://www.officeexperts.com.au/case-studies/retail-analytics-automated-review-deck-generator",
              linkText: "Read how a full review deck is built automatically",
              title:
                "Turning a days-long PowerPoint build into a one-click, 600+ slide deck",
              description:
                "A retail analytics business built large retailer review decks by hand, pulling figures out of Power BI and pasting them into templates slide by slide. We built a Python tool that reads a simple scope sheet, queries Power BI directly and assembles a fully branded deck of around 660 slides in under five minutes.",
              image:
                "https://www.officeexperts.com.au/case-studies/retail-analytics-deck-generatorLg.png",
              imageAlt:
                "Branded PowerPoint review deck generated automatically from Power BI data",
            },
          ]}
        />
        <Contact />
      </main>
    </>
  );
};

export default PowerBiDataIntegration;
