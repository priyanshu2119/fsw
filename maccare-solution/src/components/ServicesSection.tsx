import React from 'react'
import { FaMobile, FaTabletAlt, FaLaptop, FaDesktop, FaClock, FaBatteryHalf, FaWrench, FaShieldAlt } from 'react-icons/fa'
import './ServicesSection.css'

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "iPhone Repair",
      features: [
        "iPhone Display Replacement",
        "iPhone Battery & Charging",
        "iPhone Camera Replacement",
        "iPhone Touch ID Repair",
        "iPhone Mic & Audio Speakers",
        "iPhone Liquid Damage",
        "iPhone Logic Board Repair",
        "iPhone Memory Upgrade",
        "iPhone Data Recovery"
      ]
    },
    {
      title: "iPad Repair",
      features: [
        "iPad Display Replacement",
        "iPad Battery & Charging",
        "iPad Camera Replacement",
        "iPad Touch ID Repair",
        "iPad Mic & Audio Speakers",
        "iPad Liquid Damage",
        "iPad Logic Board Repair",
        "iPad Memory Upgrade",
        "iPad Data Recovery"
      ]
    },
    {
      title: "MacBook Repair",
      features: [
        "MacBook Display Replacement",
        "MacBook Battery Replacement",
        "MacBook Keyboard Replacement",
        "MacBook Touch Bar ID Repair",
        "MacBook Logic Board Repair",
        "MacBook Liquid Damage",
        "HDD to SSD Upgrade",
        "Wi-Fi and BlueTooth Repair",
        "MacBook Audio Speakers"
      ]
    },
    {
      title: "iMac Repair",
      features: [
        "iMac Display Replacement",
        "HDD to SSD Upgrade",
        "iMac Logic Board Repair",
        "iMac Memory Upgrade",
        "iMac Data Recovery",
        "iMac Audio Speakers",
        "iMac Battery Replacement",
        "iMac Motherboard Repair",
        "iMac Touchpad Replacement"
      ]
    }
  ]

  return (
    <section id="services" className="services-section section">
      <div className="container">
        <div className="section-title">
          <h2>Get Started With Your Apple Device Repair in Wakad,Pune</h2>
          <p>We repair all major brands Computer and We are expert</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
