import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCurrentUser } from "../../features/authSlice";
import { useGetOrdersQuery } from "../../features/ordersSlice";

const OrdersList = () => {
  const user = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    user ? null : navigate("/auth");
  }, []);
  const { data: orders } = useGetOrdersQuery(user._id);
  return (
    <div>
      {orders?.map((order) => {
        return <div key={order._id}>{order._id}</div>;
      })}
    </div>
  );
};

export default OrdersList;
