import React, { useState } from 'react';
import '../App.css';
import HeroSection from './HeroSection';
import Cards from './Cards';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="home-container">
      <HeroSection />
      <Cards />

      <section className="about-us">
        <h1 className="section-title">About Us</h1>
        <p className="section-text">
          We are a new and innovative digital agency with a passion for creating digital solutions that make a difference.
          We combine creativity, technology, and strategy to help businesses grow and reach their goals in the digital world.
          We understand that every business is unique, and we work closely with our clients to create tailored solutions that fit their specific needs.
          We believe in long-term partnerships and strive to build strong relationships based on trust and transparent communication.
          With us, you don’t just get an agency; you get an engaged partner who wants to see your business succeed.
        </p>
        <p className="section-text">
          Our goal is to make the digital world simpler and more accessible for everyone. We are here to help you navigate a fast-changing digital landscape and create results that make a difference for your brand.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <h2 className="form-title">Contact Us</h2>
          
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Name"
            required
          />

          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Email"
            required
          />

          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="form-button">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
