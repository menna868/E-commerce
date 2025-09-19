"use server";
import getMyToken from "@/Utilities/getMyToken";

export default async function deleteCartItem(id: string) {
  const token = await getMyToken();
  if (!token) {
    throw new Error("please login in to be able to delete cart item");
  }
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
    method: "DELETE",
    headers: {
      token,
      contentType: "application/json",
    },
  });
  let payload = await res.json();
  return payload;
}
