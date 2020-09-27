import React, { Component } from 'react';
import styles from './styles/Projects.module.css';
import ProjectList from './parts/projectsList/ProjectList';
import ProjectPreview from './parts/projectDisplay/ProjectDisplay';
import ProjectDescription from './parts/description/ProjectDescription';
import svgs from '../../SVG/svg';

const SVGlib = svgs();

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentNr: 0,
        }
    }


    componentDidMount() {
        // cp currentProject
        this.setState({ cp: this.props.projects[0] })
    }

    handleNext() {
        const next = this.state.currentNr + 1;
        if (this.props.projects.length > next) {
            this.setState({ currentNr: next })
        } else {
            this.setState({ currentNr: 0 })
        }
    }

    handlePrevious() {
        const next = this.state.currentNr - 1;
        if (!(next < 0)) {
            this.setState({ currentNr: next })
        } else {
            this.setState({ currentNr: this.props.projects.length - 1 })
        }
    }

    displayProject(projtitle) {
        const index = this.props.projects.findIndex(i => { return i.title === projtitle });
        this.setState({ currentNr: index })
    }

    render() {
        const project = this.props.projects[this.state.currentNr]

        return (
            <div className={styles.mainContainer} >
                <div className={styles.title}>
                    <h2>{project.title}</h2>
                </div>

                <div className={styles.projInfo} >
                    <span className={styles.dataTitle}>{project.subtitle}</span >
                    <span className={styles.dataDate}>June 2019</span>
                </div>

                <ProjectDescription project={project} />
                <ProjectPreview project={project} />
                <ProjectList
                    projects={this.props.projects}
                    currentNr={this.state.currentNr}
                    changeProject={this.displayProject.bind(this)}
                />

                <div className={styles.techContainer}>
                    {project.technologies.map((tech, i) => <div key={i} className={styles.tech}>{tech}</div>)}
                </div>

                <div className={styles.prevnext}>
                    <div>
                        <span onClick={this.handlePrevious.bind(this)} >{SVGlib.arrows.left}</span>
                        <span onClick={this.handleNext.bind(this)} >{SVGlib.arrows.right}</span>
                    </div>
                </div>
            </div>
        )
    }
}



export default Projects;