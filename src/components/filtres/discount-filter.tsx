import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

export default function DiscountFilter() {
  const discount = [
    "50% et plus",
    "40% et plus",
    "30% et plus",
    "20% et plus",
    "10% et plus",
  ];

  return (
    <Stack gap={0}>
      <Typography
        variant="body1"
        sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
      >
        Remise(%)
      </Typography>

      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          //   defaultValue="female"
          name="radio-buttons-group"
        >
          {discount.map((item, index) => (
            <FormControlLabel
              key={index}
              control={<Radio />}
              value={item}
              label={
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Poppins", fontWeight: 500 }}
                >
                  {item}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}
