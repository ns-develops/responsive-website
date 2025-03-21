import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


import img2 from './images/img2.jpg';

function HeroSection() {
  return (
    <div className="hero-container">
      
      <img src={img2} alt="Adventure" className="hero-img" />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large">
          BUSINESS INQUIRY
        </Button>
        <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large">
          WATCH DEMO'S <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
