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
import { GetProducts } from '@/Api/product.api';
import SingleProduct from '../_components/singleProduct/SingleProduct';
import { ProductTypes } from '@/Types/Product.types';
export default async function Products() {
let data=await GetProducts()

  
  return (
    <>
      <div className="flex flex-wrap  w-[80%] mx-auto  my-7">
        {data.map((currentProduct: ProductTypes) => (
          <SingleProduct key={currentProduct.id} product={currentProduct} />
        ))}
      </div>
    </>
  );
}
