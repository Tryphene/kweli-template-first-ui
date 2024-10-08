import { Helmet } from "react-helmet-async";
import OrderSummaryView from "../../sections/order-summary/order-summary-view";

export default function OrderSummaryPage() {
  return (
    <>
      <Helmet>
        <title>Order Summary</title>
      </Helmet>
      <OrderSummaryView />
    </>
  );
}
