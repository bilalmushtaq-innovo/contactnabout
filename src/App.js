import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import About from './components/About';

function App() {
  return (
    <div className='App w-full overflow-x-hidden'>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
