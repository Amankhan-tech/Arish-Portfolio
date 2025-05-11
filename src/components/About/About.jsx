import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../assets/about/aboutImage.png";
import cursorImage from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";
import uiIcon from "../../assets/about/uiIcon.png";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={aboutImage} alt="about-Image" />
        {/* TODO: Fill in the drails of the about section here. */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorImage} alt="cursor-icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Problem Solver</h3>
              <p>
                I love turning raw data into useful insights. Whether it's optimizing hospital operations or analyzing e-commerce trends, I focus on clarity, efficiency, and real-world impact.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="server-icon" />
            <div className={styles.aboutItemText}>
              <h3>Analytical Mindset</h3>
              <p>
                I approach data with curiosity and precision — identifying patterns, asking the right questions, and using evidence to guide decisions. I enjoy breaking down complex problems into simple, actionable insights.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="ui-icon" />
            <div className={styles.aboutItemText}>
              <h3>Hands-On Learner</h3>
              <p>
                I learn best by doing — diving into real datasets, exploring patterns, and drawing insights that connect to practical outcomes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
