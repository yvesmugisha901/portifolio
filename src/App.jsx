import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Persist theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) setDarkMode(savedTheme === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
        color: darkMode ? '#f9fafb' : '#111827',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Sections with IDs for smooth scroll */}
      <section id="hero">
        <Hero darkMode={darkMode} />
      </section>

      <section id="about">
        <About darkMode={darkMode} />
      </section>

      <section id="education">
        <Education darkMode={darkMode} />
      </section>

      <section id="experience">
        <Experience darkMode={darkMode} />
      </section>

      <section id="skills">
        <Skills darkMode={darkMode} />
      </section>

      <section id="projects">
        <Projects darkMode={darkMode} />
      </section>

      <section id="contact">
        <Contact darkMode={darkMode} />
      </section>
    </div>
  );
}

export default App;
