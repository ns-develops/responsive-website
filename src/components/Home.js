import React from 'react';
import '../App.css';
import HeroSection from './HeroSection';
import Cards from './Cards';
import Contact from '../Contact';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="home-container">
      <HeroSection />
      <Cards />

      <motion.section
        ref={ref}
        className="about-us"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="section-title">About Us</h1>
        <p className="section-text">
          Welcome to our travel agency – your gateway to unforgettable journeys around the world. Whether you're seeking thrilling hikes through majestic mountains, exploring the vast dunes of the Sahara, or immersing yourself in the heartbeat of vibrant cities, we craft the perfect travel packages for every type of adventurer.
        </p>
        <p className="section-text">
          Our mission is to make travel easy, inspiring, and personal. We take care of all the details – flights, accommodations, guided tours, and unique experiences – so you can focus on enjoying every moment. From solo escapes to group expeditions, we offer custom packages that match your interests, budget, and travel dreams.
        </p>
        <p className="section-text">
          With years of experience and a passion for discovery, we are here to help you explore the world your way. Let us turn your travel ideas into reality – one journey at a time.
        </p>
      </motion.section>
    </div>
  );
}

export default Home;
