// app/power-bi-brisbane/page.js
import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4 from "./(components)/Segment4";
import Promo from "../../components/Promo";
import Testimonials from "../(components)/Testimonials";

import brisbane from "../../public/pageHeros/brisbane.webp";
import brisbaneMob from "../../public/pageHeros/mob/brisbaneMob.webp";

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
      "@id": "https://www.powerplatformexperts.com.au/power-bi-brisbane",
      url: "https://www.powerplatformexperts.com.au/power-bi-brisbane",
      name: "Power BI Consultants Brisbane | Expert Dashboard Development",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-10-08T00:00:00+00:00",
      dateModified: "2025-10-08T00:00:00+00:00",
      description:
        "Leading Power BI consultants in Brisbane. Custom dashboards, real-time analytics, and data visualisation solutions for Queensland businesses. Get in touch for a free consultation.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-bi-brisbane#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/power-bi-brisbane"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-bi-brisbane#breadcrumb",
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
          name: "Power BI Consultants Brisbane",
          item: "https://www.powerplatformexperts.com.au/power-bi-brisbane",
        },
      ],
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.powerplatformexperts.com.au/power-bi-brisbane#business",
  name: "Power BI Consultants Brisbane | Power Platform Experts",
  url: "https://www.powerplatformexperts.com.au/power-bi-brisbane",
  telephone: "1300 102 810",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  serviceType: "Power BI Consulting Services",
  areaServed: {
    "@type": "City",
    name: "Brisbane",
    containedInPlace: {
      "@type": "State",
      name: "Queensland",
    },
  },
  description:
    "Professional Power BI consulting services in Brisbane including custom dashboard development, data integration, ETL processes, and business intelligence solutions for Victorian businesses.",
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
    name: "Power BI Services Brisbane",
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
          title="Power BI Consultants Brisbane"
          desktopImage={brisbane}
          mobileImage={brisbaneMob}
          altDesk="brisbane city skyline"
          altMob="brisbane city skyline"
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
