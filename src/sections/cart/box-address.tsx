import { Stack, Typography } from "@mui/material";

export default function BoxAddress() {

  return (
    <Stack spacing={6}>
      <Typography fontWeight="bold" variant="h6" sx={{ fontFamily: "Poppins" }}>
        Information adresse
      </Typography>

      <Stack spacing={1}>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Poppins" }}
        >
          Lorem ipsum dolor ; sit amet consectetur adipisicing
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Poppins" }}
        >
         Esse voluptate doloremque : velit reprehenderit? 
        </Typography>
      </Stack>
    </Stack>
  );
}
