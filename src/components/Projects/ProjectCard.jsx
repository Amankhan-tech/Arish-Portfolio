import React from "react";
import { getImageUrl } from "../../utils";
import Styles from "./ProjectCard.module.css";

const ProjectCard = ({project : {title, imageSrc, description, skills, demo, source}}) => {
  return (
    <div className={Styles.container}>
      <img className={Styles.image} src={getImageUrl(imageSrc)} alt={title} />
      <h3 className={Styles.title}>{title}</h3>
      <p className={Styles.description}>{description}</p>
      <ul className={Styles.skills}>
        {skills.map((skill, id) => {
          return <li key={id} className={Styles.skill}>{skill}</li>;
        })}
      </ul>
      <div className={Styles.links}>
        <a href={demo} className={Styles.link}>Demo</a>
        <a href={source} className={Styles.link}>Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
