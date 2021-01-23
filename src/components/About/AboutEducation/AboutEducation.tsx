import React from "react";
import styles from "./styles/AboutEducation.module.css";
import { educationData } from "../../../data/data-education"

export const AboutEducation = () => {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.title}>
        <h3>Education</h3>
        <hr />
      </div>
      {educationData.map((edu, i) => {
        return (
          <div key={i}>
            <h4>{edu.school}</h4>
            <hr />
            <div className={styles.eduData}>
              <div>{edu.date}</div>
              <div>
                <div>{edu.title}</div>
                <div>{edu.course}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
