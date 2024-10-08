/* eslint-disable @typescript-eslint/no-explicit-any */

import { Stack, Typography } from "@mui/material";
import Card from "../../components/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import Steps from "./steps";

type Props = {
  order: any;
};

export default function OrderHistory({ order }: Props) {
  return (
    <Card p={3}>
      <Stack spacing={5}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Icon icon="ic:baseline-history" color="#396143" width={30} />
          <Typography
            fontFamily="Poppins"
            fontWeight="bold"
            variant="subtitle2"
            color="grey"
          >
            Historique de la commande
          </Typography>
        </Stack>
        <Stack>
          <Steps order={order} />
        </Stack>
      </Stack>
    </Card>
  );
}
