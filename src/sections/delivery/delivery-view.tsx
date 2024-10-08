import { Stack } from "@mui/material";
import BoxInfoDelivery from "./box-info-delivery";

export default function DeliveryView() {
  
  return (
    <Stack
      sx={{ px: { xs: 2, sm: 5, lg: 20 } }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <BoxInfoDelivery />
    </Stack>
  );
}
