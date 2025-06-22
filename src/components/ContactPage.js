import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">
            Have questions about the <span className="highlight">Coding Club</span> or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Contact Info Section */}
        <section className="contact-info-section">
          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>leeyh2026@tciscommunity.com</p>
              <p className="contact-description">Send us an email for any inquiries</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>Room 407</p>
              <p className="contact-description">Find us in the academic building</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">⏰</div>
              <h3>Meeting Hours</h3>
              <p>Day 5 12:40 PM</p>
              <p className="contact-description">Join our cyclic meetings</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="form-container">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary btn-large ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                <p>✅ Thank you! Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How can I join the <span className="highlight">Coding Club</span>?</h3>
              <p>You can join by attending our meetings on Day 5 at 12:40 PM in Room 407, or by sending us an email expressing your interest.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need prior coding experience?</h3>
              <p>No! We welcome members of all skill levels. Whether you're a beginner or an experienced developer, there's a place for you in our community.</p>
            </div>
            <div className="faq-item">
              <h3>What activities do you organize?</h3>
              <p>We organize various activities including coding workshops, project collaborations, and participation in events like the Daejeon Science Festival.</p>
            </div>
            <div className="faq-item">
              <h3>How often do you meet?</h3>
              <p>We have regular meetings every Day 5 at 12:40 PM in Room 407, plus additional project meetings and events throughout the semester.</p>
            </div>
            <div className="faq-item">
              <h3>Can I work on my own projects?</h3>
              <p>Absolutely! We encourage members to work on personal projects and often provide support, feedback, and collaboration opportunities.</p>
            </div>
            <div className="faq-item">
              <h3>What technology do you work on?</h3>
              <p>We work with a variety of technologies including web development, programming languages, and various recent technologies.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
