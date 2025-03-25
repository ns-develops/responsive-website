import React from 'react';
import './Demo.css';  

function Demo() {
  return (
    <div className="demo-container">
      <div className="video-background">
        <iframe 
          width="100%" 
          height="100%" 
          src="" 
          allow="autoplay; fullscreen" 
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


