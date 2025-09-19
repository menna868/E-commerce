"use client";
import getLoggedUserWishlist from "@/WishlistActions/getUserWishlist.action";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import deleteWishlistItem from "@/WishlistActions/DeleteWishlistItem.action";
import { toast } from "sonner";
import { wishlistTypes } from "@/Types/wishlist.types";
import AddBtn from "../_components/AddBtn/AddBtn";

export default function Wishlist() {
  const [products, setproducts] = useState([]);
    const [removeDisable, setremoveDisable] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  async function getUserWishlist() {
    try {
      let res = await getLoggedUserWishlist();
      console.log(res);
      if (res.status === "success") {
        setproducts(res.data);
setisLoading(false);      }
    } catch (err) {
      console.log(err);
      setisLoading(false);  
    }
  }
   async function deleteProducct(id: string) {
     setremoveDisable(true);
     let res = await deleteWishlistItem(id);
     if (res.status === "success") {
       setproducts(res.data);
       toast.success("Product Deleted Successfully", {
         position: "top-center",
         duration: 3000,
       });
     
       getUserWishlist();
      
     } else {
       toast.error("Can't delete this product now!", {
         position: "top-center",
         duration: 3000,
       });
       setremoveDisable(false);
       
     }
   }
   
  useEffect(() => {
    getUserWishlist();
  }, []);
    if (isLoading) {
      return (
        <h1 className="text-center text-4xl text-green-500 font-bold my-12">
          loading
          <i className="fa fas-brand fa-spinner"></i>
        </h1>
      );
    }
  return (
    <>
      {products.length > 0 ? (
        <div className="container w-full lg:w-2/3 mx-auto my-12 p-4">
          <div className="flex items-center justify-between my-4 ">
            <div>
              <h2 className="font-bold text-3xl text-green-500 my-4">
                My Wishlist :
              </h2>
            </div>
          </div>
          <div className="space-y-8 ">
            {products.map((product: wishlistTypes) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 bg-white dark:bg-gray-800 shadow rounded-lg p-4"
              >
                <div>
                  <img
                    src={product.imageCover}
                    alt={product.title}
                    className="w-40 h-40 object-contain mx-auto"
                  />
                </div>

                <div className="flex-1 text-center md:text-left my-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {product.title}
                  </h3>
                  <p className="text-gray-500">{product.price} EGP</p>
                  <button
                    onClick={() => deleteProducct(product._id)}
                    className="text-red-600 font-semibold disabled:opacity-50 cursor-pointer disabled:bg-slate-900 disabled:rounded-2xl disabled:text-white disabled:p-2"
                  >
                    Remove
                  </button>
                </div>
                <AddBtn
                  id={product.id}
                  onClick={() => deleteProducct(product.id)}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="my-12 text-3xl text-center text-green-500 font-bold capitalize">
          Your cart is empty
        </h1>
      )}
    </>
  );
}
