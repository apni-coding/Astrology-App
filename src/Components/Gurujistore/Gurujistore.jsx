import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Gurujistore.scss"
import Gurujistoresingle from "./Gurujistoresingle"
// import required modules
import { HashNavigation, Pagination, Navigation } from 'swiper/modules';


export default function Gurujistore() {
  return (
   <div className="gurujistore">
    <h1>Guru ji Store</h1>
    <div className="singlegurujistore">
    <Swiper
       spaceBetween={30}
       slidesPerView={4}
       hashNavigation={{
         watchState: true,
       }}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Pagination, Navigation, HashNavigation]}
       className="mySwiper"
      >
        <SwiperSlide><Gurujistoresingle/></SwiperSlide>
        <SwiperSlide><Gurujistoresingle/></SwiperSlide>
        <SwiperSlide><Gurujistoresingle/></SwiperSlide>
        <SwiperSlide><Gurujistoresingle/></SwiperSlide>
        <SwiperSlide><Gurujistoresingle/></SwiperSlide>
        <SwiperSlide><Gurujistoresingle/></SwiperSlide>
        <SwiperSlide><Gurujistoresingle/></SwiperSlide>
        <SwiperSlide><Gurujistoresingle/></SwiperSlide>
        <SwiperSlide><Gurujistoresingle/></SwiperSlide>
        <SwiperSlide><Gurujistoresingle/></SwiperSlide>
       
      </Swiper>
       
        
    </div>
   </div>
  )
}
