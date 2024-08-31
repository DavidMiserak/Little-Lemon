import React from "react";

const doormat = [
  { href: "/about", text: "About" },
  { href: "/menu", text: "Menu" },
  { href: "/reservations", text: "Reservations" },
  { href: "/order-online", text: "Order Online" },
  { href: "/login", text: "Log In" },
];

const contact = [
  { title: "Address", text: "1234 N. Elm St. New York City, NY 12345" },
  { title: "Phone", text: "123-456-7890" },
  { title: "Email", text: "little-lemon@expample.com" },
];

const social = [
  { href: "https://facebook.com", icon: "facebook" },
  { href: "https://twitter.com", icon: "twitter" },
  { href: "https://instagram.com", icon: "instagram" },
];

function Footer() {
  return (
    <footer>
      <section id="doormat-nav">
        <h2>Doormat Navigation</h2>
        <ul>
          {doormat.map((link) => (
            <li key={link.href}><a href={link.href}>{link.text}</a></li>
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
      <p>© 2024</p>
    </footer>
  );
}

export default Footer;
