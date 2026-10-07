import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const FAQSection = dynamic(() => import("../../components/FAQSection"));
const Bullets = dynamic(() => import("./(components)/Bullets"));
const MigrationBenefits = dynamic(
  () => import("./(components)/MigrationBenefits"),
);
const ComparisonTable = dynamic(() => import("./(components)/ComparisonTable"));
const Conclusion = dynamic(() => import("./(components)/Conclusion"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import excelMigration from "../../public/pageHeros/migration.webp";
import excelMigrationMob from "../../public/pageHeros/mob/migrationMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";
import { faqSchema } from "../../faqs/migration";

// Main schema structure
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
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
        <RelatedLinks
          theme="dark"
          eyebrow="Case Studies"
          heading="Excel data consolidation projects"
          links={[
            {
              href: "https://www.officeexperts.com.au/case-studies/golf-supplier-sales-data-consolidation",
              linkText: "Read how supplier files are combined",
              title:
                "Turning a year of scattered supplier sales files into one automated summary",
              description:
                "A business receiving a large number of separate Excel sales files from its suppliers throughout the year needed them brought together and compared year on year. We built a Power Query and Power Pivot solution that pulls the raw files in automatically, categorises the data and produces summaries by supplier, member, month and quarter without manual copy and paste.",
              image:
                "https://www.officeexperts.com.au/case-studies/on-course-golf-sales-summaryLg.png",
              imageAlt:
                "Supplier sales files consolidated with Power Query and Power Pivot",
            },
            {
              href: "https://www.officeexperts.com.au/case-studies/community-services-excel-consolidation-rebuild",
              linkText: "Explore the row-based rebuild",
              title:
                "Replacing a linked-workbook spreadsheet with a one-click Power Query refresh",
              description:
                "A four-location community services provider had each site keying records into its own workbook, with a central file pulling them together through direct workbook links that had grown thousands of columns wide. We rebuilt it as a row-based entry template consolidated with Power Query, migrated all existing data into it, and showed the team how to build new reporting breakdowns with pivot tables.",
              image:
                "https://www.officeexperts.com.au/case-studies/community-services-excelLg.png",
              imageAlt:
                "Four location workbooks consolidated into one row-based dataset with Power Query",
            },
          ]}
        />
        <Contact />
      </main>
    </>
  );
};

export default ExcelToPowerBiMigration;
