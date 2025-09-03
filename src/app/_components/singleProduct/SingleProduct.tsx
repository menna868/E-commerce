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
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ProductTypes } from '@/Types/Product.types';
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
            <Button className="cursor-pointer bg-green-500">
              Add to Cart
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
