import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { mainRoutes } from "./main";
import { lazy, Suspense } from "react";
import MainLayout from "../../layouts/main-layouts";
import Loader from "../../components/loader/loader";
import ComingSoonPage from "../../pages/coming-soon/coming-soon-page";
import CompanyProvider from "../../providers/company-provider";

// ------------------------------------------------------

const HomePage = lazy(() => import("../../pages/home/home-page"));
const ProductDetailPage = lazy(
  () => import("../../pages/product-detail/product-detail-page")
);
const CartPage = lazy(() => import("../../pages/cart/cart-page"));
const OrderTrackingPage = lazy(
  () => import("../../pages/order-tracking/order-tracking-page")
);
const DeliveryPage = lazy(() => import("../../pages/delivery/delivery-page"));
const OrderSummaryPage = lazy(
  () => import("../../pages/order-summary/order-summary-page")
);
const PaymentPage = lazy(() => import("../../pages/payment/payment-page"));

// ------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<Loader />}>
          <ComingSoonPage />
        </Suspense>
      ),
    },
    {
      path: "/:companySlug",
      element: (
        <CompanyProvider>
          <MainLayout>
            <Outlet />
          </MainLayout>
        </CompanyProvider>
      ),
      children: [
        {
          path: "/:companySlug",
          element: <HomePage />,
        },
        {
          path: "product/:productSlug/detail",
          element: <ProductDetailPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "delivery",
          element: <DeliveryPage />,
        },
        {
          path: "order-summary",
          element: <OrderSummaryPage />,
        },
        {
          path: "payment",
          element: <PaymentPage />,
        },
        {
          path: "order-tracking/:orderRef",
          element: <OrderTrackingPage />,
        },
      ],
    },

    // {
    //   path: "/",
    //   element: <HomePage />,
    // },
    // {
    //   path: "/detail-product",
    //   element: <ProductDetailPage />,
    // },
    // {
    //   path: "/cart",
    //   element: <CartPage />,
    // },

    // Main routes
    ...mainRoutes,

    // No match 404
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
