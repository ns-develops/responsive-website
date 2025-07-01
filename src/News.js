import React from 'react';
import './App.css'; 

const News = () => {
  return (
    <div className="news">
      <h1>Latest News</h1>
      <div className="news-container">
        <div className="black-box">
          <h2>News 1</h2>
          <p>Stay up to date with the latest updates, announcements, and news related to our products and services.</p>
        </div>
        <div className="black-box">
          <h2>News 2</h2>
          <p>Our team is growing.</p>
        </div>
        <div className="black-box">
          <h2>News 3</h2>
          <p>We've expanded our global presence! Learn about the new markets we are entering and how this benefits you as out customer.</p>
        </div>
        </div>
    </div>
  );
};

/*Our company has received several industry awards for our innovative approach and commitment to quality.*/

export default News;
