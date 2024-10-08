/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid, Stack, Typography } from "@mui/material";
import Filters from "./filters";
import PopularProductContent from "./popular-product-content";

type Props = { products: any };

export default function PopularProduct({ products }: Props) {
  return (
    <Stack gap={3}>
      <Stack gap={0}>
        <Stack direction="row" gap={2} alignItems="center">
          <Box width={35} height={6} borderRadius={5} bgcolor="#FFBE34"></Box>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Poppins", fontWeight: 900 }}
          >
            Most Popular Product
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
          Lorem ipsum dolor sit.
        </Typography>
      </Stack>

      <Grid container spacing={5} sx={{ mb: 2 }}>
        <Grid item xs={12} md={4} lg={3}>
          <Filters />
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <PopularProductContent products={products} />
        </Grid>
      </Grid>
    </Stack>
  );
}
