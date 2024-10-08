/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "../../components/image/image";
import Badge from "./badge";

type Props = {
  order: any;
};

export default function SectionInfo({ order }: Props) {
  console.log(order?.data?.sale_items);

  return (
    <Stack spacing={3.5}>
      <Typography fontWeight="bold" variant="h6" sx={{ fontFamily: "Poppins" }}>
        Suivi de la commande
      </Typography>
      <Box
        columnGap={2}
        rowGap={3}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
      >
        <Stack spacing={3}>
          {order?.data?.sale_items.map((_: any, index: number) => (
            <Box
              key={index}
              width={85}
              height={85}
              border="2px solid #e4e4e4"
              borderRadius={2}
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            >
              <Image
                sx={{
                  mt: 0,
                  width: 70,
                  height: 70,
                }}
                src="https://img.freepik.com/vecteurs-libre/eclaboussure-fruit-oranges-realistes_52683-65283.jpg?ga=GA1.1.1859331002.1720646969&semt=ais_hybrid"
              />
            </Box>
          ))}
        </Stack>
        <Badge title="En cours" bgcolor="#F8E6C3" color="#6E5229" />
      </Box>
      <Typography
        fontWeight="bold"
        variant="body1"
        sx={{ fontFamily: "Poppins" }}
      >
        Commande {order?.data?.ref}
      </Typography>

      <Box
        columnGap={2}
        rowGap={3}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography
              variant="body2"
              color="#777"
              sx={{ fontFamily: "Poppins" }}
            >
              Produits
            </Typography>
            {order?.data?.sale_items.map((item: any, index: number) => (
              <Typography
                key={index}
                fontWeight="bold"
                variant="body2"
                sx={{ fontFamily: "Poppins" }}
              >
                Produit {item.product_id}
              </Typography>
            ))}
          </Stack>

          <Stack spacing={1}>
            <Typography
              variant="body2"
              color="#777"
              sx={{ fontFamily: "Poppins" }}
            >
              Start time
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ fontFamily: "Poppins" }}
            >
              {order?.data?.order_date}
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography
              variant="body2"
              color="#777"
              sx={{ fontFamily: "Poppins" }}
            >
              Coursier
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ fontFamily: "Poppins" }}
            >
              Commande {order?.data?.ref}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography
              variant="body2"
              color="#777"
              sx={{ fontFamily: "Poppins" }}
            >
              Adresse
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ fontFamily: "Poppins" }}
            >
              {order?.data?.full_delivery_address}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Box display="flex" flexWrap="wrap" gap={1}>
        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#396143",
            height: 40,
          }}
        >
          <Typography
            fontSize={15}
            fontWeight={600}
            variant="body2"
            sx={{
              px: 2,
              fontFamily: "Poppins",
              textTransform: "initial",
            }}
          >
            Exporter détails
          </Typography>
        </Button>
        <Button
          sx={{
            color: "red",
            backgroundColor: "#fff",
            height: 40,
            // border: "2px solid #e4e4e4",
          }}
        >
          <Typography
            fontSize={15}
            fontWeight={600}
            variant="body2"
            sx={{
              px: 2,
              fontFamily: "Poppins",
              textTransform: "initial",
            }}
          >
            {/* Demande de confirmation */}
            Annuler la commande
          </Typography>
        </Button>
      </Box>
    </Stack>
  );
}
