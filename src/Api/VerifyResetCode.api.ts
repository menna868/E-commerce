export async function VerifyREsetApi(resetCode: string) {
  try {
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resetCode }),
      }
    );

    const data = await res.json();

    return { ok: res.ok, data };
  } catch (err) {
    console.error("ForgetPasswordApi Error:", err);
    return { ok: false, data: null };
  }
}
