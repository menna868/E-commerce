
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from 'next/link';
import { ProductTypes } from '@/Types/Product.types';
import AddBtn from '../AddBtn/AddBtn';
import AddBtnWishlist from '../AddBtnWishlist/AddBtnWishlist';
export default function SingleProduct({product}:{product:ProductTypes}) {
  return (
    <>
      <div className="w-full  md:1/2 lg:w-1/4 p-4 ">
        <div>
          <Card className="p-2">
            <Link href={`/products/${product.id}`}>
              <CardHeader>
                <CardTitle>
                  <img
                    src={product.imageCover}
                    alt="cover"
                    className="w-full"
                  />
                </CardTitle>
                <CardDescription className="text-green-400">
                  {product.category.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="line-clamp-1">
                <p>{product.title}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between text-slate-500">
                <span>{product.price}EGP</span>
                <span>
                  {product.ratingsAverage}
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B" }}
                  ></i>
                </span>
              </CardFooter>
            </Link>
            <div className='flex justify-between mt-2 p-4'>
              <AddBtn id={product.id} />
            <AddBtnWishlist id={product.id} />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
