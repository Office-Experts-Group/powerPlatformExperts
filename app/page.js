import React from "react";
import dynamic from "next/dynamic";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../utils/schemaGenerators";

// Keep Hero static as it's above fold
import Hero from "./(components)/Hero";
import Services from "./(components)/Services";

// Dynamically import everything else
const CTAMain = dynamic(() => import("./(components)/CTAMain"));
const IsRight = dynamic(() => import("./(components)/IsRight"));
const CTAFull = dynamic(() => import("./(components)/CTAFull"));
const Testimonials = dynamic(() => import("./(components)/Testimonials"));
const Brands = dynamic(() => import("../components/Brands"));
const Promo = dynamic(() => import("../components/Promo"));
const Contact = dynamic(() => import("../components/Contact"));
const ExpertsAwait = dynamic(() => import("../components/ExpertsAwait"));
const FAQSection = dynamic(() => import("../components/FAQSection"));

import faqs from "../faqs/home";
import faqSchema from "../faqs/homeSchema";
import { getHomePageSchema } from "../utils/testimonialSchemaGenerator";
import { testimonials } from "../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getHomePageSchema(testimonials, "powerplatform")["@graph"],
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au",
      url: "https://www.powerplatformexperts.com.au",
      name: "Power Platform Experts: Microsoft Power Platform Consulting Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-03-27T00:00:00+00:00",
      description:
        "Our Australia-wide, cross-industry Microsoft Power Platform consultants deliver prompt, quality service with competitive pricing. Call us today.",
      breadcrumb: {
        "@id": "https://www.powerplatformexperts.com.au#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.powerplatformexperts.com.au#website",
      url: "https://www.powerplatformexperts.com.au",
      name: "Power Platform Experts: Microsoft Power Platform Development and Consulting Services",
      description:
        "Your Microsoft Power Platform Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.powerplatformexperts.com.au#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.powerplatformexperts.com.au?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Services />
      <CTAMain />
      <IsRight />
      <CTAFull />
      <Testimonials testimonials={testimonials} />
      <Brands />
      <ExpertsAwait />
      <Promo
        h2="Empowering Your Business"
        p="Expert Power Platform solutions to streamline workflows, enhance insights, and drive efficiency across your organisation."
      />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
