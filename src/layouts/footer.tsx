import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Stack sx={{ mt: 10 }}>
      {/* <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        height={250}
        bgcolor="#396143"
        sx={{ color: "#fff" }}
        gap={10}
      >
        <Stack gap={2}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Poppins", fontWeight: 800 }}
          >
            Let's Stay in your touch
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Stack>
        <Stack>
          <TextField
            id="standard-basic"
            label="Votre adresse e-mail"
            variant="standard"
            InputLabelProps={{
              style: { color: "white" }, // Couleur du label
            }}
            sx={{
              width: { xs: 200, lg: 350 },
              "& .MuiInput-underline:before": {
                borderBottomColor: "white", // Couleur de la bordure avant la sélection
                borderBottomWidth: "3px", // Hauteur de la bordure
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white", // Couleur de la bordure après la sélection
                borderBottomWidth: "3px", // Hauteur de la bordure après la sélection
              },
              "&:hover .MuiInput-underline:before": {
                borderBottomColor: "white", // Garde la bordure blanche au hover
                borderBottomWidth: "3px", // Hauteur de la bordure au hover
              },
              "& .MuiInputBase-input": {
                color: "white", // Couleur du texte
              },
            }}
          />
        </Stack> 
      </Stack>*/}

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        height={250}
        bgcolor="#396143"
        sx={{ color: "#fff" }}
        gap={10}
      >
        <Box
          columnGap={2}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <Stack gap={2}>
            <Typography
              variant="h5"
              sx={{ fontFamily: "Poppins", fontWeight: 800 }}
            >
              Let's Stay in your touch
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Stack>
          <TextField
            id="standard-basic"
            label="Votre adresse e-mail"
            variant="standard"
            InputLabelProps={{
              style: { color: "white" }, // Couleur du label
            }}
            sx={{
              width: { xs: 200, lg: 350 },
              "& .MuiInput-underline:before": {
                borderBottomColor: "white", // Couleur de la bordure avant la sélection
                borderBottomWidth: "3px", // Hauteur de la bordure
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "white", // Couleur de la bordure après la sélection
                borderBottomWidth: "3px", // Hauteur de la bordure après la sélection
              },
              "&:hover .MuiInput-underline:before": {
                borderBottomColor: "white", // Garde la bordure blanche au hover
                borderBottomWidth: "3px", // Hauteur de la bordure au hover
              },
              "& .MuiInputBase-input": {
                color: "white", // Couleur du texte
              },
            }}
          />
        </Box>
      </Stack>

      <Stack sx={{ py: 7, px: 12 }}>
        <Grid container spacing={5} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4} lg={2}>
            <Stack gap={1.5}>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
              >
                Store Information
              </Typography>
              <Stack gap={0.5}>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontSize: 13 }}
                >
                  Lorem ipsum dolor
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontSize: 13 }}
                >
                  Lorem ipsum dolor
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} lg={2}>
            <Stack gap={1.5}>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
              >
                Store Information
              </Typography>
              <Stack gap={0.5}>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontSize: 13 }}
                >
                  Lorem ipsum dolor
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontSize: 13 }}
                >
                  Lorem ipsum dolor
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} lg={2}>
            <Stack gap={1.5}>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
              >
                Store Information
              </Typography>
              <Stack gap={0.5}>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontSize: 13 }}
                >
                  Lorem ipsum dolor
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontSize: 13 }}
                >
                  Lorem ipsum dolor
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} lg={2}>
            <Stack gap={1.5}>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
              >
                Store Information
              </Typography>
              <Stack gap={0.5}>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontSize: 13 }}
                >
                  Lorem ipsum dolor
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontSize: 13 }}
                >
                  Lorem ipsum dolor
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} lg={2}>
            <Stack gap={1.5}>
              <Typography
                variant="body1"
                sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
              >
                Store Information
              </Typography>
              <Stack gap={0.5}>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontSize: 13 }}
                >
                  Lorem ipsum dolor
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontSize: 13 }}
                >
                  Lorem ipsum dolor
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack
        sx={{
          pb: 5,
        }}
      >
        <Stack gap={5}>
          <Stack gap={2}>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Typography variant="h5" sx={{ fontFamily: "Poppins" }}>
                LOGO
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Poppins", textAlign: "center" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              dolore? Voluptas autem ipsa officia in nihil nemo provident, culpa
              dolore laboriosam soluta minima tenetur saepe
            </Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              sx={{
                py: 0.9,
                px: 2,
                border: "2px solid #e4e4e4",
                borderRadius: 2,
              }}
            >
              <Icon icon="devicon:apple" width={20} />
              <Typography
                variant="body2"
                sx={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                App Store
              </Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              gap={2}
              sx={{
                py: 0.9,
                px: 2,
                border: "2px solid #e4e4e4",
                borderRadius: 2,
              }}
            >
              <Icon icon="logos:google-play-icon" width={20} />
              <Typography
                variant="body2"
                sx={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                Google Play
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        bgcolor="#396143"
        sx={{ py: 1.2, px: 8, color: "#fff" }}
        gap={10}
      >
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
          Lorem ipsum dolor sit amet
        </Typography>
      </Stack>
    </Stack>
  );
}
