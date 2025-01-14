import React, { useEffect, useState } from 'react';
import './header.css';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section name='header' className='relative flex flex-col items-center justify-center bg-black h-screen starry-background'>
      <h1 className='text-5xl font-bold text-white'>ANNE BACK</h1>

      <div
        className={`absolute bottom-5 right-5 text-white text-lg font-semibold transition-all duration-300 ease-in-out ${
          scrollPosition > 100 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Scroll Down
      </div>
    </section>
  );
}

export default Header;
