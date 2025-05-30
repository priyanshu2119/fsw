import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaPinterest, FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <a href="tel:+917030039901" className="contact-item">
              <FaPhone /> +91 70300 39901
            </a>
            <a href="tel:+919753326111" className="contact-item">
              <FaPhone /> +91 9753326111
            </a>
            <a href="mailto:maccaresolutions@gmail.com" className="contact-item">
              <FaEnvelope /> maccaresolutions@gmail.com
            </a>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100091856562242&viewas=100000686899395" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/maccaresolution/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.pinterest.com/maccaresolutions/" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
            <a href="javascript:void(0)" className="pickup-delivery">
              Free Pickup & Delivery
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="nav-brand">
            <img src="/assets/images/logo.svg" alt="Green Apple" className="logo" />
          </div>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About Us</a>
            <div className="dropdown">
              <a href="#services" className="nav-link dropdown-toggle">Our Services</a>
              <div className="dropdown-menu">
                <a href="#iphone-repair" className="dropdown-item">iPhone Repair</a>
                <a href="#ipad-repair" className="dropdown-item">iPad Repair</a>
                <a href="#macbook-repair" className="dropdown-item">MacBook Repair</a>
                <a href="#imac-repair" className="dropdown-item">iMac Repair</a>
                <a href="#iwatch-repair" className="dropdown-item">iWatch Repair</a>
              </div>
            </div>
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="https://rb.gy/quc95" target="_blank" rel="noopener noreferrer" className="nav-link review-link">
              Google Review
            </a>
            <a href="https://wa.me/917030039901" target="_blank" rel="noopener noreferrer" className="nav-link whatsapp-link">
              WhatsApp Now
            </a>
          </div>

          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
