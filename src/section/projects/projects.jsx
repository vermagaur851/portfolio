import styles from "./projects.module.css";
import Tictactoe from "../../assets/tictactoe.webp";
import Music_Institute from '../../assets/music institute.png'
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
        <ProjectCard
          src={Music_Institute}
          lnk={"https://music-app-rose-zeta.vercel.app/"}
          heading={"Website for Music Institute"}
          description={"This website is created using Nextjs and Aceternity UI.This website is mostly a showcase of UI/UX skill in Nextjs"}
          git={"https://github.com/vermagaur851/music-app"}
        />
      </div>
    </section>
  );
}

export default Projects;
