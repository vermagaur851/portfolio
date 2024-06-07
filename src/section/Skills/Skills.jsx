import React from "react";
import styles from "./Skill.module.css";
import checkMarkIcon from "../../assets/checklight.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} cnt={"HTML"} />
        <SkillList src={checkMarkIcon} cnt={"CSS"} />
        <SkillList src={checkMarkIcon} cnt={"JavaScript"} />
        <SkillList src={checkMarkIcon} cnt={"Tailwind"} />
        <SkillList src={checkMarkIcon} cnt={"TypeScript"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} cnt={"React"} />
        <SkillList src={checkMarkIcon} cnt={"Nodejs"} />
        <SkillList src={checkMarkIcon} cnt={"Expressjs"} />
        <SkillList src={checkMarkIcon} cnt={"MongoDB"} />
        <SkillList src={checkMarkIcon} cnt={"WebSocket"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} cnt={"Redux"} />
        <SkillList src={checkMarkIcon} cnt={"Socket.io"} />
        <SkillList src={checkMarkIcon} cnt={"NEXT"} />
        <SkillList src={checkMarkIcon} cnt={"Github"} />
        <SkillList src={checkMarkIcon} cnt={"Bootstrap"} />
      </div>
    </section>
  );
}

export default Skills;
