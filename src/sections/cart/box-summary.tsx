import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "../../routes/hooks/use-router";
import { paths } from "../../routes/paths";
import { useCart } from "../../providers/cart-provider";

export default function BoxSummary() {
  const router = useRouter();
  const cartProvider = useCart();

  return (
    <Stack sx={{ mt: 0 }}>
      <Stack sx={{ border: "1px solid #e4e4e4", borderRadius: 2 }}>
        <Stack spacing={3} sx={{ p: 2, borderBottom: "1px solid #e4e4e4" }}>
          <Typography
            fontWeight="bold"
            variant="body1"
            sx={{ fontFamily: "Poppins" }}
          >
            Résumé de la commande
          </Typography>
        </Stack>
        <Stack spacing={5} sx={{ p: 2 }}>
          <Stack spacing={1}>
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

            <Typography variant="caption" color="#888" fontFamily="Poppins">
              Frais non inclus a ce stade
            </Typography>
          </Stack>

          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#396143",
              height: 45,
            }}
            onClick={() => router.push(paths.delivery.page("mgroup2-shop-max"))}
          >
            <Typography
              fontSize={17}
              fontWeight={600}
              variant="body2"
              sx={{
                fontFamily: "Poppins",
                textTransform: "initial",
              }}
            >
              Confirmer la commande
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
