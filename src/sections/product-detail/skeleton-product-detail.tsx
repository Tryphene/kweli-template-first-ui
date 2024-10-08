import { Box, Grid, Skeleton, Stack } from "@mui/material";

export default function SkeletonProductDetail() {
  const skeleton = ["", "", "", "", ""];
  return (
    <Stack gap={3} sx={{ px: { xs: 1, sm: 5, lg: 8 }, mt: 4 }}>
      Breadcrumbs
      <Grid container spacing={10} sx={{ mb: 2 }}>
        <Grid item xs={12} lg={6}>
          <Stack spacing={2}>
            <Skeleton variant="rounded" width="100%" height={450} />

            <Box display="flex" flexWrap="wrap" gap={1}>
              {skeleton.map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rounded"
                  width={124}
                  height={124}
                />
              ))}
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Stack gap={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Skeleton variant="text" width={150} height={30} />
              <Skeleton variant="text" width={150} height={30} />
            </Stack>

            <Stack spacing={1}>
              <Skeleton variant="text" width={300} height={30} />
              <Skeleton variant="text" width={120} height={30} />
            </Stack>

            <Stack gap={2} sx={{ mt: 2 }}>
              <Skeleton variant="text" width={100} height={50} />
            </Stack>

            <Stack gap={1.5} sx={{ mt: 2 }}>
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Skeleton variant="text" width={100} height={18} />
                <Skeleton variant="circular" width={15} height={15} />
                <Skeleton variant="text" width={100} height={18} />
              </Stack>

              <Box display="flex" flexWrap="wrap" gap={1}>
                {skeleton.map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="rounded"
                    width={65}
                    height={65}
                  />
                ))}
              </Box>
            </Stack>

            <Stack gap={1.5}>
              <Stack
                direction="row"
                alignItems="center"
                gap={1.5}
                sx={{ mt: 2 }}
              >
                <Skeleton variant="text" width={100} height={18} />
                <Skeleton variant="circular" width={15} height={15} />
                <Skeleton variant="text" width={100} height={18} />
              </Stack>

              <Box display="flex" flexWrap="wrap" gap={1}>
                {skeleton.map((_, index) => (
                  <Skeleton
                    key={index}
                    variant="rounded"
                    width={65}
                    height={40}
                  />
                ))}
              </Box>
              <Skeleton variant="text" width={100} height={18} />
            </Stack>

            <Box
              columnGap={2}
              rowGap={3}
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(10, 1fr)",
                md: "repeat(10, 1fr)",
              }}
            >
              <Stack sx={{ gridColumn: { xs: "span 9", md: "span 9" } }}>
                <Skeleton variant="text" width="100%" height={80} />
              </Stack>
              <Stack sx={{ gridColumn: { xs: "span 1", md: "span 1" } }}>
                <Skeleton variant="text" width="100%" height={80} />
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Stack gap={3}>
        <Stack direction="row" alignItems="center" gap={1.5} sx={{ mt: 2 }}>
          <Skeleton variant="text" width={300} height={30} />
          <Skeleton variant="text" width={200} height={30} />
        </Stack>

        <Stack spacing={0.5}>
          <Skeleton variant="text" width={800} height={30} />
          <Skeleton variant="text" width={800} height={30} />
          <Skeleton variant="text" width={800} height={30} />
          <Skeleton variant="text" width={800} height={30} />
        </Stack>
      </Stack>
    </Stack>
  );
}
