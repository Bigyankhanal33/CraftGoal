import React from 'react';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Navbar from './components/Navbar';
import Footer from './components/footer'; 
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
