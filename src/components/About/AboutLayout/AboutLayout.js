import React from 'react';
import styles from './styles/AboutLayout.module.css';
import ContactFooter from '../../Contact/ContactFooter';
import { Route, Switch } from 'react-router-dom';
import AboutItem from '../AboutItems/AboutItem';
import SkillsItem from '../AboutItems/SkillsItem';
import EducationItem from '../AboutItems/EducationItem';
import HobbyItem from '../AboutItems/HobbyItem';
import ExperienceItem from '../AboutItems/ExperienceItem';
// import subMenuStyles from './styles/AboutSubmenu.module.css';
import AboutMenu from '../AboutMenu/AboutMenu';


function About() {

    function updateActiveTabSelector(e) {
        let root = document.documentElement;
        Array.from(e.currentTarget.children).forEach((item, i) => {
            if (item.innerHTML === e.target.innerHTML) {
                // hr.style.marginLeft = `${i * 20}%`;
                root.style.setProperty(
                    '--navSelectorLeftOffset',
                    `calc((((100% - (var(--gutterSize) * 4))/5 ) + (var(--gutterSize))) * ${i} )`
                )
            }
        })
    }

    return (
        <div className={styles.about}>
            <div className={styles.headlineContainer}>
                <div className={styles.headline}>
                    <div className={styles.full}><h1 className={styles.left} >WEB-DEV</h1></div>
                    <div className={styles.full}><h1 className={styles.right}>PORTFOLIO</h1></div>
                    {/* <div className={styles.full}><h1 className={styles.left} >CHRIS</h1></div> */}
                </div>
                <div className={styles.sHeadline} >
                    <h1>Hello.</h1>
                </div>
            </div>

            <div className={styles.infoContainer}>

                <div className={styles.aboutMenu}>
                    <div className={styles.singleItems}>
                        < AboutMenu click={updateActiveTabSelector} />

                        <Switch >
                            <Route path="/skills" component={SkillsItem} />
                            <Route path="/education" component={EducationItem} />
                            <Route path="/hobbys" component={HobbyItem} />
                            <Route path="/experience" component={ExperienceItem} />
                            <Route path="/" exact component={AboutItem} />
                        </Switch>
                    </div>


                    <div className={styles.allItems}>
                        <AboutItem />
                        <SkillsItem />
                        <EducationItem />
                        <ExperienceItem />
                        <HobbyItem />
                    </div>
                </div>

            </div>
            <ContactFooter />
        </div>


    )
}


export default About;