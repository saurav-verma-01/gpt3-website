import React from "react";
import styles from "./header.module.css";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
  return (
    <div className={`section__padding ${styles.header}`}>
      <div className={styles.header__content}>
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className={styles.header__form}>
          <input type="email" placeholder="Your Email Address" />
          <button type="submit">Get Started</button>
        </div>
        <div className={styles.header__reviews}>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={styles.header__illustrations}>
        <img src={ai} alt="aiillustration" />
      </div>
    </div>
  );
};

export default Header;
