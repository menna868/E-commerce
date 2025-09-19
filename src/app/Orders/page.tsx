import { GetOrders } from '@/Api/AllOrders.api';
import React from 'react'
import AllOrders from '../_components/getAllOrders/AllOrders';
import { OrdersTypes } from '@/Types/orders.type';

export default async function Orders() {
    let data = await GetOrders();
    console.log(data);
  return (
   <>  <div className="flex flex-wrap  w-[80%] mx-auto  my-7">
           {data.map((currentOrder: OrdersTypes) => (
             <AllOrders  key={currentOrder.id} order={currentOrder} />
           ))}
         </div></>
  )
}
