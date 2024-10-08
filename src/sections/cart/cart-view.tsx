import { Button, Grid, Stack, Typography } from "@mui/material";
import BoxSummary from "./box-summary";
import "./style.css";
import BoxItemsCart from "./box-items-cart";
import { useCart } from "../../providers/cart-provider";
import { useNavigate } from "react-router-dom";
import { useCompany } from "../../providers/company-provider";

export default function CartView() {
  const cartProvider = useCart();
  const companyProvider = useCompany();

  const navigate = useNavigate();

  const handleScroll = () => {
    navigate(`/${companyProvider.companySlug}#product-section`);
  };

  return (
    <Stack gap={10} sx={{ px: { xs: 2, sm: 5, lg: 20 }, mt: 4 }}>
      {cartProvider.countItemsCart() > 0 ? (
        <Stack>
          <Grid container spacing={10} sx={{ mb: 2 }}>
            <Grid item xs={12} lg={8}>
              <BoxItemsCart products={cartProvider.cart} />
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

          {/* <LastestViewProduct /> */}
        </Stack>
      ) : (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={300}
        >
          <Stack spacing={2}>
            <Typography
              fontWeight="bold"
              textAlign="center"
              fontSize={20}
              variant="body1"
              fontFamily="Poppins"
            >
              Votre panier est vide
            </Typography>
            <Button
              sx={{
                px: 5,
                color: "#fff",
                backgroundColor: "#396143",
                height: 45,
              }}
              onClick={handleScroll}
            >
              {/* <Icon icon="ion:cart-outline" width={20} /> */}
              <Typography
                fontSize={15}
                fontWeight={600}
                variant="body2"
                sx={{
                  fontFamily: "Poppins",
                  textTransform: "initial",
                }}
              >
                Acheter maintenant
              </Typography>
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}
