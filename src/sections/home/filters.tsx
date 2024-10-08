import { Stack } from "@mui/material";
import CompanyFiltres from "../../components/filtres/company-filtres";
import PriceFilter from "../../components/filtres/price-filter";
import DiscountFilter from "../../components/filtres/discount-filter";

export default function Filers() {
  return (
    <Stack gap={4} bgcolor="redm">
      <CompanyFiltres />
      <PriceFilter />
      <DiscountFilter />
    </Stack>
  );
}
