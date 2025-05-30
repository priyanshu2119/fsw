import React from 'react'
import './ContactCTA.css'

const ContactCTA: React.FC = () => {
  return (
    <section className="contact-cta section">
      <div className="container">
        <div className="contact-cta-content">
          <h3>Get in Touch</h3>
          <p>Call +91 70300 39901 | +91 97533 26111 to discuss how MacCare Solution can resolve your Apple Device issues.</p>
          <a href="contact-us.php" className="btn btn-primary">CONTACT US</a>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
