import { Helmet } from "react-helmet-async";
import ProductDetailView from "../../sections/product-detail/product-detail-view";

export default function ProductDetailPage() {
  return (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>
      <ProductDetailView />
    </>
  );
}

