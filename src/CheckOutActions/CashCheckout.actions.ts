"use server"

import { checkoutSchemaType } from "@/Schema/Checkout";
import getMyToken from "@/Utilities/getMyToken"

export async function CashCheckOut(cartId: string,formValues:checkoutSchemaType) {
  const token = await getMyToken();
  if (!token) {
    throw new Error("You must be logged in to checkout");
  }
  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
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