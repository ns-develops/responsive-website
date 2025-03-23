import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Solutions from './Solutions';
import Cases from './Cases';
import News from './News';
import Contact from './Contact';
import Demo from './Demo';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/responsive-website" element={<Home />} />  
          <Route path="/solutions" element={<Solutions />} />  
          <Route path="/cases" element={<Cases />} /> 
          <Route path="/news" element={<News />} />  
          <Route path="/contact" element={<Contact />} />  
          <Route path="/demo" element={<Demo />} />
       
        </Routes>
      </Router>
    </>
  );
}

export default App;