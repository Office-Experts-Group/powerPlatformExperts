// utils/schemaGenerators.js
// Generates reusable Organization, ProfessionalService, and WebSite schemas for Power Platform Experts

// Shared service areas used across both schema types
const SERVICE_AREAS = [
  { "@type": "Country", name: "Australia" },
  { "@type": "AdministrativeArea", name: "New South Wales" },
  { "@type": "AdministrativeArea", name: "Victoria" },
  { "@type": "AdministrativeArea", name: "Queensland" },
  { "@type": "AdministrativeArea", name: "Western Australia" },
  { "@type": "AdministrativeArea", name: "South Australia" },
  { "@type": "AdministrativeArea", name: "Tasmania" },
  { "@type": "AdministrativeArea", name: "Australian Capital Territory" },
  { "@type": "AdministrativeArea", name: "Northern Territory" },
];

// Physical/operational locations for the business
const LOCATIONS = [
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Sydney",
      postalCode: "2000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Grafton",
      postalCode: "2460",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Newcastle",
      postalCode: "2300",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NSW",
      addressLocality: "Wollongong",
      postalCode: "2500",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Melbourne",
      postalCode: "3000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Richmond",
      postalCode: "3121",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "VIC",
      addressLocality: "Geelong",
      postalCode: "3220",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "QLD",
      addressLocality: "Brisbane",
      postalCode: "4000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "QLD",
      addressLocality: "Gold Coast",
      postalCode: "4217",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "WA",
      addressLocality: "Perth",
      postalCode: "6000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "SA",
      addressLocality: "Adelaide",
      postalCode: "5000",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "NT",
      addressLocality: "Darwin",
      postalCode: "0800",
    },
  },
  {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
      addressRegion: "ACT",
      addressLocality: "Canberra",
      postalCode: "2600",
    },
  },
];

// Power Platform-specific services — comprehensive list to maximise SEO and AI overview coverage
const SERVICES = [
  // Power BI
  {
    name: "Power BI Dashboard Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power BI Report Design and Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power BI Data Modelling",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power BI DAX Formula Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power BI Service and Workspace Configuration",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power BI Gateway Setup and Management",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power BI Embedded Solutions",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power BI Row-Level Security Implementation",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power BI Migration and Upgrades",
    serviceType: "Power Platform Consulting",
  },
  // Power Apps
  {
    name: "Power Apps Canvas App Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Apps Model-Driven App Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Apps Custom Business Application Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Apps Dataverse Configuration",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Apps SharePoint Integration",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Apps Mobile Application Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Apps Support and Troubleshooting",
    serviceType: "Power Platform Consulting",
  },
  // Power Automate
  {
    name: "Power Automate Workflow Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Automate Business Process Automation",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Automate Desktop Flow Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Automate Cloud Flow Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Automate Approval Workflow Setup",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Automate SharePoint and Teams Integration",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Automate Support and Optimisation",
    serviceType: "Power Platform Consulting",
  },
  // Power Pages
  {
    name: "Power Pages Website Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Pages Customer Portal Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Pages External-Facing Site Configuration",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Pages Dataverse Integration",
    serviceType: "Power Platform Consulting",
  },
  // Platform-wide and integration services
  {
    name: "Microsoft Dataverse Design and Configuration",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Platform Environment Setup and Governance",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Platform Centre of Excellence Implementation",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Platform and Microsoft 365 Integration",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Platform and Azure Integration",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Platform and Dynamics 365 Integration",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Platform Custom Connector Development",
    serviceType: "Power Platform Consulting",
  },
  {
    name: "Power Platform Support and Managed Services",
    serviceType: "Power Platform Consulting",
  },
  // Delivery
  {
    name: "Remote Power Platform Consulting",
    serviceType: "Australia-wide Power Platform Services",
  },
  {
    name: "On-site Power Platform Consulting",
    serviceType: "Australia-wide Power Platform Services",
  },
];

// Builds OfferCatalog item list from the SERVICES array
const buildOffers = () =>
  SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.name,
      serviceType: s.serviceType,
    },
  }));

// ProfessionalService schema — describes the Power Platform Experts business entity
// areaServed and location are valid on LocalBusiness, which ProfessionalService extends
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": "https://www.powerplatformexperts.com.au#business",
  name: "Microsoft Power Platform Consulting Services",
  url: "https://www.powerplatformexperts.com.au",
  description:
    "Professional Microsoft Power Platform consulting, development and support services across Australia. Custom Power BI dashboards, Power Apps development, Power Automate workflows, Power Pages portals and Copilot Studio solutions.",
  priceRange: "$$",
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
  foundingDate: "2000",
  areaServed: SERVICE_AREAS,
  location: LOCATIONS,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Microsoft Power Platform Consulting Services",
    itemListElement: buildOffers(),
  },
});

// Organization schema — shared company identity across all 5 Office Experts Group sites
export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.powerplatformexperts.com.au#organization",
  name: "Office Experts Group",
  url: "https://www.powerplatformexperts.com.au",
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
  foundingDate: "2000",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "1300 102 810",
      email: "consult@officeexperts.com.au",
      availableLanguage: "en-AU",
      contactOption: "TollFree",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    },
  ],
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.powerplatformexperts.com.au/logo.png",
    url: "https://www.powerplatformexperts.com.au/logo.png",
    contentUrl: "https://www.powerplatformexperts.com.au/logo.png",
    width: 1200,
    height: 630,
    caption: "Power Platform Experts — Microsoft Power Platform Consulting",
  },
  image: {
    "@id": "https://www.powerplatformexperts.com.au/logo.png",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});

// WebSite schema — parameterised so it can be reused across all 5 sites
// domain:      full origin URL e.g. "https://www.powerplatformexperts.com.au"
// name:        site brand name e.g. "Power Platform Experts"
// description: short tagline for the description field
export const generateWebSiteSchema = (domain, name, description) => ({
  "@type": "WebSite",
  "@id": `${domain}#website`,
  url: domain,
  name,
  description,
  publisher: {
    // References the Organization node in the same @graph — avoids repeating org data
    "@id": `${domain}#organization`,
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${domain}?s={search_term_string}`,
      },
      // Plain string format required — PropertyValueSpecification object causes validation errors
      "query-input": "required name=search_term_string",
    },
  ],
  inLanguage: "en-AU",
});
