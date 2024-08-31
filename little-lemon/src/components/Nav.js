import React from "react";

function Nav() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/menu", text: "Menu" },
    { href: "/reservations", text: "Reservations" },
    { href: "/order-online", text: "Order Online" },
    { href: "/login", text: "Log In" },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.href}><a href={link.href}>{link.text}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
