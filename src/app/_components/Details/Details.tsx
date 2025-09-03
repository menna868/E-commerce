import React from 'react'
import { Button } from "@/components/ui/button";
import { ProductTypes } from '@/Types/Product.types';

export default function Details({data}:{data:ProductTypes}) {
  return (
    <>
      <div className="container w-full  lg:w-[80%] mx-auto p-4 flex flex-col lg:flex-row items-center ">
        <div className="w-1/4 m-4">
          <img src={data.imageCover} alt="image cover" className="w-full" />
        </div>
        <div className="lg:w-3/4 w-full">
          <h1 className="text-2xl font-semibold mb-2 ">{data.title}</h1>
          <p className="text-sm text-slate-500 mb-2">{data.description}</p>
          <p className="text-green-400 mb-2">{data.category.name}</p>
          <div className="flex items-center justify-between text-sm mb-4 text-slate-500">
            <span>{data.price}EGP</span>
            <span>
              {data.ratingsAverage}
              <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
            </span>
          </div>
          <Button className="cursor-pointer bg-green-500 w-full ">
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
}
