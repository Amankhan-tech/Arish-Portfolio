import React from "react";
import Styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className={Styles.container}>
      <h2 className={Styles.title}>Projects</h2>
      <div className={Styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project = {project}/>;
        })}
      </div>
    </section>
  );
};

export default Projects;
