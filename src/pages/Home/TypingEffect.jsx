import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Keep the same CSS

const TypingEffect = ({ phrases }) => {  // Receive phrases as props
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150); // Typing speed

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];
        let timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
                if (displayedText === '') {
                    setIsDeleting(false);
                    setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                }
            }, speed);
        } else {
            timeout = setTimeout(() => {
                setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
                if (displayedText === currentPhrase) {
                    setIsDeleting(true);
                    setSpeed(200); // Speed for deletion
                }
            }, speed);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentPhraseIndex, phrases, speed]);

    return (
        <span className="typewriter-text" style={{ fontSize: "60px" }}>{displayedText}</span>
    );
};

export default TypingEffect;
