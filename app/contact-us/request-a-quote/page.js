import React from "react";

import Contact from "../../../components/Contact";
import ServiceHero from "../../../components/ServiceHero";
import CTAMain from "../(components)/CTAMain";

import calculator from "../../../public/pageHeros/calculator.webp";
import calcMob from "../../../public/pageHeros/mob/calcMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/contact-us/request-a-quote/",
      url: "https://www.powerplatformexperts.com.au/contact-us/request-a-quote/",
      name: "Request a Quote | Power Platform Development Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Request a quote for Microsoft Power Platform development and consulting services. Expert solutions tailored to your business needs.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/contact-us/request-a-quote/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/contact-us/request-a-quote/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/contact-us/request-a-quote/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.powerplatformexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact Us",
          item: "https://www.powerplatformexperts.com.au/contact-us/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Request a Quote",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.powerplatformexperts.com.au/#website",
      url: "https://www.powerplatformexperts.com.au/",
      name: "Power Platform Experts: Microsoft Power Platform Development and Consulting Services",
      description:
        "Your Microsoft Power Platform Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.powerplatformexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.powerplatformexperts.com.au/?s={search_term_string}",
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
      <ServiceHero
        title="Request a Quote"
        desktopImage={calculator}
        mobileImage={calcMob}
        altDesk={"calculator on a desk"}
        altMob={"calculator on a desk"}
      />
      <CTAMain />
      <Contact isQuote={true} />
    </>
  );
};

export default Page;
