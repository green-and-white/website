import styles from "../Primer.module.css";
import texture from "../../../assets/textures/texture.png";
import { BASIC_INCLUSIONS, PACKAGE_CARDS, STAR_STICKER } from "../primerData";

export default function PackagesSection() {
  return (
    <section className={`${styles.primerPackages} pt-20`}>
      <img
        src={texture}
        alt=""
        aria-hidden="true"
        className={styles.primerTexture}
      />

      <div className={styles.primerPackagesContent}>
        <div className={styles.packagesHeader}>
          <h2 className={styles.h2} data-text="Yearbook">
            Yearbook
          </h2>
          <h3 className={styles.h3} data-text="Packages & Payment">
            Packages & Payment
          </h3>
        </div>

        <div className={styles.primerPackagesLayout}>
          <aside className={styles.primerPackagesAside}>
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
                {BASIC_INCLUSIONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <button type="button" className={styles.packagesToggle}>
              <span>Payment Details</span>
              <span aria-hidden="true">+</span>
            </button>

            <button type="button" className={styles.packagesToggle}>
              <span>Payment Schemes</span>
              <span aria-hidden="true">+</span>
            </button>
          </aside>

          <div className={styles.primerPackagesCards}>
            {PACKAGE_CARDS.map((pkg) => (
              <article
                key={pkg.tier}
                className={styles.packageCard}
                style={{ "--package-accent": pkg.accent }}
              >
                <div className={styles.packageCardSurface}>
                  <div className={styles.packageCardPrice}>{pkg.price}</div>
                  <div className={styles.packageCardHeading}>
                    <div className={styles.packageCardTier}>{pkg.tier}</div>
                    <div className={styles.packageCardTitle}>{pkg.title}</div>
                  </div>
                  <ul className={styles.packageCardList}>
                    {pkg.perks.map((perk) => (
                      <li key={perk}>{perk}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <figure className={styles.lateFeeSticker}>
            <img src={STAR_STICKER} alt="" aria-hidden="true" />
            <figcaption>
              <span>P400</span>
              <small>late fee!</small>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
