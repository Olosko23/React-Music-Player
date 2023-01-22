import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Grossing from './pages/Grossing';
import Release from './pages/Release';
import Trending from './pages/Trending';

function App() {
  return (
    <div className="bg-[#F1F7B5]">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element = {<Home />} />
            <Route path="/release" element = {<Release />} />
            <Route path="/trending" element = {<Trending />} />
            <Route path="/grossing" element = {<Grossing />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
