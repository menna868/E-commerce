import React from "react";
import SingleProduct from "../singleProduct/SingleProduct";
import { ProductTypes } from "@/Types/Product.types";

export default function CategoryProductDetails({data}: {data: ProductTypes[];}) {
  if (!data||data.length === 0) {
    return (
      <h1 className="text-center text-2xl my-12 text-green-500 font-bold">
        No products in this category
      </h1>
    );
  }

  return (
    <div className="flex flex-wrap w-[80%]  mx-auto gap-6  items-center justify-center my-12">
      {data.map((currentProduct: ProductTypes) => (
        <SingleProduct key={currentProduct.id} product={currentProduct} />
      ))}
    </div>
  );
}
