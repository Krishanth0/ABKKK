import React, { useEffect, useState } from 'react';
import './header.css';

function Header() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Timer pour afficher le bouton après 3 secondes
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  return (
    <section
      name='header'
      className='relative flex flex-col items-center justify-center bg-black h-screen starry-background'
    >
      <h1 className='text-5xl font-bold text-white'>ANNE BACK</h1>

      <div
        className={`transition-opacity duration-1000 ease-in-out mt-8 ${
          showButton ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          className='text-white border-2 border-white px-6 py-3 rounded-lg font-semibold bg-transparent hover:bg-white hover:text-black transition-colors duration-300'
        >
          Click Me
        </button>
      </div>
    </section>
  );
}

export default Header;
