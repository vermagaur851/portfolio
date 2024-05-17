import "./App.css";
import Hero from "./section/Hero/Hero";
import Skills from "./section/Skills/Skills";
import Contact from "./section/contact/contact";
import Footer from "./section/footer/Footer";
import Projects from "./section/projects/projects";

function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
