import { Button, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetOrder } from "../../apis/orders/get-order-api";
import InfoGeneral from "./info-general";
import DeliveryInfo from "./delivery-info";
import OrderHistory from "./order-history";
import OrderItems from "./order-items";
import OrderSummary from "./order-summary";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function OrderTrackingView() {
  const params = useParams();

  const { orderRef, companySlug } = params;

  const {
    data: order,
    isLoading: orderLoading,
    // refetch,
  } = useGetOrder({
    companySlug: companySlug!,
    orderRef: orderRef!,
  });

  console.log("order", order);

  return (
    <Stack>
      {orderLoading ? (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={300}
        >
          Loading...
        </Stack>
      ) : (
        <Stack spacing={5} sx={{ px: { xs: 3, sm: 5, lg: 20 }, mt: 5 }}>
          <Stack direction="row" spacing={0.6}>
            <Typography fontFamily="Poppins" fontSize={19}>
              Suivie de la commande
            </Typography>
            <Typography
              fontWeight="bold"
              fontFamily="Poppins"
              fontSize={19}
              textTransform="uppercase"
            >
              {orderRef}
            </Typography>
          </Stack>

          <Stack spacing={1}>
            <Grid container spacing={3} sx={{ px: 0, mx: 0, mb: 2 }}>
              <Grid item xs={12} lg={4}>
                <InfoGeneral order={order} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <DeliveryInfo order={order} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <OrderHistory order={order} />
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ px: 0, mx: 0, mb: 2 }}>
              <Grid item xs={12} lg={8}>
                <Stack spacing={3}>
                  <OrderItems order={order} />
                  <Button
                    sx={{
                      color: "#fff",
                      backgroundColor: "#111",
                      height: 45,
                      borderRadius: 3.5,
                      width: { sm: "100%", lg: 400 },
                    }}
                    // onClick={cancelPayment}
                  >
                    <Icon
                      icon="bytesize:external"
                      width={20}
                      style={{ paddingRight: 8 }}
                    />
                    <Typography
                      fontSize={16}
                      fontWeight={600}
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        textTransform: "initial",
                      }}
                    >
                      Partager
                    </Typography>
                  </Button>
                </Stack>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={3}>
                  <OrderSummary order={order} />
                  <Button
                    sx={{
                      color: "#fff",
                      backgroundColor: "#f47373",
                      height: 45,
                      borderRadius: 3.5,
                    }}
                    // onClick={cancelPayment}
                  >
                    <Typography
                      fontSize={16}
                      fontWeight={600}
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                        textTransform: "initial",
                      }}
                    >
                      Annuler la commande
                    </Typography>
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}
