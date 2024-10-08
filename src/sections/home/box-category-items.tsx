import { Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "../../components/image/image";

type Props = {
  img: string;
  icon: string;
  name?: string;
};

export default function BoxCategoryItems({ img, name, icon }: Props) {
  console.log(img);

  return (
    <Stack gap={2}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#f5f5f5",
            width: 130,
            height: 130,
            borderRadius: 100,
            cursor: "pointer",
          }}
        >
          {img ? (
            <Image
              sx={{
                mt: 0,
                width: 100,
                height: 100,
              }}
              src={img}
            />
          ) : (
            <Icon icon={icon} width={80} />
          )}
        </Stack>
      </Stack>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Poppins",
          fontSize: 16,
          fontWeight: 900,
          textAlign: "center",
        }}
      >
        {name}
      </Typography>
    </Stack>
  );
}
