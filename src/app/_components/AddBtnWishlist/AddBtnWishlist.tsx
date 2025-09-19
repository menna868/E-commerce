"use client"
import { Button } from '@/components/ui/button'
import AddToWishlist from '@/WishlistActions/AddToWishlist.action';
import React from 'react'
import { toast } from 'sonner';

export default function AddBtnWishlist({id}:{id:string}) {
    async function AddProductToWishlist(id:string){
        let res = await AddToWishlist(id);
        console.log(res);
        if (res.status === "success") {
            toast.success("product Add To WishList Successfully ❤️", {
                duration: 3000,
                position:"top-center",
            }) 
        }
        else {
             toast.error("Product Can't be added now!", {
               duration: 3000,
               position: "top-center",
             }); 
        }
    }
  return (
    <Button
      onClick={() => AddProductToWishlist(id)}
      className=" bg-white hover:bg-white cursor-pointer "
    >
      <i className="fa-solid fa-heart fa-xl text-red-600 transition-colors"></i>
    </Button>
  );
}
