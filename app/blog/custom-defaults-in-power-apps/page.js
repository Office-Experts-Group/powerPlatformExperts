import React from 'react';
import CodeBlock from '../../../components/CodeBlock';

import styles from '../../../styles/blogPost.module.scss';
import Link from 'next/link';

const PowerAppsDropdownDefaultBlogPost = () => {
  // Collection setup code
  const collectionSetupCode = `// In App OnStart property:

// Step 1: Create collection with custom first item
ClearCollect(
    Cities,
    {
        cr123_name: "-- Select --"  // Custom default/placeholder item
    }
);

// Step 2: Add data from your data source
Collect(
    Cities,                         // Your collection
    Filter(AustralianCities, true)  // Your data source (all records)
);`;

  // Simple version for SharePoint
  const sharePointVersionCode = `// For SharePoint or other data sources without prefixes:

ClearCollect(
    Cities,
    {
        Title: "-- Select --"   // Use your actual column name
    }
);

Collect(
    Cities,
    SharePointList
);`;

  // Dropdown configuration code
  const dropdownConfigCode = `// Properties for your dropdown control:

// Items property:
Cities

// Value property (if needed):
// This references the field name from your collection
cr123_name

// Default property:
// Optional - set to first item to ensure default selection
First(Cities).cr123_name

// OnChange property:
// Your logic when selection changes`;

  // Advanced version with reset
  const advancedVersionCode = `// In your Reset button OnSelect property:

// Reset dropdown to show default option
ResetDropdown = true;

// In your dropdown control:
// Items property with conditional logic
If(
    ResetDropdown,
    // When reset is triggered, recreate collection with default first
    UpdateContext({ResetDropdown: false});
    ClearCollect(
        Cities,
        {cr123_name: "-- Select --"}
    );
    Collect(Cities, Filter(AustralianCities, true));
    Cities,
    // Otherwise use existing collection
    Cities
)`;

  return (
    <>
    <div className={styles.head}></div>
    <div className={styles.blogContainer}>
      <div className={styles.preface}>
        <div>
          <p>Author: Marcello Brocchi</p>
          <p>Reading time: 4min</p>
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
      <h1 className={styles.blogTitle}>Set a Custom Default Value for the Drop Down Lookup Control in Microsoft Power Apps</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          Dropdown controls in Power Apps are incredibly useful for letting users select from a predefined list of options. However, they come with a frustrating limitation: when connected directly to a data source, they automatically select the first item as the default value.
        </p>
        <p>
          This default behavior can lead to several problems:
        </p>
        <ul>
          <li>Users might accidentally submit forms without realising they need to change a selection</li>
          <li>There's no built-in way to display a helpful placeholder like "-- Select an option --"</li>
          <li>You can't start with a blank value that would require the user to make an active choice</li>
        </ul>
        <p>
          In this guide, I'll show you a simple but powerful technique to overcome this limitation by using collections to customise your dropdown's default behavior.
        </p>

        <h2>Prefer to Watch the Video?</h2>
        <p>This guide is also available as a video tutorial for those who prefer visual learning.</p>

        <div className={styles.videoContainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/P-92BYSRv08?si=lneRzpwuss4vU3Sm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>The Problem with Dropdown Defaults</h2>
        <p>
          When you connect a dropdown control directly to a data source (like Dataverse, SharePoint, or an Excel table), Power Apps automatically selects the first item in the list as the default value. This means your users see a pre-selected option rather than a blank field or a helpful placeholder.
        </p>
        <p>
          This behavior can be problematic because:
        </p>
        <ul>
          <li>Users might not realise they need to make a selection</li>
          <li>The first item might be a valid choice that gets selected accidentally</li>
          <li>There's no obvious way to distinguish between an intentional selection and the default state</li>
        </ul>
        <p>
          There's no simple property to change this behavior directly in the dropdown control. However, we can use collections to solve this problem elegantly.
        </p>
        
        <h2>The Solution: Using Collections</h2>
        <p>
          The key to this solution is creating an intermediary collection that contains your data source items plus an additional custom default item. Then, you connect your dropdown to this collection instead of directly to the data source.
        </p>
        <p>
          Here's how to implement it:
        </p>
        
        <CodeBlock code={collectionSetupCode} language="javascript" />
        
        <p>
          This approach gives you complete control over what appears first in your dropdown. The custom item ("-- Select --" in this example) will appear at the top of the list and will be the default selection.
        </p>
        
        <h3>Column Name Considerations</h3>
        <p>
          Note that I'm using "cr123_name" as the column name in the example above. This reflects how Dataverse (formerly CDS) names columns, with a prefix followed by the actual column name.
        </p>
        <p>
          If you're using SharePoint or another data source, you'll need to use your actual column names:
        </p>
        
        <CodeBlock code={sharePointVersionCode} language="javascript" />
        
        <p>
          The key is to ensure the column name in your collection matches exactly what's in your data source.
        </p>
        
        <h2>Configuring Your Dropdown</h2>
        <p>
          Once you've set up your collection, configure your dropdown control to use it:
        </p>
        
        <CodeBlock code={dropdownConfigCode} language="javascript" />
        
        <p>
          With this configuration, your dropdown will:
        </p>
        <ul>
          <li>Display a helpful "-- Select --" option as the default</li>
          <li>Include all the items from your original data source</li>
          <li>Work exactly like a normal dropdown in all other respects</li>
        </ul>
        
        <h2>Handling Form Submissions</h2>
        <p>
          When handling form submissions with your custom dropdown, you might want to check if the user has selected a real option (not just the default placeholder):
        </p>
        <div className={styles.codeBox}>
        <pre><code>// In your submit button's OnSelect property
If(
    Dropdown1.Selected.cr123_name = "-- Select --",
    Notify("Please select an option"),
    // Proceed with your form submission
    SubmitForm(Form1)
)</code></pre>
</div>
        
        <p>
          This ensures users make an active selection before proceeding.
        </p>
        
        <h2>Advanced: Resetting the Dropdown</h2>
        <p>
          If you need to reset your form and want the dropdown to return to its default value, you might need an additional technique since the dropdown's reset behavior can be inconsistent.
        </p>
        
        <CodeBlock code={advancedVersionCode} language="javascript" />
        
        <p>
          This approach uses a context variable to trigger a rebuild of the collection when needed, ensuring your dropdown resets properly.
        </p>
        
        <h2>Best Practices</h2>
        <p>
          When implementing custom dropdown defaults:
        </p>
        
        <h3>Choose Clear Placeholder Text</h3>
        <p>
          Make your default option text informative:
        </p>
        <ul>
          <li>"-- Select a City --" instead of just "Select"</li>
          <li>"Choose an option..." with ellipsis to indicate action needed</li>
          <li>"(Required)" for fields that must be filled</li>
        </ul>
        
        <h3>Consider Validation</h3>
        <p>
          Add validation to ensure users don't submit forms with the default placeholder selected. This provides clear feedback that they need to make an active choice.
        </p>
        
        <h3>Performance Considerations</h3>
        <p>
          For large data sources, you might need to adjust this approach by:
        </p>
        <ul>
          <li>Using delegation-friendly functions when collecting data</li>
          <li>Limiting the number of items if the full list isn't needed</li>
          <li>Implementing search or filtering within the dropdown</li>
        </ul>
        
        <h2>Potential Issues and Solutions</h2>
        
        <h3>Duplicate Items</h3>
        <p>
          If your data source already has an item with the same name as your custom default, you might get duplicates. To avoid this:
        </p>
        <div className={styles.codeBox}>
        <pre><code>// Filter out any existing items with the same name
Collect(
    Cities,
    Filter(AustralianCities, cr123_name &lt;&gt; "-- Select --")
);
</code></pre>
</div>
        
        <h3>Working with Forms</h3>
        <p>
          When using your dropdown in a form control, you might need additional steps to ensure the form recognizes the selected value correctly, especially if the form is connected directly to your data source rather than your collection.
        </p>
        
        <h2>Conclusion</h2>
        <p>
          By using collections as an intermediary between your data source and dropdown control, you gain complete control over the default values and user experience of dropdown fields in Power Apps.
        </p>
        <p>
          This technique is simple to implement but solves a significant usability issue that affects many Power Apps. The collection approach is flexible enough to work with all types of data sources, whether they're SharePoint lists, Excel tables, or Dataverse entities.
        </p>
        <p>
          Implementing custom defaults in your dropdowns shows attention to detail and creates a more intuitive user experience—something your users will definitely appreciate!
        </p>
        
        <p>
          If you'd like to see more Power Apps development tips and techniques, please head over to the <a 
          href="https://www.youtube.com/@ChinoDoesStuff/featured" 
          rel="nofollow noreferrer noopener"
        >YouTube channel</a> and leave a comment there. I actively monitor and respond to all YouTube comments!
        </p>
      </div>
    </div>
    </>
  );
};

export default PowerAppsDropdownDefaultBlogPost;