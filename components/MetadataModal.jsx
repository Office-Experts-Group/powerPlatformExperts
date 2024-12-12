// "use client";

// import { useState, useEffect } from "react";
// import styles from "./MetadataModal.module.scss";

// export default function MetadataModal({ metadata }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (e.key === "m" && e.ctrlKey) {
//         setIsVisible((prev) => !prev);
//       }
//     };

//     window.addEventListener("keydown", handleKeyPress);
//     return () => window.removeEventListener("keydown", handleKeyPress);
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <div className={styles.modalHeader}>
//           <h2 className={styles.modalTitle}>Metadata Preview</h2>
//           <button
//             onClick={() => setIsVisible(false)}
//             className={styles.closeButton}
//           >
//             Close
//           </button>
//         </div>

//         <div>
//           <section className={styles.section}>
//             <h3 className={styles.sectionTitle}>Title:</h3>
//             <p>{metadata.title}</p>
//           </section>

//           <section className={styles.section}>
//             <h3 className={styles.sectionTitle}>Description:</h3>
//             <p>{metadata.description}</p>
//           </section>

//           <section className={styles.section}>
//             <h3 className={styles.sectionTitle}>Keywords:</h3>
//             <div className={styles.keywordContainer}>
//               {metadata.keywords.map((keyword, i) => (
//                 <span key={i} className={styles.keyword}>
//                   {keyword}
//                 </span>
//               ))}
//             </div>
//           </section>

//           <section className={styles.section}>
//             <h3 className={styles.sectionTitle}>URL:</h3>
//             <p>{metadata.url}</p>
//           </section>

//           <section className={styles.section}>
//             <h3 className={styles.sectionTitle}>Content Sections:</h3>
//             <div>
//               {metadata.sections.map((section, i) => (
//                 <div key={i} className={styles.contentSection}>
//                   <p className={styles.tagLabel}>{section.tag}:</p>
//                   <p>{section.content}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }
