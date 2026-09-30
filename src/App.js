import './App.css';
import Background from './components/Background';
import SparkleOverlay from './components/SparkleOverlay';
import Taskbar from './components/Taskbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Background />
      <SparkleOverlay />

      <main className="main-content">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Taskbar />
    </div>
  );
}

export default App;
