/* eslint-disable @typescript-eslint/no-explicit-any */
import { Grid, Stack } from "@mui/material";
import BoxProducts from "./box-products";
import BoxSummary from "./box-summary";
import { useForm } from "react-hook-form";
import { NewPayMethodSchema } from "./pay-method-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/form-provider";
import { useMemo } from "react";
import { useCart } from "../../providers/cart-provider";

export default function OrderSummaryView() {
  const cartProvider = useCart();

  const defaultValues: any = useMemo(
    () => ({
      pay_method_id: "maison",
    }),
    []
  );

  const methods = useForm({
    resolver: yupResolver(NewPayMethodSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;
  console.log(errors);

  const values = watch();
  console.log("values", values);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });
  
  return (
    <Stack sx={{ px: { xs: 2, sm: 5, lg: 20 }, mt: 4 }}>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={12} lg={8}>
            <BoxProducts products={cartProvider.cart} />
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
            <BoxSummary values={values} />
          </Grid>
        </Grid>
      </FormProvider>
    </Stack>
  );
}
