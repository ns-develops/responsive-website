import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import designImg from './images/hike.jpg';
import mockupImg from './images/city.jpg';
import newsImg from './images/beach.jpg';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Cards() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className='cards'
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1>Here is what we do!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">

            <CardItem
              src={designImg}
              text="Our hiking trips are tailored for every level of adventurer. From forest trails to alpine climbs – experience nature at its best."
              label="Hike"
              path="/solutions"
            />

            <CardItem
              src={mockupImg}
              text="Explore the energy of world-class cities. From iconic sights to hidden gems – discover the city your way."
              label="City"
              path="/cases"
            />

            <CardItem
              src={newsImg}
              text="Relax on the world's most beautiful beaches. Our beach packages are designed for pure peace and unforgettable sunsets."
              label="Beach"
              path="/news"
            />

          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;