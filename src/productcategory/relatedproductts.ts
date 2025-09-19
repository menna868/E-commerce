"use server";
export async function relatedproducts(catId:string) {
let res=await fetch(
      `https://ecommerce.routemisr.com/api/v1/products?category[in]=${catId}`
    );
    let payload =await res.json();
    return payload; 
}