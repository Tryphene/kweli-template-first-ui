import { Icon } from "@iconify/react/dist/iconify.js";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  title?: string;
  icon: string;
  children?: React.ReactNode;
};

export default function Dropdown({ title, children, icon }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
      style={{ position: "relative" }}
    >
      <Stack direction="row" gap={0.5} alignItems="center">
        <Icon icon={icon} width={20} />
        <Typography sx={{fontFamily: "Poppins"}} variant="body2">{title}</Typography>
        <Icon icon="icon-park:down" width={20} />
      </Stack>
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: 25,
            left: 0,
            backgroundColor: "white",
            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            zIndex: 5,
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
