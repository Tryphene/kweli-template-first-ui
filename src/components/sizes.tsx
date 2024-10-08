/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button } from "@mui/material";

type Props = {
  sizes: any;
};

export default function Sizes({ sizes }: Props) {
  return (
    <Box display="flex" flexWrap="wrap" gap={1}>
      {sizes.map((item: any, index: number) => (
        <Button key={index} sx={{ color: "#111", border: "1px solid #e4e4e4" }}>
          {item}
        </Button>
      ))}
    </Box>
  );
}
