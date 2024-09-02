import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../assets/logo.svg";

function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Book a Table</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
