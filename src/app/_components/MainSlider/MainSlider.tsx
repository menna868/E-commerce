"use client"

import React from 'react'
import img1 from "../../../../public/images-20250826T154007Z-1-001/images/slider-image-1.jpeg"
import img2 from "../../../../public/images-20250826T154007Z-1-001/images/slider-image-2.jpeg"
import img3 from "../../../../public/images-20250826T154007Z-1-001/images/slider-image-3.jpeg"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay } from 'swiper/modules'

export default function MainSlider() {
  return (
    <>
      <div className="w-[80%] mx-auto  my-4 flex">
        <div className="w-full lg:w-3/4">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
                      modules={[Autoplay]}
autoplay={{delay:2000}}                  >
            <SwiperSlide className='w-full'>
              <Image
                src={img1}
                alt="slider1"
                className="object-cover w-full h-[200px] lg:h-[400px]"
              ></Image>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Image
                src={img2}
                alt="slider2"
                className="object-cover w-full h-[200px] lg:h-[400px]"
              ></Image>
            </SwiperSlide>
            <SwiperSlide> <Image
              src={img3}
              alt="slider3"
              className="object-cover w-full   h-[200px] lg:h-[400px]"
            ></Image></SwiperSlide>
           
          </Swiper>
          {/* <Image src={img1} alt="slider1" className="object-cover w-full h-[400px]"></Image> */}
        </div>
        <div className="w-1/2 lg:w-1/4">
          <div>
            <Image
              src={img2}
              alt="slider2"
              className="object-cover w-full lg:h-[200px] h-[100px]"
            ></Image>
          </div>
          <div>
            <Image
              src={img3}
              alt="slider3"
              className="object-cover w-full lg:h-[200px] h-[100px]"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
