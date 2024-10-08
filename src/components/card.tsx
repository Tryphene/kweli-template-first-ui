import { Box } from "@mui/material";
import React from "react";

type CardProps = {
  children?: React.ReactNode;
  color?: string;
  p?: number;
  height?: number | string;
};

const Card = ({ children, color, p, height }: CardProps) => {
  return (
    <Box
      sx={{ p: p, borderRadius: 5, height: height }}
      bgcolor={color}
      border="1px solid #e4e4e4"
    >
      {children}
    </Box>
  );
};

export default Card;
