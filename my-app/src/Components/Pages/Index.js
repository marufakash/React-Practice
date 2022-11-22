import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';

const Index = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Index;