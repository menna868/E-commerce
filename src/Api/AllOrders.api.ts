export async function GetOrders() {
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/`);
  let { data } = await response.json();
  return data;
}
