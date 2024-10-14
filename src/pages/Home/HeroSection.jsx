import React from 'react';
import './HeroSection.css';
import TypingEffect from './TypingEffect'; // Import TypingEffect component

function HeroSection() {
    const phrases = [
        "Web Development",
        "Graphic Designing",
        "2D Animation",
        "Branding",
        "Management",
        "Web Softwares ",
    ];

    return (
        <div className='hero-container'>
            <div className='left-part'>
                <img src="https://test.sknd.in/wp-content/uploads/2024/10/logo-footer.png" alt="" />
            </div>
            <div className='right-part'>
                <h1 className='ps-5'>An Agency That
                    Specialised In <br />
                    <TypingEffect phrases={phrases} /> {/* Pass phrases as props */}
                </h1>
            </div>
        </div>
    );
}

export default HeroSection;
