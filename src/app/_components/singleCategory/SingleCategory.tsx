
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
import { CategoryTypes } from '@/Types/Category.types';
export default function SingleCategory({category}:{category:CategoryTypes}) {
  return (
    <>
      <div className="w-full   md:w-1/3 p-4 ">
        <div>
          <Card className=" hover:shadow-xl hover:shadow-green-500 transition-all duration-300">
            <Link href={`/category/${category._id}`}>
              <CardHeader className='text-center'>
                <CardTitle>
                  <img
                    src={category.image}
                    alt="cover"
                    className="w-full h-[350px] object-cover"
                  />
                </CardTitle>
                <CardDescription className="text-green-500 font-bold text-2xl m-4">
                  {category.name}
                </CardDescription>
              </CardHeader>
        
            </Link>
          
          </Card>
        </div>
      </div>
    </>
  );
}
