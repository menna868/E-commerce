import SelectedProduct from '@/Api/SelectedProducts.api';
import Details from '@/app/_components/Details/Details';
import SingleProduct from '@/app/_components/singleProduct/SingleProduct';
import { relatedproducts } from '@/productcategory/relatedproductts';
import { ProductTypes } from '@/Types/Product.types';
import React from 'react'

export default async function ProductDetails({ params }:{params:Promise<{id:string}>}) {
    let{id} =await params;
  let data = await SelectedProduct(id)
  if(!data) return <h1>No data here</h1>
  let relatedRes = await relatedproducts(data.category._id);
  let related = relatedRes.data;

  
  return (
    <>
      <Details data={data} />
      <div className="flex flex-wrap  w-[80%] mx-auto  my-7">
        {related.map((currentProduct: ProductTypes) => (
          <SingleProduct key={currentProduct.id} product={currentProduct} />
        ))}
      </div>
    </>
  );
}
