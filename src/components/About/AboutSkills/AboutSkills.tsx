import React from "react";
import styles from "./styles/AboutSkills.module.css";
import { skillsData } from "../../../data/data-skills";

export const AboutSkills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.title}>
        <h3>Skills</h3>
        <hr />
      </div>
      {skillsData.map((skill, i) => {
        return (
          <div key={i}>
            <ul>
              <li>{skill.title}</li>
              <hr className={styles.hr} />
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
