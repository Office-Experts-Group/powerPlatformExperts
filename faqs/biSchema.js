export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Microsoft Power BI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Power BI is a business analytics service which allows visualisation of data and sharing of insights across your organisation. Power BI connects to various data sources and creates interactive reports which allows businesses to make data-driven decisions.",
      },
    },
    {
      "@type": "Question",
      name: "What types of data sources can Power BI connect to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Power BI can connect to a wide range of data sources ranging from existing files, to live databases and third party applications. Power BI also uses Power Query to ingest and manipulate the data prior to being visually displayed in a dashboard or report, so that additional value, insight and key metrics can be pulled and displayed.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of dashboards can be created with Power BI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Power BI allows for the creation of diverse dashboards to provide visual insights to allow businesses to make informed decisions and improve performance.",
      },
    },
    {
      "@type": "Question",
      name: "What costs are involved/license is required to use Microsoft Power BI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Power BI has several licensing options depending on the needs of your business. The various licensing options relate to what kind of dashboards and reports you're looking to use, the number of users who need access and the types of data models and refresh rates you're looking for.",
      },
    },
    {
      "@type": "Question",
      name: "How secure is Power BI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Power BI provides robust security features, including data encryption, user authentication, and role-based access control.",
      },
    },
    {
      "@type": "Question",
      name: "Can Power BI be used on mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Power BI offers mobile apps for iOS and Android, allowing users to access their dashboards and reports on the go.",
      },
    },
    {
      "@type": "Question",
      name: "What are typical use cases for Power BI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Businesses use Power BI for financial analysis, sales and marketing performance tracking, customer insights, operational metrics, and more.",
      },
    },
  ],
};

export default faqSchema;
