import { Grid, Stack } from "@mui/material";
import BoxSummary from "./box-summary";
import BoxItemsPaymentMethod from "./box-items-payment-method";

export default function PaymentView() {
  return (
    <Stack sx={{ px: { xs: 2, sm: 5, lg: 20 }, mt: 4 }}>
      <Grid container spacing={5} sx={{ mb: 2 }}>
        <Grid item xs={12} lg={8}>
          <BoxItemsPaymentMethod />
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            mt: 5,
            position: "sticky",
            top: "-30px",
            alignSelf: "flex-start",
          }}
        >
          <BoxSummary />
        </Grid>
      </Grid>
    </Stack>
  );
}
