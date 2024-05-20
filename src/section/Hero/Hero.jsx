import styles from "./herostyles.module.css";
import heroimage from "../../assets/me.jpg";
import sun from "../../assets/sun3.svg";
import moon from "../../assets/moon_icon.svg";
import twitterlight from "../../assets/twitter light.svg";
import twitterdark from "../../assets/twitter dark.svg";
import githublight from "../../assets/github light.svg";
import githubdark from "../../assets/github dark.svg";
import LinkedInlight from "../../assets/linkedinlight.png";
import LinkedIndark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/resume.pdf";
import { useTheme } from "../../common/themeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? moon : sun;
  const twitterIcon = theme === 'dark' ? twitterdark : twitterlight;
  const githubIcon = theme === 'dark' ? githubdark : githublight;
  const LinkedInIcon = theme === 'dark' ? LinkedIndark : LinkedInlight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroimage}
          alt="Profile Picture of Gaurav"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Gaurav
          <br />
          Kumar
        </h1>
        <h2>MERN Stack Developer</h2>
        <span>
          <a href="#" target="_blank">
            <img src={twitterIcon} alt="twitter" />
          </a>
          <a href="https://github.com/vermagaur851" target="_blank">
            <img src={githubIcon} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/gaurav-verma-8b0778236/" target="_blank">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web app for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
