import { Button, Stack, Typography } from "@mui/material";
import Dropdown from "../sections/home/dropdown";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function NavInfo() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        py: 1,
        px: {
          sm: 10,
          lg: 15,
        },
        borderBottom: "1px solid #e4e4e4",
        display: {
          xs: "none",
          sm: "none",
          lg: "flex",
        },
      }}
    >
      <Stack direction="row" gap={1} alignItems="center">
        <Icon icon="hugeicons:truck-delivery" width={20} />
        <Typography sx={{ fontFamily: "Poppins" }} variant="body2">
          Vos livraions Securisé et rapide avec kweli delivery
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" gap={3}>
        <Dropdown title="English" icon="flagpack:gb-ukm">
          <Button>Germany</Button>
          <Button>France</Button>
        </Dropdown>
        {/* <Dropdown title="USD" icon="solar:dollar-linear">
          <Button>Germany</Button>
          <Button>France</Button>
        </Dropdown> */}
      </Stack>
    </Stack>
  );
}
