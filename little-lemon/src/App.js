import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/Nav";
import CallToAction from "./components/CallToAction";
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import './App.css';

function App() {
  return (
    <div>
      <ChakraProvider>
        <Nav />
        <CallToAction />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
