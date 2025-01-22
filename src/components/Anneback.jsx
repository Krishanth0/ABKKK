import React, { useState, useEffect } from 'react';
import face from '../assets/blue6.png'; 

const Anneback = () => {
  const fullText = `What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.`;

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
    <section className="bg-[#E2E2E1] h-screen flex items-center justify-between p-8">

      <div className="flex-1 flex justify-center items-center">
        <img src={face} alt="Face" className='h-screen w-screen' />
      </div>

      <div className=" text text-black text-lg leading-relaxed max-w-[500px] font-serif">
        {displayedText}
      </div>
    </section>
  );
};

export default Anneback;
