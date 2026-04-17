import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="max-w-2xl mx-auto">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
