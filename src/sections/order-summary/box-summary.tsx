/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "../../routes/hooks/use-router";
import { paths } from "../../routes/paths";
import { RHFRadioGroup } from "../../components/hook-form";
import { useCart } from "../../providers/cart-provider";
import { useOrder } from "../../providers/order-provider";
import { useCallback, useState } from "react";
import { setOrder } from "../../services/order/order-service";
import { saveNewOrder } from "../../apis/orders/post-order-api";
import Cookies from "js-cookie";
import { getCart, resetCart } from "../../services/cart/cart-service";
import { useCompany } from "../../providers/company-provider";

type Props = {
  values?: any;
};

export default function BoxSummary({ values }: Props) {
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

  return (
    <Stack sx={{ mt: 0 }}>
      <Stack sx={{ border: "1px solid #e4e4e4", borderRadius: 2 }}>
        <Stack spacing={3} sx={{ p: 2, borderBottom: "1px solid #e4e4e4" }}>
          <Typography
            fontWeight="bold"
            variant="body1"
            sx={{ fontFamily: "Poppins" }}
          >
            Résumé du panier
          </Typography>
        </Stack>

        <Stack spacing={5} sx={{ p: 2 }}>
          <Stack spacing={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
                Sous total
              </Typography>
              <Typography
                fontWeight="bold"
                variant="body1"
                sx={{ fontFamily: "Poppins" }}
              >
                {cartProvider.getAmountOrder()} Fcfa
              </Typography>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="caption" sx={{ fontFamily: "Poppins" }}>
                Frais de livraison
              </Typography>
              <Typography
                fontWeight="bold"
                variant="caption"
                sx={{ fontFamily: "Poppins" }}
              >
                {1500} Fcfa
              </Typography>
            </Stack>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
                TOTAL
              </Typography>
              <Typography
                fontWeight="bold"
                variant="h6"
                sx={{ fontFamily: "Poppins" }}
              >
                {cartProvider.getAmountOrder() + 1500} Fcfa
              </Typography>
            </Stack>

            <Divider />

            <Typography variant="caption" fontSize={12} fontFamily="Poppins">
              Informations livraison
            </Typography>

            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              <Stack>
                <Typography
                  fontWeight="bold"
                  variant="body1"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Nom
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
                  {order?.customer_online_name}
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  fontWeight="bold"
                  variant="body1"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Prénom(s)
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
                  {order?.customer_online_subname}
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  fontWeight="bold"
                  variant="body1"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Téléphone
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
                  {order?.customer_online_phone}
                </Typography>
              </Stack>
            </Box>

            <Stack>
              <Typography
                fontWeight="bold"
                variant="body1"
                sx={{ fontFamily: "Poppins" }}
              >
                Adresse de livraison
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
                {order?.full_delivery_address}
              </Typography>
            </Stack>

            <Divider />

            <Typography variant="caption" fontSize={12} fontFamily="Poppins">
              Mode de paiement
            </Typography>

            <Stack>
              <RHFRadioGroup
                name="pay_method_id"
                row={true}
                options={[
                  { label: "Payer à la livraison", value: "maison" },
                  { label: "Mobile money", value: "mobile_money" },
                ]}
              />
            </Stack>
          </Stack>

          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#396143",
              height: 45,
            }}
            onClick={() => {
              if (values.pay_method_id !== "maison") {
                router.push(paths.payment.page(companyProvider.companySlug!));
              } else {
                passOrder();
              }
            }}
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
              ) : values.pay_method_id == "maison" ? (
                "Confirmer la commande"
              ) : (
                "Aller au paiement"
              )}
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
