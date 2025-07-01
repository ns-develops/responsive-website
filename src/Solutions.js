import React from "react";
import './App.css';

export default function Solutions() {
    return (
        <div className="solutions">
            <h1>Solutions</h1>
            <div className="solutions-container">
                <div className="solution-box">
                    <h2>Planning</h2>
                    <p>We help you carefully plan your travel with experience and guidenece that ensure a smooth travel process and successful journey.</p>
                </div>
                <div className="solution-box">
                    <h2>Groups</h2>
                    <p>We create travel solutions that bring people together, enhancing collaboration and shared experiences.</p>
                </div>
                <div className="solution-box">
                    <h2>Solo Travel</h2>
                    <p>Focus on your journey with our tailored solutions supporting unique and individual travel adventures.</p>
                </div>
                <div className="solution-box">
                    <h2>Insurance</h2>
                    <p>We package saftey, friendly and secure travel solutions in insurance that provide peace of mind and easy management.</p>
                </div>
            </div>
        </div>
    );
}