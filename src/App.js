import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Projects, About } from './pages';

const App = () => {
  return (
    <div>
      <BrowserRouter basename='/portfolio-site'>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
