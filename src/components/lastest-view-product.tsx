import { Box, Stack, Typography } from "@mui/material";
import Slide from "./slide";
import BoxProductItems from "./box-product-items";

export default function LastestViewProduct() {
  const product = ["", "", "", "", "", ""];

  return (
    <Stack gap={4}>
      <Stack gap={0}>
        <Stack direction="row" gap={2} alignItems="center">
          <Box width={35} height={6} borderRadius={5} bgcolor="#FFBE34"></Box>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Poppins", fontWeight: 900 }}
          >
            Les produits vus récemment
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
          Lorem ipsum dolor sit.
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Slide itemsToShow={4}>
          {product.map((product, index) => (
            <BoxProductItems
              key={index}
              product={product}
              // img="https://img.freepik.com/vecteurs-libre/eclaboussure-fruit-oranges-realistes_52683-65283.jpg?ga=GA1.1.1859331002.1720646969&semt=ais_hybrid"
            />
          ))}
        </Slide>
      </Stack>
    </Stack>
  );
}
