import { Slider, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function PriceFilter() {
  // const [values, setValues] = useState([20000, 75000]);
  // const handleChange = (newValues: number[]) => setValues(newValues)
  const values = [20000, 75000];
  const minDistance = 10;

  const [value1, setValue1] = useState<number[]>([20, 37]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    console.log(event);
    

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
//   const handleChange2 = (
//     event: ChangeEventHandler<HTMLInputElement>,
//     newValue: number | number[],
//     activeThumb: number
//   ) => {
//     if (!Array.isArray(newValue)) {
//       return;
//     }

//     if (activeThumb === 0) {
//       setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
//     } else {
//       setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
//     }
//   };

  return (
    <Stack gap={0}>
      <Typography
        variant="body1"
        sx={{ fontFamily: "Poppins", fontSize: 16, fontWeight: 900 }}
      >
        Prix
      </Typography>

      <div className="modal-slider">
          <Slider
            getAriaLabel={() => "Minimum distance"}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            // getAriaValueText={`${value1}`}
            disableSwap
          />
          <Stack direction="row" gap={1.5} justifyContent="center" alignItems="center">
            <input
              type="number"
              id="minPrice"
              value={values[0]}
            //   onChange={handleChange2}
            />
            <span>-</span>
            <input
              type="number"
              id="maxPrice"
              value={values[1]}
            //   onChange={handleChange2}
            />
          </Stack>
      </div>
    </Stack>
  );
}
