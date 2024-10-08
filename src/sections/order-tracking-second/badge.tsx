import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  color: string;
  bgcolor: string;
};

export default function Badge({ title, bgcolor, color }: Props) {
  return (
    <Box
      width={120}
      sx={{ px: 2 }}
      height={35}
      borderRadius={50}
      bgcolor={bgcolor}
      color={color}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        fontWeight="bold"
        variant="body2"
        sx={{ fontFamily: "Poppins", textTransform: "initial" }}
      >
        {title}
      </Typography>
    </Box>
  );
}
