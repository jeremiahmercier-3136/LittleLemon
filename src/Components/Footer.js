import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <img src="https://placehold.co/600x400?text=Placeholder" alt="Placeholder" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div>Contact</div>
      <div>Social Media Links</div>
    </footer>
  );
}

export default Footer;
