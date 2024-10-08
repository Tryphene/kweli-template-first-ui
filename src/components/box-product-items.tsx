/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import Image from "./image/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "../routes/hooks/use-router";
import { paths } from "../routes/paths";
import { useCallback } from "react";
import { getProductQuantityFromCookie } from "../services/cart/cart-service";
import { useCart } from "../providers/cart-provider";

type Props = {
  product: any;
};

export default function BoxProductItems({ product }: Props) {
  const router = useRouter();
  const cartProvider = useCart();

  const handleViewProduct = useCallback(
    (slug: string | null) => {
      if (slug) {
        router.push(paths.product.page("mgroup2-shop-max", slug));
      }
    },
    [router]
  );

  const isProductIdExists = () =>
    cartProvider.cart.some((item: any) => item.product_id === product?.id);

  return (
    <Stack
      gap={2}
      sx={{
        p: 2,
        border: "1px solid #e4e4e4",
        borderRadius: 2,
        cursor: "pointer",
      }}
      onClick={() => handleViewProduct(product?.slug)}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Image
          sx={{
            mt: 0,
            width: 100,
            height: 100,
          }}
          alt="Aucune image"
          src={product?.main_image_path}
          // src="https://img.freepik.com/vecteurs-libre/eclaboussure-fruit-oranges-realistes_52683-65283.jpg?ga=GA1.1.1859331002.1720646969&semt=ais_hybrid"
        />
      </Stack>

      <Stack gap={0.5}>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Poppins", fontSize: 12.5 }}
          color="#ccc"
        >
          Cup
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
        >
          {product?.name}
        </Typography>

        <Stack direction="row" alignItems="center" gap={0.5}>
          <Rating name="no-value" value={null} size="small" readOnly />
          <Typography
            variant="body2"
            sx={{ fontFamily: "Poppins", fontSize: 12.5 }}
            color="#ccc"
          >
            (0)
          </Typography>
        </Stack>
      </Stack>

      <Stack gap={0.5}>
        <Typography
          variant="body1"
          sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
        >
          {product?.selling_price} Fcfa
        </Typography>
        {product?.discount && (
          <Typography
            variant="caption"
            sx={{
              fontFamily: "Poppins",
              textDecoration: "line-through",
              color: "#396143",
            }}
            textAlign="left"
          >
            {product?.discount} Fcfa
          </Typography>
        )}
      </Stack>

      {isProductIdExists() && getProductQuantityFromCookie(product?.id) > 0 ? (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button
            sx={{
              color: "#fff",
              backgroundColor: "#396143",
              height: 35,
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
              height: 35,
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
            height: 35,
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

      {/* <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={0.5}
      >
        <Stack gap={0.5}>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
          >
            {product?.selling_price} $
          </Typography>
        </Stack>

        {isProductIdExists() ? (
          <Stack direction="row" alignItems="center">
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#396143",
                height: 35,
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleDecrementQuantityProductCart();
              }}
            >
              -
            </Button>
            <Box width={30}>
              <Typography
                fontSize={15}
                textAlign="center"
                fontWeight={600}
                variant="body2"
                sx={{
                  fontFamily: "Poppins",
                  textTransform: "initial",
                  fontSize: 12.5,
                }}
              >
                1
              </Typography>
            </Box>
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "#396143",
                height: 35,
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
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
              height: 35,
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            <Icon
              icon="ion:cart-outline"
              width={20}
              style={{ paddingRight: 2 }}
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
      </Stack> */}
    </Stack>
  );
}
