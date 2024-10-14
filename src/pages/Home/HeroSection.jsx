import React from 'react';
import './HeroSection.css'; // Importing the CSS file
import TypingEffect from './TypingEffect'; // Importing the TypingEffect component
import { useMediaQuery } from 'react-responsive';
import Button from '@mui/material/Button';

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
        <div id='home' style={{ background: "radial-gradient(circle, #296ceb, #2556d9)", paddingTop: "100px", height: "100vh", textAlign: "center" }}>
            <div className='hero-container'>
                <div className='left-part'>
                    <img className='floating-img' src="https://test.sknd.in/wp-content/uploads/2024/10/logo-footer.png" alt="Logo" />
                </div>
                <div className='right-part'>
                    {isMobile ? (<h1 style={{ color: "white", textAlign: "left" }}>
                        An Agency That Specialises In <br />
                        <TypingEffect phrases={phrases} />
                    </h1>) : (<h1 style={{ fontSize: "3rem", color: "white" }}>
                        An Agency That<br /> Specialises In <br />
                        <TypingEffect phrases={phrases} />
                    </h1>)}

                </div>
            </div >
            <Button variant="contained" style={{ backgroundColor: "#ff3a47", width: "200px", borderRadius: "20px", height: "50px" }}>Hire Us</Button>
            <div>
                <img src="https://test.sknd.in/wp-content/uploads/2024/10/2-1.png" alt="" className='bg-img hover-image ' />
                <img src="https://test.sknd.in/wp-content/uploads/2024/10/1-1.png" alt="" className='bg-img-2 hover-image-2' />
            </div>
        </div>
    );
}

export default HeroSection;
