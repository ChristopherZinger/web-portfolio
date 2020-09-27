import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/AboutNavbar.module.css';



function AboutMenu(props) {
    return (
        <div className={styles.navContainer}>
            <nav onClick={props.click} className={styles.infoMenu}>
                <NavLink className={styles.linkAbout}
                    to="/" exact  >About me
            </NavLink>

                <NavLink className={styles.linkSkills}
                    to="/skills" >Skills
            </NavLink>

                <NavLink className={styles.linkExperience}
                    to="/experience" >Experience
            </NavLink>

                <NavLink className={styles.linkEducation}
                    to="/education" >Education
            </NavLink>

                <NavLink className={styles.linkHobby}
                    to="/hobbys" >Hobby
            </NavLink>
                <hr id="hr" className={styles.hr} />
            </nav>

        </div>
    )
}

export default AboutMenu;