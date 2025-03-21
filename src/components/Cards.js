import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Here is how it goes!</h1>
        <div className="cards__container">
        <div className="cards__wrapper">
        <ul className="cards__items">
        <CardItem
        src="/design.jpg" 
        text="Building an app is a comprehensive process that 
        requires careful planning and collaboration. From concept workshop to launch, we ensure that your app is not 
        only functional but also delivers an excellent user experience."
        label="Building your app"
        path="/solutions"
        />
        </ul>
        </div>
        </div>
    </div>
  );
}

export default Cards;
