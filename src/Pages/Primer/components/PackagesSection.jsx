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
    <section className={`${styles.primerPackages} py-30`}>
      <img
        src={texture}
        alt=""
        aria-hidden="true"
        className={styles.primerTexture}
      />

      <div className={`${styles.primerPackagesContent} gap-16 px-4 sm:px-6 md:px-8 lg:px-12`}>
        <div className={`flex flex-col items-center justify-center`}>
          <h2 className={styles.h2} data-text="Yearbook">
            Yearbook
          </h2>
          <h2 className={styles.h2} data-text="Yearbook">
             Packages & Payment
          </h2>
        </div>

        <div className={styles.primerPackagesLayout}>
          <div className="flex flex-col gap-20 lg:flex-row lg:gap-10 justify-center items-center w-full">
            <div className="relative w-fit">
              <div className={`${styles.basicInclusion}`}>
                <span>Basic Inclusions</span>
              </div>

              <div className={styles.accordionContentInner}>
                <p className={styles.accordionSubtitle}>
                  (All packages come with these services)
                </p>
                <ul className={styles.accordionList}>
                  {BASIC_INCLUSIONS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

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
          </div>

          <div className = "w-full flex flex-row justify-center">
            <div className={styles.primerPackagesAside}>
                        <Accordion>
                          <AccordionItem title="Payment Details">
                            <div className={styles.paymentDetails}>
                              {PAYMENT_DETAILS.map((detail, index) => (
                                <div key={index} className={styles.paymentDetailItem}>
                                  <strong className={styles.paymentDetailTitle}>
                                    {detail.title}
                                  </strong>
                                  {detail.description && (
                                    <p className={styles.paymentDetailDescription}>
                                      {detail.description}  <strong>{detail.emphasis}</strong>
                                    </p>
                                  )}
                                 
                                   {detail.descriptoin2 && (
                                    <p className={styles.paymentDetailDescription}>
                                      {detail.descriptoin2}
                                    </p>
                                  )}

                                </div>
                              ))}
                               <p className={styles.paymentSchemeNote}>
                                <strong>Advisory:</strong> {PAYMENT_SCHEMES.note}
                                {PAYMENT_SCHEMES.advisory}
                                <strong>{PAYMENT_SCHEMES.emphasis}</strong>
                                {PAYMENT_SCHEMES.advisory2}
                            </p>
                            </div>
                          </AccordionItem>

                          <AccordionItem title="Payment Schemes">
                            <div className={styles.paymentSchemes}>
                              <p className={styles.paymentSchemesIntro}>
                                {PAYMENT_SCHEMES.intro}
                              </p>
                              <div className={styles.paymentSchemeItem}>
                                <strong className={styles.paymentSchemeMethod}>
                                  {PAYMENT_SCHEMES.full.title}
                                </strong>
                                <p className={styles.paymentSchemeDescription}>
                                  {PAYMENT_SCHEMES.full.details}
                                </p>
                              </div>
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
