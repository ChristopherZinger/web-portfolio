import React, { Fragment } from 'react';
import styles from './styles/ProjectDisplay.module.css';


function ProjectPreview(props) {
    return (
        <div className={styles.projPreview}>
            <div className={styles.ipad + " " +
                (props.project.display === "portrait" ? styles.ipadPortrait : styles.ipadLandscape)}>
                {
                    props.project.gifSrc ?

                        <img className={styles.gif} src={props.project.gifSrc} alt="gif" />
                        :
                        <Fragment>
                            <img className={styles.gif} src="/img/img_missing_.jpg" alt="img" />
                            <div className={styles.imgMissing}></div>
                        </Fragment>

                }

            </div>
        </div>
    )
}

export default ProjectPreview;