import React, { useEffect, useState } from 'react';
import './welcome.css';

function Welcome() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const positions = ['top', 'left', 'right', 'bottom'];
  const texts = [
    'Welcome to the Experience',
    'Explore Creativity',
    'Unleash Your Potential',
    'Let’s Get Started',
  ];

  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const timer = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
      }, 2000); // Change de position toutes les 2 secondes
      return () => clearTimeout(timer);
    } else {
      setShowButton(true); // Affiche le bouton après les textes
    }
  }, [currentTextIndex]);

  return (
    <section
      name="welcome"
      className="relative flex flex-col items-center justify-center bg-black h-screen starry-background"
    >
      {/* Textes animés en différentes positions */}
      {texts.map((text, index) => (
        <div
          key={index}
          className={`absolute text-white text-3xl font-bold opacity-0 fade-in ${positions[index]}`}
          style={{
            animationDelay: `${index * 2}s`,
          }}
        >
          {text}
        </div>
      ))}

      {showButton && (
        <button
          className="text-white border-2 border-white px-6 py-3 rounded-lg font-semibold bg-transparent hover:bg-white hover:text-black transition-colors duration-50 opacity-0 fade-in"
          style={{
            animationDelay: `${texts.length * 2}s`, 
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Get Started
        </button>
      )}
    </section>
  );
}

export default Welcome;
