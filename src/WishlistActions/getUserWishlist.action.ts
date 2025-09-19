"use server"
import getMyToken from "@/Utilities/getMyToken";

export default async function getLoggedUserWishlist() {
    const token = await getMyToken();
    if (!token) {
        throw new Error("please login in to be able to see wishlist")
    }
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
      method: "GET",
      headers: {
        token: token,
        contentType: "application/json",
      },
    });
    let payload = await res.json();
    return payload

    
}