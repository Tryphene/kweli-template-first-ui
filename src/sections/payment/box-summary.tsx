import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useCart } from "../../providers/cart-provider";
import { paths } from "../../routes/paths";
import { useRouter } from "../../routes/hooks/use-router";
import { useCallback } from "react";
import { useCompany } from "../../providers/company-provider";
import { useOrder } from "../../providers/order-provider";

export default function BoxSummary() {
  const cartProvider = useCart();
  const companyProvider = useCompany();
  const router = useRouter();
  const orderProvider = useOrder();
  const order = orderProvider.orderData();

  const cancelPayment = useCallback(async () => {
    router.push(paths.orderSummary.page(companyProvider.companySlug!));
  }, [router, companyProvider]);

  return (
    <Stack spacing={3} sx={{ mt: 0 }}>
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
          </Stack>
        </Stack>
      </Stack>

      <Button
        sx={{
          color: "#fff",
          backgroundColor: "#f47373",
          height: 45,
        }}
        onClick={cancelPayment}
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
          Annuler le paiement
        </Typography>
      </Button>
    </Stack>
  );
}
