"use server";

import getMyToken from "@/Utilities/getMyToken";

export async function ChangePasswordApi(
  currentPassword: string,
  password: string,
  rePassword: string
) {
  try {
     const token = await getMyToken();
        if (!token) {
          throw new Error("User not authenticated");
        }
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",
      {
        method: "PUT",
        headers: {
          token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ currentPassword, password, rePassword }),
      }
    );

    const data = await res.json();
console.log(data);

    return { ok: res.ok, data };
  } catch (err) {
    console.error("ResetNewPasswordApi Error:", err);
    return { ok: false, data: null };
  }
}
