import React, { useEffect, useState } from 'react';

const TypingEffect = ({ phrases }) => {
    const [index, setIndex] = useState(0);
    const [currentPhrase, setCurrentPhrase] = useState('');

    useEffect(() => {
        const phrase = phrases[index];
        let charIndex = 0;

        const typingInterval = setInterval(() => {
            setCurrentPhrase(phrase.substring(0, charIndex + 1));
            charIndex++;

            if (charIndex === phrase.length) {
                clearInterval(typingInterval);
                setTimeout(() => {
                    setIndex((prev) => (prev + 1) % phrases.length); // Loop through phrases
                    setCurrentPhrase(''); // Reset for the next phrase
                }, 2000); // Pause before starting the next phrase
            }
        }, 100); // Typing speed

        return () => clearInterval(typingInterval); // Cleanup interval on component unmount
    }, [index, phrases]);

    return <span>{currentPhrase}</span>;
};

export default TypingEffect;
