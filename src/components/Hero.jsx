import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { SiToyota } from "react-icons/si";
import heroimg from "../assets/heroimg.png"
import  "./Hero.css"

const Hero = () => {
  return (
    <div className=" flex justify-center items-center md:px-0 px-4 flex-col pb-12">
       <div className='wrapper container gap-8 flex md:flex-row flex-col md:pt-12 pt-2 '>
          {/* Hero text */}
          <div className='w-full md:w-1/2 md:p-3 flex items-center'>
            <Swiper pagination={{clickable: true}} modules={[Pagination]} className="mySwiper py-12">
             <SwiperSlide className='w-64 h-full flex items-center bg-white'>
                <div className='flex flex-col gap-8'>
                  <h2 className='text-6xl font-bold text-[#e63946]'>Car Rent For you</h2>
                  <p className='md:w-[90%] text-lg text-black/90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam corporis assumenda libero quis a!</p>
                  <div className='flex gap-4 items-center justify-center'>
                    <button className='border-2 border-[#e63946] bg-white font-semibold py-2 text-sm sm:text-md sm:py-3 px-8 text-[#e63946]'>Read More </button>
                    <button className='text-white font-semibold py-2 text-sm sm:text-md sm:py-3 px-8 bg-[#e63946]'>Contact Us</button>
                  </div>
                </div>
             </SwiperSlide>
             <SwiperSlide className='w-64 h-full flex items-center bg-white'>
                <div className='flex flex-col gap-8'>
                  <h2 className='text-6xl font-bold text-[#e63946]'>Car Rent For you</h2>
                  <p className='md:w-[90%] text-lg text-black/90'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam corporis assumenda libero quis a!</p>
                  <div className='flex gap-4'>
                    <button className='border-2 border-[#e63946] bg-white font-semibold py-3 px-8 text-[#e63946]'>Read More </button>
                    <button className='text-white font-semibold py-3 px-8 bg-[#e63946]'>Contact Us</button>
                  </div>
                </div>
             </SwiperSlide>
            </Swiper>
          </div>


          {/* Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
             <img src={heroimg} alt="" />
          </div>
      </div>
      {/* <Swiper
      slidesPerView={3}
      spaceBetween={10}
      navigation
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="mySwiper container shadow w-full p-8 gap-8 h-32 rounded-2xl"
    >
      <SwiperSlide className='flex justify-center gap-4 items-center shadow-lg text-lg font-semibold py-3 px-8 rounded-2xl'>
        <SiToyota />
        <span>TOYOTA</span>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center gap-4 items-center shadow-lg text-lg font-semibold py-3 px-8 rounded-2xl'>
        <SiToyota />
        <span>TOYOTA</span>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center gap-4 items-center shadow-lg text-lg font-semibold py-3 px-8 rounded-2xl'>
        <SiToyota />
        <span>TOYOTA</span>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center gap-4 items-center shadow-lg text-lg font-semibold py-3 px-8 rounded-2xl'>
        <SiToyota />
        <span>TOYOTA</span>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center gap-4 items-center shadow-lg text-lg font-semibold py-3 px-8 rounded-2xl'>
        <SiToyota />
        <span>TOYOTA</span>
      </SwiperSlide>
      <SwiperSlide className='flex justify-center gap-4 items-center shadow-lg text-lg font-semibold py-3 px-8 rounded-2xl'>
        <SiToyota />
        <span>TOYOTA</span>
      </SwiperSlide>
    </Swiper> */}
    </div>
  );
};

export default Hero;