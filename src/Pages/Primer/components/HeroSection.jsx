import styles from "../Primer.module.css";
import texture from "../../../assets/textures/texture.png";

export default function HeroSection() {
  return (
    <section className={`${styles.primerHero} flex flex-col pt-8 pb-0`}>
      <div className={`${styles.heroInner} flex justify-between h-[90vh]`}>
        <h2 className={styles.h2} data-text="Registration">
          Registration
        </h2>
        <h3 className={styles.h3} data-text="Guidelines">
          Guidelines
        </h3>
      </div>

      <img
        src={texture}
        alt=""
        aria-hidden="true"
        className={styles.primerTexture}
      />
    </section>
  );
}
