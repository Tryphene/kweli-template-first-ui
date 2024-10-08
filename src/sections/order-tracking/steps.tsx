/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Stack, Typography } from "@mui/material";

function Dot(props: any) {
  const { active } = props;
  return (
    <Box
      width={8}
      height={8}
      bgcolor={active ? "#396143" : "#9E9E9E"}
      borderRadius={100}
    />
  );
}

type Props = {
  order: any;
};

export default function steps({ order }: Props) {

  return (
    <Stack spacing={1}>
      <Stack spacing={2} direction="row">
        <Stack spacing={1} sx={{ pt: 1 }}>
          <Dot active={order?.data?.status === "pending"} />
          <Stack sx={{ pl: 0.09 }} alignItems="center">
            <Box
              sx={{
                borderLeft: 1,
                borderColor:
                  order?.data?.status === "pending" ? "#396143" : "divider",
                height: 40,
              }}
            />
          </Stack>
        </Stack>

        <Typography
          variant="subtitle2"
          fontWeight="bold"
          color={order?.data?.status === "pending" ? "#396143" : "grey"}
          fontFamily="Poppins"
        >
          En attente
        </Typography>
      </Stack>

      <Stack spacing={2} direction="row">
        <Stack spacing={1} sx={{ pt: 1 }}>
          <Dot active={order?.data?.status === "being_prepared"} />
          <Stack sx={{ pl: 0.09 }} alignItems="center">
            <Box
              sx={{
                borderLeft: 1,
                borderColor:
                  order?.data?.status === "being_prepared"
                    ? "#396143"
                    : "divider",
                height: 40,
              }}
            />
          </Stack>
        </Stack>

        <Typography
          variant="subtitle2"
          fontWeight={order?.data?.status === "being_prepared" ? "bold" : ""}
          color={order?.data?.status === "being_prepared" ? "#396143" : "grey"}
          fontFamily="Poppins"
        >
          En cours de préparation
        </Typography>
      </Stack>

      <Stack spacing={2} direction="row">
        <Stack spacing={1} sx={{ pt: 1 }}>
          <Dot active={order?.data?.status === "ready_for_delivery"} />
          <Stack sx={{ pl: 0.09 }} alignItems="center">
            <Box
              sx={{
                borderLeft: 1,
                borderColor:
                  order?.data?.status === "ready_for_delivery"
                    ? "#396143"
                    : "divider",
                height: 40,
              }}
            />
          </Stack>
        </Stack>

        <Typography
          variant="subtitle2"
          fontWeight={
            order?.data?.status === "ready_for_delivery" ? "bold" : ""
          }
          color={
            order?.data?.status === "ready_for_delivery" ? "#396143" : "grey"
          }
          fontFamily="Poppins"
        >
          Pret pour la livraison
        </Typography>
      </Stack>

      <Stack spacing={2} direction="row">
        <Stack spacing={1} sx={{ pt: 1 }}>
          <Dot active={order?.data?.status === "delivering"} />
          <Stack sx={{ pl: 0.09 }} alignItems="center">
            <Box
              sx={{
                borderLeft: 1,
                borderColor:
                  order?.data?.status === "delivering" ? "#396143" : "divider",
                height: 40,
              }}
            />
          </Stack>
        </Stack>

        <Typography
          variant="subtitle2"
          fontWeight={order?.data?.status === "delivering" ? "bold" : ""}
          color={order?.data?.status === "delivering" ? "#396143" : "grey"}
          fontFamily="Poppins"
        >
          En cours de livraison
        </Typography>
      </Stack>

      <Stack spacing={2} direction="row">
        <Stack spacing={1} sx={{ pt: 1 }}>
          <Dot active={order?.data?.status === "delivered"} />
        </Stack>

        <Typography
          variant="subtitle2"
          fontWeight={order?.data?.status === "delivered" ? "bold" : ""}
          color={order?.data?.status === "delivered" ? "#396143" : "grey"}
          fontFamily="Poppins"
        >
          Livré
        </Typography>
      </Stack>
    </Stack>
  );
}
