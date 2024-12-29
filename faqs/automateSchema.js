export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Microsoft Power Automate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Power Automate is a platform used to create business workflows. It helps create, streamline and automate repetitive tasks and improve business processes for improved efficiency and productivity.",
      },
    },
    {
      "@type": "Question",
      name: "How can Power Automate benefit my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Power Automate can free up time for your team by automating repetitive tasks and structured business processes to reduce manual errors, increase business efficiency and allow your team to focus on higher value processes and tasks. Power Automate can also integrate with a large number of applications and services to further improve interaction with third-party applications.",
      },
    },
    {
      "@type": "Question",
      name: "What types of workflows can I create with Power Automate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can create numerous workflows within Power Automate. These range from automated workflows which are triggered by specific events, to workflows that run on a schedule as well as workflows that are manually triggered by a user. This allows for efficiency and consistency to be built into business processes to improve operations.",
      },
    },
    {
      "@type": "Question",
      name: "What costs are involved/license is required to use Microsoft Power Automate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Power Automate has several licensing options depending on the needs of your business. The various licensing options relate to what connections you're using and what kind of flows your business requires. The basic Power Automate license is also already included in your Office 365 subscription so no added cost is needed if you're not using any premium connectors or any advanced flows.",
      },
    },
    {
      "@type": "Question",
      name: "Can Power Automate integrate with third-party applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Power Automate supports a wide range of connectors for third-party applications, allowing seamless integration.",
      },
    },
    {
      "@type": "Question",
      name: "What types of business processes can be automated with Power Automate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Businesses can automate processes such as approval workflows, data entry, email notifications, file synchronization, and data collection.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a programming background to use Power Automate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Power Automate is designed for users with little to no coding experience, offering a user-friendly interface.",
      },
    },
  ],
};

export default faqSchema;
