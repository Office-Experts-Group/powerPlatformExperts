import React from "react";

import ServiceHero from "../../components/ServiceHero";
import MeetTheTeam from "../../components/MeetTheTeam";
import Contact from "../../components/Contact";

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/meet-the-team/",
      url: "https://www.powerplatformexperts.com.au/meet-the-team/",
      name: "Meet Our Power Platform Experts Team | Microsoft Certified Consultants",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Meet our team of Microsoft certified Power Platform consultants and developers. Experts in Power Apps, Power Automate, Power BI, and Power Pages.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/meet-the-team/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/meet-the-team/"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/meet-the-team/#breadcrumb",
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
          name: "Meet the Team",
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
        title="Meet The Team"
        desktopImage={handShake}
        mobileImage={handShakeMob}
        altDesk={"greeting shaking hands"}
        altMob={"greeting shaking hands"}
      />
      <MeetTheTeam />
      <Contact />
    </>
  );
};

export default Page;
