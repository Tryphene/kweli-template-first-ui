/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Badge,
  Box,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "../../components/image/image";
// import { useState } from "react";
import BoxDiscount from "./box-discount";
import { useCart } from "../../providers/cart-provider";

type Props = {
  product: any;
  index: number;
};

export default function ItemsPanier({ product, index }: Props) {
  // const [value, setValue] = useState("1");
  const cartProvider = useCart();

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value;
  //   console.log(value);

  //   if (/^[1-9]\d*$/.test(newValue) || newValue === "") {
  //     setValue(newValue);
  //   }
  // };
  const isRemise = true;

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
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

      <Stack direction="row" alignItems="center" spacing={3}>
        <Stack spacing={3} sx={{ backgroundColor: "white", width: 150 }}>
          {!isRemise ? (
            <Typography
              fontWeight="bold"
              variant="body1"
              sx={{ fontFamily: "Poppins" }}
              textAlign="right"
            >
              {product?.price} FCFA
            </Typography>
          ) : (
            <BoxDiscount price={product?.price} discount={50} />
          )}

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            border="1px solid #e4e4e4"
            sx={{ px: 0 }}
            borderRadius={2}
            // width={130}
          >
            <button
              style={{
                color: "#396143",
                backgroundColor: "#fff",
                border: "none",
                width: 38,
                height: 40,
                cursor: "pointer",
              }}
              onClick={() => {
                cartProvider.handleDecrementQuantityProductCart(product);
              }}
            >
              <Icon icon="ic:sharp-minus" width={15} />
            </button>
            <TextField
              value={product?.quantity}
              onChange={(e) =>
                cartProvider.handleQuantityChange(index, e.target.value)
              }
              variant="outlined"
              // onBlur={() => (product.quantity = 1)}
              sx={{
                width: "40px",
                height: "40px",
                "& .MuiInputBase-root": {
                  height: "100%",
                },
                border: "none",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                  borderLeft: "1px solid #e4e4e4",
                  borderRight: "1px solid #e4e4e4",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                },
              }}
              inputProps={{
                style: {
                  textAlign: "center",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                },
                inputMode: "numeric",
              }}
              placeholder="Enter number"
            />
            <button
              style={{
                color: "#396143",
                backgroundColor: "#fff",
                // backgroundColor: "#39614320",
                border: "none",
                width: 38,
                height: 40,
                cursor: "pointer",
              }}
              onClick={() => cartProvider.handleAddToCart(product)}
            >
              <Icon icon="ic:sharp-plus" width={15} />
            </button>
            {/* <Button
              sx={{
                color: "#396143",
                backgroundColor: "#39614320",
                height: 40,
              }}
            >
              <Icon icon="ic:sharp-plus" width={15} />
            </Button> */}
          </Stack>
        </Stack>

        <IconButton
          sx={{ backgroundColor: "#39614320" }}
          onClick={() => cartProvider.handleRemoveFromCart(product)}
        >
          <Icon icon="fluent:delete-24-regular" width={18} color="#396143" />
        </IconButton>
      </Stack>
    </Stack>
  );
}
