import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with your API key
const apiKey = process.env.SENDGRID_API_KEY;
if (apiKey) {
  sgMail.setApiKey(apiKey);
} else {
  console.error("SENDGRID_API_KEY is not set");
}

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Destructure the necessary data
    const { userEmail, answers, sectionScores, recommendations } = body;

    if (!userEmail) {
      return NextResponse.json(
        { error: "Email address is required" },
        { status: 400 }
      );
    }

    // Skip sending emails if SendGrid API key is missing (for testing)
    if (!apiKey) {
      console.warn("Skipping email send because SENDGRID_API_KEY is missing");
      return NextResponse.json({
        success: true,
        warning: "Emails not sent - SendGrid API key missing",
      });
    }

    try {
      // Generate HTML email content for the team
      const teamEmailContent = generateTeamEmailHTML(
        userEmail,
        sectionScores,
        recommendations,
        answers
      );

      // Generate HTML email content for the user
      const userEmailContent = generateUserEmailHTML(
        sectionScores,
        recommendations
      );

      // Define email messages
      const teamEmail = {
        to: "consult@officeexperts.com.au", // Consider changing this to your email for testing
        from: "consult@officeexperts.com.au", // This must be a verified sender in SendGrid
        subject: `New Power Platform Assessment: ${userEmail}`,
        html: teamEmailContent,
      };

      const userEmailMessage = {
        to: userEmail,
        from: "consult@officeexperts.com.au", // This must be a verified sender in SendGrid
        subject: "Your Power Platform Proficiency Results",
        html: userEmailContent,
      };

      // Send emails
      const [teamEmailResponse, userEmailResponse] = await Promise.all([
        sgMail.send(teamEmail),
        sgMail.send(userEmailMessage),
      ]);

      console.log("Emails sent successfully");
      return NextResponse.json({ success: true });
    } catch (emailError) {
      console.error("SendGrid error:", emailError);

      // Return a more detailed error response with SendGrid error details
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: emailError.toString(),
          response: emailError.response?.body
            ? JSON.stringify(emailError.response.body)
            : null,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing assessment:", error);
    return NextResponse.json(
      {
        error: "Failed to process assessment",
        details: error.toString(),
      },
      { status: 500 }
    );
  }
}

function generateTeamEmailHTML(
  userEmail,
  sectionScores,
  recommendations,
  answers
) {
  // Create a detailed breakdown for your team
  let skillLevels = "";

  Object.entries(sectionScores).forEach(([section, data]) => {
    skillLevels += `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${section}</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${data.percentage}%</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd; text-transform: capitalize;">${data.level}</td>
      </tr>
    `;
  });

  // Create a detailed breakdown of answers
  let detailedAnswers = "";

  Object.entries(answers).forEach(([questionId, answerData]) => {
    detailedAnswers += `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${questionId}</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${answerData.value}</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${answerData.score}/3</td>
      </tr>
    `;
  });

  // Calculate overall proficiency
  const totalScore = Object.values(answers).reduce(
    (sum, a) => sum + a.score,
    0
  );
  const maxPossibleScore = Object.values(answers).length * 3;
  const overallPercentage = Math.round((totalScore / maxPossibleScore) * 100);

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">New Power Platform Assessment Submission</h2>
      <p>A new Power Platform assessment has been submitted by <strong>${userEmail}</strong>.</p>
      
      <h3 style="margin-top: 20px; color: #333;">Overall Proficiency: ${overallPercentage}%</h3>
      
      <h3 style="margin-top: 20px; color: #333;">Section Scores</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Section</th>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Percentage</th>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Level</th>
          </tr>
        </thead>
        <tbody>
          ${skillLevels}
        </tbody>
      </table>
      
      <h3 style="margin-top: 20px; color: #333;">Recommended Services</h3>
      <ul>
        ${recommendations
          .map(
            (rec) => `
          <li>
            <strong>${rec.title}</strong>
            <br>
            ${rec.resources
              .filter((r) => r.type === "service")
              .map((r) => `- ${r.text}`)
              .join("<br>")}
          </li>
        `
          )
          .join("")}
      </ul>
      
      <h3 style="margin-top: 20px; color: #333;">Detailed Answers</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f3f4f6;">
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Question ID</th>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Answer</th>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Score</th>
          </tr>
        </thead>
        <tbody>
          ${detailedAnswers}
        </tbody>
      </table>
      
      <p style="margin-top: 20px; color: #555;">
        This lead may benefit from personalised follow-up, especially regarding 
        ${recommendations[0]?.title || "their Power Platform needs"}.
      </p>
    </div>
  `;
}

function generateUserEmailHTML(sectionScores, recommendations) {
  // Create a visual representation of their scores
  let skillLevels = "";

  Object.entries(sectionScores).forEach(([section, data]) => {
    const barColor =
      data.level === "advanced"
        ? "#10B981"
        : data.level === "intermediate"
        ? "#3B82F6"
        : data.level === "basic"
        ? "#F59E0B"
        : "#9CA3AF";

    skillLevels += `
      <div style="margin-bottom: 15px;">
        <p style="margin: 0 0 5px 0; font-weight: 500;">${section}: ${
      data.percentage
    }%</p>
        <div style="background-color: #eee; height: 8px; border-radius: 4px; width: 100%;">
          <div style="background-color: ${barColor}; height: 8px; border-radius: 4px; width: ${
      data.percentage
    }%;"></div>
        </div>
        <p style="margin: 5px 0 0 0; color: #666; font-size: 14px; text-transform: capitalize;">
          ${data.level === "none" ? "No experience" : data.level} proficiency
        </p>
      </div>
    `;
  });

  // Create personalized recommendations
  let recContent = "";

  recommendations.forEach((rec) => {
    const borderColor =
      rec.type === "advanced"
        ? "#10B981"
        : rec.type === "intermediate"
        ? "#3B82F6"
        : "#F59E0B";

    recContent += `
      <div style="margin-bottom: 20px; padding-left: 15px; border-left: 4px solid ${borderColor};">
        <h4 style="margin: 0 0 8px 0; color: #333;">${rec.title}</h4>
        <p style="margin: 0 0 12px 0; color: #555;">${rec.description}</p>
        <p style="margin: 0; font-size: 14px;">
          <strong>Resources:</strong><br>
          ${rec.resources
            .map(
              (r) => `
            - <a href="https://officeexperts.com.au${r.link}" style="color: ${
                r.type === "service" ? "#3B82F6" : "#10B981"
              };">
                ${r.text}
              </a>
          `
            )
            .join("<br>")}
        </p>
      </div>
    `;
  });

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://officeexperts.com.au/logo.png" alt="Office Experts Group" style="max-width: 200px;">
      </div>
      
      <h2 style="color: #333; text-align: center;">Your Power Platform Proficiency Results</h2>
      
      <p style="margin-bottom: 20px; color: #555;">
        Thank you for completing our Power Platform proficiency assessment. Based on your responses, 
        we've prepared a personalised analysis of your skills and recommendations for improvement.
      </p>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
        <h3 style="margin-top: 0; color: #333;">Your Skill Levels</h3>
        ${skillLevels}
      </div>
      
      <h3 style="color: #333;">Personalised Recommendations</h3>
      ${recContent}
      
      <div style="background-color: #f0f7ff; padding: 20px; border-radius: 8px; margin-top: 30px;">
        <h4 style="margin-top: 0; color: #333;">Need personalised guidance?</h4>
        <p style="color: #555; margin-bottom: 15px;">
          Our Microsoft-certified consultants can help you develop a custom Power Platform strategy 
          tailored to your business needs.
        </p>
        <a href="https://officeexperts.com.au/contact-us" 
           style="display: inline-block; background-color: #3B82F6; color: white; text-decoration: none; padding: 10px 20px; border-radius: 4px; font-weight: 500;">
           Book a Free Consultation
        </a>
      </div>
      
      <p style="margin-top: 30px; color: #666; font-size: 14px; text-align: center;">
        Office Experts Group | Australia's premier provider of Microsoft Office consulting services
        <br>
        <a href="https://officeexperts.com.au" style="color: #3B82F6;">www.officeexperts.com.au</a>
      </p>
      
      <p style="color: #999; font-size: 12px; text-align: center; margin-top: 20px;">
        You're receiving this email because you completed our Power Platform assessment.
        <br>
        You may receive a follow up email from one of our experts if you'd like to schedule a free consultation regarding your Power Platform needs.
      </p>
    </div>
  `;
}
