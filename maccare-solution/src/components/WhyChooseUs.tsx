import React from 'react'
import {
  FaShieldAlt,
  FaClock,
  FaTools,
  FaUserTie,
  FaMoneyBillWave,
  FaTruck,
  FaPhoneAlt,
  FaAward,
  FaCheckCircle
} from 'react-icons/fa'
import './WhyChooseUs.css'

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: "/assets/images/why-choose/One Hour Service.png",
      title: "One Hour Service",
      description: "We have a ready inventory of parts, allowing us to provide One Hour Turnaround time in each apple device service. Minor concerns are fixed in 15 minutes or less."
    },
    {
      icon: "/assets/images/why-choose/Free Pickup of your device.png",
      title: "Free Pickup of your device",
      description: "Get pickup & drop facility for your device anywhere in Wakad, Pune. Please go to the website menu and schedule a pickup time for your Apple repair in Wakad, Pune."
    },
    {
      icon: "/assets/images/why-choose/Original Parts.png",
      title: "Original Parts",
      description: "We use original parts in our repairs. Yes, we do pay extra while sourcing original parts, and this helps us maintain the quality of our repairs and stand by our warranty."
    },
    {
      icon: "/assets/images/why-choose/Trained Engineers.png",
      title: "Trained Engineers",
      description: "Our team of highly skilled and experienced Apple repair in Pune is dedicated to providing top-notch repair services for all your Apple devices."
    },
    {
      icon: "/assets/images/why-choose/Best-in-Bangalore.png",
      title: "Best in Wakad, Pune",
      description: "With 10,000+ devices repaired, we are one of the best choices for your iPhone, iPad or Mac, we can fix your device so that it functions like it should."
    },
    {
      icon: "/assets/images/why-choose/Affordable Pricing.png",
      title: "Affordable Pricing",
      description: "We offer a quality part in a affordable pricing for any repair job. Our MacBook repair in Pune is priced lower than authorized service centres for the exact same work."
    }
  ]

  return (
    <section className="why-choose-us section">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
        </div>

        <div className="why-choose-content">
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div key={index} className="reason-card">
                <div className="reason-icon">
                  <img src={reason.icon} alt={reason.title} />
                </div>
                <div className="reason-content">
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="genuine-parts-section">
            <h3>We Use Genuine Parts to Fix your Device</h3>
            <h4>REASONABLE PRICE AND FASTER REPAIR SERVICES</h4>
            <p>
              We offer reasonable prices & quality works to our customers for the <a href="macbook-service-center-bangalore.php">apple repair Center</a> with highly trained and experienced technicians. We repair almost all apple brands of <a href="macbook-service-center-bangalore.php">iPhone, iPod, ipad & Macbooks</a>.
            </p>
          </div>

          <div className="stats-section">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Device Fixed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">8,000+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Locations in Pune</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
