import "./App.css"
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import CartProvider from "./providers/cart-provider";
import OrderProvider from "./providers/order-provider";
import Router from "./routes/sections";

// Étendre le type Window
declare global {
  interface Window {
    toggleDevtools: () => void;
  }
}

function App() {
  useScrollToTop();
  // useRedirect("mgroup2-shop-max");

  return (
    <CartProvider>
      <OrderProvider>
        <Router />
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
