/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid, Stack, Typography } from "@mui/material";
import Card from "../../components/card";
import SlideBestProduct from "./slide-best-seller-product";

type Props = { products: any };

export default function BestSellerProduct({ products }: Props) {
  return (
    <Stack gap={3}>
      <Stack gap={0}>
        <Stack direction="row" gap={2} alignItems="center">
          <Box width={35} height={6} borderRadius={5} bgcolor="#FFBE34"></Box>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Poppins", fontWeight: 900 }}
          >
            Best Seller Product
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
          Lorem ipsum dolor sit.
        </Typography>
      </Stack>

      <Grid container spacing={1} sx={{ mb: 2 }}>
        <Grid item xs={12} md={4} lg={3}>
          <Card height={305} color="#EBD5CA"></Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={9}
          // sx={{
          //   px: {
          //     xs: 5,
          //     lg: 0,
          //   },
          // }}
        >
          <SlideBestProduct products={products} />
        </Grid>
      </Grid>
    </Stack>
  );
}
