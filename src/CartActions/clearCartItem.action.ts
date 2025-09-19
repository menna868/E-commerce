"use server"

import getMyToken from "@/Utilities/getMyToken"

export default async function clearCartItem() {
    const token = await getMyToken();
    if (!token) {
        throw new Error("You are not logged in")
    }
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        method: "DELETE",
        headers: {
            token,
            "Content-Type": "application/json"
        }
    });
    let payload = await res.json();   
    return payload;
 }
