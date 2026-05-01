import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../../components/ServiceHero";

const PAIntro = dynamic(() => import("./(components)/PAIntro"));
const PAProcess = dynamic(() => import("./(components)/PAProcess"));
const AiBuilderCapabilities = dynamic(
  () => import("./(components)/AiBuilderCapabilities"),
);
const AgentsSegment = dynamic(() => import("./(components)/AgentsSegment"));
const FAQSection = dynamic(() => import("../../../../components/FAQSection"));
const Contact = dynamic(() => import("../../../../components/Contact"));

import automateMob from "../../../../public/pageHeros/mob/automate.webp";
import automate from "../../../../public/pageHeros/automate.webp";

import faqs from "../../../../faqs/power-automate";
import faqSchema from "../../../../faqs/automateSchema";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      name: "Microsoft Power Automate & AI Builder Consulting | Power Platform Experts",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2026-05-01T00:00:00+00:00",
      description:
        "Expert Power Automate consultants to optimise your business processes. We can update your existing workflows and add new integrations that save you time and money. From simple flows, to AI Builder and Copilot Studio automation agents.",
      about: [
        { "@type": "Thing", name: "Microsoft Power Automate" },
        { "@type": "Thing", name: "AI Builder" },
        { "@type": "Thing", name: "Copilot Studio" },
        { "@type": "Thing", name: "Invoice Processing Automation" },
        { "@type": "Thing", name: "Intelligent Document Processing" },
      ],
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
          ],
        },
      ],
    },
    {
      // HowTo schema for the five-step delivery process
      "@type": "HowTo",
      name: "How we deliver AI automation with Power Automate",
      description:
        "Our five-step process for scoping, building and handing over AI-powered Power Automate workflows for Australian businesses.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Discovery",
          text: "We map your manual processes to identify high-volume, rule-based tasks that are the strongest candidates for AI automation.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "AI Model Design",
          text: "We select or train the AI Builder models your flows will need, gathering sample documents and iterating until accuracy meets the threshold.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Flow Architecture",
          text: "We design the full flow on paper — triggers, conditions, AI model calls, error handling, escalation paths and audit logging — before any code is written.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Build & Test",
          text: "We build inside your Microsoft environment using your real data, testing against edge cases and exception scenarios before go-live.",
        },
        {
          "@type": "HowToStep",
          position: 5,
          name: "Handover",
          text: "Your team receives full documentation, hands-on training, and ongoing support as your business evolves.",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate#breadcrumb",
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
          name: "Microsoft Power Platform",
          item: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft Power Automate Services",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────
const Page = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />

    {/* 1 — Hero */}
    <ServiceHero
      title="Power Automate & AI Automation"
      desktopImage={automate}
      mobileImage={automateMob}
      altDesk="power automate"
      altMob="power automate"
    />

    <PAIntro />
    <AiBuilderCapabilities />
    <PAProcess />
    <AgentsSegment />
    <section style={{ margin: "6rem auto 3rem auto" }}>
      <FAQSection faqs={faqs} />
    </section>
    <Contact />
  </>
);

export default Page;
