import React from 'react';
import styles from './styles/ProjectDescription.module.css';
import svgs from '../../../../SVG/svg';
const SVGlib = svgs();


function ProjectDescription(props) {
    return (
        <div className={styles.description}>
            <p>
                {props.project.description}
            </p>

            <div className={styles.visitLink}>

                {
                    props.project.url ?
                        <div >
                            <a href={props.project.url} rel="noreferrer">
                                {SVGlib.view}
                            </a>

                        </div>
                        :
                        null
                }

                <div>
                    <a href={props.project.urlGit} rel="noreferrer">
                        {SVGlib.git}
                    </a>
                </div>


            </div>

        </div>
    )
}

export default ProjectDescription;