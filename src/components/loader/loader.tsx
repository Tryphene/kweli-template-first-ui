import { Stack } from "@mui/material";
import "./styles.css";

export default function Loader() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <div className="loader"></div>
    </Stack>
  );
}
