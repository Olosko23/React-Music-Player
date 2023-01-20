import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="bg-[#F1F7B5]">
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </div>
  )
}

export default App
