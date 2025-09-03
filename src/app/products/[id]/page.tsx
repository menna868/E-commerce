import SelectedProduct from '@/Api/SelectedProducts.api';
import Details from '@/app/_components/Details/Details';
import { Button } from '@/components/ui/button';
import React from 'react'

export default async function ProductDetails({ params }:{params:{id:string}}) {
    let{id} =await params;
     let data=await SelectedProduct(id)
  return (
    <>
          <Details data={ data} />
    </>
  );
}
