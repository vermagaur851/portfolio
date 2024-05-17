import styles from "./projects.module.css";
import Tictactoe from "../../assets/tictactoe.webp";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Tictactoe}
          lnk={"https://vermagaur851.github.io/tic-tac-toe-game/"}
          heading={"GAME"}
          description={"AI algo based tic tac toe"}
        />
      </div>
    </section>
  );
}

export default Projects;
