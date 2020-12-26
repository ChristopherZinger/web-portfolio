import React from "react";
import styles from "./styles/AboutSkills.module.css";

function SkillsItem(props) {
  const skillsData = [
    {
      title: "Frontend",
      items: ["JS, HTML, CSS", "React", "JQuery"],
    },
    {
      title: "Backend",
      items: ["GraphQl", "Node.js", "Express"],
    },
    {
      title: "Databases",
      items: ["Postgres, SQL"],
    },
    {
      title: "Tools",
      items: ["Git & Github", "VS Code"],
    },
    {
      title: "Graphics",
      items: ["Photoshop", "Illustrator", "InDesign", "Figma"],
    },
  ];

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

export default SkillsItem;
