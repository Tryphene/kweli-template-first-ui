/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormHelperText, Stack } from "@mui/material";
import { MuiTelInput, MuiTelInputProps } from "mui-tel-input";
import { Controller, useFormContext } from "react-hook-form";

type RHFTelProps = MuiTelInputProps & {
  name: string;
};

// export default function RHFTel({ name, ...other }: RHFTelProps) {
  export default function RHFTel({ name }: RHFTelProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack>
          <MuiTelInput {...field} defaultCountry="CI" />
          {error && (
            <FormHelperText sx={{ px: 2 }} error>
              {error.message}
            </FormHelperText>
          )}
        </Stack>
      )}
    />
  );
}
