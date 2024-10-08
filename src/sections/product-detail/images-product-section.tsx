/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Button, Stack } from "@mui/material";
import Image from "../../components/image/image";

type Props = {
  product: any;
};

export default function ImagesProductSection({ product }: Props) {
  const images: any[] = [
    // "Company 1",
    // "Company 2",
    // "Company 3",
    // "Company 4",
    // "Company 5",
    // "Company 6",
    // "Company 7",
    // "Company 8",
    // "Company 9",
    // "Company 10",
  ];

  //   const [showMore, setShowMore] = useState(false);
  const itemsToShow = 4;

  return (
    <Stack gap={2}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#39614311",
          height: 450,
          borderRadius: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          sx={{
            mt: 0,
            width: 50,
            height: 50,
          }}
          alt="Aucune image"
          src={product?.main_image_path}
        />
        {/* <Icon icon="openmoji:ballet-shoes" width={200} /> */}
      </Box>

      <Box display="flex" flexWrap="wrap" gap={1}>
        {images.length > 0 &&
          images.slice(0, itemsToShow).map((_, index) => (
            <Button
              key={index}
              sx={{
                color: "#111",
                backgroundColor: "#F2F4F2",
                width: 124,
                height: 124,
              }}
            >
              <Icon icon="openmoji:ballet-shoes" width={80} />
            </Button>
          ))}

        {images.length > itemsToShow && (
          <Button
            sx={{
              color: "#111",
              backgroundColor: "#F2F4F2",
              width: 124,
              height: 124,
            }}
          >
            +{images.length - itemsToShow} more
          </Button>
        )}
      </Box>
    </Stack>
  );
}
