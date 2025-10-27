import styles from "../Primer.module.css";
import texture from "../../../assets/textures/texture.png";
import { REGISTRATION_STEPS } from "../primerData";
import RegistrationInfoCard from "./RegistrationInfoCard";

export default function RegistrationStepsSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-[#5332a3] via-[#5332a3] to-[#261351]" />
        <img
          src={texture}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 mx-auto py-20 w-full">
        <div className={styles.registrationLayout}>
          <div className={styles.registrationHeader}>
            <h2 className={styles.h2} data-text="Registration">
              Registration
            </h2>
            <h3 className={styles.h3} data-text="Steps">
              Steps
            </h3>
          </div>

          <div className={styles.registrationContent}>
            {REGISTRATION_STEPS.map((step) => (
              <div key={step.step} className={styles.registrationColumn}>
                <div className={styles.registrationStepBadge}>
                  <h3 className={styles.h3} data-text={step.step}>
                    {step.step}
                  </h3>
                </div>
                <p className={styles.registrationStepTitle}>{step.title}</p>
                <div className={styles.registrationColumnCards}>
                  {step.cards.map((card, index) => (
                    <RegistrationInfoCard
                      key={`${step.step}-${index}`}
                      heading={card.heading}
                      body={card.body}
                      list={card.list}
                      variant={
                        card.variant ||
                        (step.columnVariant === "wide" ? "wide" : "standard")
                      }
                      isRotated={false}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
