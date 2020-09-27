import React from 'react';
import styles from './styles/AboutEducation.module.css';


function EducationItem(props) {

    const educationData = [
        {
            date: "2015 - 2017",
            school: "Politecnico di Milano",
            title: "Master of Architecture",
            course: "Architecture",
        },
        {
            date: "2010 - 2014",
            school: "Warsaw University of Technology",
            title: "Bachelor of Science",
            course: "Architecture and Urbanism",
        }
    ]

    return (
        <div className={styles.educationContainer}>
            <div className={styles.title}>
                <h3>Education</h3>
                <hr />
            </div>
            {
                educationData.map((edu, i) => {
                    return (
                        <div key={i}>
                            <h4>{edu.school}</h4>
                            <hr />
                            <div className={styles.eduData}>
                                <div >
                                    {edu.date}
                                </div>
                                <div>
                                    <div>{edu.title}</div>
                                    <div>{edu.course}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EducationItem;