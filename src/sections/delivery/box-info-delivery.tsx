/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { paths } from "../../routes/paths";
import { useRouter } from "../../routes/hooks/use-router";
import { RHFTextField } from "../../components/hook-form";
import FormProvider from "../../components/hook-form/form-provider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useMemo } from "react";
import { NewDeliverySchema } from "./info-delivery-schema";
import RHFTel from "../../components/hook-form/rhf-tel";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useOrder } from "../../providers/order-provider";
import { setOrder } from "../../services/order/order-service";

// type Props = {};

// export default function BoxInfoDelivery({}: Props) {
export default function BoxInfoDelivery() {
  const router = useRouter();
  const orderProvider = useOrder();
  const order = orderProvider.orderData();

  // console.log("order", order);

  const defaultValues: any = useMemo(
    () => ({
      customer_online_name: order?.customer_online_name || "",
      customer_online_subname: order?.customer_online_subname || "",
      customer_online_phone: order?.customer_online_phone || "",
      full_delivery_address: order?.full_delivery_address || "",
      customer_online_city: order?.customer_online_city || "",
      // pay_method_id: currentOrder?.pay_method_id || null,
    }),
    [order]
  );

  const methods = useForm({
    resolver: yupResolver(NewDeliverySchema),
    defaultValues,
  });

  const {
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    // setValue,
  } = methods;
  console.log(errors);

  useEffect(() => {
    if (order) {
      reset(defaultValues);
    }
  }, []);

  const values = watch();
  console.log("values", values);

  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);
    order.customer_online_name = data.customer_online_name;
    order.customer_online_subname = data.customer_online_subname;
    order.customer_online_phone = data.customer_online_phone;
    order.customer_online_email = data.customer_online_email;
    order.customer_online_city = data.customer_online_city;
    order.full_delivery_address = data.full_delivery_address;
    setOrder(order);
    console.log(order);
    

    router.push(paths.orderSummary.page("mgroup2-shop-max"));
  });

  return (
    <Stack sx={{ mt: 5, width: { xs: "100%", sm: "100%", lg: 700 } }}>
      <FormProvider methods={methods} onSubmit={onSubmit}>
        <Stack sx={{ border: "1px solid #e4e4e4", borderRadius: 2 }}>
          <Stack spacing={3} sx={{ p: 2, borderBottom: "1px solid #e4e4e4" }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton
                onClick={() => router.push(paths.cart.page("mgroup2-shop-max"))}
                sx={{ backgroundColor: "#fff" }}
              >
                <Icon
                  icon="majesticons:arrow-left-line"
                  width={18}
                  color="#111"
                />
              </IconButton>
              <Typography
                fontWeight="bold"
                variant="body1"
                sx={{ fontFamily: "Poppins" }}
              >
                Informations de livraison
              </Typography>
            </Stack>
          </Stack>

          <Stack spacing={5} sx={{ p: 2 }}>
            <Stack spacing={2}>
              <Typography variant="caption" color="#888" fontFamily="Poppins">
                Les frais sont à la charge de client
              </Typography>

              <Stack spacing={3}>
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
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      fontFamily="Poppins"
                    >
                      Nom*
                    </Typography>
                    <RHFTextField
                      name="customer_online_name"
                      aria-readonly
                      placeholder="Nom"
                    />
                  </Stack>

                  <Stack spacing={1}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      fontFamily="Poppins"
                    >
                      Prénom(s)*
                    </Typography>
                    <RHFTextField
                      name="customer_online_subname"
                      aria-readonly
                      placeholder="Prénom(s)"
                    />
                  </Stack>
                </Box>

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
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      fontFamily="Poppins"
                    >
                      Téléphone*
                    </Typography>
                    <RHFTel
                      name="customer_online_phone"
                      placeholder="Téléphone"
                    />
                  </Stack>

                  <Stack spacing={1}>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      fontFamily="Poppins"
                    >
                      E-mail
                    </Typography>
                    <RHFTextField
                      name="customer_online_email"
                      aria-readonly
                      placeholder="E-mail"
                    />
                  </Stack>
                </Box>

                <Stack spacing={1}>
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    fontFamily="Poppins"
                  >
                    Ville/Commune*
                  </Typography>
                  <RHFTextField
                    name="customer_online_city"
                    aria-readonly
                    placeholder="Ville/Commune"
                  />
                </Stack>

                <Stack spacing={1}>
                  <Typography
                    fontWeight="bold"
                    fontFamily="Poppins"
                    variant="subtitle2"
                  >
                    Adresse complète de livraison*
                  </Typography>
                  <RHFTextField
                    multiline
                    rows={3}
                    name="full_delivery_address"
                    placeholder="Adresse complète de livraison"
                  />
                </Stack>
              </Stack>
            </Stack>

            <Button
              type="submit"
              sx={{
                color: "#fff",
                backgroundColor: "#396143",
                height: 45,
              }}
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
                Continuer
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </Stack>
  );
}
