import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch } from '@fortawesome/free-brands-svg-icons'; // Importera faTwitch-ikonen

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Your company logo <FontAwesomeIcon icon={faTwitch} /> {/* Använd ikonen här */}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
