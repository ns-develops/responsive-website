import React from 'react';
import './Demo.css'; // Din CSS-fil för layout

const Demo = () => {
  return (
    <div className="demo">
      {/* Använd en iframe för att bädda in YouTube-videon */}
      <iframe
        className="video-background"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/yKCAna4SrOA?autoplay=1&loop=1&mute=1&playlist=yKCAna4SrOA"
        title="Demo Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Demo;
