import React from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaArrowUp
} from 'react-icons/fa'
import './Footer.css'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const iPhoneRepairServices = [
    { name: "iPhone Screen Repair", href: "iphone-screen-repair-pune.php" },
    { name: "iPhone Back Glass Repair", href: "iphone-screen-repair-pune.php" },
    { name: "iPhone Battery Replacement", href: "iphone-battery-replacement-pune.php" },
    { name: "iPhone Chargin Jack Replacement", href: "iphone-charging-jack-replacement-pune.php" },
    { name: "iPhone Water Wamage Replacement", href: "iphone-water-damage-replacement-pune.php" },
    { name: "iPhone Camera Replacement", href: "iphone-camera-replacement-pune.php" },
    { name: "iPhone Motherboard Repair", href: "iphone-motherboard-repair-pune.php" },
    { name: "iPhone Touch Not Working", href: "iphone-touch-not-working-pune.php" },
    { name: "iPhone Home Button Replacement", href: "iphone-home-button-replacement-pune.php" },
    { name: "iPhone Software Issues", href: "iphone-software-issues-pune.php" }
  ]

  const iPadRepairServices = [
    { name: "iPad Screen Replacement", href: "ipad-screen-replacement-pune.php" },
    { name: "iPad LCD Replacement", href: "ipad-lcd-replacement-pune.php" },
    { name: "iPad Battery Replacement", href: "ipad-battery-replacement-pune.php" },
    { name: "iPad Front Camera Repair", href: "ipad-front-camera-repair-pune.php" },
    { name: "iPad Power Button Replacement", href: "ipad-power-button-replacement-pune.php" },
    { name: "iPad Liquid Damage Repair", href: "ipad-liquid-damage-repair-pune.php" },
    { name: "iPad Home Button Repair", href: "ipad-home-button-repair-pune.php" },
    { name: "iPad Motherboard Repair", href: "ipad-motherboard-repair-pune.php" }
  ]

  const macBookRepairServices = [
    { name: "Macbook Screen Replacement", href: "macbook-screen-replacement-pune.php" },
    { name: "Macbook Keyboard Repair", href: "macbook-keyboard-repair-pune.php" },
    { name: "Macbook Battery Replacement", href: "macbook-battery-replacement-pune.php" },
    { name: "Macbook Water Damage Repair", href: "macbook-water-damage-repair-pune.php" },
    { name: "Macbook Logicboard Repair", href: "macbook-logicboard-repair-pune.php" },
    { name: "Macbook Trackpad Repair", href: "macbook-trackpad-repair-pune.php" },
    { name: "Macbook Hard Drive Repair", href: "macbook-hard-drive-repair-pune.php" },
    { name: "Macbook Camera Replacement", href: "macbook-camera-replacement-pune.php" },
    { name: "Macbook LCD Replacement", href: "macbook-lcd-replacement-pune.php" },
    { name: "Macbook Motherboard Replacement", href: "macbook-motherboard-replacement-pune.php" }
  ]

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* iPhone Repair */}
            <div className="footer-section">
              <h4>iPhone Repair</h4>
              <ul className="footer-links">
                {iPhoneRepairServices.map((service, index) => (
                  <li key={index}>
                    <a href={service.href}>{service.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* iPad Repair */}
            <div className="footer-section">
              <h4>iPad Repair</h4>
              <ul className="footer-links">
                {iPadRepairServices.map((service, index) => (
                  <li key={index}>
                    <a href={service.href}>{service.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* MacBook Repair */}
            <div className="footer-section">
              <h4>MacBook Repair</h4>
              <ul className="footer-links">
                {macBookRepairServices.map((service, index) => (
                  <li key={index}>
                    <a href={service.href}>{service.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Need Macbook | iPhone | Mac-Mini | iMac repairing service?</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <a href="tel:+919753326111">+91 7030039901</a>
                </div>
                <div className="contact-item">
                  <a href="tel:+917030039901">+91 9753326111</a>
                </div>
                <div className="contact-item">
                  <a href="https://web.whatsapp.com/send?phone=+917030039901&text=Hello">WhatsApp Us</a>
                </div>
                <div className="contact-item">
                  <a href="mailto:maccaresolution@gmail.com">maccaresolutions@gmail.com</a>
                </div>
              </div>

              <h5>Address:</h5>
              <p>Shop No 121, Pride Purple Square, Kalewadi - Wakad Rd, Vishnu Dev Nagar, Wakad, Pune, Pimpri-Chinchwad, Maharashtra 411057</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2014-2023.All Rights Reserved | MacCare Solution</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a> |
                <a href="#">Terms & Conditions</a> |
                <a href="#">Refund Policy</a> |
                <a href="#">Disclaimer</a> |
                <a href="#">Sitemap</a>
              </div>
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
            </div>
          </div>
          <div className="disclaimer">
            <p>MacCare Solution is in no way affiliated with Apple Computer Inc.</p>
            <p>"iPhone", "iPad", "iPod Touch", "iMac" and "MacBook" are registered trademarks of Apple Computer Inc.</p>
          </div>
        </div>
      </div>

      {/* Back to Top and WhatsApp */}
      <div className="floating-buttons">
        <a href="#" className="back-to-top" onClick={scrollToTop}>Back to top</a>
        <a href="https://wa.me/+917030039901" target="_blank" rel="noopener noreferrer" className="whatsapp-float">Whatsapp</a>
      </div>
    </footer>
  )
}

export default Footer
