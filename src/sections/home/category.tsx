/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid } from "@mui/material";
import BoxCategoryItems from "./box-category-items";
import Slide from "../../components/slide";

type Props = { categories: any };

export default function Category({ categories }: Props) {
  return (
    <Slide itemsToShow={6}>
      {categories.map((item: any, index: number) => (
        <Grid key={index} item xs={12} md={4} lg={2}>
          <BoxCategoryItems
            name={item?.name}
            icon={item?.icon}
            img={item?.main_image_path}
            // img="https://img.freepik.com/vecteurs-libre/eclaboussure-fruit-oranges-realistes_52683-65283.jpg?ga=GA1.1.1859331002.1720646969&semt=ais_hybrid"
          />
        </Grid>
      ))}
    </Slide>
  );
}
