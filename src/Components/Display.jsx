import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./display.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function Display() {
  return (
    <div className="display">
      <h1>Thumbnail Cards</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.asus.com/media/Odin/Websites/global/Series/9.png"
            alt="Error"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Error"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.asus.com/media/Odin/Websites/global/Series/9.png"
            alt="Error"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Error"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.asus.com/media/Odin/Websites/global/Series/9.png"
            alt="Error"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Error"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
