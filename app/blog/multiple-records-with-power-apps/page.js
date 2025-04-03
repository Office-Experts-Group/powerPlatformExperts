import React from 'react';
import CodeBlock from '../../../components/CodeBlock';

import styles from '../../../styles/blogPost.module.scss';
import Link from 'next/link';
import Contact from '../../../components/Contact';

const PowerAppsMultipleRecordsBlogPost = () => {
  // Collection setup code
  const collectionSetupCode = `// In App OnStart property, initialise your collection
// Match column names exactly with your data source!

ClearCollect(
    dataInput,
    {
        cr123_name: "",              // Book name
        cr123_author: "",            // Author name
        cr123_genre: "",             // Genre
        cr123_published: Today()     // Published date
    }
);`;

  // Gallery setup code
  const gallerySetupCode = `// Configure a Blank Vertical Gallery
// Set these properties:

// Items property:
dataInput

// Add these controls to the gallery template:
// 1. Text Input for Name
//    - Default: ThisItem.cr123_name
//    - OnChange: Update collection (see field update code)

// 2. Text Input for Author
//    - Default: ThisItem.cr123_author
//    - OnChange: Update collection

// 3. Date Picker for Published Date
//    - Default: ThisItem.cr123_published
//    - OnChange: Update collection

// 4. Dropdown for Genre
//    - Items: ["Science Fiction", "Biography", "Non-Fiction"]
//    - Default: ThisItem.cr123_genre
//    - OnChange: Update collection

// 5. Icon for Delete
//    - OnSelect: Remove(dataInput, ThisItem)`;

  // Field update code
  const fieldUpdateCode = `// For Name field OnChange property:
Patch(
    dataInput,               // Collection to update
    ThisItem,                // Record to update
    { cr123_name: txtName.Text }  // New value
);

// For Author field OnChange property:
Patch(
    dataInput,
    ThisItem,
    { cr123_author: txtAuthor.Text }
);

// For Date Picker OnChange property:
Patch(
    dataInput,
    ThisItem,
    { cr123_published: dpPublished.SelectedDate }
);

// For Dropdown OnChange property:
Patch(
    dataInput,
    ThisItem,
    { cr123_genre: ddGenre.Selected.Value }
);`;

  // Add record code
  const addRecordCode = `// Add button OnSelect property:
Collect(
    dataInput,
    {
        cr123_name: "",
        cr123_author: "",
        cr123_genre: "",
        cr123_published: Today()
    }
);`;

  // Submit records code
  const submitRecordsCode = `// Save button OnSelect property:
// This commits all records in one operation

Collect(
    'Your_Data_Source',   // e.g., 'Library' table
    dataInput             // Your collection with all records
);

// Clear the collection after saving
Clear(dataInput);

// Re-initialise with a blank record
Collect(
    dataInput,
    {
        cr123_name: "",
        cr123_author: "",
        cr123_genre: "",
        cr123_published: Today()
    }
);`;

  return (
    <>
    <div className={styles.head}></div>
    <div className={styles.blogContainer}>
      <div className={styles.preface}>
        <div>
          <p>Author: Marcello Brocchi</p>
          <p>Reading time: 6min</p>
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
      <h1 className={styles.blogTitle}>Save Multiple Records with a Single Click in Microsoft Power Apps</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          When building data entry applications in Power Apps, there's often a need to allow users to input multiple records at once. The traditional approach is to have users enter one record, save it, and then start a new entry—a time-consuming process that can frustrate users who need to enter several records quickly.
        </p>
        <p>
          A much more efficient approach is to create a repeating section that allows users to enter multiple records in memory and then save them all at once with a single click. This method has several advantages:
        </p>
        <ul>
          <li>Faster data entry with fewer server calls</li>
          <li>Better user experience with immediate feedback</li>
          <li>Ability to review and delete entries before committing them</li>
          <li>Reduced risk of partial data entry if connections are interrupted</li>
        </ul>
        <p>
          In this guide, I'll show you how to build a powerful multiple-record entry form that saves all records in one operation, using collections as an in-memory data store.
        </p>

        <h2>Prefer to Watch the Video?</h2>
        <p>This guide is also available as a video tutorial for those who prefer visual learning.</p>

        <div className={styles.videoContainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/m1MFJssXpxo?si=u90ynHGFrJ_a55rJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>Understanding the Approach</h2>
        <p>
          The key to this implementation is using a collection as a temporary data store. Here's how the process works:
        </p>
        <ol>
          <li>Initialise an empty collection with the same structure as your data source</li>
          <li>Use a gallery to display and edit items in the collection</li>
          <li>Add, edit, and delete records within the collection (all in memory—no server calls)</li>
          <li>When ready, save the entire collection to your data source in one operation</li>
        </ol>
        <p>
          This approach dramatically improves performance and user experience compared to saving each record individually.
        </p>
        
        <h2>Step 1: Initialise Your Collection</h2>
        <p>
          The first step is to create a collection that will temporarily store your records. This should be done when your app starts:
        </p>
        
        <CodeBlock code={collectionSetupCode} language="javascript" />
        
        <p>
          <strong>Important:</strong> The column names in your collection must exactly match the column names in your data source. For Dataverse/CDS tables, this means including any prefixes (like "cr123_" in the example above).
        </p>
        <p>
          For SharePoint or SQL data sources, use the exact column names from those systems. This is crucial because we'll be copying the entire collection to the data source later.
        </p>
        
        <h2>Step 2: Create the Gallery Interface</h2>
        <p>
          Next, add a gallery to your screen and configure it to display and edit items in your collection:
        </p>
        
        <CodeBlock code={gallerySetupCode} language="javascript" />
        
        <p>
          This gallery will display all the records in your collection and allow users to edit them. Each row in the gallery represents one record that will eventually be saved to your data source.
        </p>
        
        <h3>Setting Up Input Controls</h3>
        <p>
          Within your gallery template, add input controls for each field:
        </p>
        <ul>
          <li>Text inputs for text fields</li>
          <li>Date pickers for dates</li>
          <li>Dropdowns or combo boxes for choice fields</li>
          <li>A delete icon to remove unwanted entries</li>
        </ul>
        <p>
          Each control should have its Default property set to display the corresponding field from ThisItem (the current record in the collection).
        </p>
        
        <h2>Step 3: Updating Collection Records</h2>
        <p>
          The magic happens in the OnChange property of each input control. When a user changes a value, you immediately update the corresponding record in the collection:
        </p>
        
        <CodeBlock code={fieldUpdateCode} language="javascript" />
        
        <p>
          This approach provides instant feedback to users without making any server calls. All changes are stored in memory until the user is ready to save everything.
        </p>
        
        <h2>Step 4: Adding New Records</h2>
        <p>
          Add a button or icon above or below your gallery that allows users to add new blank records to the collection:
        </p>
        
        <CodeBlock code={addRecordCode} language="javascript" />
        
        <p>
          When clicked, this button adds a new blank record to your collection, which immediately appears in the gallery for the user to fill in.
        </p>
        
        <h2>Step 5: Submitting All Records at Once</h2>
        <p>
          Finally, add a "Save" or "Submit" button that will save all records to your data source in one operation:
        </p>
        
        <CodeBlock code={submitRecordsCode} language="javascript" />
        
        <p>
          This code does three things:
        </p>
        <ol>
          <li>Saves all records from your collection to your data source in one operation</li>
          <li>Clears the collection to remove the existing records</li>
          <li>Adds a new blank record to the collection so users can start entering new data</li>
        </ol>
        
        <h2>Complete Implementation Example</h2>
        <p>
          Let's put it all together with a real-world example. Imagine you're building a book catalog app where users need to enter multiple books at once. Here's how you would implement it:
        </p>
        
        <h3>1. Set Up Your Data Source</h3>
        <p>
          Create a "Books" table or list with fields for:
        </p>
        <ul>
          <li>Title</li>
          <li>Author</li>
          <li>Genre</li>
          <li>Publication Date</li>
        </ul>
        
        <h3>2. Initialise Your Collection</h3>
        <p>
          In your app's OnStart property, initialise the collection with the correct field names.
        </p>
        
        <h3>3. Create the User Interface</h3>
        <p>
          Add:
        </p>
        <ul>
          <li>A gallery connected to your collection</li>
          <li>Input controls in the gallery template</li>
          <li>An "Add Book" button</li>
          <li>A "Save All Books" button</li>
        </ul>
        
        <h3>4. Configure Control Behaviors</h3>
        <p>
          Set up the OnChange properties for each input control to update the collection in real-time.
        </p>
        
        <h2>Testing Your Implementation</h2>
        <p>
          To verify everything is working correctly:
        </p>
        <ol>
          <li>Run your app and add several test records</li>
          <li>Edit some of the records you've added</li>
          <li>Delete one or two records</li>
          <li>Click your Save button</li>
          <li>Check your data source to confirm all records were saved properly</li>
        </ol>
        <p>
          If you've set everything up correctly, all of your edited records should appear in your data source after clicking Save.
        </p>
        
        <h2>Debugging Common Issues</h2>
        <p>
          If you run into problems, check these common issues:
        </p>
        
        <h3>Records Not Saving Correctly</h3>
        <p>
          The most common issue is mismatched column names. Make sure the column names in your collection exactly match those in your data source, including any prefixes.
        </p>
        
        <h3>Changes Not Appearing in Gallery</h3>
        <p>
          If changes to your records aren't appearing in the gallery, check that your Patch formulas are correctly referencing the control values and updating the right fields.
        </p>
        
        <h3>Error When Saving</h3>
        <p>
          If you get an error when clicking Save, verify that your collection structure exactly matches what your data source expects. This includes data types and required fields.
        </p>
        
        <h2>Advanced Techniques</h2>
        <p>
          Once you've mastered the basics, consider these enhancements:
        </p>
        
        <h3>Validation Before Saving</h3>
        <p>
          Add validation to prevent saving incomplete or invalid records:
        </p>
        <div className={styles.codeBox}>
        <pre><code>// Check if any records have empty required fields
If(
    CountRows(
        Filter(dataInput, IsBlank(cr123_name) || IsBlank(cr123_author))
    ) {'>'} 0,
    Notify("Please complete all required fields before saving."),
    // Proceed with save operation if validation passes
    SaveRecords()
)</code></pre>
</div>
        
        <h3>Adding Default Values</h3>
        <p>
          Pre-populate certain fields to speed up data entry:
        </p>
        <div className={styles.codeBox}>
        <pre><code>// Add new record with default values
Collect(
    dataInput,
    {"{"}
        cr123_name: "",
        cr123_author: "",
        cr123_genre: "Science Fiction",  // Default genre
        cr123_published: Today()         // Default to today's date
    {"}"}
);</code></pre>
</div>
        
        <h3>Batch Size Considerations</h3>
        <p>
          For very large data sets, be aware that there may be limits to how many records you can submit at once. If you need to submit hundreds of records, consider splitting them into smaller batches.
        </p>
        
        <h2>Conclusion</h2>
        <p>
          Using collections to temporarily store multiple records before submitting them all at once is a powerful pattern in Power Apps development. It significantly improves performance and user experience for data entry scenarios.
        </p>
        <p>
          The approach described in this guide allows users to:
        </p>
        <ul>
          <li>Enter multiple records quickly</li>
          <li>Edit and delete records before committing them</li>
          <li>Submit everything in one operation</li>
        </ul>
        <p>
          By implementing this pattern, you'll create more efficient and user-friendly apps that save time and reduce frustration for your users.
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

export default PowerAppsMultipleRecordsBlogPost;