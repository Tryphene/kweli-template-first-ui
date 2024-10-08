/* eslint-disable @typescript-eslint/no-explicit-any */

import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { OrangePaymentSchema } from "./orange-payment-schema";
import FormProvider from "../../components/hook-form/form-provider";
import { RHFTextField } from "../../components/hook-form";
import RHFTel from "../../components/hook-form/rhf-tel";
import { useCart } from "../../providers/cart-provider";

// type Props = {
//   values: any;
// };

export default function OrangeForm() {
  const cartProvider = useCart();

  const defaultValues: any = useMemo(
    () => ({
      phone: "",
      code: null,
    }),
    []
  );

  const methods = useForm({
    resolver: yupResolver(OrangePaymentSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
    // reset,
    // setValue,
  } = methods;
  console.log(errors);

  const values = watch();
  console.log("values", values);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3}>
        <Typography variant="body2" fontFamily="Poppins">
          Pour générer un code temporaire, ouvrez l'appli Orange Money Afrique
          et cliquer sur Mon compte ou composez le #144.82#
        </Typography>

        <Box
          columnGap={2}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <Stack spacing={1}>
            <Typography variant="body2" fontWeight="bold" fontFamily="Poppins">
              Téléphone
            </Typography>
            <RHFTel name="phone" placeholder="Téléphone" />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="body2" fontWeight="bold" fontFamily="Poppins">
              code
            </Typography>
            <RHFTextField name="code" aria-readonly placeholder="code" />
          </Stack>
        </Box>

        <Button
          sx={{
            width: {
              xs: "100%",
              md: "100%",
              lg: 400,
            },
            color: "#fff",
            backgroundColor: "#396143",
            height: 45,
          }}
          // onClick={() => router.push(paths.payment.page)}
        >
          <Typography
            fontSize={16}
            fontWeight={600}
            variant="body2"
            sx={{
              fontFamily: "Poppins",
              textTransform: "initial",
            }}
          >
            Payer {cartProvider.getAmountOrder()} Fcfa
          </Typography>
        </Button>
      </Stack>
    </FormProvider>
  );
}
