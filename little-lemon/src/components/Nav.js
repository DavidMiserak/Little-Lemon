import React from "react";
import "./Nav.css";
import logo from "../assets/logo.svg";

function Nav() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/#reservation", text: "Reservations" },
    { href: "/#menu", text: "Menu" },
    { href: "/#order-online", text: "Order Online" },
    { href: "/#about", text: "About" },
    { href: "/#login", text: "Log In" },
  ];

  return (
    <nav>
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <ul>
        {links.map((link) => (
          <li key={link.href}><a href={link.href}>{link.text}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
