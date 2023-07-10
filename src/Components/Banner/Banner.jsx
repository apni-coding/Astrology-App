import React from 'react'
import "./Banner.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, } from 'react'
import banner1 from "../../Assests/Images/banner1.jpg"
import banner2 from "../../Assests/Images/banner2.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="banner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{ prevEl: null, nextEl: null }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="banner1" /></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <div className="bannerright">
        <div className="bannertoptxt">
          <p>Get</p>
          <h2>Solutions to all your Problems with the Help of the Verified Astrologers</h2>
        </div>
        <div className="bannermid">
          <p>Guruji Astro has all solutions to your life problems. You can take a 24x7 online Consult with our verified astrologers via video call or chat.</p>
        </div>
        <div className="bannermidtxt">
          <div className="astrologersplus">
            <h1>400+</h1>
            <p>Astrologers</p>
          </div>
          <div className="todayusers">
            <h1>20K +</h1>
            <p>Today Users</p>
          </div>
          <div className="totalusers">
            <h1>10M +</h1>
            <p>total Users</p>
          </div>
          
        </div>
        <div className="bottombtn">
          <button>Talk to Astrologer</button>
        </div>
      </div>
    </div>
  )
}
