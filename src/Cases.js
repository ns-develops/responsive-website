import React from "react";
import './App.css';
import casesImage from './components/images/cases3.png';

export default function Cases() {
    return (
        <div className="cases">
      
            <div className="image-container">
    
                <img src={casesImage} alt="Top" className="centered-image" />
            </div>

         
            <div className="cases-container">
                <div className="case-box">
                    <h2>Case 1</h2>
                    <p>This is a description of the first case. It could be a client you worked with, or a project you completed.</p>
                </div>
                <div className="case-box">
                    <h2>Case 2</h2>
                    <p>This is a description of the second case. It could highlight a successful product launch or design overhaul.</p>
                </div>
                <div className="case-box">
                    <h2>Case 3</h2>
                    <p>This is a description of the third case. Showcase the challenges you solved for your client or project here.</p>
                </div>
                <div className="case-box">
                    <h2>Case 4</h2>
                    <p>This is a description of the fourth case. This could include metrics or results that demonstrate success.</p>
                </div>
            </div>
        </div>
    );
}
