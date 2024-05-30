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
          heading={"Unbeatable TicTacToe"}
          description={`Built using HTML, CSS and JavaScript, for unbeatable purpose I have used minimax Algo with α-β Pruning`}
          git={"https://github.com/vermagaur851/tic-tac-toe-game"}
        />
      </div>
    </section>
  );
}

export default Projects;
