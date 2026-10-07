// app/services/microsoft-power-platform/ai-integrations/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../../components/ServiceHero";

import aiIntegrationsHero from "../../../../public/pageHeros/aiIntegrations.webp";
import aiIntegrationsHeroMob from "../../../../public/pageHeros/mob/aiIntegrationsMob.webp";

import AiIntegrationsIntro from "./(components)/AiIntegrationsIntro";

const AiIntegrationsProblem = dynamic(
  () => import("./(components)/AiIntegrationsProblem"),
);
const AiIntegrationsPillars = dynamic(
  () => import("./(components)/AiIntegrationsPillars"),
);
const AiIntegrationsScenarios = dynamic(
  () => import("./(components)/AiIntegrationsScenarios"),
);
const AiIntegrationsProcess = dynamic(
  () => import("./(components)/AiIntegrationsProcess"),
);
const AiIntegrationsWhyUs = dynamic(
  () => import("./(components)/AiIntegrationsWhyUs"),
);
const ExpertsAwait = dynamic(
  () => import("../../../../components/ExpertsAwait"),
);
const Contact = dynamic(() => import("../../../../components/Contact"));
const RelatedLinks = dynamic(
  () => import("../../../../components/RelatedLinks"),
);

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../../utils/schemaGenerators";

const PAGE_URL =
  "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/ai-integrations";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(
      "https://www.powerplatformexperts.com.au",
      "Power Platform Experts",
      "Australia-wide Microsoft Power Platform Consulting and Development Experts",
    ),
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      name: "AI Integrations",
      serviceType: "Artificial intelligence integration",
      provider: {
        "@id": "https://www.powerplatformexperts.com.au#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
      description:
        "Custom AI agents, Microsoft Copilot rollouts, and secure AI data solutions built on Power Platform, Azure and Dataverse for Australian businesses.",
    },
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: "AI Integrations | Power Platform Experts",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      about: {
        "@id": "https://www.powerplatformexperts.com.au#organization",
      },
      datePublished: "2026-07-28T09:00:00+10:00",
      dateModified: "2026-07-29T09:00:00+10:00",
      description:
        "Custom AI agents, Microsoft Copilot rollouts, and secure AI data solutions built on Power Platform, Azure and Dataverse for Australian businesses.",
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
      inLanguage: "en-AU",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
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
          name: "Services",
          item: "https://www.powerplatformexperts.com.au/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "AI Integrations",
          item: PAGE_URL,
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
        title="AI Integrations"
        desktopImage={aiIntegrationsHero}
        mobileImage={aiIntegrationsHeroMob}
        altDesk="Custom AI agent connected to Microsoft 365 and Power Platform systems"
        altMob="Custom AI agent connected to Microsoft 365 and Power Platform systems"
      />

      <AiIntegrationsIntro />
      <AiIntegrationsProblem />
      <AiIntegrationsPillars />
      <AiIntegrationsScenarios />
      <AiIntegrationsProcess />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="AI-powered workflow projects"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/sporting-goods-agentic-ai-customer-service",
            linkText: "See the chained AI agent approach",
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
            href: "https://www.officeexperts.com.au/case-studies/financial-services-ai-risk-compliance-automation",
            linkText: "Read how compliance reviews got faster",
            title:
              "Taking 24 unowned risks to full ownership and monthly reviews from 6 hours to 1",
            description:
              "An FCA-regulated financial services firm had outgrown a compliance workflow built on spreadsheets and scattered policy documents. We replaced the spreadsheet with a live SharePoint risk register, built AI agents through Power Automate that map risks to mitigations and controls, and added a Power BI and Power Apps compliance dashboard with automated regulatory-change alerts. Monthly compliance review time fell by 83%, from 6 hours to 1.",
            image:
              "https://www.officeexperts.com.au/case-studies/financial-services-compliance-automationLg.png",
            imageAlt:
              "AI risk register and compliance dashboard built on SharePoint, Power Automate and Power BI",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/life-insurance-real-time-competitive-intelligence",
            linkText: "Explore our AI intelligence build",
            title:
              "Cutting competitor response time from two weeks to twelve minutes",
            description:
              "A bank's life insurance division was consistently late to competitor pricing and product moves, with intelligence assembled by hand from fragmented sources. We built an AI-driven competitive intelligence system on the client's own Microsoft 365 tenancy that monitors competitors, scores material changes and routes prioritised alerts into Teams and internal review workflows. Response time dropped from around two weeks to roughly 12 minutes from detection to action.",
            image:
              "https://www.officeexperts.com.au/case-studies/life-insurance-competitive-intelligenceLg.png",
            imageAlt:
              "AI competitor monitoring system routing alerts into Microsoft Teams",
          },
        ]}
      />
      <AiIntegrationsWhyUs />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
