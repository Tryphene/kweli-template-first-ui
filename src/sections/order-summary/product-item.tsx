/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge, Box, Stack, Typography } from "@mui/material";
import Image from "../../components/image/image";

type Props = {
  product: any;
};

export default function ProductItem({ product }: Props) {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="start">
      <Stack direction="row" spacing={3}>
        <Badge
          badgeContent={product?.quantity}
          color="secondary"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#e4e4e4",
              color: "#222",
              fontWeight: 600,
              fontFamily: "Poppins",
            },
          }}
        >
          <Box
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
              // src={product?.img}
            />
          </Box>
        </Badge>

        <Stack>
          <Typography
            fontWeight="bold"
            variant="body1"
            sx={{ fontFamily: "Poppins" }}
          >
            {product?.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "Poppins" }}
            color="#888"
          >
            {product?.category}
          </Typography>
        </Stack>
      </Stack>
      <Typography
        fontWeight="bold"
        variant="body1"
        sx={{ fontFamily: "Poppins" }}
        textAlign="right"
      >
        {product?.price} FCFA
      </Typography>
    </Stack>
  );
}
