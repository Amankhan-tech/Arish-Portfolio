import React from "react";
import Styles from "./ProjectCard.module.css";
import projectImageMap from "../../data/projectImageMap";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  return (
    <div className={Styles.container}>
      <img
        className={Styles.image}
        src={projectImageMap[imageSrc]}
        alt={title}
      />
      <h3 className={Styles.title}>{title}</h3>
      <p className={Styles.description}>{description}</p>

      <div
        className={`${Styles.skills} ${
          skills.length >= 3 ? Styles.scroll : ""
        }`}
      >
        <ul className={Styles.skillsWrapper}>
          {(skills.length >= 3 ? [...skills, ...skills] : skills).map(
            (skill, id) => (
              <li key={id} className={Styles.skill}>
                {skill}
              </li>
            )
          )}
        </ul>
      </div>

      <div className={Styles.links}>
        <a
          href={source}
          className={Styles.link}
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
