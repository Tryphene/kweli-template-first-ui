import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Avatar,
  Divider,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

type Props = {
  img?: string;
  name?: string;
  message?: string;
};

export default function ReviewsItems({ img, name, message }: Props) {
  return (
    <Stack gap={2} sx={{ mb: 3 }}>
      <Stack direction="row" gap={2}>
        <Avatar src={img} alt={name} sx={{ height: 50, width: 50 }} />
        <Stack gap={2}>
          <Stack gap={2}>
            <Stack direction="row" gap={2}>
              <Typography
                fontWeight="bold"
                variant="body2"
                sx={{ fontFamily: "Poppins" }}
              >
                {name}
              </Typography>
            </Stack>
            <Rating name="no-value" value={3} size="small" readOnly />
            <Typography
              fontWeight="bold"
              variant="body2"
              sx={{ fontFamily: "Poppins" }}
            >
              {message}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" gap={1}>
            <Typography
              fontWeight="bold"
              variant="caption"
              sx={{ fontFamily: "Poppins" }}
              color="#396143"
            >
              Repondre
            </Typography>
            <Stack direction="row" alignItems="center">
              <IconButton>
                <Icon icon="iconamoon:like-light" width={20} />
              </IconButton>
              <Typography variant="caption" sx={{ fontFamily: "Poppins" }}>
                42
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={0}>
              <IconButton>
                <Icon icon="bx:dislike" width={20} />
              </IconButton>
              <Typography variant="caption" sx={{ fontFamily: "Poppins" }}>
                42
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Divider />
    </Stack>
  );
}
