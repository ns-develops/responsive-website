import React from "react";
import './App.css';

export default function Solutions() {
    return (
        <div className="solutions">
            <h1>Solutions</h1>
            <div className="solutions-container">
                <div className="solution-box">
                    <h2>Web Design</h2>
                    <p>We create modern and responsive websites to enhance your online presence.</p>
                </div>
                <div className="solution-box">
                    <h2>Apps</h2>
                    <p>We build mobile apps that provide great user experiences on both iOS and Android.</p>
                </div>
                <div className="solution-box">
                    <h2>MVP</h2>
                    <p>We help you launch your product quickly with a minimum viable product that proves your concept.</p>
                </div>
                <div className="solution-box">
                    <h2>UI/UX Design</h2>
                    <p>We design beautiful user interfaces and create intuitive user experiences to engage your audience.</p>
                </div>
            </div>
        </div>
    );
}
