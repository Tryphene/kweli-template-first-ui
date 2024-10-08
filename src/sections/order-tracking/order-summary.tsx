/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Stack, Typography } from "@mui/material";
import Card from "../../components/card";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  order: any;
};

export default function OrderSummary({ order }: Props) {
  return (
    <Card p={3} height={600}>
      <Stack spacing={5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Icon
            icon="clarity:shopping-cart-solid-badged"
            color="#396143"
            width={30}
          />
          <Typography
            fontFamily="Poppins"
            fontWeight="bold"
            variant="subtitle2"
            color="grey"
          >
            Résumé de la commande
          </Typography>
        </Stack>

        <Stack spacing={3.5}>
          <Box
            columnGap={2}
            rowGap={3}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
          >
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              Paiement
            </Typography>
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              {/* {order?.data?.customer_online_city} */}A la livrasion
            </Typography>
          </Box>

          <Box
            columnGap={2}
            rowGap={3}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
          >
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              Sous Total
            </Typography>
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              {order?.data?.subtotal_amount} Fcfa
            </Typography>
          </Box>

          <Box
            columnGap={2}
            rowGap={3}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
          >
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              Rabbais
            </Typography>
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              {order?.data?.discount} Fcfa
            </Typography>
          </Box>

          <Box
            columnGap={2}
            rowGap={3}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
          >
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              Frais de livraion
            </Typography>
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              {order?.data?.delivery_fee} Fcfa
            </Typography>
          </Box>

          <Box
            columnGap={2}
            rowGap={3}
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            }}
          >
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="#396143"
            >
              Total
            </Typography>
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="#396143"
            >
              {order?.data?.total_amount} Fcfa
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}
