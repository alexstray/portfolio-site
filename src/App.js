import React from 'react';
import './App.css';
import { Navbar, Hero, Gallery, Projects, Skills, About } from './components';

const App = () => {
  return (
    <div>
      <div style={{height: '100vh'}}>
        <Navbar />
        <Hero />
        <Gallery />
      </div>
      <div>
        <Projects />
      </div>
      <div style={{height: '100vh'}}>
        <Skills />
      </div>
      <div style={{height: '100vh'}}>
        <About />
      </div>
    </div>
  )
}

export default App
