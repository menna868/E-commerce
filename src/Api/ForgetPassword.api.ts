export async function ForgetPasswordApi(email: string) {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    const data = await res.json();

    return { ok: res.ok, data };
  } catch (err) {
    console.error("ForgetPasswordApi Error:", err);
    return { ok: false, data: null };
  }
}
