export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Microsoft Power Apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Power Apps is a platform that can be used to create bespoke desktop and mobile applications that integrate with various data sources, Microsoft services and Microsoft products. Apps can be built quickly and efficiently to streamline, automate and improve business processes.",
      },
    },
    {
      "@type": "Question",
      name: "How can Power Apps benefit my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As Power Apps can be developed quickly and used to effectively integrate with numerous data sources and systems, Power Apps can streamline operations, maximise efficiency and reduce costs to improve business processes.",
      },
    },
    {
      "@type": "Question",
      name: "Can Power Apps be used on mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Power Apps can be used on mobile devices as well as desktop applications. Power Apps can be developed to be used solely by a mobile device or a desktop device or both depending on the business needs.",
      },
    },
    {
      "@type": "Question",
      name: "Can Power Apps integrate with my existing business tools and other Microsoft products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Power Apps can integrate with a variety of existing data sources and tools. These range from existing Microsoft products such as SharePoint, Office 365, Dataverse and SQL Server, to third party software through the library of connections present within Microsoft's Power Platform.",
      },
    },
    {
      "@type": "Question",
      name: "What costs are involved/license is required to use Microsoft Power Apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Power Apps has several licensing options depending on the needs of your business. The various licensing options relate to what connections you're using and how many users and applications your business requires. The basic Power Apps license is also already included in your Office 365 subscription, so no added cost is required if you're not using any premium connectors.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a programming background to use Power Apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Power Apps is designed for users with little to no coding experience. It offers a drag-and-drop interface and pre-built templates.",
      },
    },
    {
      "@type": "Question",
      name: "What types of apps can be built with Power Apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Businesses can create a wide variety of apps including data collection apps, inventory management, customer relationship management (CRM) apps, employee onboarding apps, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How secure is Power Apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Power Apps provides robust security features, including data encryption, user authentication, and role-based access control.",
      },
    },
  ],
};

export default faqSchema;
