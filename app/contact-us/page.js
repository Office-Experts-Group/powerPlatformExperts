import React from "react";

import Contact from "../../components/Contact";
import ServiceHero from "../../components/ServiceHero";
import CTAMain from "./(components)/CTAMain";

import contactUs from "../../public/pageHeros/contactUs.webp";
import contactUsMob from "../../public/pageHeros/mob/contactUsMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/contact-us/",
      url: "https://www.powerplatformexperts.com.au/contact-us/",
      name: "Contact Power Platform Experts | Get in Touch",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Contact our Microsoft Power Platform experts for all your consulting and development needs. Get in touch today via phone 1300 102 810 or email.",
      breadcrumb: {
        "@id": "https://www.powerplatformexperts.com.au/contact-us/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/contact-us/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.powerplatformexperts.com.au/contact-us/#breadcrumb",
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
        title="Contact Us"
        desktopImage={contactUs}
        mobileImage={contactUsMob}
        altDesk={"contact method icons on wooden blocks"}
        altMob={"contact method icons on wooden blocks"}
      />
      <CTAMain />
      <Contact />
    </>
  );
};

export default Page;
