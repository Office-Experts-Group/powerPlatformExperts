import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";
import Promo from "../../components/Promo";
import Testimonials from "../(components)/Testimonials";

// Import schema generators
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PageSegment4 from "./(components)/PageSegment4";
import UseCases from "./(components)/UseCases";
import ServicesSection from "./(components)/ServicesSection";

// Schema markup for SEO
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/microsoft-fabric",
      url: "https://www.powerplatformexperts.com.au/microsoft-fabric",
      name: "Microsoft Fabric Services | Unified Analytics Platform",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-10-09T00:00:00+00:00",
      dateModified: "2025-10-09T00:00:00+00:00",
      description:
        "Expert Microsoft Fabric implementation and consulting services. Unify your data analytics with OneLake, real-time insights, and seamless Power BI integration.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/microsoft-fabric#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/microsoft-fabric"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/microsoft-fabric#breadcrumb",
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
          name: "Microsoft Fabric Services",
          item: "https://www.powerplatformexperts.com.au/microsoft-fabric",
        },
      ],
    },
  ],
};

// Service-specific schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.powerplatformexperts.com.au/microsoft-fabric#service",
  name: "Microsoft Fabric Consulting Services",
  provider: {
    "@id": "https://www.powerplatformexperts.com.au#organization",
  },
  description:
    "Professional Microsoft Fabric consulting services including implementation, migration, OneLake configuration, and ongoing support for Australian businesses.",
  serviceType: "Microsoft Fabric Consulting",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Microsoft Fabric Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fabric Assessment & Planning",
          description:
            "Current state analysis, migration planning, ROI evaluation, and architecture design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fabric Implementation",
          description:
            "OneLake configuration, data migration, workspace setup, and security configuration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Development",
          description:
            "Data pipelines, ETL processes, real-time analytics solutions, and custom integrations",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Training & Support",
          description:
            "User training, administrator training, ongoing support packages, and best practices documentation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Migration Services",
          description:
            "Migration from existing data warehouses, Synapse Analytics upgrades, and platform consolidation",
        },
      },
    ],
  },
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main>
        <ServiceHero
          title="Microsoft Fabric Development & Support"
          desktopImage={handShake}
          mobileImage={handShakeMob}
          altDesk={"greeting shaking hands"}
          altMob={"greeting shaking hands"}
        />
        <PageSegmentMain />
        <Segment4Repeat />
        <PageSegment4 />
        <UseCases />
        {/* <div style={{ marginTop: "-4rem" }}>
          <Promo
            h2="Ready to Unify Your Data Analytics?"
            p="Transform your data estate with Microsoft Fabric. Our certified consultants provide end-to-end implementation, migration, and support services tailored to your business needs."
          />
        </div> */}
        <ServicesSection />
        <ExpertsAwait />

        <Testimonials testimonials={testimonials} />

        <Contact />
      </main>
    </>
  );
};

export default Page;
