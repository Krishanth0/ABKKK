import React, { useState, useEffect } from 'react';

const Anneback = () => {
  const fullText = `What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingSpeed = 50; // Adjust typing speed in milliseconds
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [fullText]);

  return (
    <section className="bg-[#E2E2E1] h-screen flex items-center justify-center p-8">
      <div className="text text-black text-lg leading-relaxed max-w-3xl font-serif">
        {displayedText}
      </div>
    </section>
  );
};

export default Anneback;
