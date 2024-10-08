import { Avatar, Stack, Typography } from "@mui/material";

type Props = {
  price: number;
  discount: number;
};

export default function BoxDiscount({ price, discount }: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Stack spacing={1} sx={{ width: "100%" }}>
        <Typography
          fontWeight="bold"
          variant="body1"
          sx={{ fontFamily: "Poppins" }}
          textAlign="left"
        >
          {price} FCFA
        </Typography>
        <Typography
          // fontWeight="bold"
          variant="caption"
          sx={{
            fontFamily: "Poppins",
            textDecoration: "line-through",
            color: "#396143",
          }}
          textAlign="left"
        >
          {price} FCFA
        </Typography>
      </Stack>
      <Avatar sx={{ width: 30, height: 30, p:0.5, bgcolor: "pink" }}>
        <Typography
          // fontWeight="bold"
          variant="body2"
          fontSize={12}
          sx={{
            fontFamily: "Poppins",
            color: "#fff",
          }}
          textAlign="left"
        >
          -{discount}%
        </Typography>
      </Avatar>
      {/* <Box
        sx={{
          p: 0,
          width: 60,
          height: 40,
          borderRadius: 100,
          backgroundColor: "pink",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          // fontWeight="bold"
          variant="body2"
          fontSize={12}
          sx={{
            fontFamily: "Poppins",
            color: "#fff",
          }}
          textAlign="left"
        >
          -{discount}%
        </Typography>
      </Box> */}
    </Stack>
  );
}
