'use client'
import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
// Import base Prism theme
import 'prismjs/themes/prism-tomorrow.css';

// Import Prism core components
import 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup'; // This includes HTML
import 'prismjs/components/prism-css';

// Plugins
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

import styles from '../styles/codeBlock.module.scss';

const CodeBlock = ({ code, language }) => {
    const [isMounted, setIsMounted] = useState(false);
  
    useEffect(() => {
      setIsMounted(true);
    }, []);
    
    useEffect(() => {
      if (isMounted) {
        Prism.highlightAll();
      }
    }, [isMounted, code]);
    
    if (!isMounted) {
      return <div className="code-placeholder">Loading code...</div>;
    }

  // Map some language names to their Prism equivalents
  const languageMap = {
    html: 'markup',
    xml: 'markup',
    javascript: 'javascript',
    js: 'javascript',
    css: 'css',
    // Add more mappings as needed
  };

  // Use mapped language or fallback to the original
  const prismLanguage = languageMap[language] || language;

  return (
    <div className={styles.codeBlockContainer}>
      <div className={styles.codeHeader}>
        <span className={styles.languageBadge}>{language}</span>
      </div>
      <pre className={`line-numbers`}>
        <code className={`language-${prismLanguage}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;