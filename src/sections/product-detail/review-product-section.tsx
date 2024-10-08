import { Stack, Grid, Rating, Typography, Divider } from "@mui/material";
import ReviewsItems from "./reviews-items";
import RatingBar from "./rating-bar";

export default function ReviewProductSection() {
  const reviews = ["", "", "", "", ""];
  const itemsToShow = 4;

  return (
    <Stack>
      <Grid container spacing={10} sx={{ mb: 0 }}>
        <Grid item xs={12} lg={8}>
          {reviews.slice(0, itemsToShow).map((_, index) => (
            <ReviewsItems
              key={index}
              name="kjojoojo"
              message="hiuzhiohzio jhzihiiiiiiiiiiii kziiiiiiiiiiiih"
            />
          ))}
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack gap={3}>
            <Stack direction="row" justifyContent="space-between">
              <Rating name="no-value" value={3} size="large" readOnly />
              <Typography
                fontWeight="bold"
                variant="h5"
                sx={{ fontFamily: "Poppins" }}
              >
                4.8
              </Typography>
            </Stack>
            <Divider />
            <RatingBar note1={8} note2={20} note3={40} note4={8} note5={10} />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
