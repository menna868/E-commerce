import { UserOrdersApi } from '@/Api/UserOrders.api';
import OrderDetails from '@/app/_components/orderDetails/OrderDetails';

import React from 'react'

export default async function ProductDetails({ params }:{params:Promise<{id:string}>}) {
  let { id } = params;
  let data = await UserOrdersApi(id);
  if (!data) return <h1>No data here</h1>;

  return (
    <>
      <OrderDetails order={data} />
    </>
  );
}
