import { Box, Stack, Typography } from "@mui/material";
import SlideTestimonials from "./slide-testimonials";

export default function Testimonials() {
  return (
    <Stack gap={4}>
      <Stack gap={0}>
        <Stack direction="row" gap={2} alignItems="center">
          <Box width={35} height={6} borderRadius={5} bgcolor="#FFBE34"></Box>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Poppins", fontWeight: 900 }}
          >
            What's They're saying
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
          Lorem ipsum dolor sit.
        </Typography>
      </Stack>

      <SlideTestimonials />
    </Stack>
  );
}
