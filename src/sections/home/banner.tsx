import { Grid, Stack } from "@mui/material";
import Card from "../../components/card";
import Carousel from "../../components/carrousel";
import house from "../../assets/banner/house.jpg";
import interieur1 from "../../assets/banner/interieur1.jpg";
import BannerCardItems from "./banner-card-items";

export default function Banner() {
  const slides = [house, interieur1];
  return (
    <Stack>
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12} lg={8}>
          <Card>
            <Carousel data={slides} />
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack spacing={3}>
            <Card p={3} height={180} color="#F4F4F4">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                height={`100%`}
              >
                <BannerCardItems
                  title="Chocolate Cookies"
                  subtitle="FROM 30% OFF"
                  img="https://img.freepik.com/vecteurs-libre/sac-brun-cookies-aux-pepites-chocolat_1308-71312.jpg?ga=GA1.1.1859331002.1720646969&semt=ais_hybrid"
                />
              </Stack>
            </Card>
            <Card p={3} height={180} color="#F1E9D7">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                height={`100%`}
              >
                <BannerCardItems
                  title="Fresh Fruit Orange"
                  subtitle="FROM 20% OFF"
                  img="https://img.freepik.com/vecteurs-libre/eclaboussure-fruit-oranges-realistes_52683-65283.jpg?ga=GA1.1.1859331002.1720646969&semt=ais_hybrid"
                />
              </Stack>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
