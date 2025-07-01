import React from 'react';
import './HeroSection.css';
import { Button } from './Button'; 
import { Link } from 'react-router-dom'; 
import img2 from './images/beach.jpg';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={img2} alt="Adventure" className="hero-img" />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
      
        <Link to="/contact">
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
            GROUP TRAVEL
          </Button>
        </Link>

        <Link to="/demo">
        <Button 
        className="btns" 
        buttonStyle="btn--primary" 
        buttonSize="btn--large" 
        onClick={() => window.location.href = '/demo'}>
                                                    
  WATCH DEMO <i className="far fa-play-circle" />
</Button>

        </Link>
      </div>
    </div>
  );
}

export default HeroSection;