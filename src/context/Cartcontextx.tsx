"use client";
import getLoggedUserCart from "@/CartActions/getUserCart.action";
import React, {
  createContext,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface CartContextType {
  numberOfCartItems: number;
  setnumberOfCartItems: Dispatch<SetStateAction<number>>;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export default function CartContextProvider({ children }: CartProviderProps) {
  const [numberOfCartItems, setnumberOfCartItems] = useState<number>(0);

  async function getUserCart() {
    try {
      let res = await getLoggedUserCart();
      if (res.status === "success") {
        let sum = 0;

        res.data.products.forEach((product: { count: number }) => {
          sum += product.count;
        });
        setnumberOfCartItems(sum);
      } else {
        setnumberOfCartItems(0); 
      }
    } catch (err) {
      console.log("not logged");
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  return (
    <CartContext.Provider value={{ setnumberOfCartItems, numberOfCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
