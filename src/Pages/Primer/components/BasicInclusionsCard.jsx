import styles from "../Primer.module.css";

export default function BasicInclusionsCard({ items }) {
  return (
    <div className={styles.basicInclusionsCard}>
      <div className={styles.basicInclusionsCardTitle}>
        <span className={styles.basicInclusionsCardHighlight}>
          + Basic Inclusions
        </span>
        <span className={styles.basicInclusionsCardSubtitle}>
          (All packages come with these services)
        </span>
      </div>

      <ul className={styles.basicInclusionsCardList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
