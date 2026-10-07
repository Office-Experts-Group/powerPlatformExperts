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

import adelaide from "../../public/pageHeros/adelaide.webp";
import adelaideMob from "../../public/pageHeros/mob/adelaideMob.webp";

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
        "https://www.powerplatformexperts.com.au/power-platform-consultants-adelaide",
      url: "https://www.powerplatformexperts.com.au/power-platform-consultants-adelaide",
      name: "Power Platform Consultants Adelaide",
      description:
        "Adelaide's leading Power Platform consultants. Our nationwide team has 25+ years helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-consultants-adelaide#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-platform-consultants-adelaide",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-adelaide#breadcrumb",
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
          name: "Power Platform Consultants Adelaide",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Adelaide";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Power Platform Consultants ${location}`}
        desktopImage={adelaide}
        mobileImage={adelaideMob}
        altDesk="Adelaide"
        altMob="Adelaide"
      />
      <LocationSummary location={location} service="Power Platform" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Our recent work with Power Platform and AI"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/building-consultants-inspection-crm",
            linkText: "Explore the SharePoint and Power Apps build",
            title:
              "Turning manual enquiry handling into an automated quote-to-email pipeline",
            description:
              "A building consultancy was handling inspection enquiries entirely by hand, from the first request through to putting together and sending a quote, which was slow and prone to errors that meant rework. We built an automated system on SharePoint, Power Apps and Power Automate that receives enquiries, manages them through to completion and generates quotes ready to send by email.",
            image:
              "https://www.officeexperts.com.au/case-studies/gm-building-consultants-inspection-crmLg.png",
            imageAlt:
              "Enquiry-to-quote system built on SharePoint, Power Apps and Power Automate",
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
