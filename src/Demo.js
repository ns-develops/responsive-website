import React from 'react';
import './Demo.css';  

function Demo() {
  return (
    <div className="demo-container">
      <div className="video-background">
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/yKCAna4SrOA?autoplay=1&loop=1&playlist=yKCAna4SrOA" 
          allow="autoplay; fullscreen" 
          allowFullScreen
          style={{ border: 'none' }} // Remove the frameborder using CSS
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


