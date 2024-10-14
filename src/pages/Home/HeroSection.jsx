import React from 'react';
import './HeroSection.css'; // Importing the CSS file
import TypingEffect from './TypingEffect'; // Importing the TypingEffect component
import { useMediaQuery } from 'react-responsive';

function HeroSection() {
    const phrases = [
        "Web Development",
        "Graphic Designing",
        "2D Animation",
        "Branding",
        "Web Softwares",
    ];

    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div style={{ background: "radial-gradient(circle, #296ceb, #2556d9)", paddingTop: "100px", height: "100vh" }}>
            <div className='hero-container'>
                <div className='left-part'>
                    <img src="https://test.sknd.in/wp-content/uploads/2024/10/logo-footer.png" alt="Logo" />
                </div>
                <div className='right-part'>
                    {isMobile ? (<h1>
                        An Agency That Specialises In <br />
                        <TypingEffect phrases={phrases} />
                    </h1>) : (<h1 style={{ fontSize: "3rem" }}>
                        An Agency That<br /> Specialises In <br />
                        <TypingEffect phrases={phrases} />
                    </h1>)}

                </div>
            </div >
        </div>
    );
}

export default HeroSection;
