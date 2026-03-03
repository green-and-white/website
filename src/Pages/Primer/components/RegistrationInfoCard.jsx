import React from "react";
import styles from "../Primer.module.css";

function StandardRegistrationCard({ heading, body, list, isRotated }) {
  const cardWrapperClass = isRotated 
    ? `${styles.registrationCard} ${styles.registrationCardRotated}`
    : styles.registrationCard;

  return (
    <div className={cardWrapperClass}>
      <div className={styles.registrationCardInner}>
        {heading ? (
          <p className={styles.registrationCardHeading}>{heading}</p>
        ) : null}

        {list ? (
          <ol className={styles.registrationCardList}>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        ) : (
          body?.map((line, lineIndex) => (
            <p key={lineIndex} className={styles.registrationCardBody}>
              {line.map((segment, segmentIndex) =>
                segment.type === "emphasis" ? (
                  <span
                    key={segmentIndex}
                    className={styles.registrationCardHighlight}
                  >
                    {segment.content}
                  </span>
                ) : (
                  <React.Fragment key={segmentIndex}>
                    {segment.content}

                    {segment.linkText && segment.link ? (
                        <>
                          <div className="m-2"></div>
                          <a href={segment.link} className="text-retro-yellow underline"
                            target="_blank"
                            rel="noopener noreferrer">
                            {segment.linkText}
                          </a>
                        </>
                        
                      ) : segment.linkText ? (
                        <span>{segment.linkText}</span>
                      ) : null}
                  </React.Fragment>
                )
              )}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default function RegistrationInfoCard({
  heading,
  body,
  list,
  variant = "standard",
  isRotated = false,
}) {
  if (variant === "wide") {
    const cardClasses = [
      styles.registrationCard,
      styles.registrationCardWide,
    ].join(" ");

    return (
      <div className={cardClasses}>
        <div className={styles.registrationCardInner}>
          {heading ? (
            <p className={styles.registrationCardHeading}>{heading}</p>
          ) : null}

          {list ? (
            <ol className={styles.registrationCardList}>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          ) : (
            body?.map((line, lineIndex) => (
              <p key={lineIndex} className={styles.registrationCardBody}>
                {line.map((segment, segmentIndex) =>
                  segment.type === "emphasis" ? (
                    <span
                      key={segmentIndex}
                      className={styles.registrationCardHighlight}
                    >
                      {segment.content}
                    </span>
                  ) : (
                    <React.Fragment key={segmentIndex}>
                      {segment.content}
                      {segment.linkText && segment.link ? (
                        <a href={segment.link} target="_blank" rel="noopener noreferrer">
                          {segment.linkText}
                        </a>
                      ) : segment.linkText ? (
                        <span>{segment.linkText}</span>
                      ) : null}
                    </React.Fragment>
                  )
                )}
              </p>
            ))
          )}
        </div>
      </div>
    );
  }

  return (
    <StandardRegistrationCard
      heading={heading}
      body={body}
      list={list}
      isRotated={isRotated}
    />
  );
}
