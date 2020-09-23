import React from 'react';
import styles from './styles/ProjectList.module.css';

function ProjectList(props) {
    return (
        <div className={styles.projList} >
            <ul>
                <li>Projects:</li>
                {
                    props.projects.map((proj, i) => {
                        return (
                            <li key={i} onClick={() => props.changeProject(proj.title)}>
                                <div>{proj.title}</div>
                                {i === props.currentNr ? <div className={styles.pointer}></div> : null}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default ProjectList;