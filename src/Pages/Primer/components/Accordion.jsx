import { useState } from "react";
import styles from "../Primer.module.css";

export function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {children.map((child, index) =>
        child
          ? {
              ...child,
              props: {
                ...child.props,
                isOpen: openIndex === index,
                onToggle: () => handleToggle(index),
              },
            }
          : null
      )}
    </div>
  );
}

export function AccordionItem({ title, children, isOpen, onToggle }) {
  return (
    <div className={`${styles.accordionItem}`}>
      <button
        type="button"
        className={`${styles.accordionToggle} ${isOpen ? styles.accordionToggleOpen : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span aria-hidden="true" className={styles.accordionIcon}>
          {isOpen ? "−" : "+"}
        </span>
      </button>
      
      {isOpen && (
        <div className={styles.accordionContent}>
          <div className={styles.accordionContentInner}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
