import React from 'react';
import './Demo.css';

// Importera din lokala video
import demoVideo from './components/images/videotest.mp4';

const Demo = () => {
  return (
    <div className="demo">
      <video className="video-background" autoPlay loop muted>
        <source src={demoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Demo;
