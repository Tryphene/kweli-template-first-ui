import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useState } from "react";
import OrangeForm from "./orange-form";
import { useCart } from "../../providers/cart-provider";
import { paths } from "../../routes/paths";
import { saveNewOrder } from "../../apis/orders/post-order-api";
import { useOrder } from "../../providers/order-provider";
import { useCompany } from "../../providers/company-provider";
import { useRouter } from "../../routes/hooks/use-router";
import { setOrder } from "../../services/order/order-service";
import { getCart, resetCart } from "../../services/cart/cart-service";
import Cookies from "js-cookie";

export default function BoxItemsPaymentMethod() {
  const [methodPaymentSelected, setMethodPaymentSelected] = useState(0);
  const cartProvider = useCart();
  const orderProvider = useOrder();
  const companyProvider = useCompany();
  const order = orderProvider.orderData();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const passOrder = useCallback(async () => {
    order.sale_items = [];
    setLoading(true);

    for (let i = 0; i < cartProvider.cart.length; i++) {
      order?.sale_items.push(cartProvider.cart[i]);
    }

    order.cash = cartProvider.getAmountOrder();
    setOrder(order);

    const orderCreated = await saveNewOrder(
      order,
      companyProvider.companySlug!
    );

    if (orderCreated?.status == 201) {
      Cookies.remove("order");
      Cookies.remove("cart");
      orderProvider.resetOrder();

      getCart();

      resetCart();
      cartProvider.resetCart();
      setLoading(false);

      router.push(
        paths.orderTracking.page(
          companyProvider.companySlug!,
          orderCreated?.data.data.ref
        )
      );
    } else {
      setLoading(false);
    }
  }, [cartProvider, companyProvider, order, orderProvider, router]);

  const paymentMethods = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXc0uQcHPnFEOd3oPyRGbEsMPfnaqS8pxi2g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjykY3ZcP7kv0RJjPwvZhDZB6M7Vggpx8P9w&s",
    "https://media.licdn.com/dms/image/D4E12AQE8uOMdl4km9w/article-cover_image-shrink_600_2000/0/1678624190074?e=2147483647&v=beta&t=YEhO6rD75nuvHIg9za08JHadmzcjOyl-xBdtim_UnU4",
    "https://www.moov-africa.ci/wp-content/uploads/2022/05/icon-assistance-moovci_Plan-de-travail-1-1.png",
  ];
  return (
    <Stack spacing={10}>
      <Typography
        fontWeight="bold"
        variant="body1"
        sx={{ fontFamily: "Poppins" }}
      >
        Finaliser votre paiement
      </Typography>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        {paymentMethods.map((item, index: number) => (
          <Button
            key={index}
            sx={{
              color: "#111",
              border: "1px solid #fff",
              borderRadius: 5,
              p: 3,
              borderColor: methodPaymentSelected == index ? "#396143" : "#fff",
            }}
            onClick={() => setMethodPaymentSelected(index)}
          >
            <Box
              sx={{
                borderRadius: 5,
                width: 120,
                height: 120,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundImage: `url(${item})`,
              }}
            />
          </Button>
        ))}
      </Box>

      {methodPaymentSelected == 1 ? (
        <OrangeForm />
      ) : (
        <Button
          sx={{
            width: {
              xs: "100%",
              md: "100%",
              lg: 400,
            },
            color: "#fff",
            backgroundColor: "#396143",
            height: 45,
          }}
          onClick={passOrder}
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
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              `Payer ${cartProvider.getAmountOrder() + 1500} Fcfa`
            )}
          </Typography>
        </Button>
      )}
    </Stack>
  );
}
