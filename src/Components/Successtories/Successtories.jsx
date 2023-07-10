import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import user1 from "../../Assests/Images/story-pp-4.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import "./Successtories.scss";

export default function Successtories() {
    return (
        <div className="successtories">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="userstories">
                        <div className="top">
                            <img src={user1} alt="" />
                            <div className="name">
                                <p>Shivani Kutiyal</p>
                                <p>29/08/2022</p>
                            </div>
                        </div>
                        <div className="middle">
                            <p>
                                "Guruji Astro helped me find the love of my life. A year ago I was in an extremely toxic relationship. I had come to a point of hating myself and my life. Then one day I decided to consult a tarot reader on Guruji Astro and I also took healing sessions from her. Within a year, I manifested a guy who truly loves, respects, and takes care of me."
                            </p>
                        </div>
                        <div className="star">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="userstories">
                        <div className="top">
                            <img src={user1} alt="" />
                            <div className="name">
                                <p>Shivani Kutiyal</p>
                                <p>29/08/2022</p>
                            </div>
                        </div>
                        <div className="middle">
                            <p>
                                "Guruji Astro helped me find the love of my life. A year ago I was in an extremely toxic relationship. I had come to a point of hating myself and my life. Then one day I decided to consult a tarot reader on Guruji Astro and I also took healing sessions from her. Within a year, I manifested a guy who truly loves, respects, and takes care of me."
                            </p>
                        </div>
                        <div className="star">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="userstories">
                        <div className="top">
                            <img src={user1} alt="" />
                            <div className="name">
                                <p>Shivani Kutiyal</p>
                                <p>29/08/2022</p>
                            </div>
                        </div>
                        <div className="middle">
                            <p>
                                "Guruji Astro helped me find the love of my life. A year ago I was in an extremely toxic relationship. I had come to a point of hating myself and my life. Then one day I decided to consult a tarot reader on Guruji Astro and I also took healing sessions from her. Within a year, I manifested a guy who truly loves, respects, and takes care of me."
                            </p>
                        </div>
                        <div className="star">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="userstories">
                        <div className="top">
                            <img src={user1} alt="" />
                            <div className="name">
                                <p>Shivani Kutiyal</p>
                                <p>29/08/2022</p>
                            </div>
                        </div>
                        <div className="middle">
                            <p>
                                "Guruji Astro helped me find the love of my life. A year ago I was in an extremely toxic relationship. I had come to a point of hating myself and my life. Then one day I decided to consult a tarot reader on Guruji Astro and I also took healing sessions from her. Within a year, I manifested a guy who truly loves, respects, and takes care of me."
                            </p>
                        </div>
                        <div className="star">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="userstories">
                        <div className="top">
                            <img src={user1} alt="" />
                            <div className="name">
                                <p>Shivani Kutiyal</p>
                                <p>29/08/2022</p>
                            </div>
                        </div>
                        <div className="middle">
                            <p>
                                "Guruji Astro helped me find the love of my life. A year ago I was in an extremely toxic relationship. I had come to a point of hating myself and my life. Then one day I decided to consult a tarot reader on Guruji Astro and I also took healing sessions from her. Within a year, I manifested a guy who truly loves, respects, and takes care of me."
                            </p>
                        </div>
                        <div className="star">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="userstories">
                        <div className="top">
                            <img src={user1} alt="" />
                            <div className="name">
                                <p>Shivani Kutiyal</p>
                                <p>29/08/2022</p>
                            </div>
                        </div>
                        <div className="middle">
                            <p>
                                "Guruji Astro helped me find the love of my life. A year ago I was in an extremely toxic relationship. I had come to a point of hating myself and my life. Then one day I decided to consult a tarot reader on Guruji Astro and I also took healing sessions from her. Within a year, I manifested a guy who truly loves, respects, and takes care of me."
                            </p>
                        </div>
                        <div className="star">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="userstories">
                        <div className="top">
                            <img src={user1} alt="" />
                            <div className="name">
                                <p>Shivani Kutiyal</p>
                                <p>29/08/2022</p>
                            </div>
                        </div>
                        <div className="middle">
                            <p>
                                "Guruji Astro helped me find the love of my life. A year ago I was in an extremely toxic relationship. I had come to a point of hating myself and my life. Then one day I decided to consult a tarot reader on Guruji Astro and I also took healing sessions from her. Within a year, I manifested a guy who truly loves, respects, and takes care of me."
                            </p>
                        </div>
                        <div className="star">
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                            <img src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                        </div>
                    </div>
                </SwiperSlide>

               

                

            </Swiper>
        </div>
    );
}
