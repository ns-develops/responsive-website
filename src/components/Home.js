import React from 'react';
import '../App.css';
import HeroSection from './HeroSection';
import Cards from './Cards';


function Home() {
  return (
    <div>
        <HeroSection/>
        <Cards/>
      <h1>Välkommen till hemsidan!</h1>
      <p>Här är startsidan.</p>
    </div>
  );
}

export default Home;