"use server"
import getMyToken from "@/Utilities/getMyToken";

export async function UpdateUsersApi() {
  const token = await getMyToken();
     if (!token) {
       throw new Error("User not authenticated");
     }
    let response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
      {
        method: "PUT",
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      }
    );
    let data  = await response.json();
    console.log(data);
    
  return data;
}
