import React from 'react';
import styles from './styles/AboutExperience.module.css';
import { experienceData } from "../../../data/data-experience";

export const AboutExperience = () => {
    return (
        <div className={styles.experienceContainer}>
            <div className={styles.title}>
                <h3 >Experience</h3>
                <hr />
            </div>
            { experienceData.map((job, i) => {
                return (
                    <div key={i}>
                        <h4 className={styles.company}>{job.company}</h4>
                        <div className={styles.experienceColumn} key={i}>
                            <ul>
                                <li>
                                    {job.to}
                                </li>
                                <li>
                                    {job.from}
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    {job.position}
                                </li>
                            </ul>
                        </div>
                    </div>

                )
            })}

        </div>
    )
}