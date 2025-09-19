"use server";
import getMyToken from "@/Utilities/getMyToken";

export default async function AddToWishlist(id: string) {
  try {
    const token = await getMyToken();
    if (!token) {
      throw new Error("User not authenticated");
    }
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      method: "Post",
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: id }),
    });
    let payload = await res.json();
    return payload;
  } catch (err) {
    console.log(err);
    return err;
  }
}
