import React from "react";
import "./Homepage.css";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";

function Homepage() {
  return (
    <main>
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  );
}

export default Homepage;
