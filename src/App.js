import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experinence/Experience";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
