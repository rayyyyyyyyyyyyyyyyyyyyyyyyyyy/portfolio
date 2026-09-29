import './App.css';
import Background from './components/Background';
import SparkleOverlay from './components/SparkleOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* 1. Frutiger Aero Sky & Grass Background */}
      <Background />

      {/* 2. Y2K Sparkle Particles & Stars */}
      <SparkleOverlay />

      {/* 3. Floating Glassmorphic Dock Navigation */}
      <Navbar />

      {/* 4. Main Portfolio Sections */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;