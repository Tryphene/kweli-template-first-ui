/* eslint-disable @typescript-eslint/no-explicit-any */
import Stack from "@mui/material/Stack";
import Stepp from "./step";
export default function HistoryOrder() {
//   const steps = [
//     "Select campaign settings",
//     "Create an ad group",
//     "Create an ad",
//   ];

//   const steps2 = [
//     {
//       label: "Select campaign settings",
//       description: `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`,
//     },
//     {
//       label: "Create an ad group",
//       description:
//         "An ad group contains one or more ads which target a shared set of keywords.",
//     },
//     {
//       label: "Create an ad",
//       description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//     },
//   ];

//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepp />
    </Stack>
  );
}
