import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import WhyUs from './WhyUs';

function Home() {
    return (
        <div>
            <HeroSection />
            <Services />
            <WhyUs />
        </div>
    );
}

export default Home;