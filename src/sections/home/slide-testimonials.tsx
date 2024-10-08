import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardContent, Rating, Stack, Typography } from "@mui/material";
import Card from "../../components/card";
import Slide from "../../components/slide";

export default function SlideTestimonials() {
  return (
    <Stack sx={{px: 2}}>
      <Slide>
        {data.map((d) => (
          <Card key={d.name}>
            <Stack
              direction="row"
              sx={{ mt: 3 }}
              justifyContent="center"
              alignItems="center"
              gap={0.5}
            >
              <Rating name="no-value" value={3} size="small" readOnly />
            </Stack>

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Typography
                textAlign="center"
                variant="body2"
                sx={{ fontFamily: "Poppins" }}
              >
                {d.review}
              </Typography>
              <Typography
                fontWeight="bold"
                textAlign="center"
                variant="h6"
                sx={{ fontFamily: "Poppins" }}
              >
                {d.name}
              </Typography>
            </CardContent>
          </Card>
          // <Card key={d.name}>
          //   <Box
          //     sx={{
          //       height: 224,
          //       backgroundColor: "#396143",
          //       display: "flex",
          //       justifyContent: "center",
          //       alignItems: "center",
          //       borderTopLeftRadius: "16px",
          //       borderTopRightRadius: "16px",
          //     }}
          //   >
          //     <Avatar
          //       src={d.img}
          //       alt={d.name}
          //       sx={{ height: 100, width: 100 }}
          //     />
          //   </Box>

          //   <CardContent
          //     sx={{
          //       display: "flex",
          //       flexDirection: "column",
          //       alignItems: "center",
          //       justifyContent: "center",
          //       gap: 2,
          //     }}
          //   >
          //     <Typography
          //       fontWeight="bold"
          //       textAlign="center"
          //       variant="h6"
          //       sx={{ fontFamily: "Poppins" }}
          //     >
          //       {d.name}
          //     </Typography>
          //     <Typography
          //       textAlign="center"
          //       variant="body2"
          //       sx={{ fontFamily: "Poppins" }}
          //     >
          //       {d.review}
          //     </Typography>
          //     <Stack
          //       direction="row"
          //       //   sx={{ mt: 3 }}
          //       justifyContent="center"
          //       alignItems="center"
          //       gap={0.5}
          //     >
          //       <Rating name="no-value" value={3} size="small" readOnly />
          //     </Stack>
          //   </CardContent>
          // </Card>
        ))}
      </Slide>
    </Stack>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];
