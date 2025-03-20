"use client";
import React, { useState, useEffect } from "react";

import styles from "../styles/assessment.module.css";
import Link from "next/link";

const PowerPlatformAssessment = ({ onStateChange }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  // Use useEffect to notify the parent component when showResults changes
  useEffect(() => {
    if (onStateChange) {
      onStateChange({
        showResults,
        showEmailForm,
        currentStep,
      });
    }
  }, [showResults, showEmailForm, currentStep, onStateChange]);

  // Define the assessment questions
  const questions = [
    {
      section: "Power BI",
      questions: [
        {
          id: "powerbi_data_source",
          question: "Which data sources have you connected to Power BI?",
          options: [
            {
              value: "advanced",
              text: "Multiple sources including databases, APIs, and custom connectors",
              score: 3,
            },
            {
              value: "intermediate",
              text: "Excel files, SQL databases, and some cloud services",
              score: 2,
            },
            {
              value: "basic",
              text: "Mainly Excel files and CSV data",
              score: 1,
            },
            {
              value: "none",
              text: "I haven't connected data sources to Power BI",
              score: 0,
            },
          ],
        },
        {
          id: "powerbi_data_modeling",
          question: "How do you handle data relationships in Power BI?",
          options: [
            {
              value: "advanced",
              text: "I create complex data models with multiple tables, relationships, and calculated tables",
              score: 3,
            },
            {
              value: "intermediate",
              text: "I establish basic relationships between a few tables",
              score: 2,
            },
            {
              value: "basic",
              text: "I mostly work with flat data in a single table",
              score: 1,
            },
            {
              value: "none",
              text: "I'm not familiar with data relationships in Power BI",
              score: 0,
            },
          ],
        },
        {
          id: "powerbi_dax",
          question: "What's your experience with DAX formulas?",
          options: [
            {
              value: "advanced",
              text: "I write complex DAX measures including time intelligence and iterators",
              score: 3,
            },
            {
              value: "intermediate",
              text: "I create calculated columns and basic measures",
              score: 2,
            },
            {
              value: "basic",
              text: "I've used some pre-built DAX functions",
              score: 1,
            },
            { value: "none", text: "I haven't used DAX", score: 0 },
          ],
        },
      ],
    },
    {
      section: "Power Automate",
      questions: [
        {
          id: "powerautomate_flows",
          question: "How many automated flows have you built?",
          options: [
            {
              value: "advanced",
              text: "10+ flows with complex conditions and error handling",
              score: 3,
            },
            {
              value: "intermediate",
              text: "3-9 flows using various connectors",
              score: 2,
            },
            { value: "basic", text: "1-2 simple flows or templates", score: 1 },
            { value: "none", text: "I haven't created any flows", score: 0 },
          ],
        },
        {
          id: "powerautomate_triggers",
          question: "Which triggers do you use in Power Automate?",
          options: [
            {
              value: "advanced",
              text: "Custom API triggers, scheduled triggers, and business event triggers",
              score: 3,
            },
            {
              value: "intermediate",
              text: "When an item is created/modified and basic Microsoft 365 triggers",
              score: 2,
            },
            {
              value: "basic",
              text: "Mainly button clicks or simple email triggers",
              score: 1,
            },
            { value: "none", text: "I'm not familiar with triggers", score: 0 },
          ],
        },
        {
          id: "powerautomate_connectors",
          question: "Which connectors have you worked with?",
          options: [
            {
              value: "advanced",
              text: "Custom connectors, HTTP requests, and 10+ different services",
              score: 3,
            },
            {
              value: "intermediate",
              text: "Office 365, SharePoint, and a few third-party services",
              score: 2,
            },
            {
              value: "basic",
              text: "Only basic Microsoft 365 connectors",
              score: 1,
            },
            {
              value: "none",
              text: "I haven't worked with connectors",
              score: 0,
            },
          ],
        },
      ],
    },
    {
      section: "Power Apps",
      questions: [
        {
          id: "powerapps_created",
          question: "How many canvas apps have you built?",
          options: [
            {
              value: "advanced",
              text: "5+ apps with complex functionality and data sources",
              score: 3,
            },
            {
              value: "intermediate",
              text: "2-4 apps with multiple screens and basic logic",
              score: 2,
            },
            { value: "basic", text: "1 app or followed a template", score: 1 },
            { value: "none", text: "I haven't created any apps", score: 0 },
          ],
        },
        {
          id: "powerapps_formulas",
          question: "How comfortable are you with Power Apps formulas?",
          options: [
            {
              value: "advanced",
              text: "I write complex formulas including collections, variables, and custom functions",
              score: 3,
            },
            {
              value: "intermediate",
              text: "I use basic functions like Filter(), Sum(), and If()",
              score: 2,
            },
            {
              value: "basic",
              text: "I use simple property assignments",
              score: 1,
            },
            {
              value: "none",
              text: "I'm not familiar with Power Apps formulas",
              score: 0,
            },
          ],
        },
        {
          id: "powerapps_controls",
          question: "How do you use controls in your apps?",
          options: [
            {
              value: "advanced",
              text: "I use custom components and complex control configurations",
              score: 3,
            },
            {
              value: "intermediate",
              text: "I customize controls with basic properties and events",
              score: 2,
            },
            {
              value: "basic",
              text: "I use controls with minimal customization",
              score: 1,
            },
            {
              value: "none",
              text: "I haven't used controls in Power Apps",
              score: 0,
            },
          ],
        },
      ],
    },
    {
      section: "Power Virtual Agents",
      questions: [
        {
          id: "pva_chatbots",
          question: "Have you created chatbots with Power Virtual Agents?",
          options: [
            {
              value: "advanced",
              text: "Yes, multiple bots with complex dialog trees and custom entities",
              score: 3,
            },
            {
              value: "intermediate",
              text: "Yes, a bot with multiple topics and some customization",
              score: 2,
            },
            {
              value: "basic",
              text: "I've experimented with a simple bot",
              score: 1,
            },
            {
              value: "none",
              text: "No, I haven't used Power Virtual Agents",
              score: 0,
            },
          ],
        },
        {
          id: "pva_entities",
          question: "How do you use entities in your chatbots?",
          options: [
            {
              value: "advanced",
              text: "I create custom entities and use them across multiple topics",
              score: 3,
            },
            {
              value: "intermediate",
              text: "I use prebuilt entities and some simple custom entities",
              score: 2,
            },
            { value: "basic", text: "I only use prebuilt entities", score: 1 },
            {
              value: "none",
              text: "I'm not familiar with entities in chatbots",
              score: 0,
            },
          ],
        },
      ],
    },
    {
      section: "Integration & Strategy",
      questions: [
        {
          id: "integration_experience",
          question: "Have you integrated multiple Power Platform components?",
          options: [
            {
              value: "advanced",
              text: "Yes, I've built end-to-end solutions combining Apps, Automate, BI, and other services",
              score: 3,
            },
            {
              value: "intermediate",
              text: "I've connected 2-3 Power Platform components in projects",
              score: 2,
            },
            {
              value: "basic",
              text: "I've used components separately but not integrated them",
              score: 1,
            },
            {
              value: "none",
              text: "No, I work with each component in isolation",
              score: 0,
            },
          ],
        },
        {
          id: "business_process",
          question: "How do you approach business process automation?",
          options: [
            {
              value: "advanced",
              text: "I map entire processes and implement comprehensive digital transformations",
              score: 3,
            },
            {
              value: "intermediate",
              text: "I automate specific workflows with some planning",
              score: 2,
            },
            {
              value: "basic",
              text: "I build simple automations for individual tasks",
              score: 1,
            },
            {
              value: "none",
              text: "I haven't automated business processes",
              score: 0,
            },
          ],
        },
      ],
    },
  ];

  const totalQuestions = questions.reduce(
    (total, section) => total + section.questions.length,
    0
  );

  // Get all questions in a flat array
  const flattenedQuestions = questions.flatMap((section) =>
    section.questions.map((q) => ({ ...q, section: section.section }))
  );

  // Current question object
  const currentQuestion =
    currentStep < flattenedQuestions.length
      ? flattenedQuestions[currentStep]
      : null;

  // Handle answer selection
  const handleAnswer = (questionId, answerValue, score) => {
    setAnswers({
      ...answers,
      [questionId]: { value: answerValue, score },
    });

    // Move to next question or show results if last question
    if (currentStep < flattenedQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowEmailForm(true);
    }
  };

  // Handle email submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Submitting assessment data:", {
        userEmail,
        answersCount: Object.keys(answers).length,
        sectionScoresCount: Object.keys(calculateSectionScores()).length,
        recommendationsCount: getRecommendations(calculateSectionScores())
          .length,
      });

      const response = await fetch("/api/assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          answers,
          sectionScores: calculateSectionScores(),
          recommendations: getRecommendations(calculateSectionScores()),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log("Assessment submission successful");
        setEmailSubmitted(true);
        setShowResults(true);
      } else {
        // Handle error
        console.error("Error submitting assessment:", data.error, data.details);
        alert(`Error submitting assessment: ${data.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting assessment:", error);
      alert("Error submitting assessment. Please try again later.");
    }
  };

  // Calculate section scores
  const calculateSectionScores = () => {
    const sectionScores = {};

    questions.forEach((section) => {
      const sectionQuestions = section.questions.map((q) => q.id);
      const answeredQuestions = sectionQuestions.filter((id) => answers[id]);

      if (answeredQuestions.length === 0) {
        sectionScores[section.section] = {
          score: 0,
          percentage: 0,
          level: "none",
          answered: 0,
          total: sectionQuestions.length,
        };
        return;
      }

      const totalScore = answeredQuestions.reduce(
        (sum, id) => sum + answers[id].score,
        0
      );
      const maxPossibleScore = answeredQuestions.length * 3; // 3 is max score per question
      const percentage = Math.round((totalScore / maxPossibleScore) * 100);

      let level = "beginner";
      if (percentage >= 80) level = "advanced";
      else if (percentage >= 50) level = "intermediate";
      else if (percentage >= 20) level = "basic";

      sectionScores[section.section] = {
        score: totalScore,
        percentage,
        level,
        answered: answeredQuestions.length,
        total: sectionQuestions.length,
      };
    });

    return sectionScores;
  };

  // Recommendations based on section scores
  const getRecommendations = (sectionScores) => {
    const recommendations = [];

    // Power BI recommendations
    if (sectionScores["Power BI"]) {
      const powerBIScore = sectionScores["Power BI"];

      if (powerBIScore.level === "advanced") {
        recommendations.push({
          section: "Power BI",
          type: "advanced",
          title: "Take your Power BI skills to the enterprise level",
          description:
            "Impressive Power BI proficiency! Your skills in data modeling and DAX formulas put you ahead of many professionals. Consider exploring advanced topics like enterprise deployment strategies, dataflows, and composite models to further enhance your capabilities. You might also benefit from learning optimisation techniques for large datasets and implementing low-level security patterns.",
          resources: [
            {
              type: "service",
              text: "Enterprise BI Strategy Consultation",
              link: "/services/microsoft-power-platform/microsoft-power-bi",
            },
            {
              type: "resource",
              text: "Dataflow best practices guide",
              link: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi",
            },
          ],
        });
      } else if (powerBIScore.level === "intermediate") {
        recommendations.push({
          section: "Power BI",
          type: "intermediate",
          title: "Enhance your Power BI data modeling skills",
          description:
            "You've established a solid foundation with Power BI! You likely understand how to connect to various data sources and create meaningful visualisations. To progress further, focus on mastering DAX functions, implementing star schema modeling, and creating more dynamic reports with drill-through and bookmarks. Our team can help bridge the gap between your current skills and advanced enterprise implementations.",
          resources: [
            {
              type: "service",
              text: "Enterprise BI Strategy Consultation",
              link: "/services/microsoft-power-platform/microsoft-power-bi",
            },
            {
              type: "resource",
              text: "Introduction to DAX Calculations",
              link: "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-quickstart-learn-dax-basics",
            },
          ],
        });
      } else {
        recommendations.push({
          section: "Power BI",
          type: "basic",
          title: "Build foundational Power BI skills",
          description:
            "There's significant opportunity to enhance your Power BI capabilities! Learning this powerful business intelligence tool could transform how your organisation makes data-driven decisions. Start by mastering the basics of data connections, visualisation types, and simple report creation. Our experts can accelerate your learning journey with structured training tailored to your specific business needs and data sources.",
          resources: [
            {
              type: "service",
              text: "Enterprise BI Strategy Consultation",
              link: "/services/microsoft-power-platform/microsoft-power-bi",
            },
            {
              type: "resource",
              text: "Getting Started with Power BI",
              link: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi",
            },
          ],
        });
      }
    }

    // Power Automate recommendations
    if (sectionScores["Power Automate"]) {
      const powerAutomateScore = sectionScores["Power Automate"];

      if (powerAutomateScore.level === "advanced") {
        recommendations.push({
          section: "Power Automate",
          type: "advanced",
          title: "Implement enterprise-grade automation",
          description:
            "Your Power Automate expertise is impressive! You're likely already saving your organisation substantial time through automation. To further enhance your capabilities, focus on implementing robust error handling, security best practices, and complex business process orchestration. Our team can provide guidance on governance models and help you tackle more complex integration scenarios if you encounter any implementation challenges.",
          resources: [
            {
              type: "service",
              text: "Power Automate Services",
              link: "/services/power-platform/microsoft-power-automate",
            },
            {
              type: "resource",
              text: "Error Handling Best Practices",
              link: "https://learn.microsoft.com/en-us/training/modules/error-handling/",
            },
          ],
        });
      } else if (powerAutomateScore.level === "intermediate") {
        recommendations.push({
          section: "Power Automate",
          type: "intermediate",
          title: "Expand your Power Automate capabilities",
          description:
            "You've built a good foundation with Power Automate! Your ability to create basic workflows is valuable for your organisation. To take your skills to the next level, focus on implementing approval processes, working with custom connectors, and creating more complex conditional logic. Our experts can help you identify automation opportunities specific to your business processes that could yield significant time savings.",
          resources: [
            {
              type: "service",
              text: "Power Automate Services",
              link: "/services/power-platform/microsoft-power-automate",
            },
            {
              type: "resource",
              text: "Working with Custom Connectors",
              link: "https://learn.microsoft.com/en-us/connectors/custom-connectors/define-blank",
            },
          ],
        });
      } else {
        recommendations.push({
          section: "Power Automate",
          type: "basic",
          title: "Start automating with Power Automate",
          description:
            "There's tremendous opportunity to leverage Power Automate in your organisation! Automating routine tasks could save your team hundreds of hours annually. Begin by identifying repetitive tasks in your daily work that could be automated, such as email notifications, approval processes, or data collection. Our team can help you identify high-value automation opportunities specific to your business processes and guide you through implementation.",
          resources: [
            {
              type: "service",
              text: "Power Automate Services",
              link: "/services/power-platform/microsoft-power-automate",
            },
            {
              type: "resource",
              text: "Cloud Flow in Power Automate",
              link: "https://learn.microsoft.com/en-us/power-automate/get-started-logic-flow?tabs=new-designer",
            },
          ],
        });
      }
    }

    // Power Apps recommendations
    if (sectionScores["Power Apps"]) {
      const powerAppsScore = sectionScores["Power Apps"];

      if (powerAppsScore.level === "advanced") {
        recommendations.push({
          section: "Power Apps",
          type: "advanced",
          title: "Build enterprise-grade applications",
          description:
            "Your Power Apps proficiency is excellent! You've clearly invested time in mastering this powerful tool. To further enhance your capabilities, focus on creating component libraries, implementing performance optimisation techniques, and designing complex data operations. If you encounter challenges with specific implementation scenarios, our team can provide targeted consulting to help overcome those obstacles and ensure your apps meet enterprise standards.",
          resources: [
            {
              type: "service",
              text: "Power Apps Services",
              link: "/services/power-platform/microsoft-power-automate",
            },
            {
              type: "resource",
              text: "Component Library Best Practices",
              link: "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/component-library",
            },
          ],
        });
      } else if (powerAppsScore.level === "intermediate") {
        recommendations.push({
          section: "Power Apps",
          type: "intermediate",
          title: "Enhance your Power Apps development skills",
          description:
            "You've established good foundational knowledge with Power Apps! You can likely create functional apps with data connections and basic formulas. To advance your skills, focus on mastering complex formulas, implementing responsive design patterns, and integrating with a wider range of data sources. Our team can help accelerate your growth with targeted training on the specific aspects that would most benefit your organisation's app development needs.",
          resources: [
            {
              type: "service",
              text: "Power Apps Services",
              link: "/services/power-platform/microsoft-power-automate",
            },
            {
              type: "resource",
              text: "Delegable Query Patterns",
              link: "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview",
            },
          ],
        });
      } else {
        recommendations.push({
          section: "Power Apps",
          type: "basic",
          title: "Start building with Power Apps",
          description:
            "There's significant potential to transform your business processes with Power Apps! Creating custom business applications without extensive coding could help you replace paper forms, legacy systems, or spreadsheet-based processes. Begin by identifying a simple business process that could benefit from digitisation. Our team can help you identify high-value opportunities for custom apps and guide you through the development process to ensure quick wins and business impact.",
          resources: [
            {
              type: "service",
              text: "Power Apps Services",
              link: "/services/power-platform/microsoft-power-automate",
            },
            {
              type: "resource",
              text: "Your First Canvas App Guide",
              link: "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/using-logic-flows",
            },
          ],
        });
      }
    }

    // Power Virtual Agents recommendations
    if (sectionScores["Power Virtual Agents"]) {
      const pvaScore = sectionScores["Power Virtual Agents"];

      if (pvaScore.level === "advanced") {
        recommendations.push({
          section: "Power Virtual Agents",
          type: "advanced",
          title: "Create sophisticated conversational experiences",
          description:
            "Your proficiency with Power Virtual Agents is impressive! You're likely already creating sophisticated chatbots that deliver real business value. To further enhance your capabilities, consider implementing advanced conversation design patterns, integrating custom NLP models, and creating reusable components across multiple bots. If you encounter specific implementation challenges, our team can provide targeted guidance to help you create even more advanced conversational experiences.",
          resources: [
            {
              type: "service",
              text: "Chat with us to discuss further integration",
              link: "/contact-us",
            },
            {
              type: "resource",
              text: "Enterprise Bot Framework Integration",
              link: "https://azure.microsoft.com/en-us/products/ai-services/ai-bot-service",
            },
          ],
        });
      } else if (pvaScore.level === "intermediate") {
        recommendations.push({
          section: "Power Virtual Agents",
          type: "intermediate",
          title: "Expand your chatbot capabilities",
          description:
            "You've built good foundational knowledge with Power Virtual Agents! Your experience with creating basic chatbots is valuable. To take your skills to the next level, focus on implementing more complex dialog patterns, enhancing entity recognition, and integrating with other Power Platform components. Our team can help you identify specific chatbot opportunities in your organisation and develop more sophisticated conversational experiences.",
          resources: [
            {
              type: "service",
              text: "Chat with us to discuss further integration",
              link: "/contact-us",
            },
            {
              type: "resource",
              text: "Advanced Entity Extraction Techniques",
              link: "/resources/entity-extraction",
            },
          ],
        });
      } else {
        recommendations.push({
          section: "Power Virtual Agents",
          type: "basic",
          title: "Begin your chatbot journey",
          description:
            "There's significant opportunity to enhance customer and employee experiences with Power Virtual Agents! Creating chatbots can help automate frequently asked questions, guide users through processes, and provide 24/7 support. Start by identifying common support scenarios that could be automated. Our team can help you identify high-value use cases and guide you through building your first chatbot to ensure it delivers immediate business value.",
          resources: [
            {
              type: "service",
              text: "Chat with us to discuss further integration",
              link: "/contact-us",
            },
            {
              type: "resource",
              text: "Getting Started with PVA",
              link: "https://www.microsoft.com/en-us/microsoft-copilot/blog/copilot-studio/get-started-with-power-virtual-agents-in-a-day/",
            },
          ],
        });
      }
    }

    // Integration & Strategy recommendations based on overall profile
    const totalAnswered = Object.keys(answers).length;
    const totalScore = Object.values(answers).reduce(
      (sum, a) => sum + a.score,
      0
    );
    const overallPercentage = Math.round(
      (totalScore / (totalAnswered * 3)) * 100
    );

    if (overallPercentage >= 70) {
      recommendations.push({
        section: "Integration Strategy",
        type: "advanced",
        title: "Develop an integrated Power Platform strategy",
        description:
          "Congratulations on your comprehensive Power Platform expertise! Your advanced understanding across multiple components puts you in an excellent position to drive digital transformation initiatives. To maximise business impact, consider developing a center of excellence and governance framework that enables your organisation to scale Power Platform solutions while maintaining control. If you encounter challenges implementing these enterprise-level strategies, our team can provide targeted guidance to help you overcome specific obstacles.",
        resources: [
          {
            type: "service",
            text: "Chat with us to discuss further integration",
            link: "/contact-us",
          },
          {
            type: "service",
            text: "Enterprise Center of Excellence Setup",
            link: "https://learn.microsoft.com/en-us/power-platform/guidance/coe/starter-kit",
          },
        ],
      });
    } else if (overallPercentage >= 40) {
      recommendations.push({
        section: "Integration Strategy",
        type: "intermediate",
        title: "Connect your Power Platform components",
        description:
          "You've developed good skills across several Power Platform components! To maximise the value of your knowledge, focus on creating integrated solutions that leverage multiple components together. For example, combining Power Apps with Power Automate for workflow-driven applications, or connecting Power BI dashboards with actionable Power Apps interfaces. Our team can help you identify integration opportunities specific to your business processes and guide you through implementation to ensure you get the most from your Power Platform investment.",
        resources: [
          {
            type: "service",
            text: "Chat with us to discuss further integration",
            link: "/contact-us",
          },
          {
            type: "resource",
            text: "Cloud Design Patterns",
            link: "https://learn.microsoft.com/en-us/azure/architecture/patterns/",
          },
        ],
      });
    } else {
      recommendations.push({
        section: "Integration Strategy",
        type: "basic",
        title: "Discover the Power Platform ecosystem",
        description:
          "There's tremendous opportunity to transform your business processes with the Power Platform! Understanding how the different components work together can help you identify high-value use cases specific to your organisation. Start by exploring how Power BI, Power Apps, and Power Automate complement each other to create complete business solutions. Our team can provide a comprehensive introduction to the Power Platform ecosystem and help you develop a roadmap for implementation that aligns with your specific business needs.",
        resources: [
          {
            type: "service",
            text: "Chat with us to discuss further integration",
            link: "/contact-us",
          },
          {
            type: "resource",
            text: "Power Platform Components Overview",
            link: "https://learn.microsoft.com/en-us/power-apps/developer/component-framework/overview",
          },
        ],
      });
    }

    return recommendations;
  };

  const sectionScores = calculateSectionScores();
  const recommendations = getRecommendations(sectionScores);

  // Progress calculation
  const progress = Math.round((currentStep / flattenedQuestions.length) * 100);

  return (
    <div className={styles.container}>
      {!showResults && !showEmailForm && (
        <>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Power Platform Integration Assessment
            </h2>
            <p className={styles.subtitle}>
              Discover your Power Platform skill level and get personalised
              recommendations to enhance your personal capabilities and assess
              your current level of business integration.
            </p>

            <div className={styles.progressContainer}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className={styles.progressText}>
              Question {currentStep + 1} of {flattenedQuestions.length}
            </p>
          </div>

          {currentQuestion && (
            <div className={styles.questionCard}>
              <h3 className={styles.sectionTitle}>{currentQuestion.section}</h3>
              <h4 className={styles.questionText}>
                {currentQuestion.question}
              </h4>

              <div className={styles.optionsContainer}>
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() =>
                      handleAnswer(
                        currentQuestion.id,
                        option.value,
                        option.score
                      )
                    }
                    className={styles.optionButton}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {showEmailForm && !emailSubmitted && (
        <div className={styles.emailFormContainer}>
          <h3 className={styles.emailFormTitle}>
            Get Your Personalised Assessment Results
          </h3>
          <p className={styles.emailFormDescription}>
            Enter your email to receive your detailed Power Platform proficiency
            report and personalised recommendations.
          </p>

          <form onSubmit={handleEmailSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className={styles.formInput}
                placeholder="you@email.com"
                required
              />
            </div>

            <div className={styles.checkboxContainer}>
              <input
                type="checkbox"
                id="consent"
                className={styles.checkbox}
                onChange={(e) => setConsent(e.target.checked)}
                required
              />
              <label htmlFor="consent" className={styles.checkboxLabel}>
                I agree to receive my assessment results and recommendations
                from one of our expert consultants.
              </label>
            </div>

            <button
              style={
                consent ? {} : { filter: "blur(0.5px)", cursor: "not-allowed" }
              }
              type="submit"
              className={styles.submitButton}
            >
              Get My Results
            </button>
          </form>
        </div>
      )}

      {showResults && (
        <div className={styles.resultsContainer}>
          <h2 className={styles.resultsTitle}>
            Your Power Platform Proficiency Results
          </h2>

          {/* Score Summary Section - Always visible */}
          <div className={styles.scoreGrid}>
            {Object.entries(sectionScores).map(([section, data]) => (
              <div key={section} className={styles.scoreCard}>
                <h3 className={styles.scoreCardTitle}>{section}</h3>
                <div className={styles.scoreBarContainer}>
                  <div className={styles.scoreBarBackground}>
                    <div
                      className={`${styles.scoreBar} ${styles[data.level]}`}
                      style={{ width: `${data.percentage}%` }}
                    ></div>
                  </div>
                  <span className={styles.scorePercentage}>
                    {data.percentage}%
                  </span>
                </div>
                <p className={styles.proficiencyLevel}>
                  {data.level === "none" ? "Limited" : data.level} proficiency
                </p>
              </div>
            ))}
          </div>

          <h3 className={styles.recommendationsTitle}>
            Personalised Recommendations
          </h3>

          {/* Recommendations as collapsible sections */}
          <div className={styles.recommendationsContainer}>
            {recommendations.map((rec, index) => (
              <details
                key={index}
                className={`${styles.recommendationDetails} ${
                  styles[rec.type]
                }`}
                open={index === 0} // Open the first one by default
              >
                <summary className={styles.recommendationSummary}>
                  <h4 className={styles.recommendationTitle}>{rec.title}</h4>
                  <span className={styles.expandIcon}>▼</span>
                </summary>

                <div className={styles.recommendationContent}>
                  <p className={styles.recommendationDescription}>
                    {rec.description}
                  </p>

                  <div className={styles.resourceLinks}>
                    {rec.resources.map((resource, idx) =>
                      resource.type === "service" ? (
                        // Internal link - no special rel attributes
                        <Link
                          key={idx}
                          href={resource.link}
                          className={`${styles.resourceLink} ${styles.serviceLink}`}
                        >
                          <span className={styles.resourceIcon}>→</span>
                          {resource.text}
                        </Link>
                      ) : (
                        // External link - add nofollow, noopener, noreferrer
                        <Link
                          key={idx}
                          href={resource.link}
                          className={`${styles.resourceLink} ${styles.resourceGuideLink}`}
                          rel="nofollow noopener noreferrer"
                        >
                          <span className={styles.resourceIcon}>📄</span>
                          {resource.text}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className={styles.ctaContainer}>
            <h4 className={styles.ctaTitle}>Need personalised guidance?</h4>
            <p className={styles.ctaDescription}>
              Our Microsoft-certified consultants can help you develop a custom
              Power Platform strategy tailored to your business needs.
            </p>
            <a href="/contact-us" className={styles.ctaButton}>
              Book a Free Consultation
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PowerPlatformAssessment;
