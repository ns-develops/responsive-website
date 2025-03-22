import React from 'react';
import './Demo.css'; 

const Demo = () => {
  return (
    <div className="demo">
      <iframe
        className="video-background"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/yKCAna4SrOA?autoplay=1&loop=1&playlist=yKCAna4SrOA"
        title="Demo Video"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}


export default Demo;
