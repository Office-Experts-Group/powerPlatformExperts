import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import LocationSummary from "../(components)/LocationSummary";

const LocationPages = dynamic(() => import("../(components)/LocationPages"));
const CTAMainProps = dynamic(() => import("../(components)/CTAMainProps"));
const ContactLocationSegment = dynamic(
  () => import("../../components/ContactLocationSegment"),
);
const ServicesLocation = dynamic(
  () => import("../(components)/ServicesLocation"),
);
const Promo = dynamic(() => import("../../components/Promo"));
const GoodToKnow = dynamic(() => import("../../components/GoodToKnow"));
const Testimonials = dynamic(() => import("../(components)/Testimonials"));
const MeetTheTeamSlider = dynamic(
  () => import("../../components/MeetTheTeamSlider"),
);
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import brisbane from "../../public/pageHeros/brisbane.webp";
import brisbaneMob from "../../public/pageHeros/mob/brisbaneMob.webp";

import { getHomePageSchema } from "../../utils/testimonialSchemaGenerator";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    ...getHomePageSchema(testimonials, "powerplatform")["@graph"],
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-brisbane",
      url: "https://www.powerplatformexperts.com.au/power-platform-consultants-brisbane",
      name: "Power Platform Consultants Brisbane",
      description:
        "Brisbane's leading Power Platform consultants. Our nationwide team has 25+ years helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-consultants-brisbane#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-platform-consultants-brisbane",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-brisbane#breadcrumb",
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
          name: "Power Platform Consultants Brisbane",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Brisbane";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Power Platform Consultants ${location}`}
        desktopImage={brisbane}
        mobileImage={brisbaneMob}
        altDesk="Brisbane"
        altMob="Brisbane"
      />
      <LocationSummary location={location} service="Power Platform" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Our latest Power Platform and AI projects"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/sporting-goods-agentic-ai-customer-service",
            linkText: "Explore the customer service automation",
            title:
              "Resolving customer service tickets end to end in 3 hours instead of 48",
            description:
              "A national sporting goods provider ran customer service from Microsoft 365, with agents triaging every ticket, updating spreadsheets and writing responses by hand. We built a chained agentic AI system on Power Automate and Power Apps, with Classifier, Resolution, Validation and Escalation agents working in sequence and human review feeding training back in. Average resolution time fell by 94%, and 67% of tickets are now resolved end to end with no human intervention.",
            image:
              "https://www.officeexperts.com.au/case-studies/sporting-goods-agentic-customer-serviceLg.png",
            imageAlt:
              "Chained AI agents resolving customer service tickets on Power Automate and Power Apps",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/manufacturing-project-setup-automation",
            linkText: "See the automated job folder setup",
            title:
              "Turning a new project email into a fully built job folder in under a minute",
            description:
              "A manufacturing company's project setup relied on staff manually creating folders across multiple SharePoint sites, renaming them to match convention and copying in templates by hand every time a job was won. We built a Power Automate flow that reads the project details from the notification email and does the whole setup automatically, cutting setup time from roughly 30 minutes to under 1 minute.",
            image:
              "https://www.officeexperts.com.au/case-studies/manufacturing-project-setupLg.webp",
            imageAlt:
              "Power Automate flow building a project folder structure across SharePoint sites",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/rdao-application-ai-review-workflow",
            linkText: "Read how reviews dropped to 90 minutes",
            title:
              "Cutting a 6-7 day investment review down to 90 minutes with an AI agent workflow",
            description:
              "An investor assessing remote companies relied on one person manually researching each applicant and cross-checking the investor's own policy, taking six to seven days per application. We built an AI agentic workflow across Power Automate, Power Apps, Power BI and Power Pages that pushes each application and its documents through a series of agents covering KYC, compliance, legal and financial checks, producing a detailed, referenced review in around 90 minutes.",
            image: "https://www.officeexperts.com.au/case-studies/kula.png",
            imageAlt:
              "AI agent workflow reviewing investment applications across the Power Platform",
          },
        ]}
      />
      <GoodToKnow />
      <Testimonials testimonials={testimonials} />
      <Promo
        h2={"Let's transform your business processes!"}
        p={
          "Unlock the full potential of Microsoft Power Platform with our expert consultant solutions—designed to automate workflows, create custom applications, and streamline your business operations."
        }
      />
      <ContactLocationSegment location={location} />
    </>
  );
};

export default Page;
