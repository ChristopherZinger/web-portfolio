import React from 'react';
import styles from './styles/ProjectDisplay.module.css';
import { ProjectType } from '../../../data/data-projects';

type Props = {
    project: ProjectType
}

export const ProjectDisplay = (props: Props) => {
    const orientationStyle = props.project.display === "portrait"
        ? styles.ipadPortrait
        : styles.ipadLandscape;

    return (
        <div className={styles.projPreview}>
            <div className={styles.ipad + " " + orientationStyle}>
                <Img imgSrc={props.project.gifSrc} />
            </div>
        </div>
    )
}

const Img = (props: { imgSrc: string }) => {
    if (props.imgSrc) {
        return (
            <>
                <img id="gif" className={styles.gif} src="/img/img_missing_.jpg" alt="img" />
                <div className={styles.imgMissing}></div>
            </>
        )
    } else {
        return <img id="gif" className={styles.gif}
            src={props.imgSrc} alt="gif" />
    }
}