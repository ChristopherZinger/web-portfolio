import React, { Component } from 'react';
import styles from './styles/Projects.module.css';
import ProjectList from './parts/projectsList/ProjectList';
import ProjectPreview from './parts/projectDisplay/ProjectDisplay';
import ProjectDescription from './parts/description/ProjectDescription';
import svgs from '../../SVG/svg';

const SVGlib = svgs();



class Projects extends Component {
    state = {
        "projects": [
            {
                "id": 1,
                "title": "Typing for fun",
                "subtitle": "Simple webside for you to practice typing.",
                "description": "This app allows users to practice typing without looking at the keyboard. Simply click 'start' and try to type the letter that is displayed in the circle, you have only a several second to do it! Every time you level-up new letter is unlocked and it becomes more difficult to pass without any mistake! \n This app takes advantage of javascript concepts and features like higher order functions and IFFE.",
                "gifSrc": "projects/project_typingforfun.gif",
                "technologies": ["Javascript", "HTML", "CSS"],
                "display": "landscape",
                "urlGit": "https://github.com/ChristopherZinger/Learn-Typing-Tool",
                "url": "https://typingforfun.netlify.app/"
            },
            {
                "id": 2,
                "title": "To-do app",
                "subtitle": "Todo app with authentication.",
                "description": "This is classic to-do app. Beside core functionality - adding lists and tasks this app allows users to register and login. This single page application's backed API is built with NODE and express. J's. Authorization and authentication use bcrypt and JWT. Authorization uses two tokens - refresh token passed as HTTP only cookie and access token stored in memory and passed as a header. Front-end build with REACT and bootstrap.",
                "gifSrc": "projects/todo-app.gif",
                "technologies": ["Javascript", "HTML", "CSS", "React", "Node.js"],
                "display": "landscape",
                "urlGit": "https://github.com/ChristopherZinger/to-do-app",
                "url": ""
            },
            {
                "id": 3,
                "title": "Quiz creator",
                "subtitle": "Allows users to create and share quizzes.",
                "description": "This app allows users to create quizzes. Each quiz can be published and accessed by other users. In order to find quiz user types a keyword in the searching engine, quizzes that contain queried keyword in the name are pulled out from the database. Backend is built with NODE and Express , while JQuery is used on the frontend to perform asynchronous calls to backend API.",
                "gifSrc": "projects/quiz_creator_node.gif",
                "technologies": ["Javascript", "HTML", "CSS", "Node.js"],
                "display": "landscape",
                "urlGit": "https://github.com/ChristopherZinger/NodeJS-Quiz-Game-Creator",
                "url": ""
            },
            {
                "id": 4,
                "title": "Recipe app",
                "subtitle": "React based app that pulles data from recipe API.",
                "description": "Recipe app is a single page application made with React.js that takes advantage of Tasty database and rapidapi.com to provide you with delicious ideas for your meal.",
                "gifSrc": "",
                "technologies": ["React", "Javascript", "HTML", "CSS"],
                "display": "",
                "urlGit": "https://github.com/ChristopherZinger/Receipe-App",
                "url": ""
            },
            {
                "id": 5,
                "title": "Portfolio website",
                "subtitle": "My previous portfolio webpage.",
                "description": "This is my previous portfolio website. It is a static website created exclusively with CSS, JS and HTML, no framework needed. I designed and coded custom motions and animations in order to create unique user experience. I used this project to practice multiple js concepts and features like promises, DOM manipulation, iiffe, and more. ",
                "gifSrc": "projects/project_PortfolioPage.gif",
                "technologies": ["Javascript", "HTML", "CSS"],
                "display": "portrait",
                "urlGit": "",
                "url": ""
            },
            {
                "id": 6,
                "title": "Spaceship Game",
                "subtitle": "Classic aracde spaceinvaders like game.",
                "description": "It is a variation of the iconic game Space Invaders. It takes advantage of OOP and concepts like lambda functions, list comprehension and data structures to create awesome game experience and animations!",
                "gifSrc": "projects/project_spaceshipGame.gif",
                "technologies": ["Python", "Pygame"],
                "display": "portrait",
                "urlGit": "https://github.com/ChristopherZinger/SpaceShipGame",
                "url": ""
            },
            {
                "id": 7,
                "title": "Performance Tool",
                "subtitle": "Python based app that monitores users activity.",
                "description": "This WIP is a tool  that runs in the background and monitors my keystrokes, mouse events and active software. Data is saved in SQLite database.",
                "gifSrc": "",
                "technologies": ["Python", "Pandas", "NumPy"],
                "display": "",
                "urlGit": "https://github.com/ChristopherZinger/performance_monitor",
                "url": ""
            },
            {
                "id": 8,
                "title": "Dijkstra Algorithm",
                "subtitle": "Viusualizer of Dijkstra shortest path algorithm.",
                "description": "It is a app coded entirely with Python and PyGame. It visualize how Dijkstra shortest path algorithm works. It allows user to choose start and end point on 2 dimension array and draw walls that path has to pass around",
                "gifSrc": "projects/project_Dijkstra_krotszy.gif",
                "technologies": ["Python", "PyGame"],
                "display": "portrait",
                "urlGit": "https://github.com/ChristopherZinger/Dijkstra-Shortest-Path-Algorithm",
                "url": ""
            },
            {
                "id": 9,
                "title": "Architecture Quiz",
                "subtitle": "Quiz game with questions about history of architecture.",
                "description": "Quiz with questions about architecture. This webapp is built with django. asynchronous calls are executed with JQuery",
                "gifSrc": "",
                "technologies": ["Python", "Javascript", "HTML", "CSS"],
                "display": "",
                "urlGit": "https://github.com/ChristopherZinger/Quiz",
                "url": ""
            },
        ],
        currentNr: 0,
    }
    componentDidMount() {
        // cp currentProject
        this.setState({ cp: this.state.projects[0] })
    }


    async handleNext() {
        const next = this.state.currentNr + 1;
        if (this.state.projects.length > next) {
            await this.setState({ currentNr: next })
        } else {
            await this.setState({ currentNr: 0 })
        }
    }

    handlePrevious() {
        const next = this.state.currentNr - 1;
        if (!(next < 0)) {
            this.setState({ currentNr: next })
        } else {
            this.setState({ currentNr: this.state.projects.length - 1 })
        }
    }

    displayProject(projtitle) {
        const index = this.state.projects.findIndex(i => { return i.title === projtitle });
        this.setState({ currentNr: index })
    }




    render() {
        const project = this.state.projects[this.state.currentNr]

        const arrows = {
            right: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="44" height="44" transform="matrix(-1 0 0 1 44 0)" fill="none" />
                    <rect width="5" height="5" transform="matrix(-1 0 0 1 17 34)" fill="var(--font-color)" />
                    <rect width="5" height="5" transform="matrix(-1 0 0 1 22 29)" fill="var(--font-color)" />
                    <rect width="5" height="5" transform="matrix(-1 0 0 1 27 24)" fill="var(--font-color)" />
                    <rect width="5" height="5" transform="matrix(-1 0 0 1 32 19)" fill="var(--font-color)" />
                    <rect width="5" height="5" transform="matrix(-1 0 0 1 27 14)" fill="var(--font-color)" />
                    <rect width="5" height="5" transform="matrix(-1 0 0 1 22 9)" fill="var(--font-color)" />
                    <rect width="5" height="5" transform="matrix(-1 0 0 1 17 4)" fill="var(--font-color)" />
                </svg>
            ),

            left: (
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="44" height="44" transform="matrix(-1 0 0 1 44 0)" fill="none" />
                    <rect x="27" y="34" width="5" height="5" fill="var(--font-color)" />
                    <rect x="22" y="29" width="5" height="5" fill="var(--font-color)" />
                    <rect x="17" y="24" width="5" height="5" fill="var(--font-color)" />
                    <rect x="12" y="19" width="5" height="5" fill="var(--font-color)" />
                    <rect x="17" y="14" width="5" height="5" fill="var(--font-color)" />
                    <rect x="22" y="9" width="5" height="5" fill="var(--font-color)" />
                    <rect x="27" y="4" width="5" height="5" fill="var(--font-color)" />
                </svg>
            )
        }
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
                    projects={this.state.projects}
                    currentNr={this.state.currentNr}
                    changeProject={this.displayProject.bind(this)}
                />

                <div className={styles.techContainer}>
                    {project.technologies.map((tech, i) => <div key={i} className={styles.tech}>{tech}</div>)}
                </div>

                <div className={styles.prevnext}>
                    <div>
                        {/* <img onClick={this.handlePrevious.bind(this)} src="/pictograms/arrow_left_7.svg" alt="arrow left" /> */}
                        {SVGlib.arrows.left}
                        {SVGlib.arrows.right}
                        {/* <img onClick={this.handleNext.bind(this)} src="/pictograms/arrow_right_7.svg" alt="arrow right" /> */}
                    </div>
                </div>

            </div>
        )
    }

}



export default Projects;