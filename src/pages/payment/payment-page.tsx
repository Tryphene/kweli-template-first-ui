import { Helmet } from "react-helmet-async";
import PaymentView from "../../sections/payment/payment-view";

export default function PaymentPage() {
  return (
    <>
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <PaymentView />
    </>
  );
}
