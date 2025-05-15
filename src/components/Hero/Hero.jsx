import React from "react";
import heroImage from "../../assets/hero/heroImage.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arish</h1>
        <p className={styles.description}>
          I am a driven and analytical individual with proficiency in Python,
          SQL, and data visualization tools. I am eager to contribute to a
          data-focused team and learn from experienced professionals in the
          field.
        </p>
        {/* TODO: Change the email address to Arish Mail. */}
        <a href="mailto:arishwasim123@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={heroImage} alt="Hero image" className={styles.heroImage} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
