import React from 'react';
import './App.css';
import { Navbar, Hero, Gallery } from './components';

const App = () => {
  return (
    <div>
      <div style={{height: '100vh'}}>
        <Navbar />
        <Hero />
        <Gallery />
      </div>
    </div>
  )
}

export default App
