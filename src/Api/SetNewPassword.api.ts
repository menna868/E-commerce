"use server"
export async function ResetNewPasswordApi(email: string, newPassword: string) {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword }),
      }
    );

    const data = await res.json();

    return { ok: res.ok, data };
  } catch (err) {
    console.error("ResetNewPasswordApi Error:", err);
    return { ok: false, data: null };
  }
}
