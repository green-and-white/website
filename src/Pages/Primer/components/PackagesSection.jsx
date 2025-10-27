import styles from "../Primer.module.css";
import texture from "../../../assets/textures/texture.png";
import {
  BASIC_INCLUSIONS,
  PACKAGE_CARDS,
  STAR_STICKER,
  PAYMENT_DETAILS,
  PAYMENT_SCHEMES,
} from "../primerData";
import { Accordion, AccordionItem } from "./Accordion";
import PackageCard from "./PackageCard";

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
        <div className={`flex flex-col items-center justify-center`}>
          <h2 className={styles.h2} data-text="Yearbook">
            Yearbook
          </h2>
          <h3 className={styles.h3} data-text="Packages & Payment">
            Packages & Payment
          </h3>
        </div>

        <div className={styles.primerPackagesLayout}>
          <div className={styles.primerPackagesCards}>
            {PACKAGE_CARDS.map((pkg) => (
              <PackageCard
                key={pkg.tier}
                tier={pkg.tier}
                title={pkg.title}
                price={pkg.price}
                accent={pkg.accent}
                perks={pkg.perks}
              />
            ))}
          </div>

          <div className = "w-full flex justify-center">
            <div className={styles.primerPackagesAside}>
                        <Accordion>
                          <AccordionItem title="Basic Inclusions">
                            <p className={styles.accordionSubtitle}>
                              (All packages come with these services)
                            </p>
                            <ul className={styles.accordionList}>
                              {BASIC_INCLUSIONS.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </AccordionItem>

                          <AccordionItem title="Payment Details">
                            <div className={styles.paymentDetails}>
                              {PAYMENT_DETAILS.map((detail, index) => (
                                <div key={index} className={styles.paymentDetailItem}>
                                  <strong className={styles.paymentDetailTitle}>
                                    {detail.title}
                                  </strong>
                                  {detail.description && (
                                    <p className={styles.paymentDetailDescription}>
                                      {detail.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </AccordionItem>

                          <AccordionItem title="Payment Schemes">
                            <div className={styles.paymentSchemes}>
                              <p className={styles.paymentSchemesIntro}>
                                {PAYMENT_SCHEMES.intro}
                              </p>
                              
                              <div className={styles.paymentSchemeItem}>
                                <strong className={styles.paymentSchemeMethod}>
                                  {PAYMENT_SCHEMES.partial.title}
                                </strong>
                                <p className={styles.paymentSchemeDescription}>
                                  {PAYMENT_SCHEMES.partial.details}
                                </p>
                                <p className={styles.paymentSchemeInstructions}>
                                  {PAYMENT_SCHEMES.partial.instructions}
                                </p>
                              </div>

                              <p className={styles.paymentSchemeNote}>
                                <strong>Note:</strong> {PAYMENT_SCHEMES.note}
                                {PAYMENT_SCHEMES.bullet}
                              </p>
                            </div>
                          </AccordionItem>
                        </Accordion>
                      </div>
          </div>

          <figure className={`hidden`}>
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
