import React from 'react';
import CodeBlock from '../../../components/CodeBlock';

import styles from '../../../styles/blogPost.module.scss';
import Link from 'next/link';
import Contact from '../../../components/Contact';

const PowerAppsValidationBlogPost = () => {
  // Field indicator code sample
  const indicatorCode = `// Title field indicator visibility
If(
    txtTitle.Text = "",
    true,
    false
)

// Description field indicator visibility
If(
    txtDescription.Text = "",
    true,
    false
)

// Radio button/dropdown indicator visibility
If(
    IsBlank(rdoPriority.Selected.Value),
    true,
    false
)`;

  // Save button code sample
  const saveButtonCode = `// Save button DisplayMode property
If(
    indicator1.Visible = true || 
    indicator2.Visible = true || 
    indicator3.Visible = true,
    DisplayMode.Disabled,
    DisplayMode.Edit
)`;

  // Advanced validation example
  const advancedValidationCode = `// Email format validation indicator
If(
    !IsBlank(txtEmail.Text) && 
    !Contains(txtEmail.Text, "@") || 
    !Contains(txtEmail.Text, "."),
    true,  // Show indicator for invalid format
    false  // Hide indicator when format is valid or field is empty
)

// Date validation - ensuring end date is after start date
If(
    !IsBlank(dtEnd.SelectedDate) && 
    !IsBlank(dtStart.SelectedDate) && 
    dtEnd.SelectedDate < dtStart.SelectedDate,
    true,  // Show indicator when end date is before start date
    false  // Hide indicator when dates are valid
)`;

  // Complete form validation example
  const completeFormCode = `// For a multi-step form
// Enable the "Next" button only when all required fields are valid
If(
    // Any validation indicator is visible
    Or(
        indicator1.Visible,
        indicator2.Visible,
        indicator3.Visible,
        indicator4.Visible,
        indicator5.Visible
    ),
    // Disable button if any indicator is visible
    DisplayMode.Disabled,
    // Otherwise enable the button
    DisplayMode.Edit
)`;

  return (
    <>
    <div className={styles.head}></div>
    <div className={styles.blogContainer}>
      <div className={styles.preface}>
        <div>
          <p>Author: Marcello Brocchi</p>
          <p>Reading time: 5min</p>
        </div>
        <div className={styles.svgs}>
          <a 
            href="https://www.linkedin.com/in/marcellobrocchi/?originalSubdomain=au" 
            rel="nofollow noreferrer noopener"
          >
            <svg stroke="currentColor" fill="#0A66C2" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"></path></svg>
          </a>
          <a 
            href="https://www.youtube.com/@ChinoDoesStuff/featured" 
            rel="nofollow noreferrer noopener"
          >
            <svg stroke="currentColor" fill="#FF0000" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path></svg>
          </a>
        </div>
      </div>
      <h1 className={styles.blogTitle}>Power Apps Data Validation - The Best Way to Do It!</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          Data validation is a critical part of any application that collects user input. While many form builders offer validation out of the box, Power Apps requires you to implement it yourself. The good news is that once you understand the pattern, it's straightforward and highly customisable.
        </p>
        <p>
          In this guide, I'll show you what I believe is the best approach to data validation in Power Apps. This method is:
        </p>
        <ul>
          <li>Easy to implement and maintain</li>
          <li>Scalable to forms with many fields</li>
          <li>Visually intuitive for users</li>
          <li>Simple for other developers to understand</li>
        </ul>

        <h2>Prefer to Watch the Video?</h2>
        <p>This guide is also available as a video tutorial for those who prefer visual learning.</p>

        <div className={styles.videoContainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SYUAlSHBpsU?si=r7X1JzwVzkJsE-2z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>The Problem with Unvalidated Forms</h2>
        <p>
          Let's start by understanding why validation is necessary. Without proper validation:
        </p>
        <ul>
          <li>Users can submit forms with empty required fields</li>
          <li>Your data source fills up with incomplete or junk records</li>
          <li>Reporting and analysis become unreliable</li>
          <li>Applications depending on this data can malfunction</li>
        </ul>
        <p>
          In a typical Power Apps form without validation, the Save button is always enabled. This means users can submit completely empty forms or forms with critical missing information.
        </p>
        
        <h2>A Better Approach to Data Validation</h2>
        <p>
          The validation method I recommend follows these principles:
        </p>
        <ol>
          <li>Create visual indicators next to required fields</li>
          <li>Show/hide these indicators based on field validation status</li>
          <li>Disable the Save/Next button based on the visibility of these indicators</li>
        </ol>
        <p>
          This approach has several advantages:
        </p>
        <ul>
          <li>It separates validation logic for each field, making maintenance easier</li>
          <li>It provides immediate visual feedback to users</li>
          <li>It uses familiar UI patterns (red asterisks for required fields)</li>
          <li>It centralizes the final validation check to a single formula</li>
        </ul>
        
        <h2>Step 1: Create Visual Indicators</h2>
        <p>
          Start by adding label controls next to each field that requires validation. These will serve as your validation indicators:
        </p>
        <ol>
          <li>Insert a Label control next to your field</li>
          <li>Set its Text property to "*" (or any other indicator you prefer)</li>
          <li>Change the Color property to red</li>
          <li>Make it Bold for visibility</li>
          <li>Name it meaningfully (e.g., "indicator1", "titleIndicator")</li>
        </ol>
        <p>
          By default, these indicators will always show. Our next step is to make them dynamic.
        </p>
        
        <h2>Step 2: Add Visibility Logic to Indicators</h2>
        <p>
          For each indicator, we'll set its Visible property to show only when validation fails:
        </p>
        
        <CodeBlock code={indicatorCode} language="javascript" />
        
        <p>
          This code checks different types of fields:
        </p>
        <ul>
          <li>For text inputs, it checks if the field is empty</li>
          <li>For dropdown or radio controls, it uses IsBlank() to check if a value has been selected</li>
        </ul>
        <p>
          The indicator will be visible (true) when validation fails, and hidden (false) when the field passes validation.
        </p>
        
        <h2>Step 3: Control the Save Button</h2>
        <p>
          The final step is to disable the Save button when any validation fails. Set the DisplayMode property of your Save button to:
        </p>
        
        <CodeBlock code={saveButtonCode} language="javascript" />
        
        <p>
          This formula checks if any of your validation indicators are visible. If any are visible (indicating validation failure), the button is disabled. If all are hidden (all validations pass), the button is enabled.
        </p>
        <p>
          Power Apps automatically styles disabled buttons with a grayed-out appearance, providing visual feedback to users that the form is not yet ready to submit.
        </p>
        
        <h2>Why This Approach Works So Well</h2>
        <p>
          There are several reasons why this validation method is superior to alternatives:
        </p>
        <h3>1. Separation of Concerns</h3>
        <p>
          Each field's validation logic is contained within its own indicator's Visible property. This makes it easy to:
        </p>
        <ul>
          <li>Understand what validation is being performed for each field</li>
          <li>Modify validation requirements for individual fields</li>
          <li>Add new validated fields without affecting existing logic</li>
        </ul>
        
        <h3>2. Maintainability</h3>
        <p>
          When you or another developer needs to update the app in the future, the validation logic is easy to find and understand. Instead of wading through complex nested formulas, you can:
        </p>
        <ul>
          <li>Look at each indicator to see its specific validation rule</li>
          <li>Check the Save button to see it's simply checking for visible indicators</li>
        </ul>
        
        <h3>3. Scalability</h3>
        <p>
          This pattern works just as well for forms with 3 fields as it does for forms with 30+ fields. As your form grows, your validation approach remains consistent and manageable.
        </p>
        
        <h3>4. User Experience</h3>
        <p>
          Users receive immediate visual feedback about which fields need attention, following familiar web form conventions. The disabled Save button prevents frustration from failed submissions.
        </p>
        
        <h2>Advanced Validation Techniques</h2>
        <p>
          You can extend this basic pattern to handle more complex validation scenarios:
        </p>
        
        <CodeBlock code={advancedValidationCode} language="javascript" />
        
        <p>
          These examples show how to:
        </p>
        <ul>
          <li>Validate email format</li>
          <li>Ensure date ranges are logical</li>
        </ul>
        <p>
          You can apply similar logic to validate numbers, phone formats, or any other business rules specific to your application.
        </p>
        
        <h2>Multi-Step Forms</h2>
        <p>
          For multi-screen forms, apply the same pattern to control your "Next" buttons:
        </p>
        
        <CodeBlock code={completeFormCode} language="javascript" />
        
        <p>
          This ensures users complete all required fields on each screen before advancing to the next.
        </p>
        
        <h2>Best Practices</h2>
        <p>
          To get the most from this validation approach:
        </p>
        <ul>
          <li><strong>Name controls consistently</strong> - Use a naming convention that makes indicators easily identifiable</li>
          <li><strong>Position indicators clearly</strong> - Place them where users will notice them</li>
          <li><strong>Consider additional feedback</strong> - For complex validations, consider adding tooltips or message labels explaining requirements</li>
          <li><strong>Test thoroughly</strong> - Ensure all validation scenarios work as expected</li>
          <li><strong>Document business rules</strong> - Keep notes about which fields require validation and why</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          While Power Apps doesn't offer built-in form validation, this approach provides a clean, maintainable, and user-friendly solution. By creating visual indicators for validation status and linking them to your Save button, you create a robust system that:
        </p>
        <ul>
          <li>Prevents incomplete or invalid data submissions</li>
          <li>Provides clear feedback to users</li>
          <li>Remains maintainable as your application evolves</li>
        </ul>
        <p>
          This method has proven effective across dozens of Power Apps implementations, from simple forms to complex multi-screen applications. Give it a try in your next project!
        </p>
        
        <p>
          If you'd like to see more Power Apps development best practices, please head over to the <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
        >YouTube channel</a> and leave a comment there. I actively monitor and respond to all YouTube comments!
        </p>

        <p>If you need professional support with power apps, be sure to get in contact with me at <Link href={'/'}> Powerplatform Experts.</Link></p>

      </div>
    </div>
    <Contact />
    </>
  );
};

export default PowerAppsValidationBlogPost;