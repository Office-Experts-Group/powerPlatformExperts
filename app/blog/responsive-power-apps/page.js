import React from 'react';
import CodeBlock from '../../../components/CodeBlock';

import styles from '../../../styles/blogPost.module.scss';
import Link from 'next/link';
import Contact from '../../../components/Contact';

const PowerAppsResponsiveBlogPost = () => {
  // Initial setup code
  const initialSetupCode = `// Enable necessary settings for responsive apps
// Go to: File > Settings > Advanced Settings

// 1. Enable container layouts
Set "Experimental feature: Layout containers" to ON

// 2. Disable fixed screen size in preview
Set "Limit control size in the app to match screen size" to OFF

// These settings allow you to build and test responsive layouts`;

  // Container structure code
  const containerStructureCode = `// Basic responsive layout structure
// Main vertical container (full screen)
ResponsiveScreen:
  - Height: Parent.Height
  - Width: Parent.Width
  - LayoutMode: Vertical
  - VerticalAlign: Top
  - HorizontalAlign: Stretch
  - Gap: 5
  
  // Header horizontal container
  Header:
    - Height: 100
    - LayoutMode: Horizontal
    - VerticalAlign: Middle
    - Fill: RGBA(0, 120, 212, 1) // Blue background
    
  // Body horizontal container
  Body:
    - LayoutMode: Horizontal
    - VerticalAlign: Top
    - HorizontalAlign: Stretch
    - Gap: 5
    
    // Left panel container
    LeftPanel:
      - LayoutMode: Horizontal
      - Wrap: true
      - Gap: 5
      - FlexWidth: 1
      
    // Right panel container  
    RightPanel:
      - LayoutMode: Horizontal
      - Wrap: true
      - Gap: 5
      - FlexWidth: 2 // Takes up 2/3 of available width
      
  // Footer horizontal container
  Footer:
    - Height: 50
    - LayoutMode: Horizontal
    - VerticalAlign: Middle
    - Fill: RGBA(0, 120, 212, 1) // Blue background`;

  // Container properties code
  const containerPropertiesCode = `// Key properties for responsive containers

// Layout Properties
LayoutMode: Horizontal or Vertical   // Direction of child controls
Wrap: true                           // Allow items to wrap to next line
Gap: 5                               // Space between child controls

// Alignment Properties
VerticalAlign: Top, Middle, Bottom   // Vertical alignment of children
HorizontalAlign: Left, Center, Right, Stretch // Horizontal alignment

// Sizing Properties
FlexHeight: 1                        // Proportional height (for vertical containers)
FlexWidth: 1                         // Proportional width (for horizontal containers)

// Proportional sizing example:
// If LeftPanel has FlexWidth: 1 and RightPanel has FlexWidth: 2,
// RightPanel will be twice as wide as LeftPanel`;

  // Adding content code
  const addingContentCode = `// Adding content to containers
// Example: Adding content to Header

// 1. Select the Header container
// 2. Add an Image control
//    - Width: 200
//    - Height: 90
//    - FlexWidth: not set (fixed width)

// 3. Add a Label control
//    - Text: "My Responsive App"
//    - FlexWidth: 1 (uses remaining space)
//    - Align: Center
//    - Size: 24

// Controls in the same container will arrange based on the container's LayoutMode
// For horizontal containers, items arrange left-to-right
// For vertical containers, items arrange top-to-bottom`;

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
      <h1 className={styles.blogTitle}>Build Your App the Responsive Way in Microsoft Power Apps</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          Creating apps that work well across different screen sizes has always been challenging in Power Apps. With users accessing apps from phones, tablets, and desktops of various dimensions, building a truly responsive interface was often a complex, frustrating task—until now.
        </p>
        <p>
          Microsoft has released new container controls for Power Apps that make building responsive applications significantly easier. These container controls allow your app to automatically adjust its layout based on screen size, providing a consistent user experience across all devices.
        </p>
        <p>
          In this guide, I'll show you how to use these new controls to build a fully responsive app from scratch, with a header, footer, and a two-column layout that adapts perfectly to any screen size.
        </p>

        <h2>Prefer to Watch the Video?</h2>
        <p>This guide is also available as a video tutorial for those who prefer visual learning.</p>

        <div className={styles.videoContainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ESkwWKVPdmA?si=DMvR4lCzv3xA4lDh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>Understanding Responsive Design in Power Apps</h2>
        <p>
          Responsive design in Power Apps is all about creating layouts that automatically adjust to different screen sizes. The key to achieving this is using the new container controls, which can:
        </p>
        <ul>
          <li>Arrange child controls horizontally or vertically</li>
          <li>Automatically wrap content when it exceeds available space</li>
          <li>Distribute space proportionally between different sections</li>
          <li>Maintain consistent spacing and alignment</li>
        </ul>
        <p>
          These capabilities allow your app to look great and function properly whether it's viewed on a small phone screen or a large desktop monitor.
        </p>
        
        <h2>Step 1: Setting Up Your Environment</h2>
        <p>
          Before we start building, we need to make sure the right settings are enabled in Power Apps:
        </p>
        
        <CodeBlock code={initialSetupCode} language="javascript" />
        
        <p>
          The first setting enables the container controls, while the second allows you to test how your app responds to different screen sizes during development. With these settings in place, you're ready to start building your responsive app.
        </p>
        
        <h2>Step 2: Creating the Base Container Structure</h2>
        <p>
          The foundation of a responsive app is a well-structured container hierarchy. We'll create:
        </p>
        <ol>
          <li>A main vertical container that fills the entire screen</li>
          <li>Header and footer containers for those sections</li>
          <li>A body container with left and right panels</li>
        </ol>
        <p>
          Let's start by creating the main container:
        </p>
        <ol>
          <li>Create a new blank app</li>
          <li>Go to the Insert tab, click the + icon, then select Layout</li>
          <li>Choose "Vertical container"</li>
          <li>Resize the container to fill the screen</li>
          <li>Set its Height to Parent.Height and Width to Parent.Width</li>
          <li>Name it "ResponsiveScreen"</li>
        </ol>
        <p>
          This main container will be the parent for all other elements in our app. Here's the complete structure we'll build:
        </p>
        
        <CodeBlock code={containerStructureCode} language="javascript" />
        
        <h2>Step 3: Understanding Container Properties</h2>
        <p>
          Container controls have several key properties that determine how they and their children behave:
        </p>
        
        <CodeBlock code={containerPropertiesCode} language="javascript" />
        
        <p>
          The most powerful feature is proportional sizing with FlexWidth and FlexHeight. These properties allow you to divide available space between containers in a specified ratio, similar to CSS Flexbox in web development.
        </p>
        
        <h3>Layout Modes: Horizontal vs. Vertical</h3>
        <p>
          When deciding which layout mode to use:
        </p>
        <ul>
          <li><strong>Vertical containers</strong> arrange children from top to bottom and are ideal for overall page structure</li>
          <li><strong>Horizontal containers</strong> arrange children from left to right and work well for headers, footers, and multi-column layouts</li>
        </ul>
        
        <h2>Step 4: Building the Layout</h2>
        <p>
          Now let's build our complete responsive layout with header, body sections, and footer:
        </p>
        
        <h3>1. Adding the Header</h3>
        <p>
          With the ResponsiveScreen container selected:
        </p>
        <ol>
          <li>Insert a Horizontal container</li>
          <li>Set its Height to 100 (fixed height)</li>
          <li>Set Fill to a color you like (I used blue)</li>
          <li>Name it "Header"</li>
        </ol>
        
        <h3>2. Adding the Body with Two Columns</h3>
        <p>
          With the ResponsiveScreen container selected again:
        </p>
        <ol>
          <li>Insert another Horizontal container</li>
          <li>Leave Height as Auto (will expand as needed)</li>
          <li>Name it "Body"</li>
          <li>Set Gap to 5</li>
        </ol>
        <p>
          Now, with the Body container selected:
        </p>
        <ol>
          <li>Insert a Horizontal container</li>
          <li>Set FlexWidth to 1</li>
          <li>Enable Wrap</li>
          <li>Set Gap to 5</li>
          <li>Name it "LeftPanel"</li>
          <li>Set a background color to distinguish it</li>
        </ol>
        <p>
          With the Body container selected again:
        </p>
        <ol>
          <li>Insert another Horizontal container</li>
          <li>Set FlexWidth to 2 (making it twice as wide as LeftPanel)</li>
          <li>Enable Wrap</li>
          <li>Set Gap to 5</li>
          <li>Name it "RightPanel"</li>
          <li>Set a different background color</li>
        </ol>
        
        <h3>3. Adding the Footer</h3>
        <p>
          With the ResponsiveScreen container selected one more time:
        </p>
        <ol>
          <li>Insert a final Horizontal container</li>
          <li>Set Height to 50 (fixed height)</li>
          <li>Set Fill to match your header</li>
          <li>Name it "Footer"</li>
        </ol>
        
        <h2>Step 5: Adding Content to Your Containers</h2>
        <p>
          Now that we have our container structure, we can add actual content:
        </p>
        
        <CodeBlock code={addingContentCode} language="javascript" />
        
        <h3>Adding Content to the Body Sections</h3>
        <p>
          For your left and right panels, you can add any controls you need for your app. The key is that these controls will now wrap appropriately when the screen size changes:
        </p>
        <ol>
          <li>Select your LeftPanel container</li>
          <li>Add multiple controls (buttons, icons, text inputs, etc.)</li>
          <li>Repeat for your RightPanel</li>
        </ol>
        <p>
          Because we set Wrap to true, these controls will automatically flow to the next line when the container width decreases, making your app responsive to different screen sizes.
        </p>
        
        <h2>Step 6: Testing Your Responsive Layout</h2>
        <p>
          To test your responsive layout during development:
        </p>
        <ol>
          <li>Click the Preview button (play icon)</li>
          <li>Change your browser window size by dragging the edges</li>
          <li>Notice how your containers and their contents adjust automatically</li>
        </ol>
        <p>
          Pay special attention to how the left and right panels maintain their 1:2 ratio, and how elements wrap when space becomes limited. This is the essence of responsive design!
        </p>
        
        <h2>Common Issues and Solutions</h2>
        <p>
          While working with container controls, you might encounter these issues:
        </p>
        
        <h3>Container Not Filling the Screen</h3>
        <p>
          If your main container doesn't fill the entire screen when previewing, check that:
        </p>
        <ul>
          <li>Height is set to Parent.Height</li>
          <li>Width is set to Parent.Width</li>
          <li>"Limit control size in the app to match screen size" is turned OFF</li>
        </ul>
        
        <h3>Elements Not Wrapping Properly</h3>
        <p>
          If elements don't wrap to a new line when the screen size decreases:
        </p>
        <ul>
          <li>Ensure the Wrap property is set to true</li>
          <li>Check that Gap is set appropriately</li>
        </ul>
        
        <h3>Containers Not Resizing Proportionally</h3>
        <p>
          If your containers don't maintain the expected proportions:
        </p>
        <ul>
          <li>Verify FlexWidth/FlexHeight settings</li>
          <li>Make sure no fixed Width/Height values are overriding the flexible sizing</li>
        </ul>
        
        <h2>Advanced Techniques</h2>
        <p>
          Once you're comfortable with the basics, try these advanced responsive techniques:
        </p>
        
        <h3>Nested Container Hierarchies</h3>
        <p>
          You can nest containers within containers to create complex layouts. For example, you might have:
        </p>
        <ul>
          <li>A vertical container for the overall page</li>
          <li>A horizontal container for a section</li>
          <li>Another vertical container within that for a specific component</li>
        </ul>
        <p>
          This approach allows for highly adaptable layouts that can transform completely based on available space.
        </p>
        
        <h3>Conditional Visibility for Different Screen Sizes</h3>
        <p>
          You can combine responsive containers with conditional visibility to show different content on different screen sizes:
        </p>
        <pre><code>RightPanel.Visible = App.Width {'>'} 600</code></pre>
        <p>
          This formula would hide the right panel on smaller screens, allowing you to create mobile-specific layouts.
        </p>
        
        <h2>Conclusion</h2>
        <p>
          The new container controls in Power Apps make it significantly easier to build responsive applications that work well across all devices. By organizing your app into a logical container hierarchy and leveraging properties like FlexWidth, Wrap, and Gap, you can create interfaces that automatically adapt to any screen size.
        </p>
        <p>
          As users increasingly access apps from different devices, responsive design has moved from a "nice-to-have" to an essential part of app development. Fortunately, with these new controls, building responsive Power Apps is now straightforward enough for anyone to implement.
        </p>
        <p>
          Try incorporating these techniques into your next Power App, and you'll be building truly responsive applications that provide an excellent user experience on any device!
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

export default PowerAppsResponsiveBlogPost;