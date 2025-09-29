import React from "react";

import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import FAQSection from "../../components/FAQSection";
import Bullets from "./(components)/Bullets";
import MigrationBenefits from "./(components)/MigrationBenefits";

import excelMigration from "../../public/pageHeros/migration.webp";
import excelMigrationMob from "../../public/pageHeros/mob/migrationMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import { faqSchema } from "../../faqs/migration";
import ComparisonTable from "./(components)/ComparisonTable";
import Conclusion from "./(components)/Conclusion";
import ExpertsAwait from "../../components/ExpertsAwait";

// Main schema structure
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/excel-to-power-bi-migration",
      url: "https://www.powerplatformexperts.com.au/excel-to-power-bi-migration",
      name: "Excel to Power BI Migration Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-09-29T00:00:00+00:00",
      dateModified: "2025-09-29T00:00:00+00:00",
      description:
        "Expert Excel to Power BI migration services for Australian businesses. Transform static spreadsheets into dynamic, interactive dashboards with real-time insights.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/excel-to-power-bi-migration#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/excel-to-power-bi-migration",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/excel-to-power-bi-migration#breadcrumb",
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
          name: "Excel to Power BI Migration Services",
          item: "https://www.powerplatformexperts.com.au/excel-to-power-bi-migration",
        },
      ],
    },
  ],
};

// Service-specific JSON-LD schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Excel to Power BI Migration Services",
  provider: {
    "@type": "Organization",
    name: "Power Platform Experts - Office Experts Group",
    sameAs: [
      "https://powerplatformexperts.com.au",
      "https://officeexperts.com.au",
      "https://excelexperts.com.au",
    ],
  },
  serviceType: "Business Intelligence Migration and Consulting",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  description:
    "Professional Excel to Power BI migration services including data assessment, transformation, dashboard development, training, and ongoing support for Australian businesses.",
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
    audienceType:
      "Australian businesses transitioning from Excel to Power BI for enhanced reporting and analytics",
  },
  serviceOutput:
    "Interactive Power BI dashboards replacing static Excel spreadsheets, with real-time data updates, improved collaboration, and scalable reporting solutions",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Excel to Power BI Migration Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Assessment & Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Transformation & Modelling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Report & Dashboard Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Training & Handover",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing Support & Optimisation",
        },
      },
    ],
  },
};

const ExcelToPowerBiMigration = () => {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero section with title and imagery */}
        <ServiceHero
          title="Excel to Power BI Migration"
          desktopImage={excelMigration}
          mobileImage={excelMigrationMob}
          altDesk={"Migrating birds"}
          altMob={"Man hiking"}
        />
        <PageSegmentMain />
        <Bullets />
        <ComparisonTable />
        <MigrationBenefits />
        <ExpertsAwait />
        <Conclusion />
        <FAQSection />
        <Contact />
      </main>
    </>
  );
};

export default ExcelToPowerBiMigration;
