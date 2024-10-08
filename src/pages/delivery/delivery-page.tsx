import { Helmet } from "react-helmet-async";
import DeliveryView from "../../sections/delivery/delivery-view";

export default function DeliveryPage() {
  return (
    <>
      <Helmet>
        <title>Delivery</title>
      </Helmet>
      <DeliveryView />
    </>
  );
}
