import styles from "../Primer.module.css";

export default function PackageCard({ tier, title, price, accent, perks }) {
  return (
    <article
      className={`min-h-fit sm:min-h-[350px] md:min-h-[390px] h-full ${styles.packageCard}`}
      style={{ "--package-accent": accent }}
    >
      <div className={styles.packageCardSurface}>
        <div className={styles.packageCardPrice}>{price}</div>
        <div className={styles.packageCardHeading}>
          <div className={styles.packageCardTier}>{tier}</div>
          <div className={styles.packageCardTitle}>{title}</div>
        </div>
        <ul className={styles.packageCardList}>
          <li>Basic inclusions</li>
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
