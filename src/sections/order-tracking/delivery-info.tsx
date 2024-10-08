/* eslint-disable @typescript-eslint/no-explicit-any */

import { Box, Stack, Typography } from "@mui/material";
import Card from "../../components/card";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  order: any;
};

export default function DeliveryInfo({ order }: Props) {
  return (
    <Card p={3} height={380}>
      <Stack spacing={5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Icon icon="carbon:delivery" color="#396143" width={30} />
          <Typography
            fontFamily="Poppins"
            fontWeight="bold"
            variant="subtitle2"
            color="grey"
          >
            Adresse de livraison
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
              Ville/Commune
            </Typography>
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              {order?.data?.customer_online_city}
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
              Quartier
            </Typography>
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              {order?.data?.customer_online_city}
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
              Adresse
            </Typography>
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              {order?.data?.full_delivery_address}
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
              Rue
            </Typography>
            <Typography
              fontFamily="Poppins"
              fontWeight="bold"
              variant="subtitle2"
              color="grey"
            >
              {order?.data?.customer_online_name}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Card>
  );
}
