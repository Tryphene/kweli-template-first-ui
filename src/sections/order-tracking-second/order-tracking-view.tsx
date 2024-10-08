import { Stack } from "@mui/material";
import SectionInfo from "./section-info";
import SectionDetail from "./section-detail";
import { useParams } from "react-router-dom";
import { useGetOrder } from "../../apis/orders/get-order-api";

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
        <Stack spacing={8} sx={{ px: { xs: 3, sm: 5, lg: 20 }, mt: 4 }}>
          <SectionInfo order={order} />
          <SectionDetail />
        </Stack>
      )}
    </Stack>
  );
}
