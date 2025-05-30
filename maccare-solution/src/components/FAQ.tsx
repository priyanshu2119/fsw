import React, { useState } from 'react'
import { FaPlus, FaMinus, FaQuestionCircle, FaPhone, FaWhatsapp } from 'react-icons/fa'
import './FAQ.css'

interface FAQItem {
  id: number
  question: string
  answer: string
  category: string
}

const FAQ: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How long will my MacBook repair/ service take ?",
      answer: "We understand how inconvenient it can be to be without your MacBook, which is why we offer a 24-hour priority service for most hardware replacements, such as screen or battery replacements, that can be completed in just 2-3 hours. For MacBook logic board repairs, we aim to fix most faults within 2-3 days, and if parts need to be ordered, we can usually get them delivered the next day. Our priority is to minimize the downtime of your device and return it to you as quickly as possible.",
      category: "general"
    },
    {
      id: 2,
      question: "Do I need to make an appointment to bring my computer to you?",
      answer: "The time required for repairs can vary depending on the nature of the issue. We aim to complete the diagnosis within 24-48 hours, but in some cases, it may take less time. Ultimately, the duration of the repair or service will depend on the specific requirements of the issue.",
      category: "general"
    },
    {
      id: 3,
      question: "Can a technician visit my home or office?",
      answer: "Providing personalized service is our priority. When you bring in your computer for repair, you will have direct communication with the technician handling your device, enabling you to explain the situation in detail. Unlike other repair centers, we don't outsource repairs to service centers, and we don't take 5+ days to complete repairs. We don't ask for any upfront payments, and you only pay once the work is finished and you are satisfied with the outcome. Our goal is to provide a hassle-free and transparent repair service.",
      category: "service"
    },
    {
      id: 4,
      question: "How long will my repair take?",
      answer: "The duration of the diagnosis and repair process may vary depending on the nature of the issue. However, we strive to complete the diagnosis within 24-48 hours, and in some cases, it may even be completed sooner. The overall timeframe required will ultimately depend on the specific repair or service needed.",
      category: "general"
    },
    {
      id: 5,
      question: "I'm worried about my data, is it safe ?",
      answer: "As a service provider for several local businesses, we recognize the importance of safeguarding customer data. If we store any customer data, we ensure that it is protected with a password and encryption. We always recommend customers to back up their data before any work is carried out, and we can discuss backup options with you if required. Additionally, customers have the option to request that the technician remove the storage hardware from their MacBook and provide it to them prior to depositing the device with us.",
      category: "data"
    },
    {
      id: 6,
      question: "All the spares you use are genuine?",
      answer: "All the spares we use are genuine, OEM original spares only and it has a warranty up to 2 years.",
      category: "parts"
    },
    {
      id: 7,
      question: "What is the cost of iPhone display ?",
      answer: "We have various options available From OEM original to copy. Give us call quick call on +91 7030039901 | +91 9753326111 or visit our website to get a quick quote.",
      category: "pricing"
    }
  ]

  const categories = [
    { key: 'all', label: 'All Questions' },
    { key: 'general', label: 'General' },
    { key: 'parts', label: 'Parts & Quality' },
    { key: 'warranty', label: 'Warranty' },
    { key: 'pricing', label: 'Pricing' },
    { key: 'service', label: 'Service' }
  ]

  const filteredFAQs = activeCategory === 'all'
    ? faqData
    : faqData.filter(item => item.category === activeCategory)

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id)
  }

  return (
    <section id="faq" className="faq-section section">
      <div className="container">
        <div className="section-title">
          <h2>Some Frequently Asked Questions</h2>
          <p>We can Solve your Hardware and Software Problems</p>
        </div>

        <div className="faq-content">
          <div className="faq-categories">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`category-btn ${activeCategory === category.key ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="faq-list">
            {filteredFAQs.map((item) => (
              <div
                key={item.id}
                className={`faq-item ${activeItem === item.id ? 'active' : ''}`}
              >
                <div className="faq-question" onClick={() => toggleItem(item.id)}>
                  <div className="question-content">
                    <FaQuestionCircle className="question-icon" />
                    <h3>{item.question}</h3>
                  </div>
                  <div className="toggle-icon">
                    {activeItem === item.id ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-cta">
            <div className="cta-content">
              <h3>Still Have Questions?</h3>
              <p>Can't find the answer you're looking for? Our support team is here to help!</p>
              <div className="cta-buttons">
                <a href="tel:+917030039901" className="btn btn-primary">
                  <FaPhone /> Call Us Now
                </a>
                <a href="https://wa.me/917030039901" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <FaWhatsapp /> WhatsApp Chat
                </a>
                <a href="#contact" className="btn btn-secondary">Get Free Quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
