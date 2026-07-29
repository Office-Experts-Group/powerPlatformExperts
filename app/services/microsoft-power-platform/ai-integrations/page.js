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
      <AiIntegrationsWhyUs />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
