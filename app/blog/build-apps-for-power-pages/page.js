import React from 'react';
import CodeBlock from '../../../components/CodeBlock';

import styles from '../../../styles/blogPost.module.scss';
import Link from 'next/link';
import Contact from '../../../components/Contact';

const PowerPagesAppBlogPost = () => {
  // HTML code sample
  const htmlCode = `<div class="form-style-six" style="min-width: 100%;">
  <form id="leaveForm">
    <legend>Leave Form</legend>
    
    <div class="form-grid">
      <div>
        <label for="dateFrom">Date From:</label>
        <input type="date" id="dateFrom" name="dateFrom">
      </div>
      <div>
        <label for="dateTo">Date To:</label>
        <input type="date" id="dateTo" name="dateTo">
      </div>
    </div>
    
    <div style="margin-bottom: 2%;">
      <label for="reason">Reason for leave request:</label>
      <textarea id="reason" name="reason" rows="10"></textarea>
    </div>
    
    <div style="margin-bottom: 2%;">
      <div>Is this leave related to Medical?</div>
      <input type="radio" id="yes" name="medical" value="yes">
      <label for="yes">Yes</label>
      <input type="radio" id="no" name="medical" value="no" style="margin-left: 20px;">
      <label for="no">No</label>
    </div>
    
    <input type="submit" id="submit" value="Submit">
  </form>
</div>`;

  // CSS code sample
  const cssCode = `/* Form styling */
.form-style-six {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-style-six legend {
  font-size: 1.4em;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
}

.form-style-six label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-style-six input[type="date"],
.form-style-six textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 14px;
}

.form-style-six textarea {
  height: 120px;
  resize: vertical;
}

.form-style-six input[type="submit"] {
  background: #0078d4;
  padding: 10px 20px;
  border: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
}

.form-style-six input[type="submit"]:hover {
  background: #0062a9;
}

/* Grid layout for form elements */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}`;

  // JavaScript code sample - Web API Helper
  const apiHelperCode = `// Web API Helper Function
function webAPI(options) {
  // Set default headers for authentication
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "OData-MaxVersion": "4.0",
    "OData-Version": "4.0"
  };
  
  // Merge headers with any custom ones provided
  if (options.headers) {
    Object.assign(headers, options.headers);
  }
  
  // Create fetch options
  const fetchOptions = {
    method: options.type,
    headers: headers
  };
  
  // Add body for POST, PUT, PATCH requests
  if (options.data && ["POST", "PUT", "PATCH"].includes(options.type.toUpperCase())) {
    fetchOptions.body = JSON.stringify(options.data);
  }
  
  // Execute the fetch
  fetch(options.url, fetchOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (options.success) options.success(data);
    })
    .catch(error => {
      if (options.error) options.error(error);
      console.error("Error:", error);
    });
}`;

  // JavaScript code sample - Main JavaScript
  const jsCode = `// Document ready function (jQuery is pre-loaded in Power Pages)
$(document).ready(function() {
  // Standard boilerplate for Power Pages Web API interactions
  // This handles authentication and secure communication
  
  // Call our startup procedure
  startup();
});

// Startup procedure - all app-specific initialization goes here
function startup() {
  // Wire up the submit event handler
  submitLeaveFormEvent();
}

// Handle form submission
function submitLeaveFormEvent() {
  $("#leaveForm").submit(function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get values from form
    var dateFrom = document.getElementById("dateFrom").value;
    var dateTo = document.getElementById("dateTo").value;
    var reason = $("#reason").val();
    
    // For radio buttons, we need to find which one is selected
    var selectedRadioButton = document.querySelector('input[name="medical"]:checked');
    var medicalValue = (selectedRadioButton.value === "yes") ? true : false;
    
    // Create record object for Dataverse
    var record = {};
    
    // Add fields to record using the logical names from Dataverse
    record["cr123_reason"] = reason;
    record["cr123_datefrom"] = dateFrom;
    record["cr123_dateto"] = dateTo;
    record["cr123_medical"] = medicalValue;
    
    // Submit to Web API
    webAPI({
      type: "POST",
      contentType: "application/json",
      url: "/_api/cr123_leaveforms", // Note the plural form
      data: JSON.stringify(record),
      success: function() {
        alert("Leave form submitted successfully");
      },
      error: function(error) {
        console.log(error);
        alert("Failed to submit");
      }
    });
  });
}`;

  // DataVerse table setup
  const tableSetupCode = `// Fields needed in your Dataverse table:
/*
1. Name (cr123_name) - Text
2. Reason (cr123_reason) - Text Area
3. Date From (cr123_datefrom) - Date Only
4. Date To (cr123_dateto) - Date Only
5. Medical (cr123_medical) - Choice (Yes/No)
*/

// Required permissions in Power Pages:
/*
1. Table Permissions:
   - Create a permission for your table with Global access
   - Grant Create, Read, Write, Delete permissions
   - Assign to Authenticated Users web role

2. Site Settings:
   - Create setting: "WebAPI/[TableName]" with value "true" 
   - Create setting: "WebAPI/[TableName]/Fields" with value "*"
   - Replace [TableName] with your table's logical name
*/`;

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
      <h1 className={styles.blogTitle}>Build Apps for Power Pages - The Best Way!</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          If you're a Power Apps developer looking to expand your toolkit, you're going to love diving into Microsoft Power Pages. Unlike Power Apps which was primarily designed for internal use, Power Pages allows you to create external-facing business websites and web applications using a low-code approach.
        </p>
        <p>
          But we're not stopping at basic low-code functionality. In this guide, I'll show you how to leverage the Web API to perform CRUD (Create, Read, Update, Delete) operations across all Microsoft Dataverse tables directly from your Power Pages site. Imagine being able to create a new account or update a contact without using a standard form - all by using the Web API.
        </p>
        <p>
          We'll approach this from a web developer's perspective, exploring:
        </p>
        <ul>
          <li>Setting up the Power Pages environment</li>
          <li>Configuring the necessary permissions and site settings</li>
          <li>Building a custom form with HTML, CSS, and JavaScript</li>
          <li>Using the Web API to submit data directly to Dataverse</li>
        </ul>

        <h2>Prefer to Watch the Video?</h2>
        <p>This guide is also available as a video tutorial for those who prefer visual learning.</p>

        <div className={styles.videoContainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/qVe5t4xBugs?si=JmnIz4kIMNuX7FFb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>Setting Up Your Power Pages Environment</h2>
        <p>
          Every Power Pages development journey starts at <a href='make.powerpages.microsoft.com' rel="nofollow noreferrer noopener">make.powerpages.microsoft.com</a>. This is the developer studio for Power Pages, similar to how make.powerapps.com works for Power Apps.
        </p>
        <p>
          When you first log in, you'll see your environment with all the Power Pages sites you've created. If you don't have access to create Power Pages sites, you may need to:
        </p>
        <ul>
          <li>Contact your system administrator to grant the necessary permissions</li>
          <li>Create a developer environment if that option is available to you</li>
        </ul>
        <p>
          Once your environment is ready, you can create a new site. For this tutorial, we'll start with a blank site to have a clean canvas to work with.
        </p>
        
        <h2>Creating Your Custom Form in Power Pages</h2>
        <p>
          After creating your blank site, you'll be taken to the main development environment. Here's how to create a custom form:
        </p>
        <ol>
          <li>Create a new blank page (We'll call ours "Leave Form Application")</li>
          <li>Instead of using the built-in components, click the "Edit code" button in the top right corner</li>
          <li>This opens the code editor where you can see your HTML, CSS, and JavaScript files</li>
        </ol>
        <p>
          Let's build a simple leave request form with HTML:
        </p>
        
        <CodeBlock code={htmlCode} language="html" />
        
        <p>
          This HTML structure creates a form with:
        </p>
        <ul>
          <li>Date range fields (from and to)</li>
          <li>A text area for the leave reason</li>
          <li>Radio buttons for indicating if the leave is medical</li>
          <li>A submit button</li>
        </ul>
        <p>
          We're using a CSS class called "form-style-six" and a grid layout to organise our form elements nicely.
        </p>
        
        <h2>Styling Your Form with CSS</h2>
        <p>
          Next, let's add some CSS to make our form look professional:
        </p>
        
        <CodeBlock code={cssCode} language="css" />
        
        <p>
          This CSS provides:
        </p>
        <ul>
          <li>Proper spacing and alignment for form elements</li>
          <li>A clean, modern appearance with shadows and rounded corners</li>
          <li>Responsive design with grid layout for side-by-side fields</li>
          <li>Proper styling for inputs, textareas, and buttons</li>
        </ul>
        
        <h2>Setting Up Your Dataverse Table</h2>
        <p>
          Before we can submit data from our form, we need to create a Dataverse table to store it. Here's what you need to do:
        </p>
        <ol>
          <li>Go to <a href='make.powerapps.com' rel="nofollow noreferrer noopener">make.powerapps.com</a> and select the same environment as your Power Pages site</li>
          <li>Navigate to Tables and create a new table (we'll call ours "Leave Form")</li>
          <li>Add the necessary columns to match our form fields</li>
        </ol>
        
        <CodeBlock code={tableSetupCode} language="javascript" />
        
        <h2>Configuring Permissions and Site Settings</h2>
        <p>
          For the Web API to work with your Dataverse table, you need to configure permissions and site settings:
        </p>
        <ol>
          <li>Open the Power Pages Management app from your site</li>
          <li>Create a table permission for your Dataverse table</li>
          <li>Add the Authenticated Users web role to this permission</li>
          <li>Add two site settings to enable Web API access to your table</li>
        </ol>
        <p>
          These settings are crucial - without them, the Web API won't be able to interact with your Dataverse table.
        </p>
        
        <h2>The Web API Helper Function</h2>
        <p>
          To interact with Dataverse, we need a helper function that handles authentication and API requests. This function will be used in all your Power Pages applications that use the Web API:
        </p>
        
        <CodeBlock code={apiHelperCode} language="javascript" />
        
        <p>
          This helper function:
        </p>
        <ul>
          <li>Handles authentication headers for secure communication</li>
          <li>Formats requests properly for the Dataverse Web API</li>
          <li>Processes responses and handles errors</li>
          <li>Provides a consistent interface for all Web API operations</li>
        </ul>
        
        <h2>Implementing Form Submission with JavaScript</h2>
        <p>
          Now let's write the JavaScript code that will capture form input and submit it to Dataverse using the Web API:
        </p>
        
        <CodeBlock code={jsCode} language="javascript" />
        
        <p>
          This JavaScript:
        </p>
        <ul>
          <li>Sets up event handling when the document is ready</li>
          <li>Captures form submission and prevents the default behavior</li>
          <li>Collects values from all form fields</li>
          <li>Creates a properly formatted record object for Dataverse</li>
          <li>Submits the data using our Web API helper function</li>
          <li>Handles success and error conditions</li>
        </ul>
        
        <h3>Important Notes on the Web API</h3>
        <p>
          When using the Web API with Dataverse, keep these points in mind:
        </p>
        <ul>
          <li><strong>Table Names:</strong> Use the pluralized version of your table name in the API URL (e.g., "cr123_leaveforms" not "cr123_leaveform")</li>
          <li><strong>Field Names:</strong> Use the logical names of fields, not their display names</li>
          <li><strong>Data Types:</strong> Ensure you're converting data types appropriately (e.g., "Yes"/"No" to true/false)</li>
        </ul>
        
        <h2>Testing Your Form</h2>
        <p>
          After saving all your code, click the "Sync" button in the Power Pages studio and then preview your page. Fill out the form and submit it to test if it's working properly. If everything is configured correctly, you should see your data appear in your Dataverse table.
        </p>
        
        <h2>Beyond the Basics: What's Next?</h2>
        <p>
          This tutorial covers the fundamentals of building a custom form with the Web API in Power Pages, but there's so much more you can do:
        </p>
        <ul>
          <li>Add form validation to ensure data quality</li>
          <li>Implement conditional fields that appear based on user selections</li>
          <li>Create a gallery view to display existing records</li>
          <li>Add animations and loading indicators for better user experience</li>
          <li>Implement more complex data operations like updates and deletions</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          By leveraging the Web API in Power Pages, you've unlocked a powerful way to create custom web applications that interact directly with your Dataverse data. This approach gives you complete control over the user experience while maintaining the security and data integration benefits of the Power Platform.
        </p>
        <p>
          The possibilities are virtually limitless - you can create animations, implement complex validation, build multi-screen applications, and design custom UI components. All while keeping your applications secure and integrated with the rest of your Microsoft ecosystem.
        </p>
        
        <p>
          If you'd like to see more advanced techniques or have questions about implementing specific functionality, please head over to the <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
        >YouTube channel</a> and leave a comment there. I actively monitor and respond to all YouTube comments!
        </p>

        <p>If you need professional support with power pages, be sure to get in contact with me at <Link href={'/'}> Powerplatform Experts.</Link></p>

<div className={styles.github}>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
      Check out the code in the{" "}<a rel="nofollow noreferrer noopener" href='https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnZoUlppY2RabEwySDlFQmh6NlQ0VFY3Sldxd3xBQ3Jtc0trRTgwZlI2bEtHdmd1cXZTOVltcWcyYWtKY3JBVElnWjllUmozbXNQblhUZjF1ZVo3NE1VbHk5SC1SYUdSMWNBcWtDUllaTXpzLTBMM1dUOWkzbUNaUHhPSGdoWnoxekh0Nzh0Rl9ob0oxQWlNS1FiQQ&q=https%3A%2F%2Fgithub.com%2FChinoDoesStuff%2FPowerPagesTutorial&v=qVe5t4xBugs'>Github Repo</a>
      </div>
      </div>
    </div>
    <Contact />
    </>
  );
};

export default PowerPagesAppBlogPost;