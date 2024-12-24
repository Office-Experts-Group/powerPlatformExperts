// app/data/powerPlatformFaqSchema.js
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Microsoft Power Platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft's Power Platform is Microsoft's collection of cloud based tools dedicated to developing custom business applications, automate workflows and visualise and analyse data. The platform is able to integrate to various sources and tools to allow the development of bespoke solutions that solve business needs.",
      },
    },
    {
      "@type": "Question",
      name: "What services do you offer in Microsoft's Power Platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are experts in all products within Microsoft's Power Platform and can use Power Apps to develop custom business applications for specific business needs. We can use Power BI to tailor custom reports and dashboards to provide actionable data insights, Power Automate to automate and streamline business workflows and Power Pages to create stunning web experiences.",
      },
    },
    {
      "@type": "Question",
      name: "How can Power Platform help my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're looking for a cloud-based tool to automate, streamline or improve business processes, the applications within Microsoft's Power Platform can be used to achieve the required outcome you're looking for.",
      },
    },
  ],
};

export default faqSchema;
