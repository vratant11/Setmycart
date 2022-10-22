import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./crousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const Crousel = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/slide1.jpg" alt="Error" />

        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide3.jpg" alt="Error" />

        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/slide2.jpg" alt="Error" />

        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Crousel;
