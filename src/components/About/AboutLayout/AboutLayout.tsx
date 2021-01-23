import React from "react";
import styles from "./styles/AboutLayout.module.css";
import { ContactFooter } from "../../Contact/ContactFooter/ContactFooter";
import { Route, Switch } from "react-router-dom";
import { AboutHello } from "../AboutHello/AboutHello";
import AboutSkills from "../AboutSkills/AboutSkills";
import { AboutEducation } from "../AboutEducation/AboutEducation";
import { AboutHobby } from "../AboutHobby/AboutHobby";
import { AboutExperience } from "../AboutExperience/AboutExperience";
import { AboutNavbar } from "../AboutNavbar/AboutNavbar";

export const AboutLayout = () => {
  function updateActiveTabSelector(e: React.MouseEvent) {
    let root = document.documentElement;
    Array.from(e.currentTarget.children).forEach((item, i) => {
      const x = e.target as HTMLElement
      if (item.innerHTML === x.innerHTML) {
        root.style.setProperty(
          "--navSelectorLeftOffset",
          `calc((((100% - (var(--gutterSize) * 4))/5 ) + (var(--gutterSize))) * ${i} )`
        );
      }
    });
  }

  return (
    <div className={styles.about}>
      <div className={styles.headlineContainer}>
        <div className={styles.headline}>
          <div className={styles.full}>
            <h1 className={styles.left}>WEB-DEV</h1>
          </div>
          <div className={styles.full}>
            <h1 className={styles.right}>PORTFOLIO</h1>
          </div>
        </div>
        <div className={styles.sHeadline}>
          <h1>Hello.</h1>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.aboutMenu}>
          <div className={styles.singleItems}>
            <AboutNavbar click={updateActiveTabSelector} />

            <Switch>
              <Route path="/skills" component={AboutSkills} />
              <Route path="/education" component={AboutEducation} />
              <Route path="/hobbys" component={AboutHobby} />
              <Route path="/experience" component={AboutExperience} />
              <Route path="/" exact component={AboutHello} />
            </Switch>
          </div>

          <div className={styles.allItems}>
            <AboutHello />
            <AboutSkills />
            <AboutEducation />
            <AboutExperience />
            <AboutHobby />
          </div>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}
