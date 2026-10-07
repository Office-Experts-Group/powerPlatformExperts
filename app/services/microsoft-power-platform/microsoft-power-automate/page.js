import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../../components/ServiceHero";

const PAIntro = dynamic(() => import("./(components)/PAIntro"));
const PAProcess = dynamic(() => import("./(components)/PAProcess"));
const AiBuilderCapabilities = dynamic(
  () => import("./(components)/AiBuilderCapabilities"),
);
const AgentsSegment = dynamic(() => import("./(components)/AgentsSegment"));
const RelatedLinks = dynamic(
  () => import("../../../../components/RelatedLinks"),
);
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
    <RelatedLinks
      theme="light"
      eyebrow="Case Studies"
      heading="Power Automate projects in practice"
      links={[
        {
          href: "https://www.officeexperts.com.au/case-studies/manufacturing-project-setup-automation",
          linkText: "Read how Power Automate saved time and money",
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
          href: "https://www.officeexperts.com.au/case-studies/healthcare-patient-form-followup-automation",
          linkText: "Explore the Fabric and Power Automate build",
          title:
            "Removing manual form chasing for an allied health provider's active patients",
          description:
            "An allied health provider sent intake and milestone forms to every patient but tracked who had responded entirely by hand, pulling clinical staff away from care to send reminders and escalations. We built two scheduled Power Automate flows against the provider's Microsoft Fabric data warehouse that send reminders, escalate overdue cases and close off completed forms automatically.",
          image:
            "https://www.officeexperts.com.au/case-studies/healthcare-form-followupLg.webp",
          imageAlt:
            "Scheduled Power Automate flows chasing patient forms from a Microsoft Fabric data warehouse",
        },
      ]}
    />
    <AgentsSegment />
    <section style={{ margin: "6rem auto 3rem auto" }}>
      <FAQSection faqs={faqs} />
    </section>
    <Contact />
  </>
);

export default Page;
