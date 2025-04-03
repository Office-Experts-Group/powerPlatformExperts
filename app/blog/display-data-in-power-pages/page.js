import React from 'react';
import Link from 'next/link';

import CodeBlock from '../../../components/CodeBlock';
import Contact from '../../../components/Contact';

import styles from '../../../styles/blogPost.module.scss';

const GalleryViewBlogPost = () => {
  // HTML code sample
  const htmlCode = `<!-- Main HTML Structure -->
<h1>Leave Forms</h1>

<!-- Gallery Headings -->
<div id="gal-headings">
  <div class="gallery-heading">Submitted By</div>
  <div class="gallery-heading">Date From</div>
  <div class="gallery-heading">Date To</div>
  <div class="gallery-heading">Medical</div>
</div>

<!-- Line under headings -->
<div style="border-bottom: 1px solid #ccc; margin-bottom: 10px;"></div>

<!-- Gallery Container -->
<div id="gal-container">
  <div id="gallery" style="max-height: 700px; overflow-y: auto;"></div>
</div>`;

  // CSS code sample
  const cssCode = `/* Gallery headings */
#gal-headings {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 10px;
}

/* Grid row for data */
.grid-row {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 10px;
}

/* Remove default content before/after grid row */
.grid-row::before,
.grid-row::after {
  content: none;
}

/* Container styling */
#gal-container {
  max-height: 800px;
  overflow-y: auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

/* Item styling */
.item {
  display: flex;
  align-items: center;
  padding: 8px;
}

/* Heading styling */
.gallery-heading {
  font-weight: bold;
  padding: 8px;
}

/* Alternating row colors */
.grid-row:nth-child(even),
.grid-row:nth-child(even) div {
  background-color: #f0f0f0;
}

.grid-row:nth-child(odd),
.grid-row:nth-child(odd) div {
  background-color: #ffffff;
}`;

  // JavaScript code sample
  const jsCode = `// Document ready function (using jQuery that's pre-loaded in Power Pages)
$(document).ready(function() {
  startup();
});

// Startup function
function startup() {
  loadRecords();
}

// Load records from Dataverse
function loadRecords() {
  webAPI({
    type: "GET",
    url: "/api/data/v9.2/cr123_leaveforms?$expand=createdby($select=fullname)&$top=500&$orderby=cr123_datefrom desc",
    contentType: "application/json",
    success: function(res) {
      // Process each record
      res.value.forEach(function(record) {
        // Create row
        let row = document.createElement("div");
        row.className = "grid-row";
        
        // Create column for Submitted By
        let item1 = document.createElement("div");
        item1.className = "item";
        item1.textContent = record["createdby"]["fullname"];
        row.appendChild(item1);
        
        // Create column for Date From
        let item2 = document.createElement("div");
        item2.className = "item";
        item2.textContent = formatDate(record["cr123_datefrom"]);
        row.appendChild(item2);
        
        // Create column for Date To
        let item3 = document.createElement("div");
        item3.className = "item";
        item3.textContent = formatDate(record["cr123_dateto"]);
        row.appendChild(item3);
        
        // Create column for Medical
        let item4 = document.createElement("div");
        item4.className = "item";
        item4.textContent = record["cr123_medical"] ? "Yes" : "No";
        row.appendChild(item4);
        
        // Add row to gallery
        document.getElementById("gallery").appendChild(row);
      });
    }
  });
}

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return day + "/" + month + "/" + year;
}`;

  // Web API helper function
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

  return (
    <>
    <div className={styles.head}></div>
    <div className={styles.blogContainer}>
      <div className={styles.preface}>
        <div>
      <p>Author: Marcello Brocchi</p>
      <p>Reading time: 3min</p>
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
      <h1 className={styles.blogTitle}>Building a Gallery View in Power Pages</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          In this tutorial, I'll show you how to build a Gallery-like view in Power Pages that displays records from a Dataverse table. If you're familiar with my previous tutorial on building applications for Power Pages using the Web API, this builds directly on those concepts. If not, I recommend checking out that content first to better understand the context.
        </p>
        <p>
          By the end of this guide, you'll learn how to create a responsive layout with CSS grid and flexbox, use JavaScript to fetch and display data from the Web API, and style your gallery for better user experience.
        </p>

        <h2>Prefer to Watch the Video?</h2>
        <p>This tutorial is also available as a video on YouTube for those who prefer visual learning.</p>

        <div className={styles.videoContainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2zdTy1MRUR4?si=KTiZiqCC92MRpEB8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>Setting Up the HTML Structure</h2>
        <p>
          We'll start by creating a new page in Power Pages. When you create a new page, Power Pages automatically generates three files for you: an HTML file, a JavaScript file, and a CSS file.
        </p>
        
        <p>
          Our HTML structure will be straightforward - we need a heading, column headers for our gallery, and a container to hold the data. Here's the HTML we'll use:
        </p>
        
        <CodeBlock code={htmlCode} language="html" />
        
        <p>
          This structure includes:
        </p>
        <ul>
          <li>An H1 title for our page ("Leave Forms")</li>
          <li>A div with column headings (Submitted By, Date From, Date To, Medical)</li>
          <li>A divider line for visual separation</li>
          <li>A container div that will hold our gallery data</li>
        </ul>
        
        <h2>Styling with CSS</h2>
        <p>
          Next, we'll add styling to make our gallery visually appealing and functional. We'll use CSS grid for layout and add some visual enhancements:
        </p>
        
        <CodeBlock code={cssCode} language="css" />
        
        <p>
          Our CSS accomplishes several key things:
        </p>
        <ul>
          <li>Creates a grid layout with four equal columns (25% each)</li>
          <li>Adds spacing between columns with the gap property</li>
          <li>Sets a maximum height for the gallery with scrolling enabled for overflow</li>
          <li>Styles each item with proper padding and alignment</li>
          <li>Creates alternating row colors for better readability</li>
          <li>Adds visual enhancements like rounded corners and subtle shadows</li>
        </ul>
        
        <h2>Adding JavaScript Functionality</h2>
        <p>
          Now for the most important part - fetching and displaying data from Dataverse using JavaScript. We'll break this down into sections to make it easier to understand.
        </p>
        
        <h3>Web API Helper Function</h3>
        <p>
          First, we need a helper function to facilitate our communication with the Dataverse Web API. This function handles authentication and provides a consistent interface for all API calls:
        </p>
        
        <CodeBlock code={apiHelperCode} language="javascript" />
        
        <p>
          This helper function is essential for any Power Pages application that needs to interact with Dataverse data. It handles authentication headers, request formatting, and response processing.
        </p>
        
        <h3>Fetching and Displaying Data</h3>
        <p>
          Next, we'll implement the code that fetches data from Dataverse and populates our gallery:
        </p>
        
        <CodeBlock code={jsCode} language="javascript" />
        
        <p>
          This JavaScript code:
        </p>
        <ul>
          <li>Initializes when the document is ready using jQuery's $(document).ready function</li>
          <li>Calls the Web API to fetch records from our Dataverse table</li>
          <li>Limits results to the top 500 records and orders them by date (newest first)</li>
          <li>Creates a new row for each record returned</li>
          <li>Formats dates for better readability</li>
          <li>Dynamically builds the gallery structure with JavaScript DOM manipulation</li>
        </ul>
        
        <h2>Understanding the Implementation</h2>
        
        <h3>OData Query Parameters</h3>
        <p>
          Our Web API call uses several OData query parameters to control what data is returned:
        </p>
        <ul>
          <li><strong>$expand=createdby($select=fullname)</strong> - Expands the lookup field "createdby" to get the user's full name</li>
          <li><strong>$top=500</strong> - Limits the results to 500 records to prevent performance issues</li>
          <li><strong>$orderby=cr123_datefrom desc</strong> - Orders records by date, showing newest first</li>
        </ul>
        
        <h3>Dynamic DOM Creation</h3>
        <p>
          For each record in our result set, we:
        </p>
        <ol>
          <li>Create a new div with class "grid-row" to serve as a container</li>
          <li>Create four child divs to hold our data columns</li>
          <li>Set the text content of each column based on the data from Dataverse</li>
          <li>Format dates into a readable format using our helper function</li>
          <li>Append each row to our gallery container</li>
        </ol>
        
        <h2>Performance Considerations</h2>
        <p>
          When working with Dataverse data in Power Pages, consider these performance best practices:
        </p>
        <ul>
          <li>Limit the number of records returned (we use $top=500)</li>
          <li>Only select the fields you need to display</li>
          <li>Use appropriate sorting to show the most relevant records first</li>
          <li>Consider adding filtering options for large datasets</li>
          <li>Implement pagination for better performance with large datasets</li>
        </ul>
        
        <h2>Next Steps and Enhancements</h2>
        <p>
          This implementation provides a solid foundation, but there are several enhancements you might consider:
        </p>
        <ul>
          <li>Adding a search box to filter records</li>
          <li>Making column headers clickable for sorting</li>
          <li>Adding pagination for large datasets</li>
          <li>Implementing row selection for additional actions</li>
          <li>Adding filters for specific criteria (e.g., only medical leave)</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          Building a gallery view in Power Pages using HTML, CSS, and JavaScript provides a powerful way to display and interact with your Dataverse data. By leveraging the Web API, you can create rich, interactive experiences that go beyond the standard forms and views.
        </p>
        
        <p>
          This approach gives you complete control over the presentation and functionality of your data, allowing you to create tailored experiences for your users. By understanding these fundamental techniques, you can build sophisticated applications within the Power Pages environment.
        </p>
        
        <p>
          If you'd like to see more features added to this gallery or have questions about implementing 
          search or sorting functionality, please head over to the <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
        >YouTube video</a> and leave a comment there. We actively monitor and respond to all YouTube comments!
        </p>

        <p>If you need professional support with power pages, be sure to get in contact with me at <Link href={'/'}> Powerplatform Experts.</Link></p>

      </div>
    </div>
    <Contact />
    </>
  );
};

export default GalleryViewBlogPost;