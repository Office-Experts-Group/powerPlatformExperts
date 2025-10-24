// app/power-bi-sydney/page.js
import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4 from "./(components)/Segment4";
import Promo from "../../components/Promo";
import Testimonials from "../(components)/Testimonials";

import sydney from "../../public/pageHeros/sydney.webp";
import sydneyMob from "../../public/pageHeros/mob/sydneyMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/power-bi-sydney",
      url: "https://www.powerplatformexperts.com.au/power-bi-sydney",
      name: "Power BI Consultants Sydney | Expert Dashboard Development",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-10-08T00:00:00+00:00",
      dateModified: "2025-10-08T00:00:00+00:00",
      description:
        "Leading Power BI consultants in Sydney. Custom dashboards, real-time analytics, and data visualisation solutions for NSW businesses. Get in touch for a free consultation.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-bi-sydney#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/power-bi-sydney"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-bi-sydney#breadcrumb",
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
          name: "Power BI Consultants Sydney",
          item: "https://www.powerplatformexperts.com.au/power-bi-sydney",
        },
      ],
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.powerplatformexperts.com.au/power-bi-sydney#business",
  name: "Power BI Consultants Sydney | Power Platform Experts",
  url: "https://www.powerplatformexperts.com.au/power-bi-sydney",
  telephone: "1300 102 810",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  serviceType: "Power BI Consulting Services",
  areaServed: {
    "@type": "City",
    name: "Sydney",
    containedInPlace: {
      "@type": "State",
      name: "New South Wales",
    },
  },
  description:
    "Professional Power BI consulting services in Sydney including custom dashboard development, data integration, ETL processes, and business intelligence solutions for Victorian businesses.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AUD",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Power BI Services Sydney",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Dashboard Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Integration & Modeling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power BI Training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Excel to Power BI Migration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing Support & Maintenance",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ServiceHero
          title="Power BI Consultants Sydney"
          desktopImage={sydney}
          mobileImage={sydneyMob}
          altDesk="sydney city skyline"
          altMob="sydney centrepoint tower"
        />
        <PageSegmentMain />
        <Segment4 />
        <Promo
          h2="Contact Your Local Power BI Professionals"
          p={
            "Don't let legacy systems drag your business down. Discover the power of analytic's, dashboards and custom integrations designed by the experts."
          }
        />
        <ExpertsAwait />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </main>
    </>
  );
};

export default Page;
