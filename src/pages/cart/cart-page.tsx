import { Helmet } from "react-helmet-async";
import CartView from "../../sections/cart/cart-view";

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>Panier</title>
      </Helmet>
      <CartView />
    </>
  );
}
