/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import Sizes from "../../components/sizes";
import { Icon } from "@iconify/react/dist/iconify.js";
import Color from "../../components/color";
import { getProductQuantityFromCookie } from "../../services/cart/cart-service";
import { useCart } from "../../providers/cart-provider";

type Props = {
  product: any;
};

export default function ActionsProductSection({ product }: Props) {
  const sizes = ["37", "38", "39", "40", "41"];
  const cartProvider = useCart();

  const isProductIdExists = () =>
    cartProvider.cart.some((item: any) => item.product_id === product?.id);

  return (
    <Stack gap={3}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          fontWeight="500"
          variant="subtitle2"
          gutterBottom
          sx={{ fontFamily: "Poppins" }}
        >
          Categorie
        </Typography>
        <Typography
          //   textAlign="center"
          variant="button"
          sx={{ fontFamily: "Poppins" }}
          gutterBottom
          color="#ccc"
        >
          {product?.sku}
        </Typography>
      </Stack>

      <Stack gap={1}>
        <Typography
          fontWeight="bold"
          variant="h6"
          sx={{ fontFamily: "Poppins" }}
        >
          {product?.name}
        </Typography>

        <Stack gap={1} direction="row">
          <Rating name="no-value" value={3} size="small" readOnly />
          <Typography
            variant="body2"
            sx={{ fontFamily: "Poppins", fontSize: 12.5 }}
            color="#ccc"
          >
            (1)
          </Typography>
        </Stack>
      </Stack>

      <Stack gap={2} sx={{ mt: 2 }}>
        <Typography
          fontWeight="bold"
          variant="h4"
          sx={{ fontFamily: "Poppins" }}
        >
          {product?.selling_price} $
        </Typography>
      </Stack>

      <Stack gap={1.5} sx={{ mt: 2 }}>
        <Stack direction="row" alignItems="center" gap={1.5}>
          <Typography
            fontWeight="bold"
            variant="body2"
            sx={{ fontFamily: "Poppins" }}
          >
            Couleur
          </Typography>
          <Box
            sx={{
              backgroundColor: "#39614362",
              width: 8,
              height: 8,
              borderRadius: 50,
            }}
          />
          <Typography
            variant="body2"
            sx={{ fontFamily: "Poppins" }}
            color="#ccc"
          >
            Blanc
          </Typography>
        </Stack>
        <Stack>
          <Color colors={sizes} />
        </Stack>
      </Stack>

      <Stack gap={1.5}>
        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mt: 2 }}>
          <Typography
            fontWeight="bold"
            variant="body2"
            sx={{ fontFamily: "Poppins" }}
          >
            Taille
          </Typography>
          <Box
            sx={{
              backgroundColor: "#39614362",
              width: 8,
              height: 8,
              borderRadius: 50,
            }}
          />
          <Typography
            variant="body2"
            sx={{ fontFamily: "Poppins" }}
            color="#ccc"
          >
            Blanc
          </Typography>
        </Stack>
        <Stack>
          <Sizes sizes={sizes} />
        </Stack>
        <Typography
          fontWeight="bold"
          variant="caption"
          sx={{ fontFamily: "Poppins" }}
          color="#396143"
        >
          Guide des tailles
        </Typography>
      </Stack>

      <Box
        columnGap={2}
        rowGap={3}
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(10, 1fr)",
          md: "repeat(10, 1fr)",
        }}
      >
        <Stack sx={{ gridColumn: { xs: "span 9", md: "span 9" } }}>
          {/* <Button
            sx={{
              color: "#fff",
              backgroundColor: "#396143",
              height: 45,
            }}
          >
            <Icon
              icon="ion:cart-outline"
              width={20}
              style={{ paddingRight: 8 }}
            />
            <Typography
              fontSize={15}
              fontWeight={600}
              variant="body2"
              sx={{
                fontFamily: "Poppins",
                textTransform: "initial",
              }}
            >
              Ajouter au panier
            </Typography>
          </Button> */}
          {isProductIdExists() &&
          getProductQuantityFromCookie(product?.id) > 0 ? (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                sx={{
                  color: "#fff",
                  backgroundColor: "#396143",
                  height: 45,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  cartProvider.handleDecrementQuantityProductCart(product);
                }}
              >
                -
              </Button>
              <Box width={50}>
                <Typography
                  fontSize={15}
                  textAlign="center"
                  fontWeight={600}
                  variant="body2"
                  sx={{
                    fontFamily: "Poppins",
                    textTransform: "initial",
                    fontSize: 14,
                  }}
                >
                  {getProductQuantityFromCookie(product?.id)}
                </Typography>
              </Box>
              <Button
                sx={{
                  color: "#fff",
                  backgroundColor: "#396143",
                  height: 45,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  cartProvider.handleAddToCart2(product);
                }}
              >
                +
              </Button>
            </Stack>
          ) : (
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#396143",
                height: 45,
              }}
              onClick={(e) => {
                console.log(product);

                e.stopPropagation();
                cartProvider.handleAddToCart(product);
              }}
            >
              <Icon
                icon="ion:cart-outline"
                width={20}
                style={{ paddingRight: 8 }}
              />
              <Typography
                fontSize={15}
                fontWeight={600}
                variant="body2"
                sx={{
                  fontFamily: "Poppins",
                  textTransform: "initial",
                  fontSize: 12.5,
                }}
              >
                Ajouter au panier
              </Typography>
            </Button>
          )}
        </Stack>
        <Stack sx={{ gridColumn: { xs: "span 1", md: "span 1" } }}>
          <Button
            sx={{
              backgroundColor: "#F2F4F2",
              color: "#396143",
              height: 45,
            }}
          >
            <Icon icon="icon-park-outline:like" width={20} />
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
