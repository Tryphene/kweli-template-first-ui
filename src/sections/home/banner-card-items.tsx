import { Stack, Typography } from "@mui/material";
import Image from "../../components/image/image";

type Props = {
  title?: string;
  subtitle?: string;
  buttonTitle?: string;
  img?: string;
};

export default function BannerCardItems({ title, subtitle, img }: Props) {
  return (
    <>
      <Stack gap={4} width={200}>
        <Stack gap={1}>
          <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Poppins", fontWeight: 800 }}
          >
            {title}
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "Poppins",
            textTransform: "uppercase",
            textDecoration: "underline",
          }}
        >
          Acheter maintenant
        </Typography>
      </Stack>
      <Image
        sx={{
          width: 120,
        //   height: 150,
          borderRadius: 0,
        }}
        src={img}
      />
    </>
  );
}
