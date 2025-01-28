import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination} from 'swiper/modules';

import bg from '../assets/michel.png';
import bg2 from '../assets/blue6.png';
import bg3 from '../assets/michel.png';

export default function MO() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <section className="bg-white h-screen flex items-center justify-center relative">
      
      {/* Title on Top Left */}
      <h1 className="absolute top-4 left-4 text-3xl font-bold text-white z-10">Your Title</h1>

      {/* Swiper for Background Images */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, ]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-full absolute top-0 left-0"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${bg2})`, opacity: 0.5 }}></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${bg3})`, opacity: 0.3 }}></div>
        </SwiperSlide>

        {/* Autoplay Progress */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      {/* Text in the Middle */}
      <div className="absolute w-full h-full flex items-center justify-center z-10">
        <h1 className="text-5xl font-bold text-white text-center">Centered Text</h1>
      </div>
    </section>
  );
}
