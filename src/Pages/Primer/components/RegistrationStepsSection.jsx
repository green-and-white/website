import styles from "../Primer.module.css";
import texture from "../../../assets/textures/texture.png";
import { REGISTRATION_STEPS } from "../primerData";

function renderSegments(line, lineIndex) {
  return (
    <p key={lineIndex} className={styles.registrationStepText}>
      {line.map((segment, segmentIndex) =>
        segment.type === "emphasis" ? (
          <span key={segmentIndex} className={styles.registrationCardHighlight}>
            {segment.content}
          </span>
        ) : (
          <span key={segmentIndex}>
            {segment.content}
            {segment.linkText && segment.link ? (
              <>
                <span>{" "}</span>
                <a
                  href={segment.link}
                  className={styles.registrationStepLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {segment.linkText}
                </a>
              </>
            ) : segment.linkText ? (
              <span>{segment.linkText}</span>
            ) : null}
          </span>
        )
      )}
    </p>
  );
}

export default function RegistrationStepsSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-[#5332a3] via-[#5332a3] to-[#261351]" />
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div> 

      <div className="relative z-10 mx-auto py-20 w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className={styles.registrationLayout}>
          <div className={styles.registrationHeader}>
            <h2 className={styles.h2} data-text="Registration">
              Registration Steps
            </h2>
          </div>

          <div className={styles.registrationContent}>
            {REGISTRATION_STEPS.map((step) => (
              <div key={step.step} className={styles.registrationColumn}>
                <div className={styles.registrationStepRow}>
                  <div className={styles.registrationStepBadge}>
                    <h3 className={styles.h3} data-text={step.step}>
                      {step.step}
                    </h3>
                  </div>
                  <div className={styles.registrationStepBody}>
                    <p className={styles.registrationStepTitle}>{step.title}</p>
                    {step.cards.map((card, index) => (
                      <div key={`${step.step}-${index}`} className={styles.registrationStepDetail}>
                        {card.heading ? (
                          <p className={styles.registrationCardHeading}>{card.heading}</p>
                        ) : null}
                        {card.body?.map((line, lineIndex) => renderSegments(line, lineIndex))}
                        {card.list ? (
                          <ol className={`${styles.registrationStepList}`}>
                            {card.list.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ol>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
