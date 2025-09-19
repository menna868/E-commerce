import React from 'react'

export default async function AllBrandApi() {
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);
    let {data} = await res.json();
    
  return data
}
