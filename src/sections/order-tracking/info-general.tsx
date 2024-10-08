/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Stack, Typography } from "@mui/material";
import Card from "../../components/card";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  order: any;
};

export default function InfoGeneral({ order }: Props) {
  console.log(order);

  return (
    <Card p={3} height={380}>
      <Stack spacing={5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Icon icon="heroicons-solid:user-add" color="#396143" width={30} />
          <Typography
            fontFamily="Poppins"
            fontWeight="bold"
            variant="subtitle2"
            color="grey"
          >
            Information général
          </Typography>
        </Stack>
        <Stack
          direction="row"
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction="row"
            borderRadius={50}
            bgcolor="#E6EBE7"
            color="#396143"
            height={70}
            width={70}
            justifyContent="center"
            alignItems="center"
          >
            <Icon icon="eva:person-outline" width={30} color="#396143" />
          </Stack>
        </Stack>

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
            Nom
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
            E-mail
          </Typography>
          <Typography
            fontFamily="Poppins"
            fontWeight="bold"
            variant="subtitle2"
            color="grey"
          >
            {order?.data?.customer_online_email}
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
            Téléphone
          </Typography>
          <Typography
            fontFamily="Poppins"
            fontWeight="bold"
            variant="subtitle2"
            color="grey"
          >
            {order?.data?.customer_online_phone}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
