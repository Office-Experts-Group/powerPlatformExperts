import React from 'react';
import CodeBlock from '../../../components/CodeBlock';

import styles from '../../../styles/blogPost.module.scss';
import Link from 'next/link';
import Contact from '../../../components/Contact';

const PowerAppsVariablesBlogPost = () => {
  // Bad practice code sample
  const badCodeSample = `// On home screen OnVisible property:
Set(
    startVal,
    1
);

// Later, on another screen's OnVisible property:
Set(
    startVal,
    2
);

// This creates confusion as the same global variable 
// is being used in different places with different values`;

  // Bad IF statement approach
  const badIfSample = `// Direct use of IF in a Patch statement
Patch(
    'YourDataSource',
    NewRecord,
    {
        Title: TextInput1.Text,
        Status: If(
            RDAprioritySelect.Selected.Value = "Normal",
            "Complete",
            If(
                RDAprioritySelect.Selected.Value = "High",
                "DoSomething",
                If(
                    RDAprioritySelect.Selected.Value = "Urgent",
                    "Urgent",
                    ""
                )
            )
        )
    }
);

// Same logic needed elsewhere requires copy-pasting
RunWorkflow.Run(
    {
        param1: TextInput1.Text,
        status: If(
            RDAprioritySelect.Selected.Value = "Normal",
            "Complete",
            If(
                RDAprioritySelect.Selected.Value = "High",
                "DoSomething",
                If(
                    RDAprioritySelect.Selected.Value = "Urgent",
                    "Urgent",
                    ""
                )
            )
        )
    }
);`;

  // Set variable approach (still not ideal)
  const setVarSample = `// Setting a global variable before using it
Set(
    varStatus,
    If(
        RDAprioritySelect.Selected.Value = "Normal",
        "Complete",
        If(
            RDAprioritySelect.Selected.Value = "High",
            "DoSomething",
            If(
                RDAprioritySelect.Selected.Value = "Urgent",
                "Urgent",
                ""
            )
        )
    )
);

// Using the global variable in multiple places
Patch(
    'YourDataSource',
    NewRecord,
    {
        Title: TextInput1.Text,
        Status: varStatus
    }
);

RunWorkflow.Run(
    {
        param1: TextInput1.Text,
        status: varStatus
    }
);`;

  // With function approach (best practice)
  const withFunctionSample = `// Using the With function to create local variables
With(
    {
        calcStatus: If(
            RDAprioritySelect.Selected.Value = "Normal",
            "Complete",
            If(
                RDAprioritySelect.Selected.Value = "High",
                "DoSomething",
                If(
                    RDAprioritySelect.Selected.Value = "Urgent",
                    "Urgent",
                    ""
                )
            )
        ),
        // You can define multiple local variables
        test: 1
    },
    // Second parameter: operations using the local variables
    Patch(
        'YourDataSource',
        NewRecord,
        {
            Title: TextInput1.Text,
            Status: calcStatus
        }
    );
    RunWorkflow.Run(
        {
            param1: TextInput1.Text,
            status: calcStatus
        }
    )
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
      <h1 className={styles.blogTitle}>Power Apps Global Variables - Stop Using Them!</h1>
      
      <div className={styles.blogContent}>
        <h2>Introduction</h2>
        <p>
          If you're building Power Apps, there's a good chance you're creating unnecessary complexity by overusing global variables. In this guide, I'll show you why global variables can cause headaches in your apps, and introduce a much better approach that will make your apps more maintainable and less prone to bugs.
        </p>
        <p>
          Before we dive in, it's important to understand a fundamental concept about Power Apps: <strong>all fields and variables created with the Set() function exist in the global scope</strong>. This means they're accessible from anywhere in your app, which might sound convenient at first, but can quickly lead to problems as your app grows.
        </p>

        <h2>Prefer to Watch the Video?</h2>
        <p>This guide is also available as a video tutorial for those who prefer visual learning.</p>

        <div className={styles.videoContainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6gyEHeS0Oak?si=FMTEF4hMFXheD5D9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
        <h2>The Problems with Global Variables</h2>
        <p>
          When you use the Set() function to create variables in Power Apps, you're creating globally accessible values that can be read and modified from any screen in your app. This creates several issues:
        </p>
        
        <h3>1. Variable Conflicts</h3>
        <p>
          If you define the same variable name in different parts of your app, they will interfere with each other. For example, look at this code:
        </p>
        
        <CodeBlock code={badCodeSample} language="javascript" />
        
        <p>
          In this example, startVal is set to 1 when the home screen loads, but it's later overwritten with 2 when another screen loads. If your app logic on the home screen depends on startVal being 1, you've just introduced a bug that might be very difficult to track down.
        </p>
        
        <h3>2. Maintenance Nightmare</h3>
        <p>
          As your app grows, keeping track of all global variables becomes increasingly difficult. You'll find yourself asking:
        </p>
        <ul>
          <li>Where is this variable initially set?</li>
          <li>What other parts of the app might be modifying it?</li>
          <li>What screens or controls depend on this variable?</li>
        </ul>
        <p>
          When you return to an app months later or if another developer needs to modify your app, these questions become even harder to answer.
        </p>
        
        <h3>3. Namespace Collision</h3>
        <p>
          Remember that not only variables but all controls in Power Apps share the same global namespace. This means your variable names can't conflict with any control names across your entire app, further limiting what you can name your variables.
        </p>
        
        <h2>Common Anti-Patterns</h2>
        <p>
          Let's look at a common scenario where developers often misuse global variables. Imagine you need to determine a status based on a priority selection and use that status in multiple places:
        </p>
        
        <h3>Anti-Pattern 1: Duplicating Logic</h3>
        <p>
          One approach is to duplicate the same conditional logic wherever it's needed:
        </p>
        
        <CodeBlock code={badIfSample} language="javascript" />
        
        <p>
          This approach is problematic because:
        </p>
        <ul>
          <li>You're duplicating logic, making your app harder to maintain</li>
          <li>If the business rules change, you need to update multiple places</li>
          <li>The code becomes harder to read as these nested IFs grow</li>
        </ul>
        
        <h3>Anti-Pattern 2: Using Global Variables</h3>
        <p>
          Another common approach is to set a global variable and then use it:
        </p>
        
        <CodeBlock code={setVarSample} language="javascript" />
        
        <p>
          While this eliminates code duplication, it still creates a global variable that can cause problems if:
        </p>
        <ul>
          <li>It's accidentally overwritten elsewhere in your app</li>
          <li>Someone needs to understand where and how it's being set</li>
          <li>You need to use the same variable name for something else in another part of your app</li>
        </ul>
        
        <h2>The Solution: Using the With() Function</h2>
        <p>
          Power Apps provides a much better approach for creating local variables that only exist within a specific context: the <strong>With()</strong> function.
        </p>
        
        <p>
          The With() function takes two parameters:
        </p>
        <ol>
          <li>A record containing one or more values you want to use locally</li>
          <li>An expression that uses those local values</li>
        </ol>
        
        <p>
          Here's how to refactor our example using With():
        </p>
        
        <CodeBlock code={withFunctionSample} language="javascript" />
        
        <p>
          This approach provides several benefits:
        </p>
        <ul>
          <li><strong>Local Scope</strong>: The calcStatus variable only exists within the With() function, so it can't conflict with other parts of your app</li>
          <li><strong>Clear Boundaries</strong>: It's immediately obvious where the variable is defined and where it's used</li>
          <li><strong>Self-Documenting</strong>: When you revisit the code, everything you need to understand is in one place</li>
          <li><strong>Reusable Names</strong>: You can reuse the same variable names in different parts of your app without conflicts</li>
          <li><strong>Multiple Variables</strong>: You can define multiple local variables within the same With() function</li>
        </ul>
        
        <h2>When to Use Set()</h2>
        <p>
          Global variables do have their place. You should use Set() when:
        </p>
        <ul>
          <li>You genuinely need a value to persist across different screens</li>
          <li>You're implementing app-wide state that multiple screens need to access</li>
          <li>You're creating a user preference or setting that should be consistent throughout the app</li>
        </ul>
        <p>
          Even in these cases, be careful to use descriptive names that make it clear the variable is intended to be global, such as prefixing with "g_" or "global_".
        </p>
        
        <h2>Testing for Variable Scope</h2>
        <p>
          A simple way to verify that your variables are properly scoped is to check if they're available outside their intended context. For variables created with With(), they should not appear in the autocomplete suggestions when referenced outside the With() function.
        </p>
        <p>
          This is a good way to confirm you're creating truly local variables rather than polluting the global scope.
        </p>
        
        <h2>Best Practices for Variables in Power Apps</h2>
        <p>
          To keep your Power Apps maintainable as they grow:
        </p>
        <ul>
          <li><strong>Use With() for local computations</strong> instead of Set() whenever possible</li>
          <li><strong>Keep global variables to a minimum</strong> and document their purpose</li>
          <li><strong>Use consistent naming conventions</strong> to distinguish between global and local variables</li>
          <li><strong>Group related functionality together</strong> to make it easier to understand</li>
          <li><strong>Consider using collections</strong> instead of multiple related variables</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>
          By minimising your use of global variables and embracing the With() function for local computations, you'll create Power Apps that are:
        </p>
        <ul>
          <li>More maintainable over time</li>
          <li>Less prone to unexpected bugs</li>
          <li>Easier for you and other developers to understand</li>
          <li>More scalable as your app grows in complexity</li>
        </ul>
        <p>
          This approach might require a small shift in how you think about building your apps, but the benefits in maintainability and code quality will be well worth it.
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

export default PowerAppsVariablesBlogPost;