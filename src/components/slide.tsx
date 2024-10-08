/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWindowSize } from "../hooks/use-window-size";
import { useEffect, useState } from "react";

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: {
          xs: "-15px",
          lg: "-35px",
        },
        transform: "translateY(-50%)",
        color: "#111",
        "&:hover": { backgroundColor: "#f5f5f5" },
      }}
    >
      <Icon icon="mingcute:left-line" width={20} />
    </IconButton>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;

  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: {
          xs: "-15px",
          lg: "-35px",
        },
        transform: "translateY(-50%)",
        color: "#111",
        "&:hover": { backgroundColor: "#f5f5f5" },
      }}
    >
      <Icon icon="mingcute:right-line" width={20} />
    </IconButton>
  );
}

type Props = {
  children: React.ReactNode;
  itemsToShow?: number;
};

export default function Slide({ children, itemsToShow }: Props) {
  const screenWidth = useWindowSize().width;

  const [size1000, setSize1000] = useState(false);
  const [size700, setSize700] = useState(false);
  const [disableParallax, setdisableParallax] = useState(false);

  useEffect(() => {
    if (screenWidth! <= 700) {
      setSize700(true);
      setSize1000(false);
    } else if (screenWidth! > 700 && screenWidth! <= 1000) {
      setSize1000(true);
      setSize700(false);
    } else {
      setdisableParallax(false);
    }

    console.log(disableParallax);
  }, [screenWidth]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: size700 ? 1 : size1000 ? 3 : itemsToShow ? itemsToShow : 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1500, // Pour les écrans <= 1024px
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 768, // Pour les écrans <= 768px (tablettes)
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    // ],
  };

  return (
    <Box sx={{ width: "100%", margin: 0 }}>
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
}
