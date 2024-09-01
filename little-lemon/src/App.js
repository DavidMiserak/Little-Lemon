import React from 'react';
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
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
