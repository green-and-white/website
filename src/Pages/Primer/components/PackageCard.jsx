import { useEffect, useRef, useState } from "react";
import styles from "../Primer.module.css";

function useTypewriter(text, enabled, delay = 0, speed = 20) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!enabled) {
      setTyped("");
      return;
    }

    if (!text) {
      setTyped("");
      return;
    }

    setTyped("");

    let frameId;
    let timeoutId;
    let index = 0;

    const step = () => {
      index += 1;
      setTyped(text.slice(0, index));
      if (index < text.length) {
        timeoutId = window.setTimeout(() => {
          frameId = window.requestAnimationFrame(step);
        }, speed);
      }
    };

    timeoutId = window.setTimeout(() => {
      frameId = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [text, enabled, delay, speed]);

  return typed;
}

function TypedText({ text, enabled, delay = 0, speed = 20, className = "", showCaret = false }) {
  const typed = useTypewriter(text, enabled, delay, speed);
  const isComplete = typed.length === text.length;

  return (
    <span className={`${styles.packageTypeSlot} ${className}`}>
      <span className={styles.packageTypeGhost} aria-hidden="true">
        {text}
      </span>
      <span className={styles.packageTypeLive}>
        {typed}
        {showCaret && !isComplete ? <span className={styles.packageTypeCaret} aria-hidden="true">|</span> : null}
      </span>
    </span>
  );
}

export default function PackageCard({ tier, title, price, accent, perks }) {
  const cardRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const cardNode = cardRef.current;
    if (!cardNode || shouldAnimate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(cardNode);

    return () => observer.disconnect();
  }, [shouldAnimate]);

  return (
    <article
      ref={cardRef}
      className={`min-h-fit sm:min-h-[350px] md:min-h-[390px] h-full ${styles.packageCard}`}
      style={{ "--package-accent": accent }}
    >
      <div className={styles.packageCardSurface}>
        <div className={styles.packageCardPrice}>
          <TypedText text={price} enabled={shouldAnimate} delay={100} speed={16} showCaret />
        </div>
        <div className={styles.packageCardHeading}>
          <div className={styles.packageCardTier}>
            <TypedText text={tier} enabled={shouldAnimate} delay={220} speed={28} showCaret />
          </div>
          <div className={styles.packageCardTitle}>
            <TypedText text={title} enabled={shouldAnimate} delay={360} speed={18} showCaret />
          </div>
        </div>
        <ul className={styles.packageCardList}>
          <li>
            <TypedText text="Basic inclusions" enabled={shouldAnimate} delay={520} speed={14} />
          </li>
          {perks.map((perk, index) => (
            <li key={perk}>
              <TypedText text={perk} enabled={shouldAnimate} delay={620 + index * 180} speed={12} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
