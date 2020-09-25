import React from 'react';
import styles from './styles/ProjectDisplay.module.css';
import LazyLoad from 'react-lazyload';

function ProjectPreview(props) {
    return (
        <div className={styles.projPreview}>
            <div className={styles.ipad + " " +
                (props.project.display === "portrait" ? styles.ipadPortrait : styles.ipadLandscape)}>
                {
                    props.project.gifSrc ?
                        <LazyLoad height={385} width="100%" className={styles.lazyLoad}>
                            <img className={styles.gif} src={props.project.gifSrc} alt="gif" />
                        </LazyLoad>

                        :
                        <LazyLoad height="100%">
                            <img className={styles.gif} src="/img/img_missing_.jpg" alt="img" />
                            <div className={styles.imgMissing}></div>
                        </LazyLoad>

                }

            </div>
        </div>
    )
}

export default ProjectPreview;