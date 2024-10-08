import { Divider, Stack, Typography } from "@mui/material";
import ItemsPanier from "./items-panier";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Props = {
  products?: any;
};

export default function BoxItemsCart({ products }: Props) {
  return (
    <Stack spacing={4}>
      <Typography
        fontWeight="bold"
        variant="body1"
        sx={{ fontFamily: "Poppins" }}
      >
        Panier({products.length})
      </Typography>

      {products.map((product: any, index: any) => (
        <Stack spacing={5} key={index}>
          <ItemsPanier
            product={product}
            index={index}
            // quantity={2}
            // img="https://img.freepik.com/vecteurs-libre/eclaboussure-fruit-oranges-realistes_52683-65283.jpg?ga=GA1.1.1859331002.1720646969&semt=ais_hybrid"
            // name="lorem hyuuy yyyuuy"
            // category="lorem hyuuy"
            // price={15000}
          />
          <Divider />
        </Stack>
      ))}
    </Stack>
  );
}
