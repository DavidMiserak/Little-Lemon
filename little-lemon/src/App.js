import React from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CallToAction from "./components/CallToAction";
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <CallToAction />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
