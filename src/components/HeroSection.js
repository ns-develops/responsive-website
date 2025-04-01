import React from 'react';
import './HeroSection.css';
import { Button } from './Button'; 
import img2 from './images/img2.jpg'; // Din bild

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={img2} alt="Adventure" className="hero-img" />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
      
        {/* Business Inquiry button goes to /contact */}
        <Button 
          className="btns" 
          buttonStyle="btn--outline" 
          buttonSize="btn--large" 
          to="/contact"
        >
          BUSINESS INQUIRY
        </Button>

        {/* Watch Demo button goes to /demo */}
        <Button 
          className="btns" 
          buttonStyle="btn--primary" 
          buttonSize="btn--large" 
          to="/demo"
        >
          WATCH DEMO'S <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
