import { Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Nav() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={3}
      sx={{
        py: 2.5,
        px: {
          sm: 10,
          lg: 15,
        },
        borderBottom: "1px solid #e4e4e4",
        backgroundColor: "#396143",
        // backgroundColor: "#DFC335",
        color: "#fff",
        display: {
          xs: "none",
          sm: "flex",
          lg: "flex",
        },
      }}
    >
      <Stack direction="row" gap={0.5} alignItems="center">
        <Typography
          sx={{ fontFamily: "Poppins", fontWeight: 600 }}
          variant="body1"
        >
          Lorem
        </Typography>
        <Icon icon="icon-park:down" width={20} color="white" />
      </Stack>

      <Stack direction="row" gap={0.5} alignItems="center">
        <Typography
          sx={{ fontFamily: "Poppins", fontWeight: 600 }}
          variant="body1"
        >
          ipsum
        </Typography>
        <Icon icon="icon-park:down" width={20} color="white" />
      </Stack>

      <Stack direction="row" gap={0.5} alignItems="center">
        <Typography
          sx={{ fontFamily: "Poppins", fontWeight: 600 }}
          variant="body1"
        >
          dolor
        </Typography>
        <Icon icon="icon-park:down" width={20} color="white" />
      </Stack>
    </Stack>
  );
}
