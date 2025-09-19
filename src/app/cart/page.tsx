"use client";
import deleteCartItem from "@/CartActions/deleteCartItem";
import getLoggedUserCart from "@/CartActions/getUserCart.action";
import UpdateCartQuantity from "@/CartActions/UpdateCartQuantity.action";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import clearCartItem from "@/CartActions/clearCartItem.action";
import { CartContext } from "@/context/Cartcontextx";
import { cartProductTypes } from "@/Types/cart.types";
import Link from "next/link";

export default function Cart() {
   const cartContext = useContext(CartContext);
   if (!cartContext) {
     throw new Error("Cart must be used inside CartContextProvider");
   }
  const { numberOfCartItems, setnumberOfCartItems } = cartContext;
  const [isLoading, setisLoading] = useState(true);
  const [products, setproducts] = useState([]);
  const [removeDisable, setremoveDisable] = useState(false);
  const [updateDisabled, setupdateDisabled] = useState(false);
  const [udateLoading, setudateLoading] = useState(false);
  const [currentId, setcurrentId] = useState("");
  const [total, settotal] = useState(0);
  const [CartId, setCartId] = useState("");
  async function getUsercart() {
    try {
      let res = await getLoggedUserCart();
      
      if (res.status === "success") {
        setCartId( res.data._id);
        settotal(res.data.totalCartPrice);
        setproducts(res.data.products);
        setisLoading(false);
      }
    } catch (err) {
      console.log(err);
      setisLoading(false);
    }
  }
  async function deleteProducct(id: string) {
    setremoveDisable(true);
    setupdateDisabled(true);
    let res = await deleteCartItem(id);
    if (res.status === "success") {
      setproducts(res.data.products);
      toast.success("Product Deleted Successfully", {
        position: "top-center",
        duration: 3000,
      });
      let sum = 0;
      res.data.products.forEach((product: cartProductTypes) => {
        sum += product.count;
        setnumberOfCartItems(sum);
      });
getUsercart();
      setremoveDisable(false);
          setupdateDisabled(false);

    } else {
      toast.error("Can't delete this product now!", {
        position: "top-center",
        duration: 3000,
      });
      setremoveDisable(false);
          setupdateDisabled(false);

    }
  }
  async function updateProductCount(id: string, count: string,sign:string) {
    setcurrentId(id);
    setudateLoading(true);
    setupdateDisabled(true);
    setremoveDisable(true);
    let res = await UpdateCartQuantity(id, count);
    if (res.status === "success") {
      setproducts(res.data.products);
      toast.success("Product count Updated Successfully", {
        position: "top-center",
        duration: 3000,
      });

      if (sign === "+") {
        setnumberOfCartItems(numberOfCartItems+1)
      }
      else{
        setnumberOfCartItems(numberOfCartItems-1)
      }
      getUsercart();
      setupdateDisabled(false);
      setudateLoading(false);
      setremoveDisable(false);
    } else {
      toast.error("Can't Update product count now!", {
        position: "top-center",
        duration: 3000,
      });
      setupdateDisabled(false);
      setudateLoading(false);
      setremoveDisable(false);

    }
  }
  async function clearCart() {
    let res= await clearCartItem();
    if (res.message === "success") {
      getUsercart();
    }
    setnumberOfCartItems(0);
   }
  

  useEffect(() => {
    getUsercart();
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
                Shop Cart :
              </h2>
              <span>
                <span className="text-green-500 font-semibold">
                  TotalPrice:{" "}
                </span>
                {total} Egp
              </span>
            </div>
            <Link href={`/CheckOut/${CartId}`}>
              <Button className="bg-green-500 w-full my-4 cursor-pointer">
                CheckOut
              </Button>
            </Link>
          </div>
          <div className="space-y-8 ">
            {products.map((product: cartProductTypes) => (
              <div
                key={product._id}
                className="flex flex-col md:flex-row items-center md:items-center justify-between gap-4 bg-white dark:bg-gray-800 shadow rounded-lg p-4"
              >
                <div>
                  <img
                    src={product.product.imageCover}
                    alt={product.product.title}
                    className="w-40 h-40 object-contain mx-auto"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {product.product.title}
                  </h3>
                  <p className="text-gray-500">
                    {product.price * product.count} EGP
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3">
                  <button
                    disabled={updateDisabled}
                    onClick={() =>
                      updateProductCount(
                        product.product.id,
                        `${product.count - 1}`,
                        "-"
                      )
                    }
                    className="h-6 w-6 flex items-center justify-center border rounded-full cursor-pointer disabled:bg-slate-300"
                  >
                    -
                  </button>
                  {product.product.id === currentId ? (
                    udateLoading ? (
                      <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                      <span>{product.count}</span>
                    )
                  ) : (
                    <span>{product.count}</span>
                  )}
                  <button
                    disabled={updateDisabled}
                    onClick={() =>
                      updateProductCount(
                        product.product.id,
                        `${product.count + 1}`,
                        "+"
                      )
                    }
                    className="h-6 w-6 flex items-center justify-center border rounded-full cursor-pointer disabled:bg-slate-300"
                  >
                    +
                  </button>
                </div>

                <div>
                  <button
                    disabled={removeDisable}
                    onClick={() => deleteProducct(product.product.id)}
                    className="text-red-600 font-semibold disabled:opacity-50 cursor-pointer disabled:bg-slate-900 disabled:rounded-2xl disabled:text-white disabled:p-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="bg-red-600 hover:bg-red-800 cursor-pointer my-4"
            onClick={() => clearCart()}
          >
            clear Cart Item
          </Button>
        </div>
      ) : (
        <h1 className="my-12 text-3xl text-center text-green-500 font-bold capitalize">
          Your cart is empty
        </h1>
      )}
    </>
  );
}
