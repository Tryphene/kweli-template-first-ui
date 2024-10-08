import { Helmet } from "react-helmet-async";
import OrderTrackingView from "../../sections/order-tracking-second/order-tracking-view";

export default function OrderTrackingPage() {
  return (
    <>
      <Helmet>
        <title>Order Tracking</title>
      </Helmet>
      <OrderTrackingView />
    </>
  );
}
