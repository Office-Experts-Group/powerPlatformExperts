import React from 'react';
import CodeBlock from '../../../components/CodeBlock';
import Contact from '../../../components/Contact';

import styles from '../../../styles/blogPost.module.scss';
import Link from 'next/link';

const PowerAppsBeautifulDesignBlogPost = () => {
  // HTML and CSS for background and containers
  const htmlBackgroundCode = `<!-- HTML for creating custom containers in Power Apps -->
<div style='border-radius: 14px; width: 98%; height: 500px; background: white;'>
  <!-- Header section with curved top corners -->
  <div style='border-radius: 14px 14px 0 0; height: 150px; background: #e6625d;'>
  </div>
  
  <!-- Content section with curved bottom corners -->
  <div style='border-radius: 0 0 14px 14px; height: 350px; background: #f1f1f1;'>
  </div>
</div>`;

  // Box shadow styling
  const boxShadowCode = `<!-- Adding shadow to your containers -->
<div style='
  border-radius: 14px; 
  width: 98%; 
  height: 500px; 
  background: white;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
'>
  <!-- Container content goes here -->
</div>`;

  // Button styling for tab effect
  const tabButtonsCode = `// Tab-like buttons styling
// Select all tab buttons and set these properties:

// Shape properties
BorderRadius = {
    TopLeft: 10,
    TopRight: 10,
    BottomLeft: 0,
    BottomRight: 0
}

// Color scheme (using your color palette)
Fill = RGBA(230, 98, 93, 1)
Color = RGBA(255, 255, 255, 1)

// Size and position
Height = 32
Y = InfoBox.Y - 32 // Position above the info box`;

  // Button styling for navbar
  const navbarButtonsCode = `// Creating a navbar with buttons
// For leftmost button
BorderRadius = {
    TopLeft: 10,
    TopRight: 0,
    BottomLeft: 10,
    BottomRight: 0
}

// For rightmost button  
BorderRadius = {
    TopLeft: 0,
    TopRight: 10,
    BottomLeft: 0,
    BottomRight: 10
}

// For all navbar buttons
Fill = RGBA(96, 199, 193, 1) // Use your color palette
Color = White`;

  // Background image with transparency
  const backgroundImageCode = `// Adding a subtle background image to a gallery
// Set these properties on an image control placed behind your gallery

Image = MyBackgroundImage
ImagePosition = Fill
Transparency = 0.95 // Higher number = more transparent

// Make sure to reorder it behind your gallery with
ZIndex = Gallery.ZIndex - 1`;

  return (
    <>
    <div className={styles.head}></div>
    <div className={styles.blogContainer}>
      <div className={styles.preface}>
        <div>
          <p>Author: Marcello Brocchi</p>
          <p>Reading time: 7min</p>
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
      <h1 className={styles.blogTitle}>Make Your Power Apps Look Beautiful with Some Simple Techniques!</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          Many Power Apps users think they're limited to the default out-of-the-box styling options, resulting in functional but visually uninspiring applications. The truth is, Power Apps gives you tremendous design freedom if you know how to use it.
        </p>
        <p>
          In this guide, I'll show you how to transform a basic, generic-looking Power App into something visually impressive using several simple techniques. Best of all, these techniques don't require any specialised design skills or external tools - just a bit of creativity and some built-in Power Apps features.
        </p>

        <h2>Prefer to Watch the Video?</h2>
        <p>This guide is also available as a video tutorial for those who prefer visual learning.</p>

        <div className={styles.videoContainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/buKRMHImTzo?si=Ina6FXKrm5Al-1qV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>Before We Start: The Importance of a Color Palette</h2>
        <p>
          The foundation of any well-designed app is a consistent color palette. Instead of randomly choosing colors, I recommend using a color palette tool like <a href="https://flatuicolors.com/" target="_blank" rel="nofollow noreferrer noopener">Flat UI Colors</a> to select a harmonious set of colors.
        </p>
        <p>
          Pick 3-5 colors that work well together, including:
        </p>
        <ul>
          <li>A primary color for major elements</li>
          <li>A secondary color for accents and highlights</li>
          <li>A neutral color for backgrounds</li>
          <li>Dark and light colors for text</li>
        </ul>
        <p>
          For this tutorial, I'll be using colors from a blue-green palette, but feel free to choose colors that match your organization's branding or your personal preference.
        </p>
        
        <h2>Technique 1: Beautiful Backgrounds</h2>
        <p>
          The default white background in Power Apps is boring. Let's change that:
        </p>
        
        <h3>Option 1: Gradient Background Image</h3>
        <p>
          One of the quickest ways to transform your app is to add a background image. Here's how:
        </p>
        <ol>
          <li>Select your screen</li>
          <li>Set the Image property to a gradient image (you can find free ones online)</li>
          <li>Set ImagePosition to "Fill"</li>
        </ol>
        <p>
          Just this simple change immediately gives your app a more professional look. Just make sure to choose a subtle gradient that won't interfere with your content readability.
        </p>
        
        <h3>Option 2: Custom HTML Background with CSS</h3>
        <p>
          For more control, use the HTML Text control to create custom containers:
        </p>
        <ol>
          <li>Insert an HTML Text control</li>
          <li>Reorder it to the back (behind your content)</li>
          <li>Enter HTML and CSS to create a custom container</li>
        </ol>
        
        <CodeBlock code={htmlBackgroundCode} language="html" />
        
        <p>
          This creates a beautiful white container with a colored header section. You can customize the colors and dimensions to fit your app's needs.
        </p>
        
        <h2>Technique 2: Custom Containers with Rounded Corners</h2>
        <p>
          Default Power Apps controls often have square corners, but rounded corners can give your app a more modern look:
        </p>
        
        <h3>Using Border Radius on Controls</h3>
        <p>
          For controls that support border radius (like buttons), you can set each corner individually:
        </p>
        <ul>
          <li>Select your control</li>
          <li>In the properties pane, expand BorderRadius</li>
          <li>Set values for each corner (TopLeft, TopRight, BottomLeft, BottomRight)</li>
        </ul>
        
        <h3>Creating Tab-Like Buttons</h3>
        <p>
          By rounding only the top corners of buttons and positioning them above a container, you can create a tab effect:
        </p>
        
        <CodeBlock code={tabButtonsCode} language="javascript" />
        
        <p>
          Place these buttons directly above your container so they appear to be tabs connected to it. This creates a cohesive UI element that looks far more polished than standard buttons.
        </p>
        
        <h2>Technique 3: Creating a Custom Navbar</h2>
        <p>
          Instead of using individual buttons for navigation, create a unified navbar:
        </p>
        <ol>
          <li>Place buttons side by side with no gap between them</li>
          <li>Round only the outer corners of the first and last buttons</li>
          <li>Use a consistent color from your palette</li>
        </ol>
        
        <CodeBlock code={navbarButtonsCode} language="javascript" />
        
        <p>
          Group these buttons together so you can move them as a single unit. Even though they remain individual buttons, visually they'll appear as a single navigation component.
        </p>
        
        <h2>Technique 4: Adding Depth with Shadows</h2>
        <p>
          Flat designs are fine, but adding subtle shadows can create depth and make your app feel more polished:
        </p>
        
        <h3>Using Box Shadows in HTML Controls</h3>
        <p>
          When using HTML Text controls for containers, add CSS box-shadow:
        </p>
        
        <CodeBlock code={boxShadowCode} language="html" />
        
        <p>
          The box-shadow property takes values for:
        </p>
        <ul>
          <li>Horizontal offset (3px)</li>
          <li>Vertical offset (3px)</li>
          <li>Blur radius (10px)</li>
          <li>Color and opacity (rgba with alpha channel)</li>
        </ul>
        <p>
          Experiment with these values to get the perfect shadow effect for your design.
        </p>
        
        <h2>Technique 5: Subtle Background Images for Galleries</h2>
        <p>
          Make your galleries more visually interesting by adding a semi-transparent background image:
        </p>
        
        <CodeBlock code={backgroundImageCode} language="javascript" />
        
        <p>
          The key is setting a high transparency value so the image doesn't interfere with the gallery content. This creates a subtle watermark effect that adds visual interest without sacrificing usability.
        </p>
        
        <h2>Technique 6: Typography and Text Styling</h2>
        <p>
          Don't neglect your text styling - consistent typography is a hallmark of well-designed apps:
        </p>
        <ul>
          <li><strong>Choose consistent font sizes</strong> for different types of content (headings, body text, labels)</li>
          <li><strong>Use font weight</strong> (bold) sparingly and consistently</li>
          <li><strong>Ensure good contrast</strong> between text and its background</li>
          <li><strong>Consider using a slightly reduced opacity</strong> for secondary text</li>
        </ul>
        
        <h2>Pulling It All Together: The Transformation</h2>
        <p>
          By applying these techniques, your app can go from this:
        </p>
        <ul>
          <li>Default white background</li>
          <li>Standard blue buttons</li>
          <li>Basic text with default formatting</li>
          <li>Flat design with no depth</li>
        </ul>
        <p>
          To this:
        </p>
        <ul>
          <li>Gradient background with custom containers</li>
          <li>Cohesive color scheme from a thoughtful palette</li>
          <li>Tab-like navigation and custom navbar</li>
          <li>Subtle shadows adding depth</li>
          <li>Watermark effects in galleries</li>
          <li>Consistent, well-formatted typography</li>
        </ul>
        
        <h2>Best Practices for Beautiful Power Apps</h2>
        <p>
          As you apply these techniques, keep these best practices in mind:
        </p>
        <ul>
          <li><strong>Consistency is key</strong> - Use the same styling patterns throughout your app</li>
          <li><strong>Less is more</strong> - Don't overdo effects; subtle design choices often look more professional</li>
          <li><strong>Group related controls</strong> - Use grouping to organize and move related elements together</li>
          <li><strong>Test on different devices</strong> - Ensure your design works well on various screen sizes</li>
          <li><strong>Consider accessibility</strong> - Maintain good contrast and readability</li>
          <li><strong>Name your controls meaningfully</strong> - This makes it easier to reference them in formulas</li>
        </ul>
        
        <h2>Advanced Tips for Power App Designers</h2>
        <p>
          Ready to take your designs even further? Consider these advanced techniques:
        </p>
        <ul>
          <li><strong>Use SVG icons</strong> instead of built-in icons for more customization</li>
          <li><strong>Create reusable components</strong> with components or canvas components</li>
          <li><strong>Add subtle animations</strong> for transitions between screens</li>
          <li><strong>Use conditional formatting</strong> to change styling based on data or user actions</li>
          <li><strong>Create custom loading indicators</strong> with HTML and CSS</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          With just a few simple techniques, you can transform your Power Apps from basic, out-of-the-box designs to visually impressive applications that users will enjoy using. The best part is that these improvements don't require any external tools or advanced design skills - just creativity and knowledge of the features already available in Power Apps.
        </p>
        <p>
          Remember, good design isn't just about aesthetics - it improves usability, helps users understand your application better, and creates a more professional impression of your work. Taking the time to implement these design techniques is well worth the effort.
        </p>
        <p>
          So go ahead and give your Power Apps the visual upgrade they deserve. Your users will thank you for it!
        </p>
        
        <p>
          If you'd like to see more Power Apps design tips and techniques, please head over to the <a 
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

export default PowerAppsBeautifulDesignBlogPost;