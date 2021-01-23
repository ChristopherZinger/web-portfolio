import React, { useState } from "react";
import styles from "./styles/ProjectLayout.module.css";
import ProjectList from "../ProjectsList/ProjectList";
import { ProjectDisplay } from "../ProjectDisplay/ProjectDisplay";
import { ProjectDescription } from "../ProjectDescription/ProjectDescription";
import svgs from "../../../SVG/svg";
import { ProjectType } from "../../../data/data-projects";

const SVGlib = svgs();

const ProjectTitle = (props: { title: string }) =>
  <div className={styles.title}>
    <h2>{props.title}</h2>
  </div>

const ProjectInfo = (props: { subtitle: string }) =>
  <div className={styles.projInfo}>
    <span className={styles.dataTitle}>{props.subtitle}</span>
    <span className={styles.dataDate}>June 2019</span>
  </div>

const ProjectTechnologies = (props: { technologies: string[] }) => {
  const techItems = props.technologies.map((tech, i) => (
    <div key={i} className={styles.tech}>
      {tech}
    </div>
  ));

  return <div className={styles.techContainer}>{techItems}</div>;
};

const SwitchProject = (props: {
  handlePrevious: () => void,
  handleNext: () => void
}) =>
  <div className={styles.prevnext}>
    <div>
      <span onClick={props.handlePrevious}>{SVGlib.arrows.left}</span>
      <span onClick={props.handleNext}>{SVGlib.arrows.right}</span>
    </div>
  </div>

type ProjectLayoutProps = {
  projects: ProjectType[]
}

export const ProjectLayout = (props: ProjectLayoutProps) => {
  const [currentNr, setCurrentNr] = useState(0);
  const project = props.projects[currentNr];

  const handleNext = () => {
    const next = currentNr + 1;
    if (props.projects.length > next) {
      setCurrentNr(next)
    } else {
      setCurrentNr(0)
    }
  }

  const handlePrevious = () => {
    const next = currentNr - 1;
    if (!(next < 0)) {
      setCurrentNr(next)
    } else {
      setCurrentNr(props.projects.length - 1)
    }
  }

  const displayProject = (projtitle: string) => {
    const index = props.projects.findIndex((proj) => {
      return proj.title === projtitle;
    });
    setCurrentNr(index)
  }

  return (
    <div className={styles.mainContainer}>
      <ProjectTitle title={project.title} />

      <ProjectInfo subtitle={project.subtitle} />

      <ProjectDescription project={project} />

      <ProjectDisplay project={project} />

      <ProjectList
        projects={props.projects}
        currentNr={currentNr}
        changeProject={displayProject}
      />

      <ProjectTechnologies technologies={project.technologies} />

      <SwitchProject
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
}
