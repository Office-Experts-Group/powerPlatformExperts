// "use client";
// import React, { useEffect, useRef } from "react";
// import Link from "next/link";

// import styles from "../styles/header.module.css";

// export default function DropdownItem({ item, handleLinkClick }) {
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     if (dropdownRef.current) {
//       const checkPosition = () => {
//         const dropdown = dropdownRef.current;
//         if (!dropdown) return;

//         const rect = dropdown.getBoundingClientRect();
//         const viewportHeight = window.innerHeight;

//         // If dropdown would extend beyond viewport
//         if (rect.bottom > viewportHeight) {
//           dropdown.style.top = "auto";
//           dropdown.style.bottom = "0";
//         } else {
//           dropdown.style.top = "-1rem";
//           dropdown.style.bottom = "auto";
//         }
//       };

//       // Check position on hover
//       dropdownRef.current.parentElement.addEventListener(
//         "mouseenter",
//         checkPosition
//       );

//       return () => {
//         if (dropdownRef.current && dropdownRef.current.parentElement) {
//           dropdownRef.current.parentElement.removeEventListener(
//             "mouseenter",
//             checkPosition
//           );
//         }
//       };
//     }
//   }, []);

//   if (!item.items) {
//     return (
//       <li>
//         <Link href={item.href} onClick={() => handleLinkClick(item.label)}>
//           <span>{item.label}</span>
//         </Link>
//       </li>
//     );
//   }

//   return (
//     <li className={styles.nestedDropdown}>
//       <Link href={item.href} onClick={() => handleLinkClick(item.label)}>
//         <span>{item.label}</span>
//       </Link>
//       <ul className={styles.nestedItems} ref={dropdownRef}>
//         {item.items.map((subItem, index) => (
//           <DropdownItem
//             key={index}
//             item={subItem}
//             handleLinkClick={handleLinkClick}
//           />
//         ))}
//       </ul>
//     </li>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/header.module.css";

export default function DropdownItem({ item, handleLinkClick }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!dropdownRef.current) return;

    const checkPosition = () => {
      const dropdown = dropdownRef.current;
      if (!dropdown) return;

      // Get dropdown and viewport dimensions
      const rect = dropdown.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const dropdownHeight = rect.height;
      const spaceBelow = viewportHeight - rect.top;
      const spaceAbove = rect.top;

      // Clear any existing positioning
      dropdown.style.removeProperty("top");
      dropdown.style.removeProperty("bottom");

      // If there's not enough space below, and there's more space above
      if (spaceBelow < dropdownHeight && spaceAbove > spaceBelow) {
        dropdown.style.bottom = "100%";
        dropdown.style.top = "auto";
      } else {
        dropdown.style.top = "-1rem";
        dropdown.style.bottom = "auto";
      }
    };

    // Check position on hover and window resize
    const parent = dropdownRef.current.parentElement;
    if (parent) {
      parent.addEventListener("mouseenter", checkPosition);
      window.addEventListener("resize", checkPosition);

      // Cleanup
      return () => {
        parent.removeEventListener("mouseenter", checkPosition);
        window.removeEventListener("resize", checkPosition);
      };
    }
  }, []);

  if (!item.items) {
    return (
      <li>
        <Link href={item.href} onClick={() => handleLinkClick(item.label)}>
          <span>{item.label}</span>
        </Link>
      </li>
    );
  }

  return (
    <li className={styles.nestedDropdown}>
      <Link href={item.href} onClick={() => handleLinkClick(item.label)}>
        <span>{item.label}</span>
      </Link>
      <ul className={styles.nestedItems} ref={dropdownRef}>
        {item.items.map((subItem, index) => (
          <DropdownItem
            key={index}
            item={subItem}
            handleLinkClick={handleLinkClick}
          />
        ))}
      </ul>
    </li>
  );
}
