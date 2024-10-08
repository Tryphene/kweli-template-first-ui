import { Box, Grid, Stack, Tab, Tabs } from "@mui/material";
import ImagesProductSection from "./images-product-section";
import ActionsProductSection from "./actions-product-section";
import "./styles.css";
import { SyntheticEvent, useState } from "react";
import InfoProductSection from "./info-product-section";
import ReviewProductSection from "./review-product-section";
import SkeletonProductDetail from "./skeleton-product-detail";
import { useGetOneProduct } from "../../apis/products/get-one-product-api";
import { useParams } from "react-router-dom";

export default function ProductDetailView() {
  const [value, setValue] = useState("one");

  const params = useParams();

  const { productSlug, companySlug } = params;

  const {
    data: product,
    isLoading: productLoading,
    // refetch,
  } = useGetOneProduct({
    companySlug: companySlug!,
    productSlug: productSlug!,
  });

  console.log("product", product);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    console.log(event);

    setValue(newValue);
  };

  return (
    <>
      {productLoading ? (
        <SkeletonProductDetail />
      ) : (
        <Stack gap={3} sx={{ px: { xs: 1, sm: 5, lg: 8 }, mt: 4 }}>
          Breadcrumbs
          <Grid container spacing={10} sx={{ mb: 2 }}>
            <Grid item xs={12} lg={6}>
              <ImagesProductSection product={product} />
            </Grid>
            <Grid item xs={12} lg={6}>
              <ActionsProductSection product={product} />
            </Grid>
          </Grid>
          <Stack gap={3}>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="secondary tabs example"
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#396143",
                  },
                  "& .MuiTab-root": {
                    color: "#333333",
                    fontFamily: "Poppins",
                    fontSize: 17,
                  },
                  "& .Mui-selected": {
                    color: "#0b7b7f",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    fontSize: 17,
                  },
                }}
              >
                <Tab
                  value="one"
                  label="Informations supplémentaires"
                  sx={{
                    textTransform: "capitalize",
                  }}
                />
                <Tab
                  value="two"
                  label="Notes"
                  sx={{
                    textTransform: "capitalize",
                  }}
                />
              </Tabs>
            </Box>

            {value == "one" ? <InfoProductSection /> : <ReviewProductSection />}
          </Stack>
        </Stack>
      )}
    </>
  );
}
