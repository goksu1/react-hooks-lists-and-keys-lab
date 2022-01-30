import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  

  const projectIntent=projects.map((project) => (

  <ProjectItem 
  key={project.id}
  name={project.name}
  about={project.about}
  technologies={project.technologies}
  />
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <span> {projectIntent} </span>
        </div>
    </div>
  );
}

export default ProjectList;
