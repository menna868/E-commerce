"use client";
import AddToCart from "@/CartActions/addToCartAction";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/Cartcontextx";
import React, { useContext } from "react";
import { toast } from "sonner";
type AddBtnProps = {
  id: string;
  onClick?: () => void; 
};
export default function Cart({ id, onClick }: AddBtnProps) {
  const cartContext = useContext(CartContext);
   if (!cartContext) {
     throw new Error("Cart must be used inside CartContextProvider");
   }
  const { numberOfCartItems, setnumberOfCartItems } = cartContext;
  async function checkAddProduct(id: string) {
    let res = await AddToCart(id);
    console.log(res);
    if (res.status === "success") {
      toast.success("Product Added Successfully👌", {
        duration: 3000,
        position: "top-center",
      });
      setnumberOfCartItems(numberOfCartItems + 1); 
      if (onClick) onClick();
    } else
      toast.error(res.message, {
        duration: 3000,
        position: "top-center",
      });
  }
  return (
    <>
      {" "}
      <Button
        onClick={() => checkAddProduct(id)}
        className="  cursor-pointer bg-green-500"
      >
        Add to Cart
      </Button>
    </>
  );
}
