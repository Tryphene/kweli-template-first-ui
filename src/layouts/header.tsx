import { Stack } from "@mui/material";
import NavInfo from "./nav-info";
import NavSearch from "./nav-search";
import "./style.css";

export default function Header() {
  return (
    <Stack
      sx={{
        mb: 2,
        width: "100%",
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        zIndex: 2
      }}
    >
      <NavInfo />
      <NavSearch />
      {/* <Nav /> */}
    </Stack>
  );
}
