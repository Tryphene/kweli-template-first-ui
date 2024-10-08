import { Badge, IconButton, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { paths } from "../routes/paths";
import { useRouter } from "../routes/hooks/use-router";
import { useCart } from "../providers/cart-provider";
import { useCompany } from "../providers/company-provider";
import Image from "../components/image/image";

export default function NavSearch() {
  const router = useRouter();
  const cartProvider = useCart();
  const companyProvider = useCompany();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        py: 2.5,
        px: {
          xs: 2,
          sm: 5,
          lg: 15,
        },
        borderBottom: "1px solid #e4e4e4",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <Stack
          sx={{
            display: {
              xs: "block",
              sm: "none",
              lg: "none",
            },
          }}
        >
          <IconButton>
            <Icon icon="ic:baseline-menu" width={27} color="#111" />
          </IconButton>
        </Stack>
        {companyProvider?.company?.logo_path ? (
          <Image
            sx={{
              mt: 0,
              width: 50,
              height: 50,
            }}
            src={companyProvider?.company?.logo_path}
          />
        ) : (
          <Typography
            variant="h5"
            sx={{ fontFamily: "Poppins", cursor: "pointer" }}
            onClick={() =>
              router.push(paths.home.page(companyProvider.companySlug!))
            }
          >
            {companyProvider?.company?.name}
          </Typography>
        )}
      </Stack>
      <Stack
        direction="row"
        gap={0}
        alignItems="center"
        sx={{
          width: {
            sm: 300,
            md: 300,
            lg: 550,
          },
          display: {
            xs: "none",
            sm: "flex",
            lg: "flex",
          },
        }}
        className="search"
      >
        <input type="text" />
        <button>
          <Stack direction="row" gap={1} alignItems="center">
            <Icon icon="ic:outline-search" width={20} />
            Recherche
          </Stack>
        </button>
      </Stack>

      <Stack direction="row" gap={2} alignItems="center">
        <IconButton>
          <Icon icon="bi:person" width={27} color="#111" />
        </IconButton>
        <IconButton
          onClick={() => router.push(paths.cart.page("mgroup2-shop-max"))}
        >
          <Badge badgeContent={cartProvider.countItemsCart()} color="secondary">
            {/* <MailIcon color="action" /> */}
            <Icon icon="ion:cart-outline" width={27} color="#111" />
          </Badge>
        </IconButton>
      </Stack>
    </Stack>
  );
}
