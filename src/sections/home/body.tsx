import { Stack } from "@mui/material";
import Banner from "./banner";
import BodyContent from "./body-content";

export default function Body() {
  return (
    <Stack gap={8} sx={{ py: 3, px: { xs: 2, sm: 5, md: 10, lg: 10 } }}>
      <Banner />
      <BodyContent />
    </Stack>
  );
}
