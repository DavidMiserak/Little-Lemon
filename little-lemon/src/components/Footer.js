import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footerImage from "../assets/fish-small.jpg";

const doormat = [
  { href: "/#about", text: "About" },
  { href: "/#menu", text: "Menu" },
  { href: "/booking", text: "Reservations" },
  { href: "/#order-online", text: "Order Online" },
  { href: "/#login", text: "Log In" },
];

const contact = [
  { title: "Address", text: "1234 N. Elm St. New York City, NY 12345" },
  { title: "Phone", text: "123-555-7890" },
  { title: "Email", text: "little-lemon@example.com" },
];

const social = [
  { href: "https://facebook.com", icon: "facebook" },
  { href: "https://twitter.com", icon: "twitter" },
  { href: "https://instagram.com", icon: "instagram" },
];

function Footer() {
  return (
    <footer>
      <hr />
      <img src={footerImage} alt="Cooking fish over a charcoal grill" />
      <section id="doormat-nav">
        <h2>Doormat Navigation</h2>
        <ul>
          {doormat.map((link) => (
            <li key={link.href}><Link to={link.href}>{link.text}</Link></li>
          ))}
        </ul>
      </section>
      <section id="contact-info">
        <h2>Contact Information</h2>
        <ul>
          {contact.map((item) => (
            <li key={item.title}><strong>{item.title}:</strong> {item.text}</li>
          ))}
        </ul>
      </section>
      <section id="social-media">
        <h2>Connect with Us</h2>
        <ul>
          {social.map((item) => (
            <li key={item.href}><a href={item.href}>{item.icon}</a></li>
          ))}
        </ul>
      </section>
    </footer>
  );
}

export default Footer;
