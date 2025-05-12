import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section logo-section">
        <img src="/images/logo.svg" alt="Little Lemon Logo" className="footer-logo" />
      </div>

      <nav className="footer-section nav-section">
        <h4>Navigation</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      <div className="footer-section contact-section">
        <h4>Contact</h4>
        <p>1234 West Mediterranean Ave</p>
        <p>Chicago, IL 60601</p>
        <p>(312) 555-1234</p>
        <p>info@littlelemon.com</p>
      </div>

      <div className="footer-section social-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
