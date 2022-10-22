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
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 1500 }}
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
            src="https://www.cnet.com/a/img/resize/08c09e79666e0c6db8655052ab1b34a46783484c/hub/2018/03/02/15a1ce4e-1af7-481d-8a7f-7c84e53615c9/01-elac-debut-2-0-6-2.jpg?auto=webp&fit=crop&height=675&width=1200"
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
            src="https://m.media-amazon.com/images/I/711yJipUQVL._SL1500_.jpg"
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
            src="https://m.media-amazon.com/images/I/71J4Q8zM72L._SX450_.jpg"
            alt="Error"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://m.media-amazon.com/images/I/61DjwgS4cbL._SX355_.jpg"
            alt="Error"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.reliancedigital.in/medias/HP-6VY96AA-Wired-Mouse-492850583-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODA5M3xpbWFnZS9qcGVnfGltYWdlcy9oYmIvaDZiLzk4NDE5OTExNTU3NDIuanBnfGQ0NzMyODY1ZDNlMTllZTg3N2Q3M2QzNjVmMWY4N2EzZjc2YzgxYzI3NzZiNzU0MTY5MTRkZDRjZDc2MjNmNWI"
            alt="Error"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
