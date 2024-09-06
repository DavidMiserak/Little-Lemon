import React from 'react';
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Nav from "./components/Nav";
import CallToAction from "./components/CallToAction";
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import ConfirmBooking from './components/ConfirmBooking';
import './App.css';

function App() {
  return (
    <div>
      <ChakraProvider>
        <Nav />
        <hr />
        <Routes>
          <Route path="/" element={
            <>
              <CallToAction />
              <Homepage />
            </>
          } />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirm-booking" element={<ConfirmBooking />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </div>
  );
}

export default App;
