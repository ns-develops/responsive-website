import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import designImg from './images/design.jpg';
import mockupImg from './images/mockupscreen.jpg';
import newsImg from './images/news.jpg';

function Cards() {
  return (
    <div className='cards'>
        <h1>Here is how it goes!</h1>
        <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
        
    
        <CardItem
          src={designImg} 
          text="Building an app is a comprehensive process that requires careful planning and collaboration. From concept workshop to launch, we ensure that your app is not only functional but also delivers an excellent user experience."
          label="Building your app"
          path="/solutions"
        />
        
        <CardItem
          src={mockupImg}  
          text="Interactive Experience: Explore previous examples of how our product has been delivered to some of our most valued customers—cases."
          label="Cases"
          path="/cases"
        />
        
        <CardItem
          src={newsImg}  
          text="Stay up to date with the latest updates, announcements, and news related to our products, services, and industry. In this section, we share important information that matters, including new features, upcoming events, and insights into what's happening in the world around us."
          label="News"
          path="/news"
        />
        
        </ul>
        </div>
        </div>
    </div>
  );
}

export default Cards;
