"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay"; 

import { Autoplay } from "swiper/modules";


interface CategoryTypes {
  _id: string;
  name: string;
  image: string;
}

export default function CategorySwiper({ data }: { data: CategoryTypes[] }) {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="font-semibold mb-2 text-slate-500">
        Shop Popular Categories
      </h1>
      <Swiper
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 7 },
        }}
      >
        {data.map((category) => (
          <SwiperSlide key={category._id}>
            <img
              src={category.image}
              alt={category.name}
              className="h-[150px] mx-auto object-contain"
            />
            <p className="text-center mt-2">{category.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
