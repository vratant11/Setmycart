import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./crousel.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
const Crousel = () => {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 3500 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04073347/Laptop_undrey_getty.jpg" alt="Error" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.thoughtco.com/thmb/NRuMaaVBhsrz3AyDBweiPAZpYfw=/1500x844/smart/filters:no_upscale()/GettyImages-909076272-5c48c8c146e0fb0001891c02.jpg"
            alt="Error"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Crousel;
