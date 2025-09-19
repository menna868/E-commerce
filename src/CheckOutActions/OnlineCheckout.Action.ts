"use server"

import { checkoutSchemaType } from "@/Schema/Checkout";
import getMyToken from "@/Utilities/getMyToken"

export async function OnlineCheckOut(cartId: string, url: string,formValues:checkoutSchemaType) {
  const token = await getMyToken();
  if (!token) {
    throw new Error("You must be logged in to checkout");
  }
  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
    {
      method: "POST",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shippingAddress: formValues }),
    }
    );
    let payload = res.json();
    
    return payload;
}