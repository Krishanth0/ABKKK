import React, { useState, useEffect } from 'react';
import image1 from '../assets/Monograme.png'; // Import the logo
import video from '../assets/EXTRAIT2.mp4'; // Import the video
import './home.css';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) { // Adjust the scroll position trigger for minimizing
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen to the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
    name="home" 
    className="home-container">
      {/* Fullscreen Video */}
      <video
        autoPlay
        loop
        muted
        className={`video-background ${isScrolled ? 'minimized' : ''}`}
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Navbar */}
      <nav className="navbar">
        <img src={image1} alt="Monogram" className="navbar-logo" />
      </nav>

      {/* Content */}
      <div className="content">
        <h1>Welcome to the Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
