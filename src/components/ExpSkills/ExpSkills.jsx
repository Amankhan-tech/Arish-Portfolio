import React from "react";
import styles from "./ExpSkills.module.css";
import skills from "../../data/skills.json";
import imageMap from "../../data/imageMap";  // Assuming imageMap is a JSON file that maps skill titles to image paths

const ExpSkills = () => {
  return (
    <section id="expSkills" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <div className={styles.skill} key={id}>
            <div className={styles.skillImageContainer}>
              <img src={imageMap[skill.title]} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpSkills;
