import React from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ContactCTA from './components/ContactCTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
