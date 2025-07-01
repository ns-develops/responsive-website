import React from 'react';
import './Demo.css';  

function Demo() {
  return (
    <div className="demo-container">
      <div className="video-background">
      <iframe 
  width="966" 
  height="543" 
  src="https://www.youtube.com/embed/eBeRl1WgQi4?autoplay=1&loop=1&playlist=eBeRl1WgQi4&mute=1" 
  title="tour and travel promotional video" 
  frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay" 
  referrerPolicy="strict-origin-when-cross-origin" 
  allowFullScreen 
  style={{ border: 'none' }}
></iframe>

      </div>
      <div className="content">
        <h1></h1>
        <p></p>
      </div>
    </div>
  );
}

export default Demo;


