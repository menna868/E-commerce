import React from 'react'
;
import { OrdersTypes } from '@/Types/orders.type';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function AllOrders({ order }: { order: OrdersTypes }) {
  return (
    <>
    

<div className="w-full my-12 mx-auto">
  <table className="w-full flex-col flex-wrap items-center justify-center text-sm  rtl:text-right text-gray-500 dark:text-gray-400 mx-auto text-center">
    <thead className="text-xl text-green-500 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
         #Id
        </th>
        <th scope="col" className="px-6 py-3">
          Order Price
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
       
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          #{order.id}
        </th>
        <td className="px-6 py-4">
          {order.totalOrderPrice}Egp
        </td>
        <td className="px-6 py-4">
         <Link href={`/Orders/${order._id}`}> <Button>View</Button></Link>
        </td>
       
      </tr>

    </tbody>
  </table>
</div>


    </>
  );
}
