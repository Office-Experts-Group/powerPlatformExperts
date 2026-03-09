import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import AboutUsMain from "./(components)/AboutUsMain";

const Testimonials = dynamic(() => import("../(components)/Testimonials"));
const WhyChooseUs = dynamic(() => import("./(components)/WhyChooseUs"));
const GoodToKnow = dynamic(() => import("./(components)/GoodToKnow"));
const MeetTheTeamSlider = dynamic(
  () => import("./(components)/MeetTheTeamSlider"),
);
const Contact = dynamic(() => import("../../components/Contact"));
const Promo = dynamic(() => import("../../components/Promo"));
const ExpertsAwait = dynamic(() => import("../../components/ExpertsAwait"));

import { getAboutPageSchema } from "../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../testimonials";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

import aboutUs from "../../public/pageHeros/aboutUs.webp";
import aboutUsMob from "../../public/pageHeros/mob/aboutUsMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getAboutPageSchema(testimonials, "powerPlatform")["@graph"],
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/about-us",
      url: "https://www.powerplatformexperts.com.au/about-us",
      name: "About Us | Power Platform Experts",
      description:
        "Discover how our certified Power Platform consultants deliver custom business solutions using Power Apps, Power Automate, Power BI, and Power Pages across Australia.",

      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2025-07-07T00:00:00+00:00",
      description:
        "Learn about Australia's leading Microsoft Access consultants delivering custom databases that streamline workflows and boost business productivity.",
      breadcrumb: {
        "@id": "https://www.powerplatformexperts.com.au/about-us#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/about-us"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.powerplatformexperts.com.au/about-us#breadcrumb",
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
          name: "About Us: Design, Development and Consulting Services Australia",
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
        title={"About Us"}
        desktopImage={aboutUs}
        mobileImage={aboutUsMob}
        altDesk={"Hands pointing in a circle"}
        altMob={"About Us"}
      />
      <AboutUsMain />
      <Testimonials testimonials={testimonials} />
      <GoodToKnow />
      <WhyChooseUs />
      <MeetTheTeamSlider />
      <ExpertsAwait />
      <Promo
        h2={"Let's Do This!"}
        p={
          "Once you have decided to take advantage of our services, we will carefully customise those services to match your requirements, keeping you informed every step of the way. We realise that our success is hinged on our ability to ensure your own"
        }
      />
      <Contact />
    </>
  );
};

export default Page;
