/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import BoxProductItems from "../../components/box-product-items";

type Props = { products: any };

export default function PopularProductContent({ products }: Props) {
  return (
    <Grid container spacing={1.5} sx={{ mb: 2 }}>
      {products.map((item: any, index: number) => (
        <Grid key={index} item xs={12} md={4} lg={3}>
          <BoxProductItems
            product={item}
            // name={item?.name}
            // img="https://img.freepik.com/vecteurs-libre/eclaboussure-fruit-oranges-realistes_52683-65283.jpg?ga=GA1.1.1859331002.1720646969&semt=ais_hybrid"
          />
        </Grid>
      ))}
    </Grid>
  );
}
