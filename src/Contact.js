import React from "react";
import './App.css'; // Make sure this file is correctly imported
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      {/* Företagsinformation */}
      <div className="company-info">
        <h1>Your Company Name</h1>
        <p><strong>Address:</strong> Example Street 123, 456 78 City, Country</p>
        <p><strong>Phone:</strong> +46 123 456 789</p>
        <p><strong>Email:</strong> contact@yourcompany.com</p>
      </div>

      {/* Kontaktformulär */}
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className="contact-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
