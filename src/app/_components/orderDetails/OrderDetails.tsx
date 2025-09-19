import React from 'react'
;
import { OrdersTypes } from '@/Types/orders.type';
export default function OrderDetails({ order }: { order: OrdersTypes }) {
  
 
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
                Payment Method
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Paid
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                #{order.id}
              </th>
              <td className="px-6 py-4 text-gray-900">
                {order.totalOrderPrice} Egp
              </td>
              <td className="px-6 py-4 text-gray-900">
                {order.paymentMethodType}
              </td>
              <td className="px-6 py-4 text-gray-900">
                {order.isDelivered ? "Delivered" : "Not Delivered"}
              </td>
              <td className="px-6 py-4 text-gray-900">
                {order.isPaid ? "Yes" : "No"}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="space-y-4 my-4 p-4">
          <h2 className="text-3xl font-bold text-center text-green-500">Order Details</h2>

          {order.cartItems.map((item) => (
            <div
              key={item.product._id}
              className="flex items-center gap-4 border p-4 rounded-lg shadow"
            >
              <img
                src={item.product.imageCover}
                alt={item.product.title}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{item.product.title}</h3>
                <p className="text-gray-600">{item.product.brand.name}</p>
                <p className="text-gray-600">{item.product.category.name}</p>
                <p className="text-sm text-gray-500">
                  ⭐ {item.product.ratingsAverage} (
                  {item.product.ratingsQuantity} reviews)
                </p>
                <p className="text-green-600 font-bold">
                  {item.count} × {item.price} EGP
                </p>
              </div>
            </div>
          ))}

          
        </div>
      </div>
    </>
  );
}
