import { Stack } from "@mui/material";
import PopularProduct from "./popular-product";
import Testimonials from "./testimonials";
import Category from "./category";
import BestSellerProduct from "./best-seller-product";
import { useCompany } from "../../providers/company-provider";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function BodyContent() {
  const companyProvider = useCompany();
  const products = [
    {
      alert_quantity: 5,
      barcode: "99782892258585",
      brand_id: null,
      category_id: 31,
      company_id: 13,
      created_at: "2024-10-04T09:47:48.000000Z",
      description: "Pizza",
      discount: null,
      discount_type: null,
      expiration_date: "2024-04-26",
      id: 30,
      main_image_path: null,
      name: "produit de lux l'ivoire 1",
      principal_carateristics: "principal carateristics",
      product_family_id: null,
      purchase_price: "350.00",
      ref: "DAHLT27P",
      selling_final_price: "500.00",
      selling_price: "500.00",
      sku: "SKU785687778546247",
      slug: "produit-de-lux-livoire-1",
      technical_description: "technical description",
      updated_at: "2024-10-04T09:47:48.000000Z",
    },
    {
      alert_quantity: 5,
      barcode: "99782892258585",
      brand_id: null,
      category_id: 31,
      company_id: 13,
      created_at: "2024-10-04T09:47:48.000000Z",
      description: "Pizza",
      discount: null,
      discount_type: null,
      expiration_date: "2024-04-26",
      id: 30,
      main_image_path: null,
      name: "produit de lux l'ivoire 1",
      principal_carateristics: "principal carateristics",
      product_family_id: null,
      purchase_price: "350.00",
      ref: "DAHLT27P",
      selling_final_price: "500.00",
      selling_price: "500.00",
      sku: "SKU785687778546247",
      slug: "produit-de-lux-livoire-1",
      technical_description: "technical description",
      updated_at: "2024-10-04T09:47:48.000000Z",
    },
    {
      alert_quantity: 5,
      barcode: "99782892258585",
      brand_id: null,
      category_id: 31,
      company_id: 13,
      created_at: "2024-10-04T09:47:48.000000Z",
      description: "Pizza",
      discount: null,
      discount_type: null,
      expiration_date: "2024-04-26",
      id: 30,
      main_image_path: null,
      name: "produit de lux l'ivoire 1",
      principal_carateristics: "principal carateristics",
      product_family_id: null,
      purchase_price: "350.00",
      ref: "DAHLT27P",
      selling_final_price: "500.00",
      selling_price: "500.00",
      sku: "SKU785687778546247",
      slug: "produit-de-lux-livoire-1",
      technical_description: "technical description",
      updated_at: "2024-10-04T09:47:48.000000Z",
    },
    {
      alert_quantity: 5,
      barcode: "99782892258585",
      brand_id: null,
      category_id: 31,
      company_id: 13,
      created_at: "2024-10-04T09:47:48.000000Z",
      description: "Pizza",
      discount: null,
      discount_type: null,
      expiration_date: "2024-04-26",
      id: 30,
      main_image_path: null,
      name: "produit de lux l'ivoire 1",
      principal_carateristics: "principal carateristics",
      product_family_id: null,
      purchase_price: "350.00",
      ref: "DAHLT27P",
      selling_final_price: "500.00",
      selling_price: "500.00",
      sku: "SKU785687778546247",
      slug: "produit-de-lux-livoire-1",
      technical_description: "technical description",
      updated_at: "2024-10-04T09:47:48.000000Z",
    },
    {
      alert_quantity: 5,
      barcode: "99782892258585",
      brand_id: null,
      category_id: 31,
      company_id: 13,
      created_at: "2024-10-04T09:47:48.000000Z",
      description: "Pizza",
      discount: null,
      discount_type: null,
      expiration_date: "2024-04-26",
      id: 30,
      main_image_path: null,
      name: "produit de lux l'ivoire 1",
      principal_carateristics: "principal carateristics",
      product_family_id: null,
      purchase_price: "350.00",
      ref: "DAHLT27P",
      selling_final_price: "500.00",
      selling_price: "500.00",
      sku: "SKU785687778546247",
      slug: "produit-de-lux-livoire-1",
      technical_description: "technical description",
      updated_at: "2024-10-04T09:47:48.000000Z",
    },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (location.hash === "#product-section" && sectionRef.current) {
        sectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  }, [location]);

  return (
    // <Stack>
    //   {!infosLoading && (
    //     <Stack gap={6}>
    //       <Category categories={companyProvider.company?.product_categories} />
    //       <PopularProduct products={companyProvider.company?.products} />
    //       <BestSellerProduct products={companyProvider.company?.products} />
    //       <Testimonials />
    //     </Stack>
    //   )}
    // </Stack>
    <Stack gap={6}>
      {/* <button onClick={scrollToSection}>Aller à la section</button> */}
      <div ref={sectionRef} id="section-id">
        <Category categories={companyProvider.company?.product_categories} />
      </div>
      <PopularProduct products={companyProvider.company?.products} />
      <BestSellerProduct products={products} />
      <Testimonials />
    </Stack>
  );
}
