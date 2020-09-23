import React from 'react';
import styles from './styles/SkillsItem.module.css';


function SkillsItem(props) {
    const skillsData = [
        {
            title: "Frontend",
            items: ["JS, HTML, CSS", "React", "JQuery",]
        },
        {
            title: "Backend",
            items: ["Node.js", "Express", "Python", "Django"]
        },
        {
            title: "Databases",
            items: ["MongoDB, SQLite"]
        },
        {
            title: "Tools",
            items: ["Git & Github", "VS Code"]
        },
        {
            title: "Graphics",
            items: ["Photoshop", "Illustrator", "InDesign", "Figma"]
        }
    ]


    return (
        <div className={styles.skillsContainer}>
            <div className={styles.title}>
                <h3>Skills</h3>
                <hr />
            </div>
            {
                skillsData.map((skill, i) => {
                    return (
                        <div key={i} >
                            <ul>
                                <li>{skill.title}</li>
                                <hr className={styles.hr} />
                                {skill.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>

                    )
                })
            }

        </div >
    )
}

export default SkillsItem;