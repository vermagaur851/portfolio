import "./App.css";
import Hero from "./section/Hero/Hero";
import Skills from "./section/Skills/Skills";
import Contact from "./section/contact/contact";
import Footer from "./section/footer/Footer";
import Projects from "./section/projects/projects";

function App() {
  return (
    <div>
      <div className="box">
        <Hero />
      </div>
      <div className="box">
        <Projects />
      </div>
      <div className="box">
        <Skills />
      </div>
      <div className="box">
        <Contact />
      </div>
      <div className="box">
        <Footer />
      </div>
    </div>
  );
}

export default App;
