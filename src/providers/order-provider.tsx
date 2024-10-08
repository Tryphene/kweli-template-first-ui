/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useEffect } from "react";
import { getOrder, setOrder } from "../services/order/order-service";

type OrderContextType = {
  order: any;
  //   handleAddToCart: (product: any) => void;
  orderData: () => any;
  resetOrder: () => any;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within a OrderProvider");
  }
  return context;
};

type Props = {
  children: React.ReactNode;
};

export default function OrderProvider({ children }: Props) {
  const order = {
    status: "pending",
    order_status: "pending",
    order_date: "2024-10-05",
    order_source: "whatsapp",
    status_pay: "inprogress",
    pay_method_id: 2,
    delivery_fee: 0,
    discount: 0,
    amount_paid: 0,
    sale_items: [],
    company_id: 13,
    branch_id: "",
    customer_online_name: "",
    customer_online_subname: "",
    customer_online_phone: "",
    customer_online_email: "",
    customer_online_city: "",
    full_delivery_address: "",
    cash: 0,
  };

  useEffect(() => {
    const orderData = getOrder();

    if (Object.values(orderData).length == 0) {
      setOrder(order);
    }
  }, []);

  const orderData = () => {
    const order = getOrder();
    return order;
  };

  const resetOrder = () => {
    setOrder(order);
    return order;
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        orderData,
        resetOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
