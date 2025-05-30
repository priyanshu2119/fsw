import React, { useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaGoogle } from 'react-icons/fa'
import './Testimonials.css'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  review: string
  service: string
  date: string
  avatar: string
}

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rama Singh",
      location: "",
      rating: 5,
      review: "Great service, got my iPhone 11 cracked screen replaced. Issues were fixed in the first visit though.I highly recommend this apple center..",
      service: "",
      date: "",
      avatar: "/assets/images/avatar-1.jpg"
    },
    {
      id: 2,
      name: "Sanjeev Senapati",
      location: "",
      rating: 5,
      review: "Apple repair macare one of the best repair center in our locality i recommend all must visit here for getting better experience",
      service: "",
      date: "",
      avatar: "/assets/images/avatar-2.jpg"
    },
    {
      id: 3,
      name: "Roy Raj",
      location: "",
      rating: 5,
      review: "The staff members are efficient and kind. The guys working here give off an air of expertise. Very happy with their service.",
      service: "",
      date: "",
      avatar: "/assets/images/avatar-3.jpg"
    },
    {
      id: 4,
      name: "Kushal Dev",
      location: "",
      rating: 5,
      review: "Fantastic experience. Had a really bad liquid spill on Macbook Air. They solved very soft and politely .all staff are well experienced..",
      service: "",
      date: "",
      avatar: "/assets/images/avatar-4.jpg"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'star filled' : 'star'}
      />
    ))
  }

  return (
    <section className="testimonials-section section">
      <div className="container">
        <div className="section-title">
          <h2>Customer Testimonials</h2>
          <p>What Customer Say About Our Apple Repair Services in Wakad, Pune</p>
        </div>

        <div className="testimonials-container">
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}
              >
                <div className="testimonial-header">
                  <div className="quote-icon">
                    <FaQuoteLeft />
                  </div>
                  <div className="google-badge">
                    <FaGoogle />
                    <span>Google Review</span>
                  </div>
                </div>

                <div className="testimonial-content">
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="review-text">"{testimonial.review}"</p>
                  <div className="service-info">
                    <span className="service-tag">{testimonial.service}</span>
                  </div>
                </div>

                <div className="testimonial-footer">
                  <div className="customer-info">
                    <img src={testimonial.avatar} alt={testimonial.name} className="customer-avatar" />
                    <div className="customer-details">
                      <h4 className="customer-name">{testimonial.name}</h4>
                      <p className="customer-location">{testimonial.location}</p>
                      <span className="review-date">{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-navigation">
            <button className="nav-btn prev" onClick={prevTestimonial}>
              <FaChevronLeft />
            </button>
            <button className="nav-btn next" onClick={nextTestimonial}>
              <FaChevronRight />
            </button>
          </div>

          <div className="testimonials-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              ></button>
            ))}
          </div>
        </div>

        <div className="testimonials-cta">
          <h3>Join Our Happy Customers</h3>
          <p>Experience the same quality service that our customers love</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get Your Quote</a>
            <a href="https://rb.gy/quc95" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaGoogle /> Read More Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
