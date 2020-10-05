import React from 'react';
import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';
function App() {
  return (
    <div className='app'>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
