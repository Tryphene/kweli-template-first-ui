import { Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  width: "86%",
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#FAAF00",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

type Props= {
    note5?: number;
    note4?: number;
    note3?: number;
    note2?: number;
    note1?: number;
    
}

export default function RatingBar({note1, note2, note3, note4, note5} : Props) {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }} color="#ccc">
          5
        </Typography>
        <BorderLinearProgress variant="determinate" value={50} />
        <Typography
          fontWeight="bold"
          variant="body2"
          sx={{ fontFamily: "Poppins" }}
        >
          {note5}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }} color="#ccc">
          4
        </Typography>
        <BorderLinearProgress variant="determinate" value={50} />
        <Typography
          fontWeight="bold"
          variant="body2"
          sx={{ fontFamily: "Poppins" }}
        >
          {note4}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }} color="#ccc">
          3
        </Typography>
        <BorderLinearProgress variant="determinate" value={50} />
        <Typography
          fontWeight="bold"
          variant="body2"
          sx={{ fontFamily: "Poppins" }}
        >
          {note3}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }} color="#ccc">
          2
        </Typography>
        <BorderLinearProgress variant="determinate" value={50} />
        <Typography
          fontWeight="bold"
          variant="body2"
          sx={{ fontFamily: "Poppins" }}
        >
          {note2}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Typography variant="body2" sx={{ fontFamily: "Poppins" }} color="#ccc">
          1
        </Typography>
        <BorderLinearProgress variant="determinate" value={50} />
        <Typography
          fontWeight="bold"
          variant="body2"
          sx={{ fontFamily: "Poppins" }}
        >
          {note1}
        </Typography>
      </Stack>
    </Stack>
  );
}
