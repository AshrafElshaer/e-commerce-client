import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentUser } from "../../features/authSlice";
import { useGetOrdersQuery } from "../../features/ordersSlice";
import { formatDate, formatPrice } from "../../lib/formating";

const OrdersList = () => {
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  const { data: orders } = useGetOrdersQuery(user?._id as string);
  return (
    <section className='flex flex-col gap-4 max-h-[28rem] overflow-y-scroll scrollbar-hide'>
      {orders ? (
        orders
          ?.slice()
          .sort(
            (a, b) =>
              new Date(b.createdAt as string).getTime() -
              new Date(a.createdAt as string).getTime()
          )
          .map((order) => {
            return (
              <div
                key={order._id}
                className='flex items-center gap-4 px-6 py-2 rounded-md shadow-lg'>
                <span className='font-bold'>
                  {formatDate(order.createdAt as string)}
                </span>
                {order.items.map((item) => (
                  <img
                    key={item._id}
                    src={item.image}
                    alt={item.name}
                    className='rounded-lg w-10 md:w-16'
                  />
                ))}
                <span className='ml-auto'>{order.status}</span>
                <span className='font-bold'>{formatPrice(order.grandTotal)}</span>
              </div>
            );
          })
      ) : (
        <div className='text-center text-2xl'>No order's were found</div>
      )}
    </section>
  );
};

export default OrdersList;
