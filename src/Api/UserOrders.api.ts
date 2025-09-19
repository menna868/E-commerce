import getMyToken from "@/Utilities/getMyToken";

export async function UserOrdersApi(id: string) {
  const token = await getMyToken();
     if (!token) {
       throw new Error("User not authenticated");
     }
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/${id}`,
      {
        method: "Get",
        headers: {
          token:token,
          "Content-Type": "application/json",
        }
      
      }
    );
    const {data} = await res.json();
    console.log("data zeft",data);
    
    return data; 
 
}
