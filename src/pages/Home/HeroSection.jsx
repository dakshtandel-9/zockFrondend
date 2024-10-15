import React from 'react';
import './HeroSection.css'; // For responsive styling

const HeroSection = () => {
    return (
        <div className="hero-container">
            <video className="hero-video" src="https://test.sknd.in/wp-content/uploads/2024/10/Video-in-Beige-Brown-Modern-Elegance-Style.mp4" autoPlay loop muted playsInline />
            <div className="hero-overlay">
            </div>
        </div>
    );
};

export default HeroSection;
