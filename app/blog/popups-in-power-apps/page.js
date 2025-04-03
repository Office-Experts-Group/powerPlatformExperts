import React from 'react';
import CodeBlock from '../../../components/CodeBlock';

import styles from '../../../styles/blogPost.module.scss';
import Link from 'next/link';
import Contact from '../../../components/Contact';

const PowerAppsPopupsBlogPost = () => {
  // HTML and CSS for dialog box
  const htmlCssDialogCode = `<!-- HTML for creating a custom dialog box in Power Apps -->
<div style='border: 1px solid #ccc; 
           height: 250px; 
           width: 650px; 
           border-radius: 8px; 
           box-shadow: 4px 4px 10px #888888; 
           background: white;'>
  
  <!-- Dialog header section -->
  <div style='padding: 8px; 
             height: 50px; 
             background: #4CAF50; 
             border-radius: 8px 8px 0 0;'>
    <b style='color: white; 
             font-size: 18px;'>
      Notification
    </b>
  </div>
  
  <!-- Content will be added with separate controls -->
</div>`;

  // Dialog box setup code
  const dialogSetupCode = `// Create a variable to control dialog visibility
// In App OnStart:
Set(
    diagVisible,
    false  // Initially hidden
);

// In the dialog group's Visible property:
diagVisible

// To show the dialog:
Set(
    diagVisible,
    true
);

// To hide the dialog (e.g., on OK button):
Set(
    diagVisible,
    false
);`;

  // Modal overlay code
  const overlayCode = `// Creating the overlay/backdrop effect

// Add a rectangle control with these properties:
// Width: Parent.Width
// Height: Parent.Height
// X: 0
// Y: 0
// Fill: RGBA(100, 100, 100, 0.3)  // Gray with 30% opacity
// Visible: diagVisible  // Same as dialog box

// Send the rectangle to back, but keep it above your app content
// by adjusting ZIndex:
ZIndex: Dialog_Box.ZIndex - 1`;

  // Complete dialog construction
  const completeDialogCode = `// Step 1: Create the HTML Text control for the dialog shell
// Set the properties as shown in the HTML sample above

// Step 2: Add a label for your message text
// X: centered in dialog
// Y: below the header
// Align: Center
// Width: to fit within dialog
// Text: "Your collection has been updated"

// Step 3: Add an image for branding (optional)
// Place it in an appropriate position within the dialog

// Step 4: Add an OK button
// X: centered
// Y: bottom portion of dialog
// Text: "OK"
// OnSelect: Set(diagVisible, false)

// Step 5: Group everything together
// Select all dialog elements (HTML Text, Label, Image, Button)
// Right-click > Group
// Name the group: "Dialog_Box"
// Set Visible property to: diagVisible`;

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
      <h1 className={styles.blogTitle}>Create Pop-ups, Message and Modal Boxes in Microsoft Power Apps</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          Default message boxes in Power Apps are functional but basic. They lack customisation options and don't align with your app's branding. The good news is that with a little HTML, some clever control placement, and a dash of creativity, you can create beautiful custom dialog boxes that transform your user experience.
        </p>
        <p>
          In this guide, I'll show you how to build professional-looking pop-up dialogs in Power Apps with:
        </p>
        <ul>
          <li>Custom styling with rounded corners and shadows</li>
          <li>Branded headers with custom colors</li>
          <li>The ability to include images and custom content</li>
          <li>A semi-transparent backdrop that prevents interaction with the app while the dialog is open</li>
          <li>Smooth show/hide behavior controlled by your app's logic</li>
        </ul>

        <h2>Prefer to Watch the Video?</h2>
        <p>This guide is also available as a video tutorial for those who prefer visual learning.</p>

        <div className={styles.videoContainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/tt5zTO19Nx4?si=060D90_DtH3TocV1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>Why Custom Dialog Boxes?</h2>
        <p>
          Before diving into the implementation, let's understand why custom dialogs are valuable:
        </p>
        <ul>
          <li><strong>Branding consistency:</strong> Match your organisation's colors and style guidelines</li>
          <li><strong>Better user experience:</strong> More visually appealing and professional interfaces increase user satisfaction</li>
          <li><strong>Flexible content:</strong> Include images, formatted text, and multiple controls</li>
          <li><strong>Modal behavior:</strong> Force users to acknowledge important messages before continuing</li>
          <li><strong>Context retention:</strong> Unlike default notifications that take users out of context, custom dialogs keep users in your app</li>
        </ul>
        
        <h2>Step 1: Creating the Dialog Box Shell with HTML</h2>
        <p>
          We'll start by creating the basic structure of our dialog box using the HTML Text control, which allows us to use HTML and CSS for custom styling:
        </p>
        <ol>
          <li>Add an HTML Text control to your screen</li>
          <li>Set its dimensions (I used 650px width by 250px height, but you can adjust as needed)</li>
          <li>Enter the HTML and CSS for your dialog box structure</li>
        </ol>
        
        <CodeBlock code={htmlCssDialogCode} language="html" />
        
        <p>
          A few important notes about this HTML/CSS:
        </p>
        <ul>
          <li>Use single quotes for CSS properties since the entire HTML is enclosed in double quotes in the Power Apps formula bar</li>
          <li>The outer div creates the main dialog container with border, rounded corners, and shadow</li>
          <li>The inner div creates a colored header area with its own styling</li>
          <li>We'll add the actual content (message, images, buttons) as separate Power Apps controls</li>
        </ul>
        
        <h2>Step 2: Adding Content to Your Dialog</h2>
        <p>
          Now that we have our dialog shell, let's add content:
        </p>
        <ol>
          <li>
            <strong>Add a label for your message:</strong>
            <ul>
              <li>Place it within the dialog box area</li>
              <li>Set appropriate text size and alignment (I used center alignment)</li>
              <li>Adjust position to sit below the header section</li>
            </ul>
          </li>
          <li>
            <strong>Add a button for user interaction:</strong>
            <ul>
              <li>Place at the bottom of the dialog</li>
              <li>Set the text to "OK" or whatever action you need</li>
              <li>Style to match your app's design system</li>
            </ul>
          </li>
          <li>
            <strong>Optional: Add an image for branding:</strong>
            <ul>
              <li>Place your company logo or other relevant image</li>
              <li>Size appropriately to fit within the dialog</li>
            </ul>
          </li>
        </ol>
        <p>
          Position these elements carefully so they fit within the HTML structure we created. You may need to adjust positions slightly to get everything aligned properly.
        </p>
        
        <h2>Step 3: Creating the Modal Effect</h2>
        <p>
          A key feature of professional dialog boxes is that they prevent interaction with the rest of the app while open. To create this modal effect:
        </p>
        
        <CodeBlock code={overlayCode} language="javascript" />
        
        <p>
          This rectangle creates a semi-transparent overlay that covers your entire screen. When combined with proper Z-index management, it:
        </p>
        <ul>
          <li>Dims the background content</li>
          <li>Blocks interaction with controls behind the dialog</li>
          <li>Visually focuses the user on the dialog box</li>
        </ul>
        <p>
          The 30% opacity (0.3 alpha) gives a nice dimming effect without completely obscuring the background. Adjust this value to your preference.
        </p>
        
        <h2>Step 4: Controlling Dialog Visibility</h2>
        <p>
          Now we need a way to show and hide our dialog box. We'll use a variable to control visibility:
        </p>
        
        <CodeBlock code={dialogSetupCode} language="javascript" />
        
        <p>
          This approach gives you complete control over when the dialog appears. For example, you might show it:
        </p>
        <ul>
          <li>After a record is created or updated</li>
          <li>When a validation error occurs</li>
          <li>Before a destructive action (like delete) to confirm</li>
          <li>When the app starts, to show welcome information</li>
        </ul>
        
        <h2>Step 5: Grouping Everything Together</h2>
        <p>
          To make it easier to manage your dialog, group all the components:
        </p>
        <ol>
          <li>Select all dialog elements (HTML Text, Label, Button, Image)</li>
          <li>Right-click and select "Group"</li>
          <li>Name the group (e.g., "Dialog_Box")</li>
          <li>Set the group's Visible property to your visibility variable</li>
        </ol>
        <p>
          Grouping has two key benefits:
        </p>
        <ul>
          <li>You can control visibility of all components with a single property</li>
          <li>You can move or adjust the entire dialog as a unit</li>
        </ul>
        
        <h2>Complete Implementation</h2>
        <p>
          Let's pull everything together with a complete implementation:
        </p>
        
        <CodeBlock code={completeDialogCode} language="javascript" />
        
        <h2>Practical Use Cases</h2>
        <p>
          These custom dialogs can be used in many scenarios:
        </p>
        
        <h3>1. Confirmation Messages</h3>
        <p>
          Show a success message after a form is submitted or a record is updated:
        </p>
        <div className={styles.codeBox}>
        <pre><code>
// In your form's submit button OnSelect property:
Patch(
    YourDataSource,
    Defaults(YourDataSource),
    {"{"}
        Field1: TextInput1.Text,
        Field2: TextInput2.Text
    {"}"}
);
Set(diagVisible, true);  // Show confirmation dialog
</code></pre></div>

        
        <h3>2. Destructive Action Confirmation</h3>
        <p>
          Create a confirmation dialog before deleting a record:
        </p>
        <ul>
          <li>Use two buttons (Yes/No or Confirm/Cancel)</li>
          <li>Only perform the delete action if confirmed</li>
          <li>Include warning text and icon</li>
        </ul>
        
        <h3>3. Form Validation Errors</h3>
        <p>
          Display validation errors in a custom format:
        </p>
        <ul>
          <li>Set error message text dynamically based on the validation issue</li>
          <li>Use appropriate icons or colors to indicate an error state</li>
          <li>Direct users to the specific fields that need attention</li>
        </ul>
        
        <h2>Advanced Customisation Ideas</h2>
        <p>
          Once you're comfortable with the basics, consider these enhancements:
        </p>
        
        <h3>Animation Effects</h3>
        <p>
          Create simple animation by using a timer control:
        </p>
        <ul>
          <li>Start a timer when showing the dialog</li>
          <li>Gradually change opacity or size properties</li>
          <li>Result: Fade-in and fade-out effects</li>
        </ul>
        
        <h3>Multiple Dialog Types</h3>
        <p>
          Create several dialog designs for different purposes:
        </p>
        <ul>
          <li>Success dialogs (green theme)</li>
          <li>Warning dialogs (yellow theme)</li>
          <li>Error dialogs (red theme)</li>
          <li>Information dialogs (blue theme)</li>
        </ul>
        
        <h3>Dynamic Content</h3>
        <p>
          Make your dialogs more flexible:
        </p>
        <ul>
          <li>Store message text in a variable to display different messages</li>
          <li>Conditionally show different controls based on the dialog type</li>
          <li>Pass parameters to customize the dialog for each use case</li>
        </ul>
        
        <h2>Best Practices</h2>
        <p>
          For the best results with custom dialogs:
        </p>
        <ul>
          <li><strong>Keep it simple:</strong> Don't overcrowd your dialogs with too many controls</li>
          <li><strong>Be consistent:</strong> Use the same dialog design throughout your app</li>
          <li><strong>Make buttons clear:</strong> Use descriptive button text that clearly indicates the action</li>
          <li><strong>Center your dialogs:</strong> Position dialogs in the center of the screen for optimal visibility</li>
          <li><strong>Test on all devices:</strong> Ensure your dialogs look good on all screen sizes</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          Custom dialog boxes significantly enhance the user experience of your Power Apps. They provide a more professional appearance and give you complete control over how important messages are presented to your users.
        </p>
        <p>
          While it requires a bit more effort than using the default notification functions, the results are well worth it. Your users will appreciate the polished look and consistent experience that matches the rest of your carefully designed app.
        </p>
        <p>
          Try implementing these custom dialogs in your next Power App, and I'm confident you'll never want to go back to the default options again!
        </p>
        
        <p>
          If you'd like to see more Power Apps development tips and techniques, please head over to the <a 
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

export default PowerAppsPopupsBlogPost;