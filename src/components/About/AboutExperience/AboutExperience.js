import React from 'react';
import styles from './styles/AboutExperience.module.css';


function ExperienceItem(props) {

    const experienceData = [
        {
            from: `Oct '18`,
            to: `Aug '20`,
            company: `Proof of the sum`,
            position: `Architect / BIM modelleur`,
        },
        {
            from: `Jul '18`,
            to: `Sep '18`,
            company: `Netflix`,
            position: `Customer Service`,
        },
        {
            from: `Oct '17`,
            to: `Jun '18`,
            company: `GG-Loop`,
            position: `Architect / Designer`,
        },
        {
            from: `Oct '15`,
            to: `Mar '16`,
            company: `Peter Pichler Architecture`,
            position: `Architect / Designer`,
        },
        {
            from: `Jan '15`,
            to: `Aug '15`,
            company: `ATI Architekci`,
            position: `Junior Architect`,
        },
    ]



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

export default ExperienceItem;