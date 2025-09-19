"use server"
import getMyToken from "@/Utilities/getMyToken";

export default async function getLoggedUserCart() {
    const token = await getMyToken();
    if (!token) {
        throw new Error("please login in to be able to see cart")
    }
    let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
        method: "GET",
        headers: {
            token: token,
            "contentType": "application/json",
            
        },
    });
    let payload = await res.json();
    return payload

    
}