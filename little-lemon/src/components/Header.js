import React from "react";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h1>Little Lemon</h1>
    </header>
  );
}

export default Header;
