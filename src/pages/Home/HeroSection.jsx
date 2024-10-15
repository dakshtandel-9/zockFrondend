import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // For responsive styling

const HeroSection = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Define mobile as width <= 768px
        };

        handleResize(); // Check on mount
        window.addEventListener('resize', handleResize); // Add listener for resize events

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up listener on unmount
        };
    }, []);

    return (
        <div className="hero-container">
            <video
                className="hero-video"
                src={isMobile
                    ? "https://test.sknd.in/wp-content/uploads/2024/10/Video-in-Beige-Brown-Modern-Elegance-Style-Mobile-Video-2.mp4"
                    : "https://test.sknd.in/wp-content/uploads/2024/10/Video-in-Beige-Brown-Modern-Elegance-Style.mp4"
                }
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="hero-overlay">
            </div>
        </div>
    );
};

export default HeroSection;
