import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import Services from "./(components)/Services";
const MeetTheTeam = dynamic(() => import("../../components/MeetTheTeam"));
const Contact = dynamic(() => import("../../components/Contact"));

import handShake from "../../public/pageHeros/handShake.webp";
import handShakeMob from "../../public/pageHeros/mob/handShakeMob.webp";

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
      "@id": "https://www.powerplatformexperts.com.au/meet-the-team",
      url: "https://www.powerplatformexperts.com.au/meet-the-team",
      name: "Meet Our Power Platform Experts Team | Microsoft Certified Consultants",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2026-03-09T00:00:00+00:00",
      description:
        "Meet our team of Microsoft certified Power Platform consultants and developers. Experts in Power Apps, Power Automate, Power BI, and Power Pages.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/meet-the-team#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/meet-the-team"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.powerplatformexperts.com.au/meet-the-team#breadcrumb",
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
          name: "Meet the Team",
        },
      ],
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
        title="Meet Our Team"
        desktopImage={handShake}
        mobileImage={handShakeMob}
        altDesk={"greeting shaking hands"}
        altMob={"greeting shaking hands"}
        isMeetTeam={true}
      />
      <Services />
      <MeetTheTeam />
      <Contact />
    </>
  );
};

export default Page;
