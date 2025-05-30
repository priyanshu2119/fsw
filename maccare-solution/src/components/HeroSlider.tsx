import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaPhone, FaWhatsapp } from 'react-icons/fa'
import './HeroSlider.css'

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  ctaText: string
  ctaLink: string
}

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: Slide[] = [
    {
      id: 1,
      title: "MacCare Solution",
      subtitle: "Expert Apple Device Repair Services",
      description: "Professional repair services for iPhone, iPad, MacBook, iMac, and Apple Watch. Fast, reliable, and affordable solutions with genuine parts.",
      image: "/assets/images/hero-slide-1.jpg",
      ctaText: "Get Free Quote",
      ctaLink: "#contact"
    },
    {
      id: 2,
      title: "iPad Repair Services",
      subtitle: "Professional iPad Screen & Hardware Repair",
      description: "From cracked screens to battery replacements, we fix all iPad models with precision and care. Same-day service available.",
      image: "/assets/images/hero-slide-2.jpg",
      ctaText: "Book Repair",
      ctaLink: "#services"
    },
    {
      id: 3,
      title: "MacBook & iMac Repair",
      subtitle: "Hardware & Software Solutions",
      description: "Complete repair services for MacBook and iMac including logic board repair, screen replacement, and performance optimization.",
      image: "/assets/images/hero-slide-3.jpg",
      ctaText: "Learn More",
      ctaLink: "#about"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="hero-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="container">
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <h2 className="slide-subtitle">{slide.subtitle}</h2>
                <p className="slide-description">{slide.description}</p>
                <div className="slide-actions">
                  <a href={slide.ctaLink} className="btn btn-primary">
                    {slide.ctaText}
                  </a>
                  <a href="tel:+917030039901" className="btn btn-secondary">
                    <FaPhone /> Call Now
                  </a>
                  <a href="https://wa.me/917030039901" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slider-nav prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="slider-nav next" onClick={nextSlide}>
        <FaChevronRight />
      </button>

      {/* Slide Indicators */}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Quick Contact Bar */}
      <div className="quick-contact">
        <div className="container">
          <div className="contact-items">
            <div className="contact-item">
              <FaPhone />
              <div>
                <span>Call Us Now</span>
                <a href="tel:+917030039901">+91 70300 39901</a>
              </div>
            </div>
            <div className="contact-item">
              <FaWhatsapp />
              <div>
                <span>WhatsApp</span>
                <a href="https://wa.me/917030039901" target="_blank" rel="noopener noreferrer">Chat Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
