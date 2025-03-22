import React from 'react';
import './Demo.css';

const Demo = () => {
  return (
    <div className="demo">
      <iframe
        className="video-background"
        width="100%"         // Gör videon responsiv genom att använda 100% bredd
        height="100%"        // Gör videon responsiv genom att använda 100% höjd
        src="https://www.youtube.com/embed/yKCAna4SrOA?autoplay=1&loop=1&playlist=yKCAna4SrOA"
        title="Demo Video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Demo;
