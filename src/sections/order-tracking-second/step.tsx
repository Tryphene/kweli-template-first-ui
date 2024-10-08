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

export default function Stepp() {
  // const [activeStep, setActiveStep] = React.useState(0);
  const activeStep = 0;

  return (
    <Stack spacing={1}>
      <Stack spacing={2} direction="row">
        <Stack spacing={1} sx={{ pt: 1 }}>
          <Dot active={activeStep >= 0} />
          <Stack sx={{ pl: 0.09 }} alignItems="center">
            <Box
              sx={{
                borderLeft: 1,
                borderColor: activeStep >= 0 ? "#396143" : "divider",
                height: 120,
              }}
            />
          </Stack>
        </Stack>
        <Stack spacing={3}>
          <Stack>
            <Typography variant="body1" fontWeight="bold" fontFamily="Poppins">
              En attente
            </Typography>
            <Typography variant="caption" color="#888" fontFamily="Poppins">
              29/09/2024
            </Typography>
          </Stack>

          <Stack>
            <Typography variant="caption" fontFamily="Poppins">
              Product Shipped : juhhih
            </Typography>
            <Typography variant="caption" fontFamily="Poppins">
              Product Shipped : juhhih
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row">
        <Stack spacing={1} sx={{ pt: 1 }}>
          <Dot active={activeStep >= 1} />
          <Stack sx={{ pl: 0.09 }} alignItems="center">
            <Box
              sx={{
                borderLeft: 1,
                borderColor: activeStep >= 1 ? "#396143" : "divider",
                height: 120,
              }}
            />
          </Stack>
        </Stack>
        <Stack spacing={3}>
          <Stack>
            <Typography variant="body1" fontWeight="bold" fontFamily="Poppins">
              En cours de préparation
            </Typography>
            <Typography variant="caption" color="#888" fontFamily="Poppins">
              29/09/2024
            </Typography>
          </Stack>

          <Stack>
            <Typography variant="caption" fontFamily="Poppins">
              Product Shipped : juhhih
            </Typography>
            <Typography variant="caption" fontFamily="Poppins">
              Product Shipped : juhhih
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row">
        <Stack spacing={1} sx={{ pt: 1 }}>
          <Dot active={activeStep >= 2} />
          <Stack sx={{ pl: 0.09 }} alignItems="center">
            <Box
              sx={{
                borderLeft: 1,
                borderColor: activeStep >= 2 ? "#396143" : "divider",
                height: 50,
              }}
            />
          </Stack>
        </Stack>
        <Stack spacing={3}>
          <Stack>
            <Typography variant="body1" fontWeight="bold" fontFamily="Poppins">
              Pret pour la livraison
            </Typography>
            <Typography variant="caption" color="#888" fontFamily="Poppins">
              29/09/2024
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row">
        <Stack spacing={1} sx={{ pt: 1 }}>
          <Dot active={activeStep >= 3} />
          <Stack sx={{ pl: 0.09 }} alignItems="center">
            <Box
              sx={{
                borderLeft: 1,
                borderColor: activeStep >= 3 ? "#396143" : "divider",
                height: 50,
              }}
            />
          </Stack>
        </Stack>
        <Stack spacing={3}>
          <Stack>
            <Typography variant="body1" fontWeight="bold" fontFamily="Poppins">
              En cours de livraison
            </Typography>
            <Typography variant="caption" color="#888" fontFamily="Poppins">
              29/09/2024
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack spacing={2} direction="row">
        <Stack spacing={1} sx={{ pt: 1 }}>
          <Dot active={activeStep >= 4} />
        </Stack>
        <Stack spacing={3}>
          <Stack>
            <Typography variant="body1" fontWeight="bold" fontFamily="Poppins">
              Livré
            </Typography>
            <Typography variant="caption" color="#888" fontFamily="Poppins">
              29/09/2024
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
