import React, { Component } from "react";
import styles from "./styles/ProjectLayout.module.css";
import ProjectList from "../ProjectsList/ProjectList";
import ProjectPreview from "../ProjectDisplay/ProjectDisplay";
import { ProjectDescription } from "../ProjectDescription/ProjectDescription";
import svgs from "../../../SVG/svg";

const SVGlib = svgs();

const ProjectTitle = ({ title }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
    </div>
  );
};

const ProjectInfo = ({ subtitle }) => {
  return (
    <div className={styles.projInfo}>
      <span className={styles.dataTitle}>{subtitle}</span>
      <span className={styles.dataDate}>June 2019</span>
    </div>
  );
};

const ProjectTechnologies = ({ technologies }) => {
  const techItems = technologies.map((tech, i) => (
    <div key={i} className={styles.tech}>
      {tech}
    </div>
  ));

  return <div className={styles.techContainer}>{techItems}</div>;
};

class SwitchProject extends Component {
  constructor(props) {
    super(props);
    this.handleNext = this.props.handleNext.bind(this);
    this.handlePrevious = this.props.handlePrevious.bind(this);
  }
  render() {
    return (
      <div className={styles.prevnext}>
        <div>
          <span onClick={this.handlePrevious}>{SVGlib.arrows.left}</span>
          <span onClick={this.handleNext}>{SVGlib.arrows.right}</span>
        </div>
      </div>
    );
  }
}

class ProjectLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNr: 0,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.displayProject = this.displayProject.bind(this);
  }

  handleNext() {
    const next = this.state.currentNr + 1;
    if (this.props.projects.length > next) {
      this.setState({ currentNr: next });
    } else {
      this.setState({ currentNr: 0 });
    }
  }

  handlePrevious() {
    const next = this.state.currentNr - 1;
    if (!(next < 0)) {
      this.setState({ currentNr: next });
    } else {
      this.setState({ currentNr: this.props.projects.length - 1 });
    }
  }

  displayProject(projtitle) {
    const index = this.props.projects.findIndex((proj) => {
      return proj.title === projtitle;
    });
    this.setState({ currentNr: index });
  }

  render() {
    const project = this.props.projects[this.state.currentNr];
    const allProjects = this.props.projects;
    const currentProjNr = this.state.currentNr;

    return (
      <div className={styles.mainContainer}>
        <ProjectTitle title={project.title} />

        <ProjectInfo subtitle={project.subtitle} />

        <ProjectDescription project={project} />

        <ProjectPreview project={project} />

        <ProjectList
          projects={allProjects}
          currentNr={currentProjNr}
          changeProject={this.displayProject}
        />

        <ProjectTechnologies technologies={project.technologies} />

        <SwitchProject
          handleNext={this.handleNext}
          handlePrevious={this.handlePrevious}
        />
      </div>
    );
  }
}

export default ProjectLayout;
